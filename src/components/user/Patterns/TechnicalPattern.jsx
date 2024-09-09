import React, { useEffect, useState } from 'react';
import { Get_Pattern_Time_Frame, Get_Pattern_Name } from '../../CommonAPI/Admin';
import { AvailableScript, GetSymbolIp, ChartPatternAPI, Candlestick_Pattern } from '../../CommonAPI/User';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Loader from '../../../ExtraComponent/Loader';
import { columns, columns1 } from './PatternsColumns';
import "ag-charts-enterprise";
import AgChartsReact from "./TechnicalPatternCandle";

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
    const [showCandle, setShowCandle] = useState(false);
    const [availableScripts, setAvailableScripts] = useState([]);
    const [getCandlestickTable, setCandlestickTable] = useState({ loading: true, data1: [], data2: [] });
    const [ChartPatternTableData, setChartPatternTableData] = useState({ loading: true, data: [] });
    const [timeFrameData, setTimeFrameData] = useState({ loading: true, data: [] });

    useEffect(() => {
        fetchAllSymbols();
        fetchAvailableScripts();
    }, [selectedPatternType, scriptType]);

    useEffect(() => {
        fetchPatternTimeFrames();
        fetchPatternNames();
    }, []);

    useEffect(() => {
        fetchChartingData();
    }, [selectedPatternType, scriptType, selectedTimeFrame, chartPattern, candlestickPattern]);

    useEffect(() => {
        setShowCandle(false);
    }, [selectedPatternType, candlestickPattern, scriptType, selectedTimeFrame, chartPattern]);

    const handleRowSelect = (rowData) => {
        setSelectedRowData(rowData);
    };

    const fetchAvailableScripts = async () => {
        try {
            const response = await AvailableScript();
            setAvailableScripts(response.Status ? response.Symbol : []);
        } catch (err) {
            console.error("Error in fetching available scripts", err);
        }
    };

    const fetchAllSymbols = async () => {
        try {
            const data = { Username, Strategy: selectedPatternType === "Candlestick Patterns" ? "CandlestickPattern" : "ChartingPattern" };
            const response = await GetSymbolIp(data);
            setAllSymbols(response.Status ? response.Data : []);
        } catch (err) {
            console.error("Error in fetching symbols", err);
        }
    };

    const fetchPatternTimeFrames = async () => {
        try {
            const response = await Get_Pattern_Time_Frame();
            setTimeFrameData({ loading: false, data: response });
        } catch (err) {
            console.error("Error in fetching time frames", err);
        }
    };

    const fetchPatternNames = async () => {
        try {
            const response = await Get_Pattern_Name();
            setPatternNames({ loading: false, data: response.Status ? response.PatternName : [] });
        } catch (err) {
            console.error("Error in fetching pattern names", err);
        }
    };

    const fetchChartingData = async () => {
        try {
            if (scriptType && selectedTimeFrame && chartPattern) {
                const data = { Script: scriptType, TimeFrame: selectedTimeFrame, Username, Symbol: chartPattern };
                const response = await ChartPatternAPI(data);
                setChartPatternTableData({
                    loading: false,
                    data: response.Status ? response.Data : []
                });
                setShowCandle(response.Status);
            }

            if (candlestickPattern && selectedTimeFrame && chartPattern) {
                const data = { PatternName: candlestickPattern, TimeFrame: selectedTimeFrame, Username, Symbol: chartPattern };
                const response = await Candlestick_Pattern(data);
                setCandlestickTable({
                    loading: false,
                    data1: response.Status ? response.Data.CandleData : [],
                    data2: response.Status ? response.Data.PatternData : []
                });
                setShowCandle(response.Status);
            }
        } catch (err) {
            console.error("Error in fetching data:", err);
        }
    };

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
                                                    {patternNames.data.map((item) => (
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
                                            {timeFrameData.data.map((item) => (
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
                                            {allSymbols.map((item) => (
                                                <option value={item} key={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            {selectedPatternType === 'Candlestick Patterns' ? (
                                <FullDataTable columns={columns1()} data={getCandlestickTable.data2} checkBox={false} />
                            ) : (
                                <FullDataTable columns={columns()} data={ChartPatternTableData.data} onRowSelect={handleRowSelect} checkBox={true} />
                            )}
                        </div>
                        {showCandle && (
                            <div className="row">
                                <div className="">
                                    {(!getCandlestickTable.loading || !ChartPatternTableData.loading) && (
                                        <div className='shadow p-3 bg-white rounded m-4'>
                                            <AgChartsReact ChartData={getCandlestickTable && getCandlestickTable.data1} type={'technicalPattern'}  timeFrame={selectedTimeFrame} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPattern;
