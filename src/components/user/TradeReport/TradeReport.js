import React, { useState, useEffect } from 'react';
import { get_User_Data } from '../../Common API/Admin'
import { get_Trade_Report } from '../../Common API/User'
import Loader from '../../../ExtraComponent/Loader'
import GridExample from '../../../ExtraComponent/CommanDataTable'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const TradeReport = () => {
    const [selectStrategyType, setStrategyType] = useState('')
    const [tradeReport, setTradeReport] = useState('')
    const [selectedRowData, setSelectedRowData] = useState('');
    const [ToDate, setToDate] = useState('');
    const [FromDate, setFromDate] = useState('');
    const [showTable, setShowTable] = useState(false)

    const [getAllTradeData, setAllTradeData] = useState({
        loading: true, 
        data:[],
    })

    const Username = localStorage.getItem('name')

    // Date Formetor
    const convertDateFormat = (date) => {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };



    const GetTradeReport = async () => {
        const data = { Data: selectStrategyType, Username: Username }

        //GET TRADE REPORT
        await get_User_Data(data)
            .then((response) => {
                if (response.Status) {
                    setTradeReport({
                        loading: false,
                        data: response.Data
                    })
                }
                else {
                    setTradeReport({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })
    }
    useEffect(() => {
        GetTradeReport()
    }, [selectStrategyType])


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
            name: "ScalpType",
            label: "ScalpType",
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
            name: "Trading",
            label: "Trading",
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
            name: "TradeExecution",
            label: "TradeExecution",
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
            name: "Lotsize",
            label: "Lotsize",
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
            name: "TradeCount",
            label: "TradeCount",
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
            name: "STG",
            label: "Strategy Type",
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
            }
        },
        {
            name: "Targettype",
            label: "Risk Handle",
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
            name: "Expirydate",
            label: "Expiry Date",
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
            label: "Measurment Type",
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
            label: "LotSize",
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
            name: "DeepStrike",
            label: "DeepStrike",
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
            label: "CEDepth Lower",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CEDepthHigher",
            label: "CEDepth Higher",
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
            label: "CEDeep Lower",
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
            name: "PEDeepHigher",
            label: "PEDeepHigher",
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
            name: "TradePattern",
            label: "TradePattern",
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
            label: "TType",
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
            name: "Quantity",
            label: "Quantity",
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
            name: "TradeExecution",
            label: "TradeExecution",
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
            name: "Pattern",
            label: "Pattern",
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
            name: "SEDate",
            label: "SEDate",
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
            name: "Trend",
            label: "Trend",
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

    ];
    const columns3 = [
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
            name: "ETime",
            label: "ETime",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EPrice",
            label: "EPrice",
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
            name: "ExitPrice",
            label: "ExitPrice",
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
            name: "MainSymbol",
            label: "MainSymbol",
            options: {
                filter: true,
                sort: true,
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
            name: "LotSize",
            label: "LotSize",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trade",
            label: "Trade",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL",
            label: "SL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Option Type",
            label: "Option Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Strike price",
            label: "Strike price",
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
            name: "Spot Price",
            label: "Spot Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Hashing",
            label: "Hashing",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeType",
            label: "TradeType",
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
        
    ];
    const handleRowSelect = (rowData) => {
        setSelectedRowData(rowData);
    };

 

    const handleSubmit = async () => {
        const data = {
            MainStrategy: selectStrategyType,
            Strategy: selectStrategyType == "Scalping" ? selectedRowData && selectedRowData.ScalpType : selectStrategyType == "Option Strategy" ? selectedRowData && selectedRowData.STG : selectStrategyType == "Pattern" ? selectedRowData && selectedRowData.TradePattern : '',
            Symbol: selectStrategyType == "Scalping" || selectStrategyType == "Pattern" ? selectedRowData && selectedRowData.Symbol : selectStrategyType == "Option Strategy" ? selectedRowData && selectedRowData.IName : '',
            Username: Username,
            ETPattern: selectStrategyType == "Scalping" ? '' : selectStrategyType == "Option Strategy" ? selectedRowData && selectedRowData.Targettype : selectStrategyType == "Pattern" ? selectedRowData && selectedRowData.Pattern : '',
            Timeframe: selectStrategyType == "Pattern" ? selectedRowData && selectedRowData.TimeFrame : '',
            From_date: convertDateFormat(FromDate),
            To_date: convertDateFormat(ToDate),
            Group: "",
            TradePattern: "",
            PatternName: ""
        }

        await get_Trade_Report(data)

            .then((response) => {
                if (response.Status) {
                    setAllTradeData({
                        loading: false,
                        data: response.CloseData,
                    })
                    setShowTable(true)
                }
                else {
                    Swal.fire({
                        title: "No Records found",
                        icon: "info",
                        timer: 1500,
                        timerProgressBar: true
                    });
                    setAllTradeData({
                        loading: false,
                        data: [],
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the All TradeData", err)
            })


    }
    useEffect(() => {
        setStrategyType('Scalping')
    }, []);


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Trade Report</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="was-validated ">
                                <div className='row'>

                                    <div className="form-group col-lg-3">
                                        <label>Select Strategy Type</label>
                                        <select className="form-select" required=""
                                            onChange={(e) => setStrategyType(e.target.value)}
                                            value={selectStrategyType}>
                                            <option value={"Scalping"}>Scalping</option>
                                            <option value={"Option Strategy"}>Option Strategy</option>
                                            <option value={"Pattern"}>Pattern Script</option>

                                        </select>
                                    </div>
                                    <div className="form-group col-lg-3 ">
                                        <label>Select form Date</label>
                                        <DatePicker className="form-select" selected={FromDate} onChange={(date) => setFromDate(date)} />

                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>Select To Date</label>
                                        <DatePicker className="form-select" selected={ToDate} onChange={(date) => setToDate(date)} />

                                    </div>
                                </div>
                            </div>
                            {
                                <div className="modal-body">
                                    <GridExample
                                        columns={selectStrategyType === "Scalping" ? columns :
                                            selectStrategyType === "Option Strategy" ? columns1 :
                                                selectStrategyType === "Pattern" ? columns2 : columns
                                        }
                                        data={tradeReport.data}
                                        onRowSelect={handleRowSelect}
                                        checkBox={true}
                                    />
                                </div>
                            }
                            <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button>

                            {
                                showTable && <>
                                    <div className='mt-3'>
                                        <GridExample
                                            columns={columns3}
                                            data={getAllTradeData.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={false}
                                        />
                                    </div>

                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeReport;
