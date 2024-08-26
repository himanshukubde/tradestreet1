import React, { useEffect, useState } from 'react';
import { Get_Pattern_Time_Frame, Get_Pattern_Name } from '../../CommonAPI/Admin';
import { AvailableScript, GetSymbolIp, ChartPatternAPI, Candlestick_Pattern } from '../../CommonAPI/User';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Loader from '../../../ExtraComponent/Loader';
import {columns , columns1} from './PatternsColumns'
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
    const [showCandle, setShowCandle] = useState(false)

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
        const data = { Username: Username, Strategy: selectedPatternType && selectedPatternType == "Candlestick Patterns" ? "CandlestickPattern" : "ChartingPattern" };
        await GetSymbolIp(data)
            .then((response) => {

                if (response.Status) {
                    setAllSymbols(response.Data);
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
    }, [selectedPatternType, scriptType]);

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
                    setShowCandle(true)
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
                    setShowCandle(true)
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


    useEffect(()=>{
        setShowCandle(false)

    },[selectedPatternType , candlestickPattern , scriptType , selectedTimeFrame , chartPattern])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card" >
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
                                            {timeFrameData.data.length > 0 && timeFrameData.data.map((item) => (
                                                <option value={item} key={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select Specific Pattern</label>
                                        <select className="form-control form-control-lg mt-2" onChange={(e) => setChartPattern(e.target.value)} value={chartPattern}>
                                            <option value="">Please Select Specific Script</option>

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
                                    <FullDataTable
                                        columns={columns1()}
                                        data={getCandlestickTable && getCandlestickTable.data2}
                                        checkBox={false}
                                    />
                                </>
                                : <>

                                    <FullDataTable
                                        columns={columns()}
                                        data={ChartPatternTableData && ChartPatternTableData.data}
                                        onRowSelect={handleRowSelect}
                                        checkBox={true}
                                    />
                                </>
                            }
                        </div>
                        {showCandle && <div className="row">
                            <div className="">
                                {
                                    getCandlestickTable.loading == false || ChartPatternTableData.loading == false ? <div className='shadow p-3 bg-white rounded m-4'>
                                        <AgChartsReact ChartData={getCandlestickTable && getCandlestickTable.data1} type={'technicalPattern'} />
                                    </div>
                                        : ""
                                }
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPattern;
