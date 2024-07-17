import { useNavigate } from "react-router-dom"
import AddForm from "../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
const AddClient = () => {
    

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
            name: "GroupName",
            label: "Group Name",
            type: "select",
            options: [
                { label: "Scalping", value: "0" },
                { label: "Option Strategy", value: "1" },
                { label: "Pattern Script", value: "2" },
                { label: "PatternOption", value: "3" },
                { label: "MultipleLegStretegy", value: "4" },

            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Strategy_Type",
            label: "Strategy Type",
            type: "select",
            options: [
                { label: "Scalping", value: "0" },
                { label: "Option Strategy", value: "1" },
                { label: "Pattern Script", value: "2" },
                { label: "PatternOption", value: "3" },
                { label: "MultipleLegStretegy", value: "4" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Scalping_Type",
            label: "Scalping Type",
            type: "select",
            options: [
                { label: "Multi Directional", value: "0" },
                { label: "Fixed Price", value: "1" },
                { label: "One Directional", value: "2" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Exchange",
            label: "Exchange",
            type: "select",
            options: [
                { label: "NFO", value: "0" },
                { label: "NSE", value: "1" },
                { label: "CDS", value: "2" },
                { label: "MCX", value: "3" },

            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },

        {
            name: "Service_Type",
            label: "Service Type",
            type: "test",
            label_size: 12,
            col_size: 6,
            disable: false,

        },
        {
            name: "balance",
            label: "Balance",
            type: "text3",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "broker",
            label: "Broker",
            type: "select",
            options:
                getAllBroker &&
                getAllBroker.map((item) => ({
                    label: item.title,
                    value: item.broker_id,
                })),
            label_size: 12,
            col_size: 6,
            disable: false,
        },

    ];



    return (


        <>
            <AddForm
                fields={fields.filter(
                    (field) => !field.showWhen || field.showWhen(formik.values)
                )}
                page_title="Add Script"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/subadmin/users"}

            />

        </>


    );
};
export default AddClient;
