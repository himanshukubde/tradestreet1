import React from 'react'

const Brokercredential = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Broker Credential</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">


                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Selectuser" className='mb-2'>Select Username</label>
                                        <select className="form-select mb-2 col-md-6" required="">

                                            <option value={1}>Scalping</option>
                                            <option value={2}>Pattern</option>

                                        </select>
                                    </div>


                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">Username</label>
                                        <input type="text" className="form-control my-2" id="email1" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="api">API Key</label>
                                        <input type="text" className="form-control my-2" id="pwd" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" className="form-control my-2" id="pwd" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="ath">Authorization Key</label>
                                        <input type="text" className="form-control my-2" id="pwd" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary me-2 mt-2">
                                    Submit
                                </button>
                                <button type="submit" className="btn iq-bg-danger mt-2">
                                    Cancel
                                </button>

                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Brokercredential
