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
    const [strategyGroupInfo, setStrategyGroupInfo] = useState({
        GroupName: '',
        FundReuirement: '',
        Risk: '',
        TimeOrigin: '',
        ProductType: '',
        Message: ''
    });


 

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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setStrategyGroupInfo((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleClick = async () => {
        const data = { strategyGroupInfo };
        await Add_Group(data.strategyGroupInfo)
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

    const toggleModal = () => {
        setShowModal(!showModal);
    };


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

                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Add Strategy
                                </button>
                                {/* Modal */}

                                <div className={`modal fade ${showModal ? 'show' : ''}`}
                                    id="exampleModal"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden={!showModal}
                                    style={{ display: showModal ? 'block' : 'none' }}>
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Strategy Group
                                                </h5>
                                                <button type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                    onClick={toggleModal} />
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-3">
                                                            <label htmlFor="validationDefault01">Group Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control my-2"
                                                                id="GroupName"
                                                                placeholder="Enter Group Name"
                                                                onChange={handleInputChange}
                                                                value={strategyGroupInfo.GroupName}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="validationDefault02">Fund Requirement</label>
                                                            <input
                                                                type="text"
                                                                className="form-control my-2"
                                                                id="FundReuirement"
                                                                placeholder="Enter Fund"
                                                                value={strategyGroupInfo.FundReuirement}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control my-2"
                                                                    id="Risk"
                                                                    placeholder="Enter Risk in %"
                                                                    value={strategyGroupInfo.Risk}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="TimeOrigin">Time Origin</label>
                                                            <select
                                                                className="form-select my-2"
                                                                id="TimeOrigin"
                                                                value={strategyGroupInfo.TimeOrigin}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select Time Origin</option>
                                                                <option value="Weekly">Weekly</option>
                                                                <option value="Monthly">Monthly</option>
                                                                <option value="Half Yearly">Half Yearly</option>
                                                                <option value="Yearly">Yearly</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="ProductType">Select product type</label>
                                                            <select
                                                                className="form-select my-2"
                                                                id="ProductType"
                                                                value={strategyGroupInfo.ProductType}
                                                                onChange={handleInputChange}
                                                            >
                                                                <option value="">Select Product Type</option>
                                                                <option value="Intraday">Intraday</option>
                                                                <option value="Delivery">Delivery</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <label htmlFor="validationTextarea">Message</label>
                                                            <textarea
                                                                className="form-control my-2"
                                                                id="Message"
                                                                rows={5}
                                                                value={strategyGroupInfo.Message}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"

                                                                id="invalidCheck2"
                                                                required=""
                                                            />
                                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                                Agree to terms and conditions
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>
                                                    Close
                                                </button>
                                                <button type="button" className="btn btn-primary" onClick={handleClick}>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Table data */}
                        <div className="iq-card-body">
                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <GridExample
                                            columns={columns}
                                            data={getGroupData.data}
                                           
                                            checkBox={false}
                                        />
                                    {/* <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr className='text-center'>
                                                <th>S.No</th>
                                                <th>Group Name</th>
                                                <th>Fund Requirenment</th>
                                                <th>Risk in %</th>
                                                <th>Time</th>
                                                <th>Product Type</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getGroupData.data && getGroupData.data.map((item, index) => (

                                                <tr className='text-center'>
                                                    <td>{index + 1}</td>
                                                    <td>{item.GroupName}</td>
                                                    <td>{item.Fund_Requierment}</td>
                                                    <td>{item.Risk}</td>
                                                    <td>{item.Time}</td>
                                                    <td>{item.PRtype}</td>
                                                    <td>{item.Message}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strategygroup;
