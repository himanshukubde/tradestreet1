import React from 'react'

const Tradehistory = () => {
    return (
        <div>
            <div className="col-lg-12">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Trade History</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="new-user-info">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fname">Form Date:</label>
                                        <input
                                            type="date"
                                            className="form-control my-2"
                                            id="fname"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lname">To Date:</label>
                                        <input
                                            type="date"
                                            className="form-control my-2"
                                            id="lname"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom04">Symbol</label>
                                        <select className="form-control" id="validationCustom04" required="">
                                            <option selected="" disabled="" value="">
                                                All
                                            </option>
                                            <option>...</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a valid state.</div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom04">Index Symbol</label>
                                        <select className="form-control" id="validationCustom04" required="">
                                            <option selected="" disabled="" value="">
                                                all
                                            </option>
                                            <option>BankNifty</option>
                                            <option>Nifty</option>
                                            <option>FinNifty</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a valid state.</div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom04">Strategy</label>
                                        <select className="form-control" id="validationCustom04" required="">
                                            <option selected="" disabled="" value="">
                                                all
                                            </option>
                                            <option>...</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a valid state.</div>
                                    </div>







                                </div>




                                <button type="submit" className="btn btn-primary">
                                    Reset
                                </button>
                            </form>
                            <div className="iq-card-body">

                                <div className="table-responsive">
                                    <table id="datatable" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr.No</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
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
                                                <td>1</td>
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
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
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

export default Tradehistory


