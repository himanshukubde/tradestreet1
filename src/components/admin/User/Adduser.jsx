import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { CreateAccount, Get_Broker_Name, GetGroupNames } from '../../Common API/Admin'
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { useNavigate } from 'react-router-dom';


const Adduser = () => {
    const navigate = useNavigate()
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
        loading: true,
        data: []
    })

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [optionsArray, setoptionsArray] = useState([]);

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
                        const arr = response.StrGroupdf.map(item => ({
                            label: item.GroupName,
                            key: item.GroupName
                        }));
                        setoptionsArray(arr);


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
            UserName: '',
            Email: '',
            Password: '',
            Confirm_Password: '',
            PhoneNo: '',
            Select_Licence: '',
            Select_Licence_Type: '',
            From_Date: '',
            To_Date: '',
            Service_Count: '',
            Select_Broker: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.UserName) {
                errors.SignuserName = "Enter UserName"
            }

            if (!values.Email) {
                errors.Email = "Enter Email ID";
            } else {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|ymail|rediffmail|hotmail|outlook|aol|icloud|protonmail|example).(com|co.in|in|net|org|edu|gov|uk|us|info|biz|io|...)[a-zA-Z]{0,}$/;
                if (!emailRegex.test(values.Email)) {
                    errors.Email = "Enter a valid Email ID";
                }
            }
            if (!values.Password) {
                errors.Password = "Enter Password"
            }
            if (!values.Confirm_Password) {
                errors.Confirm_Password = "Enter Confirm_Password"
            }
            if (!values.PhoneNo) {
                errors.PhoneNo = "Enter PhoneNo"
            }
            if (!values.Select_Licence) {
                errors.Select_Licence = "Enter Select_Licence"
            }
            if (!values.Select_Licence_Type) {
                errors.Select_Licence_Type = "Enter Select_Licence_Type"
            }
            if (!values.From_Date) {
                errors.From_Date = "Enter From_Date"
            }
            if (!values.To_Date) {
                errors.To_Date = "Enter To_Date"
            }
            if (!values.Service_Count) {
                errors.Service_Count = "Enter Service_Count"
            }
            
            return errors;
        },
        onSubmit: async (values) => {
            const req = {
                SignuserName: values.UserName,
                Signpassword: values.Password,
                ConfirmPassword: values.Confirm_Password,
                SignEmail: values.Email,
                mobile_no: values.PhoneNo,
                Day: values.Select_Licence_Type == '11' ? "2 Day Demo" : values.Select_Licence_Type == '21' ? "1 Week Demo" : values.Select_Licence_Type == '12' ? "2 Day Live" : values.Select_Licence_Type == '22' ? "1 Month Live" : '',
                ser: values.Select_Licence == '1' ? 2 : Number(values.Service_Count),
                SSDate: values.From_Date,
                SEDate: values.To_Date,
                BrokerName: values.Select_Licence == '1' ? "Demo Account" : values.Select_Broker,
                Group: selectedOptions && selectedOptions
            }


            await CreateAccount(req)
                .then((response) => {
                    if (response.Status) {
                        Swal.fire({
                            title: "User Created!",
                            text: "New User Added successfully..!",
                            icon: "success",
                            timer: 1500,
                            timerProgressBar: true
                        });
                        setTimeout(() => {
                            navigate('/admin/clientservice')
                        }, 1500)
                    }
                    else {
                        Swal.fire({
                            title: "Error!",
                            text: "Error in User create..!",
                            icon: "error",
                            timer: 1500,
                            timerProgressBar: true
                        });
                    }
                })
                .catch((err) => {
                    console.log("Error in adding the new user", err)
                })
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
            type: "select1",
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
            type: "select1",
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
            name: "Service_Count",
            label: "Service Count",
            type: "select",
            options: [
                { label: "0", value: "0" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "5", value: "5" },
            ],
            label_size: 12,
            showWhen: (values) => formik.values.Select_Licence == '2',
            hiding: false,
            col_size: 3,
            disable: false,
        },
        {
            name: "Select_Broker",
            label: "Select Broker",
            type: "select1",
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




    useEffect(() => {

        if (formik.values.Select_Licence == "1") {
            formik.setFieldValue('Service_Count', "2")
            formik.setFieldValue('Select_Broker', "")

        }
    }, [formik.values.Select_Licence])






    return (
        <>
            {optionsArray.length > 0 && (
                <AddForm
                    fields={fields.filter(
                        (field) => !field.showWhen || field.showWhen(formik.values)
                    )}
                    page_title="Create Account"
                    btn_name="Add"
                    btn_name1="Cancel"
                    formik={formik}
                    btn_name1_route={"/admin/clientservice"}
                    additional_field={
                        <div className='col-lg-6'>
                            <h6>Select Group</h6>
                            <DropdownMultiselect
                                options={optionsArray}
                                name="groupName"
                                handleOnChange={(selected) => {
                                    setSelectedOptions(selected)
                                }}
                            />
                        </div>
                    }
                />
            )}
        </>

    );
};

export default Adduser;
