import React, { useState, useEffect } from 'react';
import { GetGroupNames, get_User_Data, get_Trade_History, get_PnL_Data, get_EQuityCurveData, get_DrapDownData, get_FiveMostProfitTrade, get_FiveMostLossTrade } from '../../Common API/Admin'
import Loader from '../../../ExtraComponent/Loader'
import GridExample from '../../../ExtraComponent/CommanDataTable'
import DatePicker from "react-datepicker";

import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";


import "react-datepicker/dist/react-datepicker.css";


const Tradehistory = () => {
    const [selectGroup, setSelectGroup] = useState('')
    const [selectStrategyType, setStrategyType] = useState('')
    const [selectStrategyName, setStrategyName] = useState('')
    const [tradeHistory, setTradeHistory] = useState('')
    const [selectedRowData, setSelectedRowData] = useState('');
    const [ToDate, setToDate] = useState('');
    const [FromDate, setFromDate] = useState('');
    const [showTable, setShowTable] = useState(false)
    const [getAllTradeData, setAllTradeData] = useState({
        loading: true,
        data: []
    })
    const [getPnLData, setPnlData] = useState({
        loading: true,
        data: [],
        data2: []
    })

    const [getEquityCurveDetails, setEquityCurveDetails] = useState({
        loading: true,
        data: []
    })
    const [getDropDownData, setDropDownData] = useState({
        loading: true,
        data: []
    })

    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })

    const [getFiveLossTrade, setFiveLossTrade] = useState({
        loading: true,
        data: [],
        data1: []
    })
    const [getFiveProfitTrade, setFiveProfitTrade] = useState({
        loading: true,
        data: [],
        data1: []
    })


    console.log("getFiveLossTrade :", getFiveLossTrade)
    console.log("getFiveProfitTrade :", getFiveProfitTrade)






    // Date Formetor
    const convertDateFormat = (date) => {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
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


    const GetTradeHistory = async () => {
        const data = { Data: selectStrategyType, Username: selectGroup }

        //GET TRADEHISTORY
        await get_User_Data(data)
            .then((response) => {
                if (response.Status) {

                    setTradeHistory({
                        loading: false,
                        data: response.Data
                    })
                }
                else {
                    setTradeHistory({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })



        //


    }
    useEffect(() => {
        GetTradeHistory()
    }, [selectStrategyType, selectGroup])




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
            name: "TType",
            label: "Target Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Lotsize",
            label: "Quantity",
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
            name: "CEDeepLower",
            label: "CEDeep Lower",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "DepthofStrike",
            label: "Depthof Strike",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "DeepStrike",
            label: "Deep Strike",
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
            label: "Target Type",
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
            label: "SL value Date",
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
            name: "Instrument Name",
            label: "Instrument Name",
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
            name: "ExitDay",
            label: "ExitDay",
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
            name: "EntryTime",
            label: "EntryTime",
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
            label: "Entry Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EPrice",
            label: "Entry Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitPrice",
            label: "Exit Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeType",
            label: "Trade Type",
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
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    const columns4 = [
        {
            name: "S.No",
            label: "S.No",
            width: '100px',
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
            label: "Entry Time",
            width: '100px',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PnL",
            width: '100px',
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "",
            width: '500px',
            label: "",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    const columns5 = [
        {
            name: "S.No",
            label: "S.No",
            width: '100px',
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
            name: "ExitTime",
            label: "Exit Time",
            width: '100px',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EquityCurve",
            width: '100px',
            label: "Equity Curve",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "",
            width: '500px',
            label: "",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];


    const columns6 = [
        {
            name: "S.No",
            label: "S.No",
            width: '100px',
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
            label: "Entry Time",
            width: '100px',
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Drawdown",
            width: '100px',
            label: "Drawdown",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "",
            width: '500px',
            label: "",
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
            Strategy: selectedRowData && selectedRowData.ScalpType,
            Symbol: selectedRowData && selectedRowData.Symbol,
            Username: selectGroup,
            ETPattern: '',
            Timeframe: '',
            From_date: convertDateFormat(FromDate),
            To_date: convertDateFormat(ToDate),
            Group: "",
            TradePattern: "",
            PatternName: ""
        }
        await get_Trade_History(data)
            .then((response) => {
                if (response.Status) {
                    setAllTradeData({
                        loading: false,
                        data: response.data
                    })
                    setShowTable(true)
                }
                else {
                    setAllTradeData({
                        loading: false,
                        data: []
                    })
                }
            })
            .catch((err) => {
                console.log("Error in finding the All TradeData", err)
            })

        //GET PNL DATA
        await get_PnL_Data(data)
            .then((response) => {
                if (response.Status) {

                    console.log("SPPP :", response.Barchart)

                    const newDataArray = response.Barchart.map(item => ({
                        PnL: item.PnL,
                        ETime: item.ETime.split(' ')[1].substring(0, 5)
                    }));


                    console.log("CPP :cc", newDataArray)
                    setPnlData({
                        loading: false,
                        data: newDataArray,
                        data2: response.Barchart,
                    })
                }
                else {
                    setPnlData({
                        loading: false,
                        data: [],
                        data2: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })


        //GET GetEquity CurveData
        await get_EQuityCurveData(data)
            .then((response) => {
                if (response.Status) {
                    setEquityCurveDetails({
                        loading: false,
                        data: response.Equitycurve,
                    })
                }
                else {
                    setEquityCurveDetails({
                        loading: false,
                        data: [],
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })

        //GET GetEquity CurveData
        await get_DrapDownData(data)
            .then((response) => {
                if (response.Status) {
                    setDropDownData({
                        loading: false,
                        data: response.Drawdown,
                    })
                }
                else {
                    setDropDownData({
                        loading: false,
                        data: [],
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })


        // GET 5 MONST PROFIT TRADE
        await get_FiveMostLossTrade(data)
            .then((response) => {
                if (response.Status) {
                    setFiveLossTrade({
                        loading: false,
                        data: response.fivelosstrade,
                        data1: response.fivelosstradeall,

                    })
                }
                else {
                    setFiveLossTrade({
                        loading: false,
                        data: [],
                        data1: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })

        await get_FiveMostProfitTrade(data)
            .then((response) => {
                if (response.Status) {
                    setFiveProfitTrade({
                        loading: false,
                        data: response.fiveprofittrade,
                        data1: response.fiveprofittradeall,
                    })
                }
                else {
                    setFiveProfitTrade({
                        loading: false,
                        data: [],
                        data1: [],

                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })
    }


    // useEffect(() => {
    //     if (getGroupData.data && getGroupData.data.length > 0) {
    //         setSelectGroup(getGroupData.data[0].GroupName);
    //     }
    // }, [getGroupData]);

    useEffect(() => {
        setSelectGroup('komal')
        setStrategyType('Scalping')
    }, []);


    const chartOptions = {
        zoom: { enabled: true },
        data: getPnLData && getPnLData.data,
        series: [{ type: 'bar', xKey: 'ETime', yKey: 'PnL' }],
    }

    const chartOptions1 = {
        zoom: { enabled: true },
        data: getEquityCurveDetails && getEquityCurveDetails.data,
        series: [{ type: 'line', xKey: 'ExitTime', yKey: 'EquityCurve' }],
    }

    const chartOptions2 = {
        zoom: { enabled: true },
        data: getDropDownData && getDropDownData.data,
        series: [{ type: 'line', xKey: 'ETime', yKey: 'Drawdown' }],
    }





    const options = {
        data: getFiveProfitTrade.data,
        title: {
            text: "5 most profit trade",
        },
        series: [
            {
                type: "pie",
                angleKey: "PnL",
                calloutLabelKey: "ETime",
                sectorLabelKey: "PnL",
                sectorLabel: {
                    color: "white",
                    fontWeight: "bold",
                    formatter: params => `${params.value}`,
                },
            },
        ],
    };

    const options2 = {
        data: getFiveProfitTrade.data,
        title: {
            text: "Portfolio Composition",
        },
        series: [
            {
                type: "pie",
                angleKey: "amount",
                calloutLabelKey: "asset",
                sectorLabelKey: "amount",
                sectorLabel: {
                    color: "white",
                    fontWeight: "bold",
                    formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
                },
            },
        ],
    };



    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Trade History</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="was-validated ">
                                <div className='row'>
                                    <div className="form-group col-lg-3">
                                        <label>Select Username</label>
                                        <select className="form-select" required=""
                                            onChange={(e) => setSelectGroup(e.target.value)}
                                            value={selectGroup}
                                        >
                                            {getGroupData.data && getGroupData.data.map((item) => {
                                                return <>
                                                    <option value={item.GroupName}>{item.GroupName}</option>
                                                </>
                                            })}
                                        </select>
                                    </div>
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
                                        data={tradeHistory.data}
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


                                    {/* PnL Graph Table */}
                                    <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                        Profit and Loss Table
                                    </p>
                                    <div className=''>
                                        <GridExample
                                            columns={columns4}
                                            data={getPnLData.data2}
                                            onRowSelect={handleRowSelect}
                                            checkBox={false}
                                        />
                                    </div>


                                    {/* PnL Graph show */}
                                    <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                        Profit and Loss Graph
                                    </p>
                                    <div style={{ width: '100%', height: '500px' }}>
                                        <AgChartsReact options={chartOptions} />
                                    </div>




                                    {/* 5 Most profit and loss graph */}
                                    <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                        5 Most Profit Graph
                                    </p>
                                    <div className='d-flex'>
                                        <div style={{ width: '50%', height: '500px' }}>
                                            <AgChartsReact options={options} />
                                        </div>
                                        <div style={{ width: '50%', height: '500px' }}>
                                            <AgChartsReact options={options} />
                                        </div>
                                    </div>







                                    {/*  Consistent Loss & Profit-Making Trades: */}
                                    <div>
                                        <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                            Consistent Loss & Profit-Making Trades:
                                        </p>
                                    </div>


                                    {/* EquityCurve */}

                                    <div>
                                        <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                            EquityCurve
                                        </p>

                                        <GridExample
                                            columns={columns5}
                                            data={getEquityCurveDetails.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={false}
                                        />
                                    </div>


                                    {/* EquityCurve  Graph show */}
                                    <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                        Profit and Loss Graph
                                    </p>
                                    <div style={{ width: '100%', height: '500px' }}>
                                        <AgChartsReact options={chartOptions1} />
                                    </div>



                                    <div>
                                        <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                            Drawdown Table
                                        </p>

                                        <GridExample
                                            columns={columns6}
                                            data={getDropDownData.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={false}
                                        />
                                    </div>


                                    {/* EquityCurve  Graph show */}
                                    <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                        Drawdown Graph
                                    </p>
                                    <div style={{ width: '100%', height: '500px' }}>
                                        <AgChartsReact options={chartOptions2} />
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

export default Tradehistory;
