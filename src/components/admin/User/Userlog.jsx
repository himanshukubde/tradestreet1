import React, { useState, useEffect } from 'react'
import { GetGroupNames, Get_All_Service, get_User_Data } from '../../Common API/Admin'
import { Eye } from 'lucide-react';
import Loader from '../../../ExtraComponent/Loader'
import Modal from '../../../ExtraComponent/Modal'

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


    const handleModal = async (e, item) => {
        const data = { Data: selectStrategyType, Username: item.Username }
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
                                            <option value={"PatternOption"}>Pattern Option</option>
                                            <option value={"Marketwise Option Strategy"}>Marketwise Option Strategy</option>

                                        </select>
                                    </div>
                                </div>
                            </div>


                            {getServiceDetails.loading ? <Loader /> :
                                (
                                    selectStrategyType == "Scalping" ?
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
                                                                    <td> {<Eye onClick={(e) => { setShowModal(!showModal); handleModal(e, item) }} />}</td>
                                                                </tr>
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> :
                                        selectStrategyType == "Option Strategy" ?
                                            <div className="iq-card-body">
                                                <div className="table-responsive">
                                                    <table id="datatable" className="table table-striped table-bordered">
                                                        <thead>

                                                            <tr>
                                                                <th>S.No</th>
                                                                <th>Total Service</th>
                                                                <th>UserName</th>
                                                                <th>Used Service</th>
                                                                <th>Long Strangle</th>
                                                                <th>Sort Strangle</th>
                                                                <th>Long Straddle</th>
                                                                <th>Sort Straddle</th>
                                                                <th>Long Iron Butterfly</th>
                                                                <th>Sort Iron Butterfly</th>
                                                                <th>Long Iron Condor</th>
                                                                <th>Sort Iron Condor</th>
                                                                <th>Bear Call Spread</th>
                                                                <th>Bear Put Spread</th>
                                                                <th>Bull Call Spread</th>
                                                                <th>Bull Put Spread</th>
                                                                <th>Bull Call Ladder</th>
                                                                <th>Bull Put Ladder</th>
                                                                <th>Covered Call</th>
                                                                <th>Covered Put</th>
                                                                <th>Long Collar</th>
                                                                <th>Short Collar</th>
                                                                <th>Ratio Call Spread</th>
                                                                <th>Ratio Put Spread</th>
                                                                <th>Long Shifting</th>
                                                                <th>Short Shifting</th>
                                                                <th>Long Four LegStrategy</th>
                                                                <th>Short Four LegStrategy</th>
                                                                <th>View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody >
                                                            {
                                                                getServiceDetails.data && getServiceDetails.data.map((item, index) => {
                                                                    return <tr key={index}>

                                                                        <td>{index + 1}</td>
                                                                        <td>{item['Total Service']}</td>
                                                                        <td>{item.Username}</td>
                                                                        <td>{item.UsedService}</td>
                                                                        <td>{item.LongStrangle}</td>
                                                                        <td>{item.ShortStrangle}</td>
                                                                        <td>{item.LongStraddle}</td>
                                                                        <td>{item.ShortStraddle}</td>
                                                                        <td>{item.LongIronButterfly}</td>
                                                                        <td>{item.ShortIronButterfly}</td>
                                                                        <td>{item.LongIronCondor}</td>
                                                                        <td>{item.ShortIronCondor}</td>
                                                                        <td>{item.BearCallSpread}</td>
                                                                        <td>{item.BearPutSpread}</td>
                                                                        <td>{item.BullCallSpread}</td>
                                                                        <td>{item.BullPutSpread}</td>
                                                                        <td>{item.BullCallLadder}</td>
                                                                        <td>{item.BullPutLadder}</td>
                                                                        <td>{item.CoveredCall}</td>
                                                                        <td>{item.CoveredPut}</td>
                                                                        <td>{item.LongCollar}</td>
                                                                        <td>{item.ShortCollar}</td>
                                                                        <td>{item.RatioCallSpread}</td>
                                                                        <td>{item.RatioPutSpread}</td>
                                                                        <td>{item.LongShifting}</td>
                                                                        <td>{item.ShortShifting}</td>
                                                                        <td>{item.LongFourLegStrategy}</td>
                                                                        <td>{item.ShortFourLegStrategy}</td>
                                                                        <td> {<Eye onClick={handleModal} />}</td>
                                                                    </tr>
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div> :
                                            selectStrategyType == "Pattern" ?
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
                                                                    <th>Candlestickpattern</th>
                                                                    <th>ChartPattern</th>

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
                                                                            <td>{item.Candlestickpattern}</td>
                                                                            <td>{item.ChartPattern}</td>

                                                                            <td> {<Eye onClick={handleModal} />}</td>

                                                                        </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div> :
                                                selectStrategyType == "Marketwise Option Strategy" ?
                                                    <div className="iq-card-body">
                                                        <div className="table-responsive">
                                                            <table id="datatable" className="table table-striped table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th>S.No</th>
                                                                        <th>Total Service</th>
                                                                        <th>UserName</th>
                                                                        <th>Used Service</th>
                                                                        <th>Marketwise Option Strategy</th>
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
                                                                                <td>{item['Marketwise Option Strategy']}</td>
                                                                                <td> {<Eye onClick={handleModal} />}</td>

                                                                            </tr>
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div> :
                                                    selectStrategyType == "PatternOption" ?
                                                        <div className="iq-card-body">
                                                            <div className="table-responsive">
                                                                <table id="datatable" className="table table-striped table-bordered">
                                                                    <thead>

                                                                        <tr>
                                                                            <th>S.No</th>
                                                                            <th>Total Service</th>
                                                                            <th>UserName</th>
                                                                            <th>Used Service</th>
                                                                            <th>Long Strangle</th>
                                                                            <th>Sort Strangle</th>
                                                                            <th>Long Straddle</th>
                                                                            <th>Sort Straddle</th>
                                                                            <th>Long Iron Butterfly</th>
                                                                            <th>Sort Iron Butterfly</th>
                                                                            <th>Long Iron Condor</th>
                                                                            <th>Sort Iron Condor</th>
                                                                            <th>Bear Call Spread</th>
                                                                            <th>Bear Put Spread</th>
                                                                            <th>Bull Call Spread</th>
                                                                            <th>Bull Put Spread</th>
                                                                            <th>Bull Call Ladder</th>
                                                                            <th>Bull Put Ladder</th>
                                                                            <th>Covered Call</th>
                                                                            <th>Covered Put</th>
                                                                            <th>Long Collar</th>
                                                                            <th>Short Collar</th>
                                                                            <th>Ratio Call Spread</th>
                                                                            <th>Ratio Put Spread</th>
                                                                            <th>Long Shifting</th>
                                                                            <th>Short Shifting</th>
                                                                            <th>Long Four LegStrategy</th>
                                                                            <th>Short Four LegStrategy</th>
                                                                            <th>View</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody >



                                                                        {
                                                                            getServiceDetails.data && getServiceDetails.data.map((item, index) => {
                                                                                return <tr key={index}>

                                                                                    <td>{index + 1}</td>
                                                                                    <td>{item['Total Service']}</td>
                                                                                    <td>{item.Username}</td>
                                                                                    <td>{item.UsedService}</td>
                                                                                    <td>{item.LongStrangle}</td>
                                                                                    <td>{item.ShortStrangle}</td>
                                                                                    <td>{item.LongStraddle}</td>
                                                                                    <td>{item.ShortStraddle}</td>
                                                                                    <td>{item.LongIronButterfly}</td>
                                                                                    <td>{item.ShortIronButterfly}</td>
                                                                                    <td>{item.LongIronCondor}</td>
                                                                                    <td>{item.ShortIronCondor}</td>
                                                                                    <td>{item.BearCallSpread}</td>
                                                                                    <td>{item.BearPutSpread}</td>
                                                                                    <td>{item.BullCallSpread}</td>
                                                                                    <td>{item.BullPutSpread}</td>
                                                                                    <td>{item.BullCallLadder}</td>
                                                                                    <td>{item.BullPutLadder}</td>
                                                                                    <td>{item.CoveredCall}</td>
                                                                                    <td>{item.CoveredPut}</td>
                                                                                    <td>{item.LongCollar}</td>
                                                                                    <td>{item.ShortCollar}</td>
                                                                                    <td>{item.RatioCallSpread}</td>
                                                                                    <td>{item.RatioPutSpread}</td>
                                                                                    <td>{item.LongShifting}</td>
                                                                                    <td>{item.ShortShifting}</td>
                                                                                    <td>{item.LongFourLegStrategy}</td>
                                                                                    <td>{item.ShortFourLegStrategy}</td>
                                                                                    <td> {<Eye onClick={handleModal} />}</td>

                                                                                </tr>
                                                                            })
                                                                        }
                                                                    </tbody>
                                                                </table>
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
                                <div className="modal-header bg-primary text-white">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="iq-card-body">
                                        <div className="table-responsive">
                                            <table id="datatable" className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>ScalpType</th>
                                                        <th>Exchange</th>
                                                        <th>Symbol</th>
                                                        <th>Token</th>
                                                        <th>TType</th>
                                                        <th>Quantity</th>
                                                        <th>Trading</th>
                                                        <th>ExpiryDate</th>
                                                        <th>TradeExecution</th>
                                                        <th>ExitDay</th>
                                                        <th>EntryTime</th>
                                                        <th>ExitTime</th>
                                                        <th>Expirytype</th>
                                                        <th>SSDate</th>
                                                        <th>SEDate</th>
                                                        <th>Lotsize</th>
                                                        <th>TaskStatus</th>
                                                        <th>TaskTime</th>
                                                        <th>TradeCount</th>
                                                         

                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                    {
                                                        getUserData.data && getUserData.data.map((item, index) => {
                                                            return <tr>
                                                                <td>{index + 1}</td>
                                                                <td>{item.ScalpType}</td>
                                                                <td>{item.Exchange}</td>
                                                                <td>{item.Symbol}</td>
                                                                <td>{item.Token}</td>
                                                                <td>{item.TType}</td>
                                                                <td>{item.Quantity}</td>
                                                                <td>{item.Trading}</td>
                                                                <td>{item.ExpiryDate}</td>
                                                                <td>{item.TradeExecution}</td>
                                                                <td>{item.ExitDay}</td>
                                                                <td>{item.EntryTime}</td>
                                                                <td>{item.ExitTime}</td>
                                                                <td>{item.Expirytype}</td>
                                                                <td>{item.SSDate}</td>
                                                                <td>{item.SEDate}</td>
                                                                <td>{item.Lotsize}</td>
                                                                <td>{item.TaskStatus}</td>
                                                                <td>{item.TaskTime}</td>
                                                                <td>{item.TradeCount}</td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>


                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
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
