import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { CreateAccount, Get_Broker_Name , GetGroupNames } from '../../Common API/Admin'
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";


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
    const [getBroker, setBroker] = useState({
        loading: true,
        data: []
    })
    const [getGroupData, setGroupData] = useState({
        loading:true,
        data:[]
    })

    console.log("CPP :::", getGroupData)

    const [errors, setErrors] = useState({});








    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const getBrokerName = async () => {
        await Get_Broker_Name()
            .then((response) => {
                if (response.Status) {
                    setBroker({
                        loading: false,
                        data: response.Brokernamelist
                    })
                }
                else {
                    setBroker({
                        loading: false,
                        data: []
                    })
                }
            })
            .catch((err) => {
                console.log("Error in finding the broker", err)
            })
    }

    useEffect(() => {
        getBrokerName()
    }, [])




    const GetAllGroupDetails = async () => {
        try {
            await GetGroupNames()
                .then((response) => {
                    if (response.Status) {
                        setGroupData({
                            loading: false,
                            data: response.StrGroupdf
                        })
                    }
                    else {
                        setGroupData({
                            loading: false,
                            data: []
                        })
                    }
                })
                .catch((err) => {
                    console.log("Group data fetch error", err)
                })
        }
        catch {
            console.log("Group data fetch error")
        }
    }

    useEffect(() => {
        GetAllGroupDetails()
    }, [])



    const formik = useFormik({

        initialValues: {

        },

        validate: (values) => {
            let errors = {};

            return errors;
        },
        onSubmit: async (values) => {
            const req = {

            }


        },
    });






    const fields = [
        {
            name: "UserName",
            label: "User Name",
            type: "text",
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "Email",
            label: "Email",
            type: "text",
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },

        {
            name: "Password",
            label: "Password",
            type: "password",
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "Confirm_Password",
            label: "Confirm Password",
            type: "password",
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "PhoneNo",
            label: "Mobile Number",
            type: "text",
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "Select_Licence",
            label: "Select Licence",
            type: "select",
            options: [
                { label: "Demo", value: "1" },
                { label: "Live", value: "2" },

            ],
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "Select_Licence_Type",
            label: "Select Licence Type",
            type: "select",
            options: formik.values.Select_Licence == '1' ? [
                { label: "2 Day Demo", value: "11" },
                { label: "1 Week Demo", value: "21" },
            ] :
                [
                    { label: "2 Day Live", value: "12" },
                    { label: "1 Month Live", value: "22" },
                ],
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },

        {
            name: "From_Date",
            label: "From Date",
            type: "date",
            label_size: 12,
            hiding: false,
            col_size: 3,
            disable: true,
        },
        {
            name: "To_Date",
            label: "To Date",
            type: "date",
            label_size: 12,
            hiding: false,
            col_size: 3,
            disable: true,
        },
        {
            name: "Select_Group",
            label: "Select Group",
            type: "dropDown",
            options : getGroupData,
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },

        {
            name: "Service_Count",
            label: "Service Count",
            type: "text",
            label_size: 12,
            showWhen: (values) => formik.values.Select_Licence == '2',
            hiding: false,
            col_size: 3,
            disable: false,
        },
        {
            name: "Select_Broker",
            label: "Select Broker",
            type: "select",
            options: getBroker.data && getBroker.data.map((item) => ({
                label: item.BrokerName,
                value: item.BrokerName
            })),
            showWhen: (values) => formik.values.Select_Licence == '2',
            label_size: 12,
            hiding: false,
            col_size: 3,
            disable: false,
        },
    ];





    //Select Date form date and end date
    const currentDate = new Date();
    const daysToSubtract = formik.values.Select_Licence_Type === '11' || formik.values.Select_Licence_Type === '12' ? 2 : formik.values.Select_Licence_Type === '21' ? 7 : formik.values.Select_Licence_Type === '22' ? 30 : 0;
    currentDate.setDate(currentDate.getDate() + daysToSubtract);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // from date
    const FromDate = new Date();

    FromDate.setDate(FromDate.getDate());
    const year1 = FromDate.getFullYear();
    const month1 = String(FromDate.getMonth() + 1).padStart(2, '0');
    const day1 = String(FromDate.getDate()).padStart(2, '0');
    const form_Date = `${year1}-${month1}-${day1}`;


    // Set Date 
    useEffect(() => {
        if (formik.values.Select_Licence_Type == undefined || formik.values.Select_Licence_Type == null) {
            formik.setFieldValue('From_Date', '')
            formik.setFieldValue('To_Date', '')

        }
        else {

            formik.setFieldValue('From_Date', form_Date)
            formik.setFieldValue('To_Date', formattedDate)
        }
    }, [formik.values.Select_Licence_Type])


    //set Date when change to Licence type
    useEffect(() => {

        formik.setFieldValue('From_Date', '')
        formik.setFieldValue('To_Date', '')


    }, [formik.values.Select_Licence])




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

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const data = {
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
        }

        await CreateAccount(data)
            .then((response) => {

                if (response.Status) {
                    Swal.fire({
                        title: "created successfully!",
                        text: "Account created successfully!",
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
                else {

                    Swal.fire({
                        icon: "error",
                        title: "Error in account created",
                        text: response.massage,
                        timer: 1500,
                        timerProgressBar: true
                    });

                }
            }).catch((error) => {
                console.log("Error in Account Creation", error)

            })

    }


    return (
        <>
            {/* <div>
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
                                        <div>
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
                                                        {getBroker && getBroker.data.map((item) => {
                                                            return <option value={item.BrokerName}>{item.BrokerName}</option>
                                                        })}


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
                                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                                Sign UP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <AddForm
                fields={fields.filter(
                    (field) => !field.showWhen || field.showWhen(formik.values)
                )}
                page_title="Create Account"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/admin/clientservice"}
            />
        </>

    );
};

export default Adduser;
