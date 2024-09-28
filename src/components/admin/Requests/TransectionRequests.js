import React, { useEffect, useState } from 'react';
import { AllReuests, ApprovwRequest } from '../../CommonAPI/Admin';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Swal from 'sweetalert2';

const Clientservice = () => {
    const [getAllRequest, setAllRequest] = useState({ loading: true, data: [] });
    const [searchInput, setSearchInput] = useState('')
    const [approvalStatus, setApprovalStatus] = useState('Approve');

    useEffect(() => {
        fetchClientService();
    }, [searchInput]);

    const fetchClientService = async () => {
        try {
            const response = await AllReuests();
            if (response.Status) {
                const filteredData = response.Process.filter(item => {
                    const searchInputMatch =
                        searchInput === '' ||
                        item.Username.toLowerCase().includes(searchInput.toLowerCase()) ||
                        item.Transactiontype.toLowerCase().includes(searchInput.toLowerCase()) ||
                        // // item.money.includes(searchInput) ||
                        // item.TotalTrasaction.toLowerCase().includes(searchInput.toLowerCase()) || 
                        item.TransactionRequest.toLowerCase().includes(searchInput.toLowerCase())
                    return searchInputMatch
                })

                setAllRequest({
                    loading: false,
                    data: searchInput ? filteredData : response.Process,
                });
            } else {
                setAllRequest({ loading: false, data: [] });
            }
        } catch (error) {
            console.log('Error in fetching client services', error);
        }
    };


    const columns = [
        {
            name: 'S.No',
            label: 'S.No',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1,
            },
        },

        {
            name: 'Username',
            label: 'Username',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => value || '-'
            }
        },
        {
            name: 'money',
            label: 'Amount',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => value || '-'
            }
        },
        {
            name: 'TotalTrasaction',
            label: 'Total Trasaction',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => value || '-'
            }
        },
        {
            name: 'Transactiontype',
            label: 'Transaction Type',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => value || '-'
            }
        },
        {
            name: 'TransactionRequest',
            label: 'Transaction Request',
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: 'TransactionRequest',
            label: 'Action',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            <select className='form-control' onChange={(e) => { handleApprovalChange(e, tableMeta) }} value={value == "Process" ? '' : value == 'Reject' ? 'Reject' : ""}>
                                <option value='' disabled>Pending</option>
                                <option value='Complete'>Approve</option>
                                <option value='Reject'>Reject</option>
                            </select>

                        </div>
                    );
                }
            }
        },

        {
            name: 'DateTime',
            label: 'Time',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => value || '-'
            }
        },

    ];


    const handleApprovalChange = async (e, row) => {
        var value = e.target.value;
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to change the status?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, change it!",
            cancelButtonText: "No, cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const rowIndex = row.rowIndex;
                    const data = getAllRequest?.data[rowIndex];
                    const req = { Username: data.Username, transactiontype: data.Transactiontype, money: data.money, Status: value }

                    await ApprovwRequest(req)
                        .then((response) => {
                            if (response.Status) {
                                Swal.fire({
                                    title: "Success",
                                    text: response.message,
                                    icon: "success",
                                    confirmButtonText: "Ok",
                                    timer: 1000,
                                    timerProgressBar: true,
                                });
                                fetchClientService();
                            }
                            else {
                                Swal.fire({
                                    title: "Error",
                                    text: response.message,
                                    icon: "error",
                                    confirmButtonText: "Ok",
                                });
                            }
                        })
                        .catch((error) => {
                            console.log('Error in approving request', error)
                        })
                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: "An error occurred while updating the status.",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            }
        });
    };


    return (
        <>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='iq-card'>
                        <div className='iq-card-header d-flex justify-content-between'>
                            <div className='iq-header-title'>
                                <h4 className='card-title'>All Request</h4>
                            </div>
                        </div>
                        <div className='iq-card-body'>
                            <div className='mb-3 col-lg-3'>
                                <input type="text" className=' form-control rounded p-1 px-2' placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                            </div>

                            <div className="container mt-4">
                                <Tabs
                                    defaultActiveKey="PendingRequest"   
                                    id="fill-tab-example"
                                    className="mb-3 custom-tabs"
                                    fill
                                > 
                                    <Tab eventKey="PendingRequest" title="Pending Request">
                                        <div className="p-4">
                                            <h5 className="mb-4">Pending Requests</h5> 
                                        </div>
                                    </Tab>
 
                                    <Tab eventKey="RejectRequest" title="Reject Request">
                                        <div className="p-4">
                                            <FullDataTable
                                                columns={columns}
                                                data={getAllRequest.data}
                                                checkBox={false}
                                            />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Clientservice;
