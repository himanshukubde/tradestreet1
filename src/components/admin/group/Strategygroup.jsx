import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Add_Group } from '../../Common API/Admin';

const Strategygroup = () => {
    const [strategyGroupInfo, setStrategyGroupInfo] = useState({
        GroupName: '',
        FundReuirement: '',
        Risk: '',
        TimeOrigin: '',
        ProductType: '',
        Message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setStrategyGroupInfo((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleClick = async () => {
        const data = { strategyGroupInfo };
        await Add_Group(data.strategyGroupInfo)
            .then((response) => {
                if (response.status) {
                    Swal.fire({
                        title: 'Created successfully!',
                        text: 'Group created successfully!',
                        icon: 'success',
                        timer: 1500,
                        timerProgressBar: true
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Group creation error!',
                        icon: 'error',
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
            })
            .catch((err) => {
                console.log('Error in group creation...');
                Swal.fire({
                    title: 'Error',
                    text: 'Group creation error!',
                    icon: 'error',
                    timer: 1500,
                    timerProgressBar: true
                });
            });
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Strategy Group</h4>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">

                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Add Strategy
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
                                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                                            Agree to terms and conditions
                                                        </label>
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
                                </div>



                            </div>
                        </div>


                        <div className="iq-card-body">

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
                                                <td>2</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
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
    );
};

export default Strategygroup;
