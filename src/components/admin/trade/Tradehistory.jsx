import React from 'react';

const Tradehistory = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Trade History</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">

                            <form className="was-validated ">
                                <div className='d-flex'>
                                    <div className="form-group col-md-6 ms-2">
                                        <label>Select Username</label>
                                        <select className="form-select " required="">

                                            <option value={1}>Subh</option>
                                            <option value={2}>Test</option>
                                            <option value={3}>Three</option>
                                        </select>

                                    </div>
                                    <div className="form-group col-md-6 ms-2">
                                        <label>UserName</label>
                                        <select className="form-select" required="">
                                            <option value={1}>Scalping</option>
                                            <option value={2}>Option</option>
                                            <option value={3}>Pattern</option>

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
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                                <td> <span className="table-remove">
                                                    <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                        Remove
                                                    </button>
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                                <td> <span className="table-remove">
                                                    <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                        Remove
                                                    </button>
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>2012/03/29</td>
                                                <td>$433,060</td>
                                                <td> <span className="table-remove">
                                                    <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                        Remove
                                                    </button>
                                                </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                                <td>New York</td>
                                                <td>61</td>
                                                <td>2012/12/02</td>
                                                <td>$372,000</td>
                                                <td> <span className="table-remove">
                                                    <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                        Remove
                                                    </button>
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Herrod Chandler</td>
                                                <td>Sales Assistant</td>
                                                <td>San Francisco</td>
                                                <td>59</td>
                                                <td>2012/08/06</td>
                                                <td>$137,500</td>
                                                <td> <span className="table-remove">
                                                    <button type="button" className="btn iq-bg-danger btn-rounded btn-sm my-0">
                                                        Remove
                                                    </button>
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rhona Davidson</td>
                                                <td>Integration Specialist</td>
                                                <td>Tokyo</td>
                                                <td>55</td>
                                                <td>2010/10/14</td>
                                                <td>$327,900</td>
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
    );
};

export default Tradehistory;
