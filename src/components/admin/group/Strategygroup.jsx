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
                        </div>
                        <div className="iq-card-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="GroupName">Group Name:</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="GroupName"
                                        placeholder="Enter Group Name"
                                        onChange={handleInputChange}
                                        value={strategyGroupInfo.GroupName}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="FundReuirement">Fund Requirement</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="FundReuirement"
                                        placeholder="Enter Fund"
                                        value={strategyGroupInfo.FundReuirement}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Risk">Risk in %</label>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        id="Risk"
                                        placeholder="Enter Risk in %"
                                        value={strategyGroupInfo.Risk}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="TimeOrigin">Time Origin</label>
                                    <select
                                        className="form-select my-2"
                                        id="TimeOrigin"
                                        value={strategyGroupInfo.TimeOrigin}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Time Origin</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Half Yearly">Half Yearly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="ProductType">Select product type</label>
                                    <select
                                        className="form-select my-2"
                                        id="ProductType"
                                        value={strategyGroupInfo.ProductType}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Product Type</option>
                                        <option value="Intraday">Intraday</option>
                                        <option value="Delivery">Delivery</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Message">Message</label>
                                <textarea
                                    className="form-control my-2"
                                    id="Message"
                                    rows={5}
                                    value={strategyGroupInfo.Message}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>
                                Submit
                            </button>
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
    );
};

export default Strategygroup;
