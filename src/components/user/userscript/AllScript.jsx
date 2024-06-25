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
        navigate(selectStrategyType == "Scalping" ? '/user/addscript/scalping' :
            selectStrategyType == "Option Strategy" ? '/user/addscript/option' : '/user/addscript/pattern', { state: { data } });
    }


    useEffect(() => {
        if (getGroupData.data && getGroupData.data.length > 0) {
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
                            <div className="iq-card-body">

                                <ul
                                    className="nav nav-tabs justify-content-center"
                                    id="myTab-2"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            id="home-tab-justify"
                                            data-bs-toggle="tab"
                                            href="#home-justify"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Copy Script
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            id="profile-tab-justify"
                                            data-bs-toggle="tab"
                                            href="#profile-justify"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Group Script
                                        </a>
                                    </li>

                                </ul>
                                <div className="tab-content" id="myTabContent-3">
                                    <div
                                        className="tab-pane fade"
                                        id="home-justify"
                                        role="tabpanel"
                                        aria-labelledby="home-tab-justify"
                                    >

                                        <div className="iq-card-body">

                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault02">Scalping type</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">Open this select menu</option>
                                                                <option value={1}>Multi Directional</option>
                                                                <option value={2}>Fixed Price</option>
                                                                <option value={3}>One Directional</option>
                                                            </select>
                                                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault02">Exchange </label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">NFO</option>
                                                                <option value={1}>NSE</option>
                                                                <option value={2}>MCX</option>
                                                                <option value={3}>CDX</option>
                                                            </select>
                                                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefaultUsername">Instrument</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">FUTDIX</option>
                                                                <option value={1}>FUTSTK</option>
                                                                <option value={2}>OPTIDX</option>
                                                                <option value={3}>OPTSTK</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefaultUsername">Symbol Type</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">BANKNIFTY</option>
                                                                <option value={1}>FINNIFTY</option>
                                                                <option value={2}>MIDCPNIFTY</option>
                                                                <option value={3}>NIFTY</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefaultUsername">Expiry Date</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">BANKNIFTY</option>
                                                                <option value={1}>FINNIFTY</option>
                                                                <option value={2}>MIDCPNIFTY</option>
                                                                <option value={3}>NIFTY</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefaultUsername">Transaction Type</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">BANKNIFTY</option>
                                                                <option value={1}>FINNIFTY</option>
                                                                <option value={2}>MIDCPNIFTY</option>
                                                                <option value={3}>NIFTY</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault05">Lot</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="validationDefault05"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefaultUsername">Transaction Type</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">Point</option>
                                                                <option value={1}>Percentage</option>

                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="invalidCheck2"
                                                                required=""
                                                            />
                                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                                Set First Trade Range
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault05">Target</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="validationDefault05"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault05">Stoploss</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="validationDefault05"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="invalidCheck2"
                                                                required=""
                                                            />
                                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                                Set Range
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationDefaultUsername">Exit Day</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">Intraday</option>
                                                                <option value={1}>Delivery</option>

                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationDefault05">Entry Time</label>
                                                        <input
                                                            type="datetime-local"
                                                            className="form-control"
                                                            id="validationDefault05"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationDefault05">Exit Time</label>
                                                        <input
                                                            type="datetime-local"
                                                            className="form-control"
                                                            id="validationDefault05"
                                                            required=""
                                                        />
                                                    </div>

                                                </div>

                                                {/* <div className="form-group">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="invalidCheck2"
                                                            required=""
                                                        />
                                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                                            Agree to terms and conditions
                                                        </label>
                                                    </div>
                                                </div> */}
                                                <div className="form-group justify-content-between">
                                                    <button className="btn btn-primary" type="submit">
                                                        Submit
                                                    </button>
                                                    <button className="btn btn-primary ms-2" type="submit">
                                                        Check P&L
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile-justify"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab-justify"
                                    >
                                        <div className="iq-card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault02">Select Group</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">No Group</option>

                                                            </select>
                                                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="validationDefault02">Select Strategy type</label>
                                                        <div className="form-group">

                                                            <select className="form-select" required="">
                                                                <option value="">Open this select menu</option>
                                                                <option value={1}>Multi Directional</option>
                                                                <option value={2}>Fixed Price</option>
                                                                <option value={3}>One Directional</option>
                                                            </select>
                                                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                                                        </div>

                                                    </div>



                                                </div>

                                                {/* <div className="form-group">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="invalidCheck2"
                                                            required=""
                                                        />
                                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                                            Agree to terms and conditions
                                                        </label>
                                                    </div>
                                                </div> */}

                                            </form>
                                            <div className="table-responsive">
                                                <table id="datatable" className="table table-striped table-bordered">
                                                    <thead>
                                                        <tr>

                                                            <th>Sr.No</th>
                                                            <th>Trading</th>
                                                            <th>Square off</th>
                                                            <th>Update Script</th>
                                                            <th>Scalp Type</th>
                                                            <th>Exchange</th>
                                                            <th>Symbol</th>
                                                            <th>Token</th>
                                                            <th>Trade Type</th>
                                                            <th>Target Value</th>
                                                            <th>Sl Value</th>
                                                            <th>Quantity</th>
                                                            <th>Trading</th>
                                                            <th>Expiry date</th>
                                                            <th>Trade Execution</th>
                                                            <th>Exit Day</th>
                                                            <th>Entry Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="row-1">
                                                            <td>1</td>
                                                            <td><div className="iq-checkbox-mail">
                                                                <div className="custom-control custom-checkbox" style={{ textAlign: "center" }}>
                                                                    <input type="checkbox" className="custom-control-input" id="mailk" />
                                                                    <label className="custom-control-label" htmlFor="mailk" />
                                                                </div>
                                                            </div>



                                                            </td>
                                                            <td style={{ textAlign: "center" }}><a href="#">
                                                                <i className="ri-delete-bin-line" style={{ "fontSize": "22px" }} />
                                                            </a>

                                                            </td>




                                                            <td style={{ textAlign: "center" }}>
                                                                <button data-bs-toggle="modal" data-bs-target="#myModal" style={{ border: "none" }}>
                                                                    <i class="las la-edit" style={{ "fontSize": "23px" }}></i>
                                                                </button>
                                                               
                                                            </td>

                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                            <td>$320,800</td>
                                                        </tr>

                                                    </tbody>

                                                </table>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>


                            {/* <form className="was-validated ">
                                <div className='d-flex'>
                                   
                                    <div className="form-group col-md-6 ms-2">
                                        <label>Strategy Type</label>
                                        <select className="form-select" required=""
                                            onChange={(e) => setStrategyType(e.target.value)}
                                            value={selectStrategyType}>
                                            <option value={"Scalping"}>Scalping</option>
                                            <option value={"Option Strategy"}>Option Strategy</option>
                                            <option value={"Pattern Script"}>Pattern Script</option>
                                            <option value={"MultipleLegStretegy"}>MultipleLegStretegy</option>
                                            <option value={"PatternOption"}>PatternOption</option>
                                        </select>
                                    </div>
                                </div>
                            </form> */}
                            {/* <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary' onClick={handleAddScript}>Add Script</button>
                            </div> */}
                            {/* <div className="iq-card-body">
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
                                                return <tr key={index}>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addscript
