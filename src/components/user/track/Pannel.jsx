import React from 'react'

const Pannel = () => {
    return (
        <div>
            <div className="col-sm-12 col-lg-12">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Pannel track</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">

                        <form>
                            <div className='row'>


                                <div className="form-group col-md-4">
                                    <label htmlFor="email">Form Date</label>
                                    <input type="datetime-local" className="form-control my-2" id="email1" />
                                </div>

                                <div className="form-group col-md-4">
                                    <label htmlFor="email">To Date</label>
                                    <input type="datetime-local" className="form-control my-2" id="email1" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="email">Activity</label>
                                    <select className="form-select my-2" required="">
                                        <option value="">All Activity</option>
                                        <option value={1}>Login</option>
                                        <option value={2}>BrokerUpdate</option>
                                        <option value={3}>AddScript</option>
                                    </select>

                                </div>




                            </div>


                        </form>

                        <div className="table-responsive">
                            <table id="datatable" className="table table-striped table-bordered">
                                <thead>
                                    <tr>

                                        <th>Sr.No</th>
                                        <th>Activity</th>
                                        <th>Message</th>
                                        <th>Time</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="row-1">
                                        <td>1</td>


                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>System Architect</td>

                                    </tr>

                                </tbody>

                            </table>


                        </div >
                    </div>


                </div >

            </div >
        </div>
    )
}

export default Pannel

