import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const Adduser = () => {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        mobno: '',
        pass: '',
        rpass: '',
        broker: 'ICICI',
        serviceCount: '1',
        selectDay: 'Two Days',
        selectGroup: 'Test',
        startDate: '',
        endDate: '',
        enableTwoFactor: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fname) newErrors.fname = 'User Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.mobno) newErrors.mobno = 'Mobile Number is required';
        if (!formData.pass) newErrors.pass = 'Password is required';
        if (!formData.rpass) newErrors.rpass = 'Confirm Password is required';
        if (formData.pass && formData.rpass && formData.pass !== formData.rpass) newErrors.rpass = 'Passwords do not match';
        if (!formData.startDate) newErrors.startDate = 'Start Date is required';
        if (!formData.endDate) newErrors.endDate = 'End Date is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://193.239.237.147:8000/AdminSignup', {
                SignuserName: formData.fname,
                Signpassword: formData.pass,
                ConfirmPassword: formData.rpass,
                SignEmail: formData.email,
                mobile_no: formData.mobno,
                Day: formData.selectDay,
                ser: formData.serviceCount,
                SSDate: formData.startDate,
                SEDate: formData.endDate,
                BrokerName: formData.broker,
                Group: [formData.selectGroup]
            });

            console.log(response.data);

            if (response.data.Status) {
                Swal.fire({
                    title: "created successfully!",
                    text: "Account created successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.data.massage,
                });

            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create account.');
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Create Account</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="new-user-info">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="fname">User Name:</label>
                                                <input
                                                    type="text"
                                                    className={`form-control my-2 ${errors.fname ? 'is-invalid' : ''}`}
                                                    id="fname"
                                                    value={formData.fname}
                                                    onChange={handleChange}
                                                    placeholder="User Name"
                                                />
                                                {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    type="email"
                                                    className={`form-control my-2 ${errors.email ? 'is-invalid' : ''}`}
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="mobno">Mobile Number:</label>
                                                <input
                                                    type="number"
                                                    className={`form-control my-2 ${errors.mobno ? 'is-invalid' : ''}`}
                                                    id="mobno"
                                                    value={formData.mobno}
                                                    onChange={handleChange}
                                                    placeholder="Mobile Number"
                                                />
                                                {errors.mobno && <div className="invalid-feedback">{errors.mobno}</div>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="pass">Password:</label>
                                                <input
                                                    type="password"
                                                    className={`form-control my-2 ${errors.pass ? 'is-invalid' : ''}`}
                                                    id="pass"
                                                    value={formData.pass}
                                                    onChange={handleChange}
                                                    placeholder="Password"
                                                />
                                                {errors.pass && <div className="invalid-feedback">{errors.pass}</div>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="rpass">Confirm Password:</label>
                                                <input
                                                    type="password"
                                                    className={`form-control my-2 ${errors.rpass ? 'is-invalid' : ''}`}
                                                    id="rpass"
                                                    value={formData.rpass}
                                                    onChange={handleChange}
                                                    placeholder="Repeat Password"
                                                />
                                                {errors.rpass && <div className="invalid-feedback">{errors.rpass}</div>}
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="broker">Select Broker</label>
                                                <select
                                                    className="form-select my-2"
                                                    id="broker"
                                                    value={formData.broker}
                                                    onChange={handleChange}
                                                >
                                                    <option>ICICI</option>
                                                    <option>Angel</option>
                                                    <option>Kotak</option>
                                                    <option>Dhan</option>
                                                    <option>Indira Securities</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="serviceCount">Service Count:</label>
                                                <select
                                                    className="form-select my-2"
                                                    id="serviceCount"
                                                    value={formData.serviceCount}
                                                    onChange={handleChange}
                                                >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="selectDay">Select Day:</label>
                                                <select
                                                    className="form-select my-2"
                                                    id="selectDay"
                                                    value={formData.selectDay}
                                                    onChange={handleChange}
                                                >
                                                    <option>Two Days</option>
                                                    <option>One Month</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="selectGroup">Select Group</label>
                                                <select
                                                    className="form-select my-2"
                                                    id="selectGroup"
                                                    value={formData.selectGroup}
                                                    onChange={handleChange}
                                                >
                                                    <option>Test</option>
                                                    <option>Test 1</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="startDate">Start Date:</label>
                                                <input
                                                    type="date"
                                                    className={`form-control my-2 ${errors.startDate ? 'is-invalid' : ''}`}
                                                    id="startDate"
                                                    value={formData.startDate}
                                                    onChange={handleChange}
                                                    placeholder="Start Date"
                                                />
                                                {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="endDate">End date</label>
                                                <input
                                                    type="date"
                                                    className={`form-control my-2 ${errors.endDate ? 'is-invalid' : ''}`}
                                                    id="endDate"
                                                    value={formData.endDate}
                                                    onChange={handleChange}
                                                    placeholder="End Date"
                                                />
                                                {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                                            </div>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-4">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="enableTwoFactor"
                                                checked={formData.enableTwoFactor}
                                                onChange={handleChange}
                                            />
                                            <label className="custom-control-label" htmlFor="enableTwoFactor">
                                                Enable Two-Factor-Authentication
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Sign UP
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adduser;
