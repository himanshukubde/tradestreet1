import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { CreateAccount, Get_Broker_Name, GetGroupNames } from '../../Common API/Admin'
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


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


    // useEffect(()=>{
    //         setSelectedOptions(selected);
           
        
    // },[])

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
                                // onSelect={()=>setSelectedOptions(selected)}
                            />
                        </div>
                    }
                />
            )}
        </>

    );
};

export default Adduser;
