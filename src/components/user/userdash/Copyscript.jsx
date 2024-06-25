
import React, { useState, useEffect } from 'react'
import { CopyPlus } from 'lucide-react';

import { useNavigate } from 'react-router-dom'
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllGroupService, GetGroupNames } from '../../Common API/Admin';
import Loader from '../../../ExtraComponent/Loader'
import { columns, columns1, columns2 } from './Columns'



const Coptyscript = ({ data }) => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('')
    const [getAllService, setAllservice] = useState({ loading: true, data: [] })
   

    const handleAddScript1 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.data[selectedRowIndex];

        const data = { selectGroup: selectGroup, selectStrategyType: "Scalping" ,...selectedRow };
        navigate('/user/addscript/scalping', { state: { data } });
    }
    const handleAddScript2 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: 'Option Strategy' };
        navigate('/user/addscript/option', { state: { data } });
    }
    const handleAddScript3 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: 'Pattern' };
        navigate('/user/addscript/pattern', { state: { data } });
    }




    const getAllgroupService = async () => {
        const data = { Data: "Scalping", Username: "Chandra" }
        await GetAllGroupService(data)
            .then((response) => {
                if (response.Status) {
                    setAllservice({
                        loading: false,
                        data: response.Data
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


    useEffect(() => {
        getAllgroupService()
    }, [])




    
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
        name: "coptScript",
        label: "Copy Script",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                return    <CopyPlus onClick={(e)=>handleAddScript1(tableMeta)}/>
            }
        }
    },

    {
        name: "Trading",
        label: "Trading",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                return <div className="iq-checkbox-mail">
                    <div className="custom-control custom-checkbox" style={{ textAlign: "center" }}>
                        <input type="checkbox" className="custom-control-input" id="mailk" />
                        <label className="custom-control-label" htmlFor="mailk" />
                    </div>
                </div>
            }
        }
    },
    {
        name: "Squre_Off",
        label: "Squre Off",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                return <button data-bs-toggle="modal" data-bs-target="#myModal" style={{ border: "none" }}>
                    Squre Off
                </button>
            }
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
        label: "Target value",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Re-entry Point",
        label: "Re-entry Point",
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
        name: "LowerRange",
        label: "LowerRange",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "HigherRange",
        label: "HigherRange",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "HoldExit",
        label: "HoldExit",
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

];





    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body">


                            <div className="tab-content" id="myTabContent-3">
                                <div
                                    className="tab-pane fade show active"
                                    id="home-justify"
                                    role="tabpanel"
                                    aria-labelledby="home-tab-justify"
                                >

                                    {data == "scalping" && (<>
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Scalping</h4>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='btn btn-primary' onClick={(e)=>handleAddScript1(e)}>Add Script</button>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                {getAllService.loading ? <Loader /> :
                                                    <FullDataTable
                                                        columns={columns}
                                                        data={getAllService.data}
                                                        checkBox={false}
                                                    />
                                                }
                                            </div>

                                        </div>
                                    </>)}


                                    {data == "optionStrategy" && (<>
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Option</h4>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='btn btn-primary' onClick={handleAddScript2}>Add Script</button>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                {getAllService.loading ? <Loader /> :

                                                    <FullDataTable
                                                        columns={columns1}
                                                        data={getAllService.data}
                                                        checkBox={false}
                                                    />
                                                }

                                            </div>

                                        </div></>)}


                                    {data == "pattern" && (<>
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Pattern</h4>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='btn btn-primary' onClick={handleAddScript3}>Add Script</button>
                                            </div>
                                        </div>

                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                {getAllService.loading ? <Loader /> :

                                                    <FullDataTable
                                                        columns={columns2}
                                                        data={getAllService.data}
                                                        checkBox={false}
                                                    />
                                                }

                                            </div>

                                        </div></>)}



                                </div>


                            </div>

                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Coptyscript
