import React, { useState, useEffect } from 'react'
import { GetGroupNames, Get_All_Service } from '../../Common API/Admin'
import { Eye } from 'lucide-react';

const Userlog = () => {

    const [getGroupData, setGroupData] = useState({
        loading: true,
        data: []
    })
    const [getServiceDetails, setServiceDetails] = useState({
        loading: true,
        data: []
    })
    const [selectStrategyType, setStrategyType] = useState('')




    const getAllServiceGiven = async () => {
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
    return (
        <div>
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
                                            <option value={"MultipleLegStretegy"}>MultipleLegStretegy</option>
                                            <option value={"PatternOption"}>PatternOption</option>

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Total Service</th>
                                                <th>UserName</th>
                                                <th>Used Service</th>
                                                <th>NFO</th>
                                                <th>NSE</th>
                                                <th>MCX</th>
                                                <th>CDS</th>
                                                <th>Multi Directional</th>
                                                <th>One Directional</th>
                                                <th>Fixed Price</th>
                                                <th>View</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getServiceDetails.data && getServiceDetails.data.map((item, index) => {
                                                    return <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item['Total Service']}</td>
                                                        <td>{item.Username}</td>
                                                        <td>{item.UsedService}</td>
                                                        <td>{item.NFO}</td>
                                                        <td>{item.NSE}</td>
                                                        <td>{item.MCX}</td>
                                                        <td>{item.CDS}</td>
                                                        <td>{item.SingleScript}</td>
                                                        <td>{item.OneDirection}</td>
                                                        <td>{item['Fixed Price']}</td>
                                                        <td> {<Eye />}</td>
                                                    </tr>
                                                })
                                            }
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

export default Userlog
