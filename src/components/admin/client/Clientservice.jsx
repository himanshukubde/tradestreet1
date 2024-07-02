import React, { useEffect, useState } from 'react';
import { GetClientService, EditClientPanle, ExtendEndDate } from '../../Common API/Admin';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { Link } from 'react-router-dom'
import { SquarePen } from 'lucide-react';

const Clientservice = () => {
    const [getClientService, setClientService] = useState({
        loading: true,
        data: []
    });
    const [showModal, setShowModal] = useState(true)
    const [showModal1, setShowModal1] = useState(false)


    const getAllClientService = async () => {
        await GetClientService()
            .then((response) => {
                if (response.Status) {
                    setClientService({
                        loading: false,
                        data: response.Profile
                    });
                } else {
                    setClientService({
                        loading: false,
                        data: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in fetching the All Client service", err);
            });
    };

    const handleEdit = (index) => {

        if (getClientService.data[index].BrokerName == 'Demo') {


        }




    }

    useEffect(() => {
        getAllClientService();
    }, []);

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
            name: "Edit",
            label: "Edit",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowIndex = tableMeta.rowIndex;
                    return <SquarePen onClick={() => handleEdit(rowIndex)} />
                }
            },
        },
        {
            name: "Username",
            label: "Username",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Mobile_No",
            label: "Mobile_No",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BrokerName",
            label: "BrokerName",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EmailId",
            label: "EmailId",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Group",
            label: "Group",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ServiceStartDate",
            label: "ServiceStartDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CreateDate",
            label: "CreateDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ServiceEndDate",
            label: "ServiceEndDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Total Service Count",
            label: "Total Service Count",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];


    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Client Service</h4>
                            </div>
                            <Link to="/admin/adduser" className='btn btn-primary rounded'>Add Client</Link>

                        </div>

                        <div className="iq-card-body">
                            <FullDataTable
                                columns={columns}
                                data={getClientService.data}
                                checkBox={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                <>
                    <div
                        className={`modal fade bd-example-modal-lg ${showModal ? 'show' : ''}`}
                        tabIndex={-1}
                        style={{ display: showModal ? 'block' : 'none' }}
                        aria-hidden={!showModal}
                        role="dialog"
                    >
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">All Scripts</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                <div className="modal-body">

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Clientservice;
