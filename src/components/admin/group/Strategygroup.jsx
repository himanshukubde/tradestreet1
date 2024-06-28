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
                                <h4 className="card-title">Strategy Grouphh</h4>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">

                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1"
                                >
                                    Add Strategy
                                </button>
                                {/* Modal */}

                                <div
                                    className="modal fade"
                                    id="exampleModal1"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    ccpppp
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="api">API Key:</label>
                                                        <input type="text" className="form-control my-2" id="email1" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="secret">API Secret:</label>
                                                        <input type="text" className="form-control my-2" id="pwd" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="secret">API Secret:</label>
                                                        <input type="text" className="form-control my-2" id="pwd" />
                                                    </div>


                                                </form>

                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                                    <button type="button" className="btn btn-primary">
                                                        Update
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
