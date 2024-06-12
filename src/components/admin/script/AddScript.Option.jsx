import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol, Get_StrikePrice, GET_EXPIRY_DATE } from '../../Common API/Admin'
import { lazy } from "react";
import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
const AddClient = () => {
    const location = useLocation()
    const [showTimePiker, setShowTimePiker] = useState('')
    const formik = useFormik({

        initialValues: {
            MainStrategy: location.state.data.selectStrategyType,
            Username: location.state.data.selectGroup,
            Strategy: "",
            ETPattern: "",
            Timeframe: "",
            Exchange: "",
            Symbol: "",
            Instrument: "FUTIDX",
            Strike: "",
            Optiontype: "",
            Targetvalue: 1.0,
            Slvalue: 1.0,
            TStype: "",
            Quantity: 5,
            LowerRange: 0.0,
            HigherRange: 0.0,
            HoldExit: "",
            EntryPrice: 0.0,
            EntryRange: 0.0,
            EntryTime: "",
            ExitTime: "",
            ExitDay: "",
            TradeExecution: "Paper Trade",
            FixedSM: "",
            TType: "",
            serendate: "2023-10-25",
            expirydata1: "2024-06-27",
            Expirytype: "",
            Striketype: "",
            DepthofStrike: "",
            DeepStrike: "",
            Group: "",
            CEDepthLower: 0.0,
            CEDepthHigher: 0.0,
            PEDepthLower: 0.0,
            PEDepthHigher: 0.0,
            CEDeepLower: 0.0,
            CEDeepHigher: 0.0,
            PEDeepLower: 0.0,
            PEDeepHigher: 0.0,
            TradeCount: 2
        },
        
        validate: (values) => {
            let errors = {};
            if (!values.Strategy) {
                errors.Strategy = "Select Strategy type"
            }
            if (!values.ETPattern) {
                errors.ETPattern = "Select ETPattern type"
            }
            if (!values.Symbol) {
                errors.Symbol = "Select Symbol type"
            }
            if (!values.Targetvalue) {
                errors.Targetvalue = "Select Targetvalue type"
            }
            if (!values.Slvalue) {
                errors.Slvalue = "Select Slvalue type"
            }
            if (!values.TStype) {
                errors.TStype = "Select TStype type"
            }
            if (!values.Quantity) {
                errors.Quantity = "Select Quantity type"
            }
            if (!values.EntryTime) {
                errors.EntryTime = "Select EntryTime type"
            }
            if (!values.ExitTime) {
                errors.ExitTime = "Select ExitTime type"
            }
            if (!values.ExitDay) {
                errors.ExitDay = "Select ExitDay type"
            }
            if (!values.Expirytype) {
                errors.Expirytype = "Select Expirytype type"
            }
            if (!values.Striketype) {
                errors.Striketype = "Select Striketype type"
            }
            return errors;
        },
        onSubmit: async (values) => {
            const req = {
                MainStrategy: location.state.data.selectStrategyType,
                Username: location.state.data.selectGroup,
                Strategy: values.Strategy,
                ETPattern: values.ETPattern,
                Timeframe: "",
                Exchange: "",
                Symbol: values.Symbol,
                Instrument: "FUTIDX",
                Strike: "",
                Optiontype: "",
                Targetvalue: values.Targetvalue,
                Slvalue: values.Slvalue,
                TStype: values.TStype,
                Quantity: values.Quantity,
                LowerRange: 0.0,
                HigherRange: 0.0,
                HoldExit: "",
                EntryPrice: 0.0,
                EntryRange: 0.0,
                EntryTime: values.EntryTime,
                ExitTime: values.ExitTime,
                ExitDay: values.ExitDay,
                TradeExecution: "Paper Trade",
                FixedSM: "",
                TType: "",
                serendate: "2023-10-25",
                expirydata1: "2024-06-27",
                Expirytype: values.Expirytype,
                Striketype: values.Striketype,
                DepthofStrike: values.DepthofStrike,
                DeepStrike: "",
                Group: "",
                CEDepthLower: 0.0,
                CEDepthHigher: 0.0,
                PEDepthLower: 0.0,
                PEDepthHigher: 0.0,
                CEDeepLower: 0.0,
                CEDeepHigher: 0.0,
                PEDeepLower: 0.0,
                PEDeepHigher: 0.0,
                TradeCount: 2
            }
        },
    });
    useEffect(() => {
        formik.setFieldValue('Measurment_Type', "Straddle/Strangle")
        formik.setFieldValue('Strategy', "ShortStrangle")
        formik.setFieldValue('Symbol', "BANKNIFTY")
        formik.setFieldValue('Expirytype', "Weekly")
        formik.setFieldValue('ETPattern', "Premium Addition")
        formik.setFieldValue('TStype', "Percentage")
        formik.setFieldValue('Targetvalue', "1.00")
        formik.setFieldValue('Slvalue', "1.00")
        formik.setFieldValue('Quantity', "1")
        formik.setFieldValue('ExitDay', "Intraday")
        formik.setFieldValue('EntryTime', "00:05")
        formik.setFieldValue('ExitTime', "00:05")
        formik.setFieldValue('Striketype', "Depth_of_Strike")
        formik.setFieldValue('DepthofStrike', "1")
        formik.setFieldValue('ATM', "1")
        formik.setFieldValue('Lower_Range', "1")
        formik.setFieldValue('Higher_Range', "1")

    }, [])

    const fields = [
        {
            name: "Measurment_Type",
            label: "Measurment Type",
            type: "select",
            options: [
                { label: "Straddle/Strangle", value: "Straddle/Strangle" },
                { label: "Butterfly/Condor", value: "Butterfly/Condor" },
                { label: "Spread", value: "Spread" },
                { label: "Ladder/Coverd", value: "Ladder/Coverd" },
                { label: "Collar/Ratio", value: "Collar/Ratio" },
                { label: "Shifting/FourLeg", value: "Shifting/FourLeg" },

            ],
            hiding: false,
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Strategy",
            label: "Strategy",
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
            type: "timepiker",
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "timepiker",
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
            showWhen: (value) => value.Striketype == "Depth_of_Strike",
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
                fields={fields.filter((field) => !field.showWhen || field.showWhen(formik.values))}
                page_title="Add Script option"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/admin/allscript"}
            />

        </>
    );
};
export default AddClient;
