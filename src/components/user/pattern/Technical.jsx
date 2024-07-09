import React, { useEffect, useState } from 'react';
import { Get_Pattern_Time_Frame, Get_Pattern_Name } from '../../Common API/Admin';
import { AvailableScript, GetSymbolIp, ChartPatternAPI, Candlestick_Pattern } from '../../Common API/User';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Loader from '../../../ExtraComponent/Loader';
// import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";
import AgChartsReact from "./CandlePattern";

const LastPattern = () => {
    const Username = localStorage.getItem('name');
    const [selectedPatternType, setSelectedPatternType] = useState('');
    const [selectedRowData, setSelectedRowData] = useState('');
    const [scriptType, setScriptType] = useState('');
    const [candlestickPattern, setCandlestickPattern] = useState('');
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('');
    const [chartPattern, setChartPattern] = useState('');
    const [patternNames, setPatternNames] = useState([]);
    const [allSymbols, setAllSymbols] = useState([]);
    const [availableScripts, setAvailableScripts] = useState([]);
    const [getCandlestickTable, setCandlestickTable] = useState({
        loading: true,
        data1: [],
        data2: []
    })
    const [ChartPatternTableData, setChartPatternTableData] = useState({
        loading: true,
        data: []
    });
    const [timeFrameData, setTimeFrameData] = useState({
        loading: true,
        data: []
    });
    const columns = [
        {
            name: "S.No",
            label: "S.No",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1
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
            name: "Trend before pattern",
            label: "Trend before pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Previous trend price",
            label: "Previous trend price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Start Time",
            label: "Start Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Start Price",
            label: "Start Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "End Time",
            label: "End Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "End Price",
            label: "End Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "After trend price",
            label: "After trend price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Trend after pattern",
            label: "Trend after pattern",
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
                customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1
            }
        },
        {
            name: "open",
            label: "open",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "close",
            label: "close",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "high",
            label: "high",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "low",
            label: "low",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PreOpen",
            label: "PreOpen",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PreHigh",
            label: "PreHigh",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PreLow",
            label: "PreLow",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PreClose",
            label: "PreClose",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PreOpen2",
            label: "PreOpen2",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PreHigh2",
            label: "PreHigh2",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "PreLow2",
            label: "PreLow2",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "PreClose2",
            label: "PreClose2",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "PreOpen3",
            label: "PreOpen3",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "PreLow3",
            label: "PreLow3",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "PreClose3",
            label: "PreClose3",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "total",
            label: "total",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "body_length",
            label: "body_length",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "upper_shadow",
            label: "upper_shadow",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "lower_shadow",
            label: "lower_shadow",
            options: {
                filter: true,
                sort: true,
            }
        }, {
            name: "Pattern",
            label: "Pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];
    const handleRowSelect = (rowData) => {
        setSelectedRowData(rowData);
    };

    const fetchAvailableScripts = async () => {
        await AvailableScript()
            .then((response) => {
                if (response.Status) {
                    setAvailableScripts(response.Symbol);
                } else {
                    setAvailableScripts([]);
                }
            })
            .catch((err) => {
                console.log("Error in fetching available scripts", err);
            });
    };

    const fetchAllSymbols = async () => {
        const data = { Username };
        await GetSymbolIp(data)
            .then((response) => {
                if (response.Status) {
                    setAllSymbols(response.Symbol);
                } else {
                    setAllSymbols([]);
                }
            })
            .catch((err) => {
                console.log("Error in fetching symbols", err);
            });
    };

    useEffect(() => {
        fetchAllSymbols();
        fetchAvailableScripts();
    }, []);

    const fetchPatternTimeFrames = async () => {
        await Get_Pattern_Time_Frame()
            .then((response) => {
                setTimeFrameData({
                    loading: false,
                    data: response
                });
            })
            .catch((err) => {
                console.log("Error in fetching time frames", err);
            });
    };

    useEffect(() => {
        fetchPatternTimeFrames();
    }, []);

    const fetchChartingData = async () => {
        try {

            if (scriptType !== '' && selectedTimeFrame !== '' && chartPattern !== '') {
                const data = {
                    Script: scriptType,
                    TimeFrame: selectedTimeFrame,
                    Username: Username,
                    Symbol: chartPattern
                };

                const response = await ChartPatternAPI(data);

                if (response.Status) {
                    setChartPatternTableData({
                        loading: false,
                        data: response.Data
                    });
                } else {
                    setChartPatternTableData({
                        loading: false,
                        data: []
                    });
                }
            }

            if (chartPattern !== '' && selectedTimeFrame !== '' && candlestickPattern !== '') {
                const data = {
                    PatternName: candlestickPattern,
                    TimeFrame: selectedTimeFrame,
                    Username: Username,
                    Symbol: chartPattern
                };

                const response = await Candlestick_Pattern(data);

                if (response.Status) {
                    setCandlestickTable({
                        loading: false,
                        data1: response.Data.CandleData,
                        data2: response.Data.PatternData
                    });
                } else {
                    setCandlestickTable({
                        loading: false,
                        data1: [],
                        data2: []
                    });
                }
            }
        } catch (err) {
            console.log("Error in fetching data:", err);

        }
    };

    useEffect(() => {
        fetchChartingData();
    }, [selectedPatternType, scriptType, selectedTimeFrame, chartPattern, candlestickPattern]);




    const fetchPatternNames = async () => {
        await Get_Pattern_Name()
            .then((response) => {
                if (response.Status) {
                    setPatternNames({
                        loading: false,
                        data: response.PatternName
                    });
                } else {
                    setPatternNames({
                        loading: false,
                        data: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in fetching pattern names", err);
            });
    };

    useEffect(() => {
        fetchPatternNames();
    }, []);




    useEffect(() => {


    }, [selectedPatternType])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Technical Pattern</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select Technical pattern</label>
                                        <select className="form-control form-control-lg mt-2" onChange={(e) => setSelectedPatternType(e.target.value)} value={selectedPatternType}>
                                            <option value="">Please Select Pattern</option>
                                            <option value="Candlestick Patterns">Candlestick Patterns</option>
                                            <option value="Charting Patterns">Charting Patterns</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        {selectedPatternType === "Candlestick Patterns" ? (
                                            <>
                                                <label>Pattern</label>
                                                <select className="form-control form-control-lg mt-2" onChange={(e) => setCandlestickPattern(e.target.value)} value={candlestickPattern}>
                                                    <option value="">Please Select Pattern</option>

                                                    {patternNames && patternNames.data.map((item) => (
                                                        <option value={item} key={item}>{item}</option>
                                                    ))}
                                                </select>
                                            </>
                                        ) : (
                                            <>
                                                <label>Script</label>
                                                <select className="form-control form-control-lg mt-2" onChange={(e) => setScriptType(e.target.value)} value={scriptType}>
                                                    <option value="">Please Select Script</option>
                                                    <option value="AvailableScript">Available Script</option>
                                                    <option value="MyScript">My Script</option>
                                                </select>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Time Frame</label>
                                        <select className="form-control form-control-lg mt-2" onChange={(e) => setSelectedTimeFrame(e.target.value)} value={selectedTimeFrame}>
                                            <option value="">Please Select Time Frame</option>
                                            {timeFrameData && timeFrameData.data.map((item) => (
                                                <option value={item} key={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select Specific Pattern</label>
                                        <select className="form-control form-control-lg mt-2" onChange={(e) => setChartPattern(e.target.value)} value={chartPattern}>
                                            <option value="">Please Select Specific Pattern</option>

                                            {selectedPatternType === "Candlestick Patterns"
                                                ? allSymbols && allSymbols.map((item) => (
                                                    <option value={item} key={item}>{item}</option>
                                                ))
                                                : scriptType === "MyScript"
                                                    ? allSymbols && allSymbols.map((item) => (
                                                        <option value={item} key={item}>{item}</option>
                                                    ))
                                                    : availableScripts && availableScripts.map((item) => (
                                                        <option value={item} key={item}>{item}</option>
                                                    ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            {selectedPatternType == 'Candlestick Patterns' ?
                                <>
                                    {patternNames.loading ? <Loader /> : (
                                        <FullDataTable
                                            columns={columns1}
                                            data={getCandlestickTable && getCandlestickTable.data2}
                                            checkBox={false}
                                        />
                                    )}
                                </>
                                : <>
                                    {ChartPatternTableData.loading ? <Loader /> : (
                                        <FullDataTable
                                            columns={columns}
                                            data={ChartPatternTableData && ChartPatternTableData.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={true}
                                        />
                                    )}
                                </>
                            }
                        </div>

                        <div className="row">

                            <div className="m-3">
                                <div className='shadow p-3 mb-5 bg-white rounded'>
                                    <AgChartsReact ChartData={getCandlestickTable && getCandlestickTable.data1} />

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPattern;
