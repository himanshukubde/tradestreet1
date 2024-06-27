import React, { useEffect, useState } from 'react'
import FullDataTable from '../../../ExtraComponent/CommanDataTable'
import { Get_Panle_Logs } from '../../Common API/User'
import DatePicker from "react-datepicker";
import { Eye } from 'lucide-react';

const Pannel = () => {
    const userName = localStorage.getItem('name')
    const [getPanleData, setPanleData] = useState({
        loading: true,
        data: []
    })
    const [showModal, setShowModal] = useState(false)
    const [fromDate, setFromData] = useState('')
    const [ToDate, setToData] = useState('')
    const [getActivity, setActivity] = useState('')
    const [getMsg, setMsg] = useState('')


    // set Defult Date 
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}.${month}.${day}`;


    // from date
    const DefultToDate = new Date();

    DefultToDate.setDate(DefultToDate.getDate());
    const year1 = DefultToDate.getFullYear();
    const month1 = String(DefultToDate.getMonth() + 1).padStart(2, '0');
    const day1 = String(DefultToDate.getDate()).padStart(2, '0');
    const Defult_To_Date = `${year1}.${month1}.${day1}`;

    const convertDateFormat = (date) => {
        if (date == '') {
            return ''
        }
        else {
            const dateObj = new Date(date);
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            return `${year}.${month}.${day}`;
        }
    };

    const handleMessageView = (tableMeta) => {
        setShowModal(!showModal)
        const selectedRowIndex = tableMeta.rowIndex;
        const selectedRow = getPanleData.data[selectedRowIndex];
        setMsg(selectedRow.Message)

    }

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
            name: "Username",
            label: "Username",

            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Activity",
            label: "Activity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "System IP",
            label: "System IP",
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
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Eye onClick={(e) => handleMessageView(tableMeta)} />
                }
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
    ];

 


    const GetAllPanleData = async () => {
        const data = {
            User: userName,
            From_date: fromDate == '' ? formattedDate : convertDateFormat(fromDate),
            To_date: ToDate == '' ? Defult_To_Date : convertDateFormat(ToDate)
        }
        console.log(data)

        await Get_Panle_Logs(data)
            .then((response) => {
                if (response.Status) {
                    const filterData = response.PanelDetails.filter((item) => {
                        if (getActivity == '') {
                            return item
                        }
                        else if (getActivity == 1) {
                            return item.Activity == 'Login'
                        }
                        else if (getActivity == 2) {
                            return item.Activity == 'Broker Update'
                        }
                        else if (getActivity == 3) {
                            return item.Activity == 'AddScript'
                        }
                        else if (getActivity == 4) {
                            return item.Activity == 'Continue Script'
                        }
                        else if (getActivity == 5) {
                            return item.Activity == 'Square Script'
                        }
                        else return item
                    })
                    setPanleData({
                        loading: false,
                        data: filterData
                    })
                }
                else {
                    setPanleData({
                        loading: false,
                        data: []
                    })
                }
            })
            .catch((err) => {
                console.log("Error in finding the panle details", err)
            })
    }
    useEffect(() => {
        GetAllPanleData()
    }, [ToDate, fromDate, getActivity])


    return (
        <>
            <div>
                <div className="col-sm-12 col-lg-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Pannel track</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div>
                                <div className='row'>
                                    <div className="form-group col-lg-3 ">
                                        <label>Select form Date</label>
                                        <DatePicker className="form-select" selected={fromDate == '' ? formattedDate : fromDate} onChange={(date) => setFromData(date)} />
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>Select To Date</label>
                                        <DatePicker className="form-select" selected={ToDate == '' ? Defult_To_Date : ToDate} onChange={(date) => setToData(date)} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="email">Activity</label>
                                        <select className="form-select my-2" required=""
                                            onChange={(e) => setActivity(e.target.value)}
                                            value={getActivity}>
                                            <option value="">All Activity</option>
                                            <option value={1}>Login</option>
                                            <option value={2}>BrokerUpdate</option>
                                            <option value={3}>AddScript</option>
                                            <option value={4}>Continue Script</option>
                                            <option value={5}>Square Script</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <FullDataTable
                                    columns={columns}
                                    data={getPanleData.data}
                                    checkBox={false}
                                />
                            </div >
                        </div>
                    </div >
                </div >
            </div>

            {showModal && <div className="modal custom-modal d-flex" id="add_vendor" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <div className="form-header modal-header-title text-start mb-0">
                                <h4 className="mb-0">Message</h4>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setShowModal(!showModal)}
                            >
                            </button>
                        </div>
                        <form action="#">
                            <div className="modal-body">
                                <div className="row">
                                    <p>{getMsg}</p>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
            }
        </>
    )
}
export default Pannel

