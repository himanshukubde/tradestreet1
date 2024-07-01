import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Add_Group, GetGroupNames } from '../../Common API/Admin';
import GridExample from '../../../ExtraComponent/CommanDataTable'


const Strategygroup = () => {
    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })
    const [showModal, setShowModal] = useState(false)
    const [GroupName, setGroupName] = useState('')
    const [FundReuirement, setFundReuirement] = useState('')
    const [Risk, setRisk] = useState('')
    const [TimeOrigin, setTimeOrigin] = useState('')
    const [ProductType, setProductType] = useState('')
    const [Message, setMessage] = useState('')
    const [error, setError] = useState({
        Message: '',
        ProductType: '',
        TimeOrigin: '',
        Risk: '',
        FundReuirement: '',
        GroupName: ''
    })

    const columns = [
        {
            name: "S.No",
            label: "S.No",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowIndex = tableMeta.rowIndex;
                    return rowIndex + 1;
                }
            },
        },
        {
            name: "GroupName",
            label: "Group Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Fund_Requierment",
            label: "Fund Requierment",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Risk",
            label: "Risk in %",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Time",
            label: "Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PRtype",
            label: "Product Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Message",
            label: "Message",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    const handleSubmit = async () => {
        if (error.Message != '' || error.ProductType != '' || error.TimeOrigin != '' || error.Risk != '' || error.FundReuirement != '' || error.GroupName != '') {
            return
        }
        else {

            const data = { GroupName: GroupName, FundReuirement: FundReuirement, Risk: Risk, TimeOrigin: TimeOrigin, ProductType: ProductType, Message: Message };

            await Add_Group(data)
                .then((response) => {
                    if (response.Status) {
                        Swal.fire({
                            title: 'Created successfully!',
                            text: 'Group created successfully!',
                            icon: 'success',
                            timer: 1500,
                            timerProgressBar: true
                        });
                        setTimeout(() => {
                            setShowModal(false)
                        }, 1500)

                    } else {
                        Swal.fire({
                            title: 'Error',
                            text: 'Group name already exit',
                            icon: 'error',
                            timer: 1500,
                            timerProgressBar: true
                        });
                    }
                })
                .catch((err) => {
                    console.log('Error in group creation...');
                    Swal.fire({
                        title: 'Error',
                        text: 'Group creation error!',
                        icon: 'error',
                        timer: 1500,
                        timerProgressBar: true
                    });
                });
        }
    };

    const GetAllGroupDetails = async () => {
        try {
            await GetGroupNames()
                .then((response) => {
                    if (response.Status) {
                        setGroupData({
                            loading: false,
                            data: response.StrGroupdf
                        })
                    }
                    else {
                        setGroupData({
                            loading: false,
                            data: []
                        })
                    }
                })
                .catch((err) => {
                    console.log("Group data fetch error", err)
                })
        }
        catch {
            console.log("Group data fetch error")
        }
    }

    useEffect(() => {
        GetAllGroupDetails()
    }, [])



    useEffect(() => {
        const newErrors = {
            Message: Message ? '' : 'Please Enter Message',
            ProductType: ProductType ? '' : 'Please Select Product Type',
            TimeOrigin: TimeOrigin ? '' : 'Please Enter Time Origin',
            Risk: Risk ? '' : 'Please Enter Risk',
            FundReuirement: FundReuirement ? '' : 'Please Enter Fund Requirement',
            GroupName: GroupName ? '' : 'Please Enter Group Name',
        };
        setError(newErrors);
    }, [Message, ProductType, TimeOrigin, Risk, FundReuirement, GroupName]);


    console.log(error.Message)

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Strategy Group</h4>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setShowModal(true)}
                                >
                                    Add Group
                                </button>
                            </div>
                        </div>

                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <GridExample
                                    columns={columns}
                                    data={getGroupData.data}
                                    checkBox={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal custom-modal d-flex" id="add_vendor" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content" style={{ width: '40rem' }}>
                            <div className="modal-header border-0 pb-0">
                                <div className="form-header modal-header-title text-start mb-0">
                                    <h4 className="mb-0">Add Group</h4>
                                </div>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <hr />
                            <div className="container-fluid mt-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="group-name">Group Name</label>
                                            <input
                                                type="text"
                                                className="form-control my-2 uniform-bg"
                                                id="group-name"
                                                placeholder="Enter group name"
                                                onChange={(e) => setGroupName(e.target.value)}
                                                value={GroupName}
                                            />
                                            {error.GroupName && (
                                                <div style={{ color: 'red' }}>
                                                    {error.GroupName}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fund-requirement">Fund Requirement</label>
                                            <input
                                                type="text"
                                                className="form-control my-2 uniform-bg"
                                                id="fund-requirement"
                                                placeholder="Enter Fund Requirement"
                                                onChange={(e) => setFundReuirement(e.target.value)}
                                                value={FundReuirement}
                                            />
                                            {error.FundReuirement && (
                                                <div style={{ color: 'red' }}>
                                                    {error.FundReuirement}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="risk">Risk</label>
                                            <input
                                                type="text"
                                                className="form-control my-2 uniform-bg"
                                                id="risk"
                                                placeholder="Enter risk"
                                                onChange={(e) => setRisk(e.target.value)}
                                                value={Risk}
                                            />
                                            {error.Risk && (
                                                <div style={{ color: 'red' }}>
                                                    {error.Risk}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="time-origin">Time Origin</label>
                                            <input
                                                type="text"
                                                className="form-control my-2 uniform-bg"
                                                id="time-origin"
                                                placeholder="Enter Time Origin"
                                                onChange={(e) => setTimeOrigin(e.target.value)}
                                                value={TimeOrigin}
                                            />
                                            {error.TimeOrigin && (
                                                <div style={{ color: 'red' }}>
                                                    {error.TimeOrigin}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="product-type">Select Product Type</label>
                                            <select
                                                className="form-control my-2 uniform-bg"
                                                id="product-type"
                                                onChange={(e) => setProductType(e.target.value)}
                                                value={ProductType}
                                            >
                                                <option value="">Select Product Type</option>
                                                <option value="Intraday">Intraday</option>
                                                <option value="Delivery">Delivery</option>
                                            </select>
                                            {error.ProductType && (
                                                <div style={{ color: 'red' }}>
                                                    {error.ProductType}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                className="form-control my-2 uniform-bg"
                                                id="message"
                                                style={{ width: '100%' }}
                                                rows="4"
                                                onChange={(e) => setMessage(e.target.value)}
                                                value={Message}
                                            ></textarea>
                                            {error.Message && (
                                                <div style={{ color: 'red' }}>
                                                    {error.Message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className='d-flex justify-content-end me-3 mb-3'>
                                <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Strategygroup;
