import React, { useEffect, useState } from 'react';
import { AllReuests, ApprovwRequest } from '../../CommonAPI/Admin';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Clientservice = () => {
    const [getAllRequest, setAllRequest] = useState({ loading: true, data: [] });
    const [searchInput, setSearchInput] = useState('')

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
            name: 'Action',
            label: 'Action',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            <select className='form-control' onChange={() => handleApprovalChange(tableMeta)}>
                                <option value='1'>Approve</option>
                                <option value='2'>Reject</option>
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


    const handleApprovalChange = async (e) => {
        const rowIndex = e.rowIndex;
        const data = getAllRequest?.data[rowIndex];
        const req = { Username: data.Username, transactiontype: data.Transactiontype, money: data.money }
        await ApprovwRequest(req)
            .then((response) => {
                if (response.Status) {
                    console.log('Request Approved Successfully')
                }
            }
            )
            .catch((error) => {
                console.log('Error in approving request', error)
            })
    }

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
                        <Tabs
                            defaultActiveKey="profile"
                            id="justify-tab-example"
                            className="mb-3"
                            justify                                                
                        >
                            <Tab eventKey="home" title="Home">
                                Pending Request
                            </Tab>
                            <Tab eventKey="Approved" title="Approved">
                                Approved Request
                            </Tab>
                            <Tab eventKey="Reject" title="Reject">
                                Reject Request
                            </Tab>
                        </Tabs>

                        <div className='iq-card-body'>
                            <div className='mb-3 col-lg-3'>
                                <input type="text" className=' form-control rounded p-1 px-2' placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                            </div>
                            <FullDataTable columns={columns} data={getAllRequest.data} checkBox={false} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Clientservice;
