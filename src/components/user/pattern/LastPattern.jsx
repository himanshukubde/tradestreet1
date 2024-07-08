import React, { useEffect, useState } from 'react'
import { Get_Pattern_Name, Get_Pattern_Charting } from '../../Common API/Admin'
import { Get_Last_Pattern_All_Data , AvailableScript , GetSymbolIp } from '../../Common API/User'
import FullDataTable from '../../../ExtraComponent/CommanDataTable'
import Loader from '../../../ExtraComponent/Loader'
import { createRoot } from "react-dom/client";

const LastPattern = () => {


    const UserName = localStorage.getItem('name')
    const [getLastPatternData, setLastPatternData] = useState({
        loading: true,
        data: []
    })

    const [selectPattern, setSelectPattern] = useState('')
    const [getChartPattern, setChartPattern] = useState('')
    const [selectedRowData, setSelectedRowData] = useState('');
    const [getAllSymbol , setSymbol] = useState([])

    const getLastPattern = async () => {
        const data = { Pattern: selectPattern }
        await Get_Last_Pattern_All_Data(data)
            .then((response) => {
                if (response.Status) {
                    setLastPatternData({
                        loading: false,
                        data: response.PatternDetails
                    })
                }
                else {
                    setLastPatternData({
                        loading: false,
                        data: []
                    })
                }
            })
            .catch((err) => {
                console.log("Error in finding the last Pattern details", err)
            })
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
            name: "Date",
            label: "Date",
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
            name: "Symbol",
            label: "Symbol",
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
            name: "pattern",
            label: "pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "start_pattern",
            label: "start_pattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "End_pattern",
            label: "End_pattern",
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

    const GetPatternCharting = async () => {
        try {
            let response;
            if (selectPattern === "Candlestick Patterns") {
                response = await Get_Pattern_Name();
            } else {
                response = await Get_Pattern_Charting();
            }

            if (response.Status) {
                setChartPattern({
                    loading: false,
                    data: response.PatternName
                });
            } else {
                setChartPattern({
                    loading: false,
                    data: []
                });
            }
        } catch (error) {
            // Handle any errors that occur during the fetch
            console.error('Error fetching pattern data:', error);
            setChartPattern({
                loading: false,
                data: []
            });
        }
    };

    useEffect(() => {
        GetPatternCharting()
        getLastPattern()
    }, [selectPattern])

    useEffect(() => {
        setSelectPattern('Candlestick Patterns')
    }, [])

    const handleRowSelect = (rowData) => {
        setSelectedRowData(rowData);
    };



 



    const HandleSubmit = ()=>{
        
    }



  





    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Last Pattern</h4>
                                </div>

                            </div>
                            <div className="iq-card-body">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Select Pattern</label>
                                            <select className="form-control form-control-lg mt-2" onChange={(e) => setSelectPattern(e.target.value)}
                                                value={selectPattern}>
                                                <option value="Candlestick Patterns">Candlestick Patterns</option>
                                                <option value="Charting Patterns">Charting Patterns</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label>Select Specific Pattern</label>
                                            <select className="form-control form-control-lg mt-2">
                                                {
                                                    getChartPattern && getChartPattern.data.map((item) => (
                                                        <option value={item}>{item}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    {getLastPatternData.loading ? <Loader /> :
                                        <FullDataTable
                                            columns={selectPattern == 'Candlestick Patterns' ? columns : columns1}
                                            data={getLastPatternData.data}
                                            onRowSelect={handleRowSelect}
                                            checkBox={selectPattern == 'Candlestick Patterns' ? false : true}
                                        />
                                    }

                                </div>
                                <div className='mt-3'>
                                    <button className='btn btn-primary' onClick={HandleSubmit}>Submit</button>
                                </div>
                                <div className="row">
                               
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LastPattern
