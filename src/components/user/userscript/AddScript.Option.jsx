import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol, Get_StrikePrice, GET_EXPIRY_DATE } from '../../Common API/User'
import { lazy } from "react";
const AddClient = () => {

    const location = useLocation()



    console.log("location", location.state && location.state.data)


    const formik = useFormik({

        initialValues: {
            MainStrategy: location.state && location.state.data.selectStrategyType,
            Username: location.state && location.state.data.selectGroup,
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

            return errors;
        },
        onSubmit: async (values) => {
            const req = {

            }


        },
    });




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
            type: "radio",
            title1: "LongStrangle",
            title2: "ShortStrangle",
            title3: "LongStraddle",
            title4: "ShortStraddle",
            value1: "LongStrangle",
            value2: "ShortStrangle",
            value3: "LongStraddle",
            value4: "ShortStraddle",

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
            name: "Lower Range",
            label: "Lower Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range",
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Higher Range",
            label: "Higher Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range",
            label_size: 12,
            col_size: 3,
            disable: false,
        },

    ];

    useEffect(() => {
        formik.setFieldValue('Strategy', location.state && location.state.data.ScalpType)
        formik.setFieldValue('Exchange', location.state && location.state.data.Exchange)
        formik.setFieldValue('Instrument', location.state && location.state.data.InstrumentType || "OPTIDX")
        formik.setFieldValue('Symbol', location.state && location.state.data['Instrument Symbol'])
        formik.setFieldValue('TType', location.state && location.state.data.TType)
        formik.setFieldValue('Quantity', location.state && location.state.data.Lotsize)
        formik.setFieldValue('TStype', location.state && location.state.data.TStype)
        formik.setFieldValue('Targetvalue', location.state && location.state.data.Targetvalue || "5.0")
        formik.setFieldValue('Slvalue', location.state && location.state.data.Slvalue || "5.0")
        formik.setFieldValue('ExitDay', location.state && location.state.data.ExitDay)
        formik.setFieldValue('EntryTime', location.state && location.state.data.EntryTime)
        formik.setFieldValue('ExitTime', location.state && location.state.data.ExitTime)

    }, [location.state && location.state.data])




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
                btn_name1_route={"/user/dashboard"}
            />
        </>
    );
};
export default AddClient;
