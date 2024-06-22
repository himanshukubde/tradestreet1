import React, { useEffect, useState } from 'react'
import {Get_Pattern_Name} from '../../Common API/User'

const LastPattern = () => {


    const [getLastPatternData , setLastPatternData] = useState({
        loading:true,
        data:[]
    })

    const [selectPattern , setSelectPattern] = useState('')

    const GetPatternName = async () => {
        const data = {Pattern :selectPattern}
        await Get_Pattern_Name(data)
            .then((response) => {
                if (response.Status) {
                    setLastPatternData({
                        loading: false,
                        data: response.PatternName
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
                console.log("Error in finding the pattern", err)
            })
    }

    useEffect(()=>{
        GetPatternName()
    },[])

    useEffect(()=>{
        setSelectPattern('Candlestick Patterns')
    },[])

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
                                        <div class="form-group">
                                            <label>Select Pattern</label>
                                            <select class="form-control form-control-lg mt-2" onChange={(e)=>setSelectPattern(e.target.value)}
                                                value={selectPattern}>
                                                <option value="CandleStick Patterns">CandleStick Patterns</option>
                                                <option value="Charting Patterns">Charting Patterns</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="form-group">
                                            <label>Select Specific Pattern</label>
                                            <select class="form-control form-control-lg mt-2">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table
                                        id="datatable"
                                        className="table table-striped table-bordered"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
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
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                            </tr>
                                            
                                            <tr>
                                                <td>Michael Bruce</td>
                                                <td>Javascript Developer</td>
                                                <td>Singapore</td>
                                                <td>29</td>
                                                <td>2011/06/27</td>
                                                <td>$183,000</td>
                                            </tr>
                                            <tr>
                                                <td>Donna Snider</td>
                                                <td>Customer Support</td>
                                                <td>New York</td>
                                                <td>27</td>
                                                <td>2011/01/25</td>
                                                <td>$112,000</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </tfoot>
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

export default LastPattern
