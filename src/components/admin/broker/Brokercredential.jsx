import React, { useState, useEffect } from 'react';
import { AdminAddBrokerCredential, Get_Broker_Details } from '../../Common API/Admin';
import Swal from 'sweetalert2';
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";

const Brokercredential = () => {
    const [upDateData, setUpDateData] = useState({
        data: []
    });

    const getBrokerDetails = async () => {
        try {
            const response = await Get_Broker_Details();
            if (response.Status) {
                setUpDateData({ data: response.BrokerDetail });
            } else {
                setUpDateData({ data: {} });
            }
        } catch (err) {
            console.log("Error in finding the broker details", err);
        }
    };

    useEffect(() => {
        getBrokerDetails();
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            api_key: '',
            Pwd: '',
            Userid:  '',
            DOB:'',
        },
        validate: (values) => {
            let errors = {};
            if (!values.api_key) {
                errors.api_key = "Please Enter API Key";
            }
            if (!values.Pwd) {
                errors.Pwd = "Please Enter Password";
            }
            if (!values.Userid) {
                errors.Userid = "Please Enter User ID";
            }
            if (!values.DOB) {
                errors.DOB = "Please Enter Authorization Key";
            }
            return errors;
        },
        onSubmit: async (values) => {
            const data = {
                Userid: values.Userid,
                api_key: values.api_key,
                Pwd: values.Pwd,
                DOB: values.DOB
            };
            try {
                const response = await AdminAddBrokerCredential(data);
                if (response.Status) {
                    setUpDateData({ data: response.Data });
                    Swal.fire({
                        title: "Updated successfully!",
                        text: "Broker Credential Updated successfully!",
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: response.message,
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
            } catch (error) {
                console.log("Error in updating Broker", error);
            }
        }
    });

    const fields = [
        {
            name: "Userid",
            label: "User ID",
            type: "text",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "api_key",
            label: "API key",
            type: "text",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Pwd",
            label: "Password",
            type: "text",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "DOB",
            label: "Authorization Key",
            type: "text",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
    ];
 
    useEffect(() => {
        if(upDateData.data.length>0){
            formik.setFieldValue('api_key', upDateData && upDateData.data[0].api_key)
            formik.setFieldValue('Pwd', upDateData && upDateData.data[0].Pwd)
            formik.setFieldValue("Userid", upDateData && upDateData.data[0].username)
            formik.setFieldValue("DOB", upDateData && upDateData.data[0].Auth_key)
        }
    
      }, [upDateData])

    return (
        <div>
            <div className='Broker Credential'>
                <AddForm
                    fields={fields.filter(
                        (field) => !field.showWhen || field.showWhen(formik.values)
                    )}
                    page_title="Broker Credential"
                    btn_name="Update"
                    formik={formik}
                    btn_name1_route={"/admin/allscript"}
                />
            </div>
        </div>
    );
}

export default Brokercredential;
