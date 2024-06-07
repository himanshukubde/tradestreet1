import React, { useState, useEffect } from 'react'
import { GetAllGroupService, GetGroupNames } from '../../Common API/Admin';



const Addscript = () => {

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
                        data: response.data
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
                                            <option value={"Option"}>Option</option>
                                            <option value={"Pattern"}>Pattern</option>
                                            <option value={"MultipleLegStretegy"}>MultipleLegStretegy</option>
                                            <option value={"PatternOption"}>PatternOption</option>
                                        </select>
                                    </div>
                                </div>
                            </form>

                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                                <th>Delete Script</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <td> <span className="table-remove">
                                                    <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                        Remove
                                                    </button>
                                                </span>
                                                </td>
                                            </tr>

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
