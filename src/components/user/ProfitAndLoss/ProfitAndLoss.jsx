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
        data1: [],
        data2: []
    })
    const Username = localStorage.getItem('name')


    
      // set Defult Date 
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate());
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}.${month}.${day}`;
  
  
 
      // from date
      const DefultToDate = new Date();
      DefultToDate.setDate(DefultToDate.getDate()+1);
      const year1 = DefultToDate.getFullYear();
      const month1 = String(DefultToDate.getMonth() + 1).padStart(2, '0');
      const day1 = String(DefultToDate.getDate()).padStart(2, '0');
      const Defult_To_Date = `${year1}.${month1}.${day1}`;


    // Date Formetor
    const convertDateFormat = (date) => {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };



    //option strategy
    const columns4 = [
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
            name: "SN",
            label: "SN",
            options: {
                filter: true,
                sort: true,
            }
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
            name: "MOTrade",
            label: "MOTrade",
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
            name: "LotSize",
            label: "LotSize",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOPnL",
            label: "MOPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCPnL",
            label: "MCPnL",
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
            name: "Targettype",
            label: "Targettype",
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
            name: "Username",
            label: "Username",
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
            name: "GroupN",
            label: "GroupN",
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
            name: "Strike price",
            label: "Strike price",
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
            name: "STG",
            label: "STG",
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




    //pattern table
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
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SN",
            label: "SN",
            options: {
                filter: true,
                sort: true,
            }
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
            name: "MOTrade",
            label: "MOTrade",
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
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOPnL",
            label: "MOPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCPnL",
            label: "MCPnL",
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
            name: "Username",
            label: "Username",
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
            name: "SPattern",
            label: "SPattern",
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
            name: "PatternTime",
            label: "PatternTime",
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
            name: "PnL",
            label: "PnL",
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
            name: "Symbol",
            label: "Symbol",
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
            name: "TradePattern",
            label: "TradePattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SPattern",
            label: "SPattern",
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
            name: "PnL",
            label: "PnL",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];


   
    //scalping data table
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
            name: "Symbol",
            label: "Symbol",
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
            name: "Username",
            label: "Username",
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
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SN",
            label: "SN",
            options: {
                filter: true,
                sort: true,
            }
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
            name: "MOTrade",
            label: "MOTrade",
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
            name: "Quantity",
            label: "Quantity",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MOPnL",
            label: "MOPnL",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCPnL",
            label: "MCPnL",
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
            name: "GroupN",
            label: "GroupN",
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


 

    const handleSubmit = async () => {
        
        const data = {
            MainStrategy: selectStrategyType,
            Username: Username,
            From_date: convertDateFormat(FromDate=='' ? formattedDate : FromDate),
            To_date: convertDateFormat(ToDate=='' ? Defult_To_Date : ToDate),
        }


        //GET PNL DATA
        await getNetPnLData(data)
            .then((response) => {
                if (response.Status) {
                    setPnlData({
                        loading: false,
                        data: response.data,
                        data1: response.Overall,
                        data2: response.TotalPnL
                    })
                    setShowTable(true)
                }
                else {
                    setPnlData({
                        loading: false,
                        data: [],
                        data1: [],
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
                                        <DatePicker className="form-select" selected={FromDate=='' ? formattedDate : FromDate } onChange={(date) => setFromDate(date)} />

                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>Select To Date</label>
                                        <DatePicker className="form-select" selected={ToDate=='' ? Defult_To_Date : ToDate} onChange={(date) => setToDate(date)} />
                                    </div>
                                </div>
                            </div>

                            <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button>

                            {
                                showTable && <>

                                    <div className='mt-3'>
                                        <GridExample
                                            columns={selectStrategyType == 'Scalping' ? columns1 : selectStrategyType == 'Pattern' ? columns3 : columns1}
                                            data={getPnLData.data1}
                                            checkBox={false}
                                        />
                                    </div>

                                    <p className='bold mt-3' style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                                        Total Profit and Loss: {getPnLData.data2}
                                    </p>

                                    <div className='mt-3'>
                                        <GridExample
                                            columns={selectStrategyType == 'Scalping' ? columns : selectStrategyType == 'Pattern' ? columns2 : columns4}
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
