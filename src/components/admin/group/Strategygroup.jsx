import React from 'react'

const Strategygroup = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Strategy Group</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">




                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname">Group Name:</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="fname"
                                        placeholder="Enter Group Name"
                                    />
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleFormControlSelect1">Fund Requirement</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="fname"
                                        placeholder="Enter Fund"
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleFormControlSelect1">Risk in %</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="fname"
                                        placeholder="Enter Risk in %"
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleFormControlSelect1">Time Origin</label>
                                    <select className="form-select my-2" id="exampleFormControlSelect1">

                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Half Yearly</option>
                                        <option>Yearly</option>

                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleFormControlSelect1">Select product type</label>
                                    <select className="form-select my-2" id="exampleFormControlSelect1">

                                        <option>Intraday</option>
                                        <option>Delivery</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea
                                    className="form-control my-2"
                                    id="exampleFormControlTextarea1"
                                    rows={5}
                                    defaultValue={""}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Group Name</th>
                                                <th>Fund Requirenment</th>
                                                <th>Risk in %</th>
                                                <th>Time</th>
                                                <th>Product Type</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>subh</td>
                                                <td>10,000</td>
                                                <td>50</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                                <td>$320,800</td>
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

export default Strategygroup
