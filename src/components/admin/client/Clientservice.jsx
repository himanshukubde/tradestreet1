import React from 'react'

const Clientservice = () => {
    return (
        <div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Client Service</h4>
                            </div>
                        </div>
                        <div class="iq-card-body">

                            <div class="table-responsive">
                                <table id="datatable" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Username</th>
                                            <th>Mobile_No</th>
                                            <th>Email</th>
                                            <th>Broker Name </th>
                                            <th>Create Date</th>
                                            <th>Edit</th>
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
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>2008/11/28</td>
                                            <td>$162,700</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2012/12/02</td>
                                            <td>$372,000</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>2012/08/06</td>
                                            <td>$137,500</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Integration Specialist</td>
                                            <td>Tokyo</td>
                                            <td>55</td>
                                            <td>2010/10/14</td>
                                            <td>$327,900</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Javascript Developer</td>
                                            <td>San Francisco</td>
                                            <td>39</td>
                                            <td>2009/09/15</td>
                                            <td>$205,500</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Software Engineer</td>
                                            <td>Edinburgh</td>
                                            <td>23</td>
                                            <td>2008/12/13</td>
                                            <td>$103,600</td>
                                            <td> <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Edit
                                            </button>
                                                {/* Modal */}
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    Strategy Group
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body"><form>
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationDefault01">Group Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="validationDefault01"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault02">Fund Requirement</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="validationDefault02"
                                                                            required=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefaultUsername">Risk in %</label>
                                                                        <div className="input-group">

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
                                                                        <label htmlFor="validationDefault03">Time Origin</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">select Time Origin</option>
                                                                                <option value={1}>Weekly</option>
                                                                                <option value={2}>Monthly</option>
                                                                                <option value={3}>Half Yearly</option>
                                                                                <option value={3}>Yearly</option>
                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label htmlFor="validationDefault03">Select product type</label>
                                                                        <div className="form-group">
                                                                            <select className="form-select" required="">
                                                                                <option value="">Select Product Type</option>
                                                                                <option value={1}>Intraday </option>
                                                                                <option value={2}>Delivery</option>

                                                                            </select>

                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <label htmlFor="validationTextarea">Message</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="validationTextarea"
                                                                            rows={3}
                                                                            placeholder="Enter here"
                                                                            required=""
                                                                            defaultValue={""}
                                                                        />
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

                                                                    </div>
                                                                </div>

                                                            </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button type="button" className="btn btn-primary">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></td>
                                        </tr>



                                    </tbody>
                                    <tfoot>
                                        {/* <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr> */}
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientservice
