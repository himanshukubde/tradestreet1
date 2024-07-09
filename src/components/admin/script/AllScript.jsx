import React, { useState, useEffect } from 'react'
import { GetAllGroupService, GetGroupNames, DeleteScript } from '../../Common API/Admin';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import Loader from '../../../ExtraComponent/Loader'
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import Checkbox from '@mui/material/Checkbox';


const Addscript = () => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('')
    const [selectStrategyType, setStrategyType] = useState('')
    const [GroupError, setGroupError] = useState('')
    const [stgError, setStgError] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [getAllService, setAllservice] = useState({
        loading: true,
        data: []
    })
    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })


    const handleDelete = async (rowData) => {
        const index = rowData.rowIndex
        const data = {
            Groupname: getAllService.data[index].Username,
            Sop: selectStrategyType,
            Strategy: selectStrategyType == 'Option Strategy' ? getAllService.data[index].STG : selectStrategyType == 'Pattern' ? getAllService.data[index].TradePattern : getAllService.data[index].ScalpType,
            Symbol: selectStrategyType == 'Option Strategy' ? getAllService.data[index].MainSymbol : selectStrategyType == 'Pattern' ? getAllService.data[index].Symbol : getAllService.data[index].Symbol,
            ETPattern: selectStrategyType == 'Option Strategy' ? getAllService.data[index].Targettype : selectStrategyType == 'Pattern' ? getAllService.data[index].Pattern : "",
            Timeframe: selectStrategyType == 'Pattern' ? getAllService.data[index].TimeFrame : '',
            TType: selectStrategyType == 'Pattern' ? getAllService.data[index].TType : "",
            Group: selectStrategyType == 'Pattern' ? '' : getAllService.data[index].GroupN,
            Tradepattern: selectStrategyType == 'Pattern' ? getAllService.data[index].TradePattern : ''
        }



        await DeleteScript(data)
            .then((response) => {
                if (response.Status) {
                    setRefresh(!refresh)
                    Swal.fire({
                        title: "Deleted",
                        text: "Script Deleted successfully",
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
                else {
                    Swal.fire({
                        title: "Error !",
                        text: "error in script delete",
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
            })
            .catch((err) => {
                console.log("Error in delete script", err)
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
            name: "Action",
            label: "Action",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Trash2 onClick={() => handleDelete(tableMeta)} />
                }
            }
        },
        {
            name: "ScalpType",
            label: "Scalp Type",
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
            label: "Trade Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TStype",
            label: "Measurement Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Booking Point",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Re-entry Point",
            label: "Stoploss",
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
            label: "Expiry Date",
            options: {
                filter: true,
                sort: true,
            }
        },
       
        {
            name: "LowerRange",
            label: "Lower Range",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "HigherRange",
            label: "Higher Range",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "HoldExit",
            label: "Hold/Exit",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryPrice",
            label: "First Trade Lower Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryRange",
            label: "First Trade Higher Price",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitDay",
            label: "Exit Day",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryTime",
            label: "Entry  Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ExitTime",
            label: "Exit  Time",
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
            label: "Action",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Trash2 onClick={() => handleDelete(tableMeta)} />
                }
            }
        },
        {
            name: "STG",
            label: "Option Type",
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
            name: "Targettype",
            label: "Risk Handle",
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
            label: "Expiry Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "strategytype",
            label: "Measurement Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target value",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL value",
            label: "Stoploss",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeExecution",
            label: "Trade Execution",
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
            label: "Exit Day",
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
            name: "StrikeType",
            label: "Strike Type",
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
            label: "Action",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Trash2 onClick={() => handleDelete(tableMeta)} />
                }
            }
        },
        {
            name: "TradePattern",
            label: "Pattern Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Pattern",
            label: "Pattern Type",
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
            name: "TType",
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
            name: "TimeFrame",
            label: "Time Frame",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Target value",
            label: "Target",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "SL value",
            label: "Stoploss",
            options: {
                filter: true,
                sort: true,
            }
        },



        {
            name: "TStype",
            label: "Measurement Type",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "TradeExecution",
            label: "Trade Execution",
            options: {
                filter: true,
                sort: true,
            }
        },

        {
            name: "ExitDay",
            label: "Exit Day",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "EntryTime",
            label: "Entry Time",
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
            name: "Trend",
            label: "Trend",
            options: {
                filter: true,
                sort: true,
            }
        },


    ];



    // 1
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

    // 2
    const getAllgroupService = async () => {
        const data = { Strategy: selectStrategyType, Group: selectGroup }
        await GetAllGroupService(data)
            .then((response) => {
                if (response.Status) {

                    setAllservice({
                        loading: false,
                        data: response.GroupScrdf
                    })

                }
                else {
                    setAllservice({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding group service")
            })
    }




    const handleAddScript = () => {
        setFormSubmitted(true);
        const data = { selectGroup: selectGroup, selectStrategyType: selectStrategyType };
        if (selectGroup != '' && selectStrategyType != '') {
            navigate(selectStrategyType == "Scalping" ? '/admin/addscript/scalping' :
                selectStrategyType == "Option Strategy" ? '/admin/addscript/option' : '/admin/addscript/pattern', { state: { data } });
        }

    }

    useEffect(() => {
        setStrategyType('Scalping')
    }, []);

    useEffect(() => {
        if (formSubmitted) {
            if (selectGroup == '') {
                setGroupError("Select Group Name")
            } else {
                setGroupError("")
            }
            if (selectStrategyType == '') {
                setStgError("Select Strategy Type")
            } else {
                setStgError("")
            }
        }
    }, [selectGroup, selectStrategyType, formSubmitted])






    useEffect(() => {

        if (!getGroupData.loading && getGroupData.data.length > 0) {

            setSelectGroup(getGroupData && getGroupData.data[0].GroupName)

        }

    }, [getGroupData]);


    // console.log("selectGroup :" ,selectGroup)
    useEffect(() => {
        setStrategyType('Scalping')
    }, []);



    useEffect(() => {
        getAllgroupService()
    }, [selectStrategyType, selectGroup, refresh])



    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">All Scripts</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form className="was-validated ">
                                <div className='d-flex'>
                                    <div className="form-group col-md-5 ms-2">
                                        <label>Group Name</label>
                                        <select className="form-select "
                                            required=""
                                            onChange={(e) => setSelectGroup(e.target.value)}
                                            value={selectGroup}
                                        >
                                            <option value=''>Select Group Name</option>
                                            {getGroupData.data && getGroupData.data.map((item) => {
                                                return <>
                                                    <option value={item.GroupName}>{item.GroupName}</option>
                                                </>
                                            })}



                                        </select>
                                        {GroupError && <div style={{ "color": "red" }}>
                                            {GroupError}
                                        </div>}
                                    </div>
                                    <div className="form-group col-md-5 ms-2">
                                        <label>Strategy Type</label>
                                        <select className="form-select" required=""
                                            onChange={(e) => { setAllservice({ loading: true, data: [] }); setStrategyType(e.target.value) }}
                                            value={selectStrategyType}>
                                            <option value=''>Select Strategy Type</option>
                                            <option value={"Scalping"}>Scalping</option>
                                            <option value={"Option Strategy"}>Option Strategy</option>
                                            <option value={"Pattern"}>Pattern Script</option>
                                        </select>
                                        {stgError && <div style={{ "color": "red" }}>
                                            {stgError}
                                        </div>}
                                    </div>
                                    <div className='col-md-2 ms-2 mt-4'>
                                        <button style={{ height: "42px" }} className='btn btn-primary' onClick={handleAddScript}>Add Script</button>
                                    </div>
                                </div>
                            </form>

                            <div className="iq-card-body">
                                {getAllService.loading ? <Loader /> :
                                    <FullDataTable
                                        columns={selectStrategyType == "Scalping" ? columns : selectStrategyType == "Option Strategy" ? columns1 : selectStrategyType == "Pattern" ? columns2 : columns}
                                        data={getAllService.data}
                                        checkBox={false}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addscript
