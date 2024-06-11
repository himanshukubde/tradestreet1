import React from 'react'

const Userscript = () => {
    return (
        <div>
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Add Script Parameter</h4>
                    </div>
                </div>
                <div className="iq-card-body">

                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault01">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault01"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault02"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefaultUsername">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend1">
                                        @
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefaultUsername"
                                        aria-describedby="inputGroupPrepend1"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault03">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault03"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault04">State</label>
                                <select className="form-control" id="validationDefault04" required="">
                                    <option selected="" disabled="" value="">
                                        Choose...
                                    </option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault05">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefault05"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    
                                    id="invalidCheck2"
                                    required=""
                                />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">
                                Submit form
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Userscript
