import React, { useEffect, useState } from 'react';
import { Get_Pattern_Time_Frame, Get_Pattern_Name } from '../../Common API/Admin';
import { AvailableScript, GetSymbolIp, ChartPatternAPI, Candlestick_Pattern } from '../../Common API/User';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Loader from '../../../ExtraComponent/Loader';

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

    const [timeFrameData, setTimeFrameData] = useState({
        loading: true,
        data: []
    });

    const [patternTableData, setPatternTableData] = useState({
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
            name: "Pattern",
            label: "Pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Start Pattern",
            label: "Start Pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "End Pattern",
            label: "End Pattern",
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
        if (scriptType === '' || selectedTimeFrame === '' || chartPattern === '') {
            return;
        }
        const data = {
            Script: scriptType,
            TimeFrame: selectedTimeFrame,
            Username,
            Symbol: chartPattern
        };

        await ChartPatternAPI(data)
            .then((response) => {
                if (response.Status) {
                    setPatternTableData({
                        loading: false,
                        data: response.Data
                    });
                } else {
                    setPatternTableData({
                        loading: false,
                        data: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in fetching charting data", err);
            });
    };

    useEffect(() => {
        fetchChartingData();
    }, [selectedPatternType, scriptType, selectedTimeFrame, chartPattern]);

    const fetchCandlestickPatternData = async () => {
        if (scriptType === '' || selectedTimeFrame === '' || candlestickPattern === '') {
            return;
        }
        const data = {
            PatternName: candlestickPattern,
            TimeFrame: selectedTimeFrame,
            Username,
            Symbol: chartPattern
        };

        await Candlestick_Pattern(data)
            .then((response) => {
                if (response.Status) {
                    setPatternTableData({
                        loading: false,
                        data: response.Data
                    });
                } else {
                    setPatternTableData({
                        loading: false,
                        data: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in fetching candlestick pattern data", err);
            });
    };

    useEffect(() => {
        fetchCandlestickPatternData();
    }, [selectedPatternType, candlestickPattern, selectedTimeFrame, chartPattern]);

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
                                                    {patternNames && patternNames.data.map((item) => (
                                                        <option value={item} key={item}>{item}</option>
                                                    ))}
                                                </select>
                                            </>
                                        ) : (
                                            <>
                                                <label>Script</label>
                                                <select className="form-control form-control-lg mt-2" onChange={(e) => setScriptType(e.target.value)} value={scriptType}>
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
                                            columns={selectedPatternType === 'Candlestick Patterns' ? columns1 : columns}
                                            data={patternNames.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={selectedPatternType === 'Candlestick Patterns' ? false : true}
                                        />
                                    )}
                                </>

                                : <>
                                    {patternTableData.loading ? <Loader /> : (
                                        <FullDataTable
                                            columns={selectedPatternType === 'Candlestick Patterns' ? columns1 : columns}
                                            data={patternTableData.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={selectedPatternType === 'Candlestick Patterns' ? false : true}
                                        />
                                    )}
                                </>


                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPattern;
