import React, { useState, useEffect } from 'react'
import { GetGroupNames, Get_All_Service, get_User_Data } from '../../Common API/Admin'
import { Eye, Trash2 } from 'lucide-react';
import Loader from '../../../ExtraComponent/Loader'
import FullDataTable from '../../../ExtraComponent/CommanDataTable'


const Userlog = () => {

    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })
    const [showModal, setShowModal] = useState(false)
    const [getServiceDetails, setServiceDetails] = useState({
        loading: true,
        data: []
    })

    const [getUserData, setUserData] = useState({
        loading: true,
        data: []
    })


    const [selectStrategyType, setStrategyType] = useState('')

    const getAllServiceGiven = async () => {
        if (selectStrategyType == '') {
            return ""
        }
        const data = { Strategy: selectStrategyType && selectStrategyType }
        await Get_All_Service(data)
            .then((response) => {
                if (response.Status) {
                    setServiceDetails({
                        loading: false,
                        data: response.Data
                    })
                }
                else {
                    setServiceDetails({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in fainding the service", err)
            })
    }


    useEffect(() => {
        getAllServiceGiven()
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
            name: "Action",
            label: "View",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Eye onClick={(e) => { setShowModal(!showModal); handleModal(tableMeta) }} />
                }
            }
        },
        {
            name: "Total Service",
            label: "Total Service",
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
            name: "UsedService",
            label: "UsedService",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "NFO",
            label: "NFO",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "NSE",
            label: "NSE",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCX",
            label: "MCX",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CDS",
            label: "CDS",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SingleScript",
            label: "SingleScript",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "OneDirection",
            label: "OneDirection",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Fixed Price",
            label: "Fixed Price",
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
            name: "Action",
            label: "View",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Eye onClick={(e) => { setShowModal(!showModal); handleModal(tableMeta) }} />
                }
            }
        },
        {
            name: "Total Service",
            label: "Total Service",
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
            name: "UsedService",
            label: "UsedService",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongStrangle",
            label: "LongStrangle",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortStrangle",
            label: "ShortStrangle",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongStraddle",
            label: "LongStraddle",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortStraddle",
            label: "ShortStraddle",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongIronButterfly",
            label: "LongIronButterfly",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortIronButterfly",
            label: "ShortIronButterfly",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongIronCondor",
            label: "LongIronCondor",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortIronCondor",
            label: "ShortIronCondor",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BearCallSpread",
            label: "BearCallSpread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BearPutSpread",
            label: "BearPutSpread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BullCallSpread",
            label: "BullCallSpread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BullPutSpread",
            label: "BullPutSpread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BullCallLadder",
            label: "BullCallLadder",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "BullPutLadder",
            label: "BullPutLadder",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CoveredCall",
            label: "CoveredCall",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CoveredPut",
            label: "CoveredPut",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongCollar",
            label: "LongCollar",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortCollar",
            label: "ShortCollar",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "RatioCallSpread",
            label: "RatioCallSpread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "RatioPutSpread",
            label: "RatioPutSpread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongShifting",
            label: "LongShifting",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortShifting",
            label: "ShortShifting",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LongFourLegStrategy",
            label: "LongFourLegStrategy",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ShortFourLegStrategy",
            label: "ShortFourLegStrategy",
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
            name: "Action",
            label: "View",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Eye onClick={(e) => { setShowModal(!showModal); handleModal(tableMeta) }} />
                }
            }
        },
        {
            name: "Total Service",
            label: "Total Service",
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
            name: "UsedService",
            label: "UsedService",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "NFO",
            label: "NFO",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "NSE",
            label: "NSE",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "MCX",
            label: "MCX",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CDS",
            label: "CDS",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Candlestickpattern",
            label: "Candlestickpattern",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ChartPattern",
            label: "ChartPattern",
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
            name: "TType",
            label: "TType",
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
            name: "Booking Point",
            label: "Target Value",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Re-entry Point",
            label: "SL Value",
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
            name: "Quantity",
            label: "Quantity",
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
            name: "STG",
            label: "Strategy",
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
            label: "Targettype",
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
            label: "Expirydate",
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
            name: "FixedSM",
            label: "FixedSM",
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


    ];



    const columns5 = [
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
            label: "SL Value",
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
            name: "Trading",
            label: "Trading",
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
            name: "TaskTime",
            label: "TaskTime",
            options: {
                filter: true,
                sort: true,
            }
        },


    ];


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


    useEffect(() => {
        setStrategyType('Scalping')
    }, []);


    const handleModal = async (rowIndex) => {
        const index = rowIndex.rowIndex;
        const data = { Data: selectStrategyType, Username: getServiceDetails.data[index].Username }

        await get_User_Data(data)
            .then((response) => {
                if (response.Status) {
                    setUserData({
                        loading: false,
                        data: response.Data
                    })
                }
                else {
                    setUserData({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the user data", err)
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">User Script Details</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">

                            <div className="was-validated ">
                                <div className='d-flex'>

                                    <div className="form-group col-md-4s ms-2">
                                        <label>Strategy Type</label>
                                        <select className="form-select" required=""
                                            onChange={(e) => setStrategyType(e.target.value)}
                                            value={selectStrategyType}>
                                            <option value={"Scalping"}>Scalping</option>
                                            <option value={"Option Strategy"}>Option Strategy</option>
                                            <option value={"Pattern"}>Pattern Script</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {getServiceDetails.loading ? <Loader /> :
                                (
                                    selectStrategyType == "Scalping" ?
                                        <div className="iq-card-body">

                                            <FullDataTable
                                                columns={columns}
                                                data={getServiceDetails.data}
                                                checkBox={false}
                                            />

                                        </div> :
                                        selectStrategyType == "Option Strategy" ?
                                            <div className="iq-card-body">
                                                <FullDataTable
                                                    columns={columns1}
                                                    data={getServiceDetails.data}
                                                    checkBox={false}
                                                />
                                            </div> :
                                            selectStrategyType == "Pattern" ?
                                                <div className="iq-card-body">
                                                    <div className="iq-card-body">
                                                        <FullDataTable
                                                            columns={columns1}
                                                            data={getServiceDetails.data}
                                                            checkBox={false}
                                                        />
                                                    </div>
                                                </div> : ""
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                <>
                    <div
                        className={`modal fade bd-example-modal-lg ${showModal ? 'show' : ''}`}
                        tabIndex={-1}
                        style={{ display: showModal ? 'block' : 'none' }}
                        aria-hidden={!showModal}
                        role="dialog"
                    >
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">All Scripts</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                     
                                        <FullDataTable
                                            columns={selectStrategyType == "Scalping" ? columns3 : selectStrategyType == "Option Strategy" ? columns4 : selectStrategyType == "Pattern" ? columns5 : []}
                                            data={getUserData.data}
                                            checkBox={false}
                                        />

                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </>

            }
        </>
    )
}

export default Userlog
