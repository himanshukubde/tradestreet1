import React, { useEffect, useState } from 'react'
import FullDataTable from '../../../ExtraComponent/CommanDataTable'
import { Get_Panle_Logs } from '../../Common API/User'
import { GetAllTaskStatus, GetClientService, Get_All_Client_Logs } from '../../Common API/Admin'
import Checkbox from '@mui/material/Checkbox';
import DatePicker from "react-datepicker";
import { Eye } from 'lucide-react';

const Pannel = () => {

    const [getPanleData, setPanleData] = useState({
        loading: true,
        data: []
    })
    const [userName, setUserName] = useState('')
    const [getScript, setScript] = useState('')
    const [getActivity, setActivity] = useState('')
    const [gettaskStatus, setAllTaskStatus] = useState([])
    const [clientService, setClientService] = useState({ loading: true, data: [] });


    const AllTaskStatus = async () => {
        await GetAllTaskStatus()
            .then((response) => {
                if (response.Status) {
                    setAllTaskStatus(response.Taskstatus)
                }
                else {
                    setAllTaskStatus([])
                }
            })
            .catch((err) => {
                console.log("Error in finding the Task Status", err)
            })

    }

    useState(() => {
        AllTaskStatus()
    }, [])

    useEffect(() => {
        const fetchClientService = async () => {
            try {
                const response = await GetClientService();
                if (response.Status) {

                    
                    setClientService({
                        loading: false,
                        data: response.Profile
                    });
                } else {
                    setClientService({ loading: false, data: [] });
                }
            } catch (error) {
                console.log('Error in fetching client services', error);
            }
        };

        fetchClientService();
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
            name: "Exchange",
            label: "Exchange",

            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Token",
            label: "Token",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TType",
            label: "Trade Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TStype",
            label: "Measurement Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Booking Point",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Re-entry Point",
            label: "Stoploss",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExpiryDate",
            label: "Expiry Date",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeExecution",
            label: "Trade Execution",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LowerRange",
            label: "Lower Range",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "HigherRange",
            label: "Higher Range",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "HoldExit",
            label: "HoldExit",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "closescript",
            label: "closescript",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Instrument Symbol",
            label: "Instrument Symbol",
            options: {
                filter: true,
                sort: true,
            }
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
            name: "ScalpType",
            label: "ScalpType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryPrice",
            label: "EntryPrice",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryRange",
            label: "EntryRange",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "GroupN",
            label: "GroupN",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitRule",
            label: "ExitRule",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Profit",
            label: "Profit",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Loss",
            label: "Loss",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "FixedSM",
            label: "FixedSM",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryTime",
            label: "EntryTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "ExitTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitDay",
            label: "ExitDay",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MTrade",
            label: "MTrade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Expirytype",
            label: "Expirytype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SSDate",
            label: "SSDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SEDate",
            label: "SEDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TaskStatus",
            label: "TaskStatus",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TaskTime",
            label: "TaskTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Instrument Type",
            label: "Instrument Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Lotsize",
            label: "Lotsize",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeCount",
            label: "Trade Count",
            options: {
                filter: true,
                sort: true,
            }
        },


    ];


    const columns1 = [
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
            name: "Exchange",
            label: "Exchange",

            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trading",
            label: "Trading",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const isChecked = Boolean(value);
                    return (
                        <Checkbox
                            checked={isChecked}
                            
                        />
    
                    );
                }
            }
        },
        {
            name: "STG",
            label: "STG",
            options: {
                filter: true,
                sort: true,
            }
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
            name: "Targettype",
            label: "Targettype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MainSymbol",
            label: "MainSymbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Lotsize",
            label: "Lotsize",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Instrument Type",
            label: "Instrument Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExpiryDate",
            label: "ExpiryDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Token",
            label: "Token",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "IName",
            label: "IName",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Expirytype",
            label: "Expirytype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "strategytype",
            label: "strategytype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target value",
            label: "Target value",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL value",
            label: "SL value",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeExecution",
            label: "TradeExecution",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Lot Size",
            label: "Lot Size",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Product Type",
            label: "Product Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Entry Time",
            label: "Entry Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Exit Time",
            label: "Exit Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "DepthofStrike",
            label: "DepthofStrike",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SSDate",
            label: "SSDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SEDate",
            label: "SEDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "StrikeType",
            label: "StrikeType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LowerRange",
            label: "LowerRange",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "HigherRange",
            label: "HigherRange",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CEDepthLower",
            label: "CEDepthLower",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CEDepthHigher",
            label: "CEDepthHigher",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PEDepthLower",
            label: "PEDepthLower",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PEDepthHigher",
            label: "PEDepthHigher",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CEDeepLower",
            label: "CEDeepLower",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CEDeepHigher",
            label: "CEDeepHigher",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PEDeepLower",
            label: "PEDeepLower",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PEDeepHigher",
            label: "PEDeepHigher",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "GroupN",
            label: "GroupN",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "FixedSM",
            label: "FixedSM",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeCount",
            label: "TradeCount",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TaskStatus",
            label: "TaskStatus",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const isChecked = Boolean(value);
                    return (
                        <Checkbox
                            checked={isChecked}
                            
                        />
    
                    );
                }
            }
        },

        {
            name: "TaskTime",
            label: "TaskTime",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];


    const columns2 = [
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
            name: "Exchange",
            label: "Exchange",

            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Token",
            label: "Token",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Expiry Date",
            label: "Expiry Date",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Instrument Name",
            label: "Instrument Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Lotsize",
            label: "Lotsize",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Expirytype",
            label: "Expirytype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Instrument Type",
            label: "Instrument Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Pattern",
            label: "Pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradePattern",
            label: "TradePattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TType",
            label: "TType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TimeFrame",
            label: "TimeFrame",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL value",
            label: "SL value",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target value",
            label: "Target value",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TStype",
            label: "TStype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeExecution",
            label: "TradeExecution",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trading",
            label: "Trading",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const isChecked = Boolean(value);
                    return (
                        <Checkbox
                            checked={isChecked}
                             
                        />
    
                    );
                }
            }
        },
        {
            name: "EntryTime",
            label: "EntryTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "ExitTime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitDay",
            label: "ExitDay",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SSDate",
            label: "SSDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SEDate",
            label: "SEDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trend",
            label: "Trend",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TaskStatus",
            label: "TaskStatus",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeCount",
            label: "TradeCount",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TaskTime",
            label: "TaskTime",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    useEffect(() => {

        if (!clientService.loading && clientService.data.length > 0) {
            setUserName(clientService.data[0].Username)
        }


        setScript('Scalping')

        if (gettaskStatus && gettaskStatus.length > 0) {
            setActivity(gettaskStatus[0])
        }

    }, [clientService, gettaskStatus])


    const getAllUserLogs = async () => {
        const data = { User: userName, Strategy: getScript, TaskStatus: getActivity }
        await Get_All_Client_Logs(data)
            .then((response) => {
                if (response.Status) {
                    setPanleData({
                        loading: false,
                        data: response.Data
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
                console.log("Error in finding the user logs", err)
            })
    }

    useEffect(() => {
        getAllUserLogs()
    }, [userName, getScript, getActivity])


    return (
        <>
            <div>
                <div className="col-sm-12 col-lg-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">User Panel Logs</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div>
                                <div className='row'>
                                    <div className="form-group col-lg-4">
                                        <label>Username</label>
                                        <select
                                            className="form-select my-2"
                                            required
                                            onChange={(e) => setUserName(e.target.value)}
                                            value={userName}
                                        >
                                            <option value="">Select Username</option>
                                            {clientService.data && clientService.data.map((item, index) => (
                                                <option key={index} value={item.Username}>
                                                    {item.Username}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Strategy</label>

                                        <select className="form-select my-2" required=""
                                            onChange={(e) => setScript(e.target.value)}
                                            value={getScript}>
                                            <option value="">select Script</option>
                                            <option value="Scalping">Scalping</option>
                                            <option value="Option Strategy">Option Strategy</option>
                                            <option value="Pattern">Pattern</option>
                                        </select>

                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="email">Task Status</label>
                                        <select className="form-select my-2" required=""
                                            onChange={(e) => setActivity(e.target.value)}
                                            value={getActivity}>
                                            <option value="">Select Task Status</option>

                                            {gettaskStatus && gettaskStatus.map((item) => {
                                                return <option value={item}>{item}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <FullDataTable
                                    columns={getScript == 'Scalping' ? columns : getScript == 'Option Strategy' ? columns1 : getScript == 'Pattern' ? columns2 : columns}
                                    data={getPanleData.data}
                                    checkBox={false}
                                />
                            </div >
                        </div>
                    </div >
                </div >
            </div>


        </>
    )
}
export default Pannel

