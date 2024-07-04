/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import Formikform from "../../ExtraComponent/FormData";
import { useFormik } from 'formik';
import { GetBrokerData, UpdateBrokerData } from "../Common API/User";
import Swal from 'sweetalert2';

const Update_Broker_Key = ({ closeModal, isVisible }) => {
    const userName = localStorage.getItem("name");
    const [refresh, setRefresh] = useState(false);
    const [userDetails, setUserDetails] = useState({ loading: true, data: {} });

    const fetchData = async () => {
        const requestData = { userName };
        const response = await GetBrokerData(requestData);
        if (response && response.BrokerDetail && response.BrokerDetail[0]) {
            setUserDetails({ loading: false, data: response.BrokerDetail[0] });
        } else {
            setUserDetails({ loading: false, data: {} });
        }
    };

    useEffect(() => {
        fetchData();
    }, [refresh]);

    const formik = useFormik({
        initialValues: {
            api_key: '',
            mobileno: '',
            APIPassword: '',
            BrokerName: '',
            DOB: '',
            Password: '',
            username: '',
            broker: '',
        },
        validate: (values) => {
            const errors = {};
            // Add any validation logic here
            return errors;
        },
        onSubmit: async (values) => {
            let req = {
                Username: userName,
                api_key: values.api_key,
                Userid: values.username,
                Pwd: values.Password,
                DOB: values.DOB,
                MOb: values.mobileno,
                APIPassword: values.APIPassword,
                // BrokerName:values.BrokerName,
            };

            const response = await UpdateBrokerData(req);

            if (response.Status) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Broker key updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: "1000"
                }).then(() => {
                    closeModal(false);
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update broker key.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    timer: "1000"

                });
            }
        }
    });

    useEffect(() => {
        if (userDetails.data) {
            formik.setValues({
                api_key: userDetails.data.api_key || '',
                mobileno: userDetails.data.mobileno || '',
                APIPassword: userDetails.data.APIPassword || '',
                BrokerName: userDetails.data.BrokerName || '',
                DOB: userDetails.data.DOB || '',
                Password: userDetails.data.Password || '',
                username: userDetails.data.username || '',
                broker: userDetails.data.broker || '',
            });
        }
    }, [userDetails]);

    const fields = [
        {
            name: "BrokerName",
            label: "Broker Name",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: true,
        },
        {
            name: "username",
            label: formik.values.BrokerName === "Angel" ? "Username " : "Username",
            type: 'text',
            label_size: 12,
            col_size: 6,
            disable: false,
            showWhen: values => formik.values.BrokerName === "Angel",
        },
        {
            name: "api_key",
            label: formik.values.BrokerName === "Angel" ? "App Api Key " : "Api Key",
            type: 'text',
            label_size: 12,
            col_size: 6,
            disable: false,
            showWhen: values => formik.values.BrokerName === "Angel",
        },
        {
            name: "Password",
            type: 'text',
            label: formik.values.BrokerName === "Angel" ? "User PIN" : "PWD",
            showWhen: values => values.BrokerName === "Angel",
            disable: false,
            label_size: 12,
            col_size: 6,
        },
        {
            name: "mobileno",
            type: "text",
            label: formik.values.BrokerName === "Aliceblue" ? "Mobile No." : "Mobile No.",
            showWhen: (values) => values.BrokerName === "Aliceblue",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "APIPassword",
            type: "text",
            label: formik.values.BrokerName === "Angel" ? "API Password" : "API Password",
            showWhen: (values) => values.BrokerName === "Aliceblue",

            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "DOB",
            type: "text",
            label: formik.values.BrokerName == "Angel" ? "Auth Key" : "DOB",
            showWhen: (values) => values.BrokerName === "Angel",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
    ];

    return (
        <div>
            {!userDetails.loading && isVisible && (
                <div className="modal show" id="exampleModal" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Update Broker Key
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => closeModal(false)}
                                />
                            </div>
                            <Formikform
                                fields={fields.filter(
                                    (field) => !field.showWhen || field.showWhen(formik.values)
                                )}
                               
                                btn_name="Update"
                                formik={formik}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Update_Broker_Key;
