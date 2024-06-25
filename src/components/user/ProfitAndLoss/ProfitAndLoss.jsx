import React, { useState, useEffect } from 'react';
import { getNetPnLData } from '../../Common API/User'
import Loader from '../../../ExtraComponent/Loader'
import GridExample from '../../../ExtraComponent/CommanDataTable'
import DatePicker from "react-datepicker";
 
const Tradehistory = () => {
 
    const [selectStrategyType, setStrategyType] = useState('')
    const [ToDate, setToDate] = useState('');
    const [FromDate, setFromDate] = useState('');
    const [showTable, setShowTable] = useState(false)
    
    const [getPnLData, setPnlData] = useState({
        loading: true,
        data: [],
        data2: [],
        data3:[]
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

  

    const handleSubmit = async () => {
        const data = {
            MainStrategy: selectStrategyType,
            Username: Username,
            From_date: convertDateFormat(FromDate),
            To_date: convertDateFormat(ToDate),
        }

        console.log("cPP :", data)
    
        //GET PNL DATA
        await getNetPnLData(data)
            .then((response) => {
                if (response.Status) {
                    setPnlData({
                        loading: false,
                        data: response.data,
                        data2: response.Overall,
                        data3 : response.TotalPnL
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
                                <h4 className="card-title">Net P&N</h4>
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
                          
                            <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button>

                            {
                                showTable && <>
                                    <div className='mt-3'>
                                        <GridExample
                                            columns={columns}
                                            data={getPnLData.data}
                                            
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

export default Tradehistory;
