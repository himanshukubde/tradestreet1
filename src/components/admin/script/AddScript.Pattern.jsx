import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol, Get_StrikePrice, GET_EXPIRY_DATE } from '../../Common API/Admin'
import { lazy } from "react";
const AddClient = () => {

    const location = useLocation()


    const formik = useFormik({

        initialValues: {
            MainStrategy: location.state.data.selectStrategyType,
            Username: location.state.data.selectGroup,
            Strategy: "",
            ETPattern: "",
            Timeframe: "",
            Exchange: "NFO",
            Symbol: "",
            Instrument: "FUTIDX",
            Strike: "0",
            Optiontype: "",
            Targetvalue: "",
            Slvalue: "",
            TStype: "",
            Quantity: "",
            LowerRange: "",
            HigherRange: "",
            HoldExit: "",
            EntryPrice: 0.0,
            EntryRange: 0.0,
            EntryTime: "",
            ExitTime: "",
            ExitDay: "",
            TradeExecution: "",
            FixedSM: "",
            TType: "",
            serendate: "",
            expirydata1: "",
            Expirytype: "",
            Striketype: "",
            DepthofStrike: "",
            DeepStrike: "",
            Group: "",
            CEDepthLower: "",
            CEDepthHigher: "",
            PEDepthLower: "",
            PEDepthHigher: "",
            CEDeepLower: "",
            CEDeepHigher: "",
            PEDeepLower: "",
            PEDeepHigher: "",

        },

        validate: (values) => {
            let errors = {};
            if(!values.Strategy){
                errors.Strategy = "HELLO CP"
            }
            if(!values.Quantity){
                errors.Quantity = "Enter Lot size"
            }

            return errors;
        },
        onSubmit: async (values) => {
            const req = {

            }


        },
    });


    useEffect(() => {
        // formik.setFieldValue('Measurment_Type', "Straddle/Strangle")
        // formik.setFieldValue('Strategy', "ShortStrangle")
        // formik.setFieldValue('Symbol', "BANKNIFTY")
        // formik.setFieldValue('Expirytype', "Weekly")
        // formik.setFieldValue('ETPattern', "Premium Addition")
        // formik.setFieldValue('TStype', "Percentage")
        // formik.setFieldValue('Targetvalue', "1.00")
        // formik.setFieldValue('Slvalue', "1.00")
        // formik.setFieldValue('Quantity', "1")
        // formik.setFieldValue('ExitDay', "Intraday")
        // formik.setFieldValue('EntryTime', "00:05")
        // formik.setFieldValue('ExitTime', "00:05") 
        // formik.setFieldValue('Striketype', "Depth_of_Strike")
        // formik.setFieldValue('DepthofStrike', "1")
        // formik.setFieldValue('ATM', "1")
        // formik.setFieldValue('Lower_Range', "1")
        // formik.setFieldValue('Higher_Range', "1")
         

      }, [])
    


    const fields = [
        
        {
            name: "Add_New_Script",
            label: "Add_New_Script",
            type: "radio1",
            title: [{ title: "Short Strangle", value: "ShortStrangle" }, { title: "Long Strangle", value: "LongStrangle" }, { title: "Long Straddle", value: "LongStraddle" }, { title: "Short Straddle", value: "ShortStraddle" }],
            label_size: 12,
            col_size: 3,
            disable: false,
            hiding: false,
        },
        {
            name: "Symbol",
            label: "Symbol",
            type: "select",
            options: [
                { label: "BANKNIFTY", value: "BANKNIFTY" },
                { label: "NIFTY", value: "NIFTY" },
            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Expirytype",
            label: "Expiry Type",
            type: "select",
            options: [
                { label: "Weekly", value: "Weekly" },
                { label: "Next Week", value: "Next Week" },
                { label: "Monthly", value: "Monthly" },

            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "ETPattern",
            label: "Risk Handle",
            type: "select",
            options: [
                { label: "Premium Addition", value: "Premium Addition" },
                { label: "Future", value: "Future" },
                { label: "Leg vice", value: "Leg vice" },

            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "TStype",
            label: "Measurment Type",
            type: "select",
            options: [
                { label: "Percentage", value: "Percentage" },
                { label: "Point", value: "Point" },

            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Targetvalue",
            label: "Target Value",
            type: "number",
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Slvalue",
            label: "StopLoss Value",
            type: "number",
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,

        },
        {
            name: "Quantity",
            label: "Lot Size",
            type: "number",
            hiding: false,
            label_size: 12,
            col_size: 12,
            disable: false,
        },
        {
            name: "ExitDay",
            label: "Exit Day",
            type: "select",
            options: [
                { label: "Intraday", value: "Intraday" },
                { label: "Delivery", value: "Delivery" },
            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "EntryTime",
            label: "Entry Time",
            type: "select",
            options: [
                { label: "00:05", value: "00:05" },
                { label: "00:04", value: "00:04" },
                { label: "00:03", value: "00:03" },
                { label: "00:02", value: "00:02" },
            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "select",
            options: [
                { label: "00:05", value: "00:05" },
                { label: "00:04", value: "00:04" },
                { label: "00:03", value: "00:03" },
                { label: "00:02", value: "00:02" },
            ],
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Striketype",
            label: "Strike Type",
            type: "select",
            options: [
                { label: "Depth_of_Strike", value: "Depth_of_Strike" },
                { label: "Straddle_Width", value: "Straddle_Width" },
                { label: "Premium_Range", value: "Premium_Range" },
                { label: "Per_ATM", value: "Per_ATM" },
            ],
            showWhen: (value) => value.Strategy == "ShortStrangle" || value.Strategy == "LongStrangle",

            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "DepthofStrike",
            label: "Depth of Strike",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Depth_of_Strike" ,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Percentage",
            label: "Percentage",
            type: "number",
            showWhen: (value) => value.Striketype == "Straddle_Width",
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "ATM",
            label: "ATM",
            type: "number",
            showWhen: (value) => value.Striketype == "Per_ATM",
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Lower_Range",
            label: "Lower Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range",
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Higher_Range",
            label: "Higher Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range",
            label_size: 12,
            col_size: 3,
            disable: false,
        },

    ];

 
    return (
        <>
            <AddForm
                fields={fields.filter((field) => !field.showWhen || field.showWhen(formik.values) )}
                page_title="Add Script pattern"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/admin/allscript"}
            />
        </>
    );
};
export default AddClient;
