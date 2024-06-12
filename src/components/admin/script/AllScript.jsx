import React, { useState, useEffect } from 'react'
import { GetAllGroupService, GetGroupNames } from '../../Common API/Admin';
import { useNavigate } from 'react-router-dom';

const Addscript = () => {
    const navigate = useNavigate()

    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })
    const [refresh, setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('')
    const [selectStrategyType, setStrategyType] = useState('')
    const [getAllService, setAllservice] = useState({
        loading: true,
        data: []
    })


 
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


    const getAllgroupService = async () => {
        const data = { Data: selectStrategyType, Username: selectGroup }
        await GetAllGroupService(data)
            .then((response) => {
                if (response.Status) {
                    setAllservice({
                        loading: false,
                        data: response.Data
                    })
                    setRefresh(!refresh)
                }
                else {
                    setAllservice({
                        loading: false,
                        data: []
                    })
                    setRefresh(!refresh)

                }
            })
            .catch((err) => {
                console.log("Error in finding group service")
            })
    }

    useEffect(() => {
        getAllgroupService()
    }, [selectStrategyType, selectGroup])


    const handleAddScript = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: selectStrategyType };
        navigate( selectStrategyType == "Scalping" ? '/admin/addscript/scalping' : 
            selectStrategyType == "Option Strategy" ? '/admin/addscript/option' : '/admin/addscript/pattern' , { state: { data } });

            
    }

    useEffect(() => {
        if(getGroupData.data && getGroupData.data.length > 0) {
            setSelectGroup(getGroupData.data[0].GroupName);
        }
    }, [getGroupData]);

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
                                <h4 className="card-title">All Scripts</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form className="was-validated ">
                                <div className='d-flex'>
                                    <div className="form-group col-md-6 ms-2">
                                        <label>Group Name</label>
                                        <select className="form-select "
                                            required=""
                                            onChange={(e) => setSelectGroup(e.target.value)}
                                            value={selectGroup}
                                        >
                                            {getGroupData.data && getGroupData.data.map((item) => {
                                                return <>
                                                    <option value={item.GroupName}>{item.GroupName}</option>
                                                </>
                                            })}
 

                                        </select>
                                    </div>
                                    <div className="form-group col-md-6 ms-2">
                                        <label>Strategy Type</label>
                                        <select className="form-select" required=""
                                            onChange={(e) => setStrategyType(e.target.value)}
                                            value={selectStrategyType}>
                                            <option value={"Scalping"}>Scalping</option>
                                            <option value={"Option"}>Option Strategy</option>
                                            <option value={"Pattern"}>Pattern Script</option>
                                            <option value={"MultipleLegStretegy"}>MultipleLegStretegy</option>
                                            <option value={"PatternOption"}>PatternOption</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary' onClick={handleAddScript}>Add Script</button>
                            </div>
                            <div className="iq-card-body">
                                <div className="table-responsive">

                                    <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr className='text-center'>
                                                <th>SR.N</th>
                                                <th>Username</th>
                                                <th>Exchange</th>
                                                <th>Symbol</th>
                                                <th>Token</th>
                                                <th>TType</th>
                                                <th>Booking Point</th>
                                                <th>RentryPoint</th>
                                                <th>Quantity</th>
                                                <th>ExpiryDate</th>
                                                <th>TradeExecution</th>
                                                <th>LowerRange</th>
                                                <th>HigherRange</th>
                                                <th>HoldExit</th>
                                                <th>Strategy Type</th>
                                                <th>EntryPrice</th>
                                                <th>EntryRange</th>
                                                <th>GroupN</th>
                                                <th>ExitRule</th>
                                                <th>Loss</th>
                                                <th>Profit</th>
                                                <th>FixedSM</th>
                                                <th>ExitTime</th>
                                                <th>ExitDay</th>
                                                <th>EntryTime</th>
                                                <th>MTrade</th>
                                                <th>Expirytype</th>
                                                <th>TaskStatus</th>
                                                <th>TaskTime</th>
                                                <th>Instrument Type</th>
                                                <th>Lotsize</th>
                                                <th>Delete</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getAllService.data && getAllService.data.map((item, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.Username}</td>
                                                    <td>{item.Exchange}</td>
                                                    <td>{item.Symbol}</td>
                                                    <td>{item.Token}</td>
                                                    <td>{item.TType}</td>
                                                    <td>{item['Booking Point']}</td>
                                                    <td>{item['Re-entry Point']}</td>
                                                    <td>{item.Quantity}</td>
                                                    <td>{item.ExpiryDate}</td>
                                                    <td>{item.TradeExecution}</td>
                                                    <td>{item.LowerRange}</td>
                                                    <td>{item.HigherRange}</td>
                                                    <td>{item.HoldExit}</td>
                                                    <td>{item.ScalpType}</td>
                                                    <td>{item.EntryPrice}</td>
                                                    <td>{item.EntryRange}</td>
                                                    <td>{item.GroupN}</td>
                                                    <td>{item.ExitRule}</td>
                                                    <td>{item.Loss}</td>
                                                    <td>{item.Profit}</td>
                                                    <td>{item.FixedSM}</td>
                                                    <td>{item.ExitTime}</td>
                                                    <td>{item.ExitDay}</td>
                                                    <td>{item.EntryTime}</td>
                                                    <td>{item.MTrade}</td>
                                                    <td>{item.Expirytype}</td>
                                                    <td>{item.TaskStatus}</td>
                                                    <td>{item.TaskTime}</td>
                                                    <td>{item['Instrument Type']}</td>
                                                    <td>{item.Lotsize}</td>


                                                    <td> <span className="table-remove">
                                                        <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                            Remove
                                                        </button>
                                                    </span>
                                                    </td>
                                                </tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addscript
