import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { GET_EXPIRY_DATE } from '../../Common API/Admin'
import { AddScript } from '../../Common API/User'


const AddClient = () => {
    const location = useLocation()
    const userName = localStorage.getItem('name')
    const navigate = useNavigate()
    const [getExpiry, setExpiry] = useState({
        loading: true,
        data: []
    })



    const formik = useFormik({

        initialValues: {
            MainStrategy: location.state.data.selectStrategyType,
            Username: "",
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
            Quantity: 0,
            Higher_Range: 0.0,
            Lower_Range: 0.0,
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
                Username: userName,
                Strategy: values.Strategy,
                ETPattern: values.ETPattern,
                Timeframe: "",
                Exchange: "NFO",
                Symbol: values.Symbol,
                Instrument: "FUTIDX",
                Strike: "",
                Optiontype: "",
                Targetvalue: values.Targetvalue,
                Slvalue: values.Slvalue,
                TStype: values.TStype,
                Quantity: values.Quantity,
                LowerRange: values.Lower_Range,
                HigherRange: values.Higher_Range,
                HoldExit: "",
                EntryPrice: 0.0,
                EntryRange: 0.0,
                EntryTime: values.EntryTime,
                ExitTime: values.ExitTime,
                ExitDay: values.ExitDay,
                FixedSM: "",
                TType: "",
                TradeExecution: "Paper Trade",
                TradeCount: 3,
                serendate: "2023-10-25",
                expirydata1: values.Expirytype == "Weekly" ? getExpiry && getExpiry.data[0] : values.Expirytype == "Next Week" ? getExpiry && getExpiry.data[1] : getExpiry && getExpiry.data[2],
                Expirytype: values.Expirytype,
                Striketype: values.Striketype,
                DepthofStrike: values.DepthofStrike,
                DeepStrike: values.DeepStrike,
                Group: "",
                CEDepthLower: values.CEDepthLower,
                CEDepthHigher: values.CEDepthHigher,
                PEDepthLower: values.PEDepthLower,
                PEDepthHigher: values.PEDepthHigher,
                CEDeepLower: values.CEDeepLower,
                CEDeepHigher: values.CEDeepHigher,
                PEDeepLower: values.PEDeepLower,
                PEDeepHigher: values.PEDeepHigher,

            }


           
            await AddScript(req)
                .then((response) => {
                    if (response.Status) {
                        Swal.fire({
                            title: "Script Added !",
                            text: response.massage,
                            icon: "success",
                            timer: 1500,
                            timerProgressBar: true
                        });
                        setTimeout(() => {
                            navigate('/user/dashboard')
                        }, 1500)
                    }
                    else {
                        Swal.fire({
                            title: "Error !",
                            text: response.massage,
                            icon: "error",
                            timer: 1500,
                            timerProgressBar: true
                        });

                    }
                })
                .catch((err) => {
                    console.log("Error in added new Script", err)
                })
        },
    });

    
    useEffect(() => {
        formik.setFieldValue('Measurment_Type', "Straddle/Strangle")
        formik.setFieldValue('Strategy', "ShortStrangle")
        formik.setFieldValue('Symbol', "BANKNIFTY")
        formik.setFieldValue('Expirytype', "Weekly")
        formik.setFieldValue('ETPattern', "Premium Addition")
        formik.setFieldValue('TStype', "Percentage")
        formik.setFieldValue('Targetvalue', 1.00)
        formik.setFieldValue('Slvalue', 1.00)
        formik.setFieldValue('Quantity', 1)
        formik.setFieldValue('ExitDay', "Intraday")
        formik.setFieldValue('Striketype', "Depth_of_Strike")
        formik.setFieldValue('DepthofStrike', 1)
        formik.setFieldValue('DeepStrike', 1)
        formik.setFieldValue('Lower_Range', 0)
        formik.setFieldValue('Higher_Range', 0)
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
            title: formik.values.Measurment_Type == "Straddle/Strangle" ?
                [{ title: "Short Strangle", value: "ShortStrangle" }, { title: "Long Strangle", value: "LongStrangle" }, { title: "Long Straddle", value: "LongStraddle" }, { title: "Short Straddle", value: "ShortStraddle" }] :

                formik.values.Measurment_Type == "Butterfly/Condor" ?
                    [{ title: "Long Iron Butterfly", value: "LongIronButterfly" }, { title: "Short Iron Butterfly", value: "ShortIronButterfly" }, { title: "Long Iron Condor", value: "LongIronCondor" }, { title: "Short Iron Condor", value: "ShortIronCondor" }] :

                    formik.values.Measurment_Type == "Spread" ?
                        [{ title: "Bear CallSpread", value: "BearCallSpread" }, { title: "Bear PutSpread", value: "BearPutSpread" }, { title: "Bull CallSpread", value: "BullCallSpread" }, { title: "Bull PutSpread", value: "BullPutSpread" }] :

                        formik.values.Measurment_Type == "Ladder/Coverd" ?
                            [{ title: "Bull CallLadder", value: "BullCallLadder" }, { title: "Bull PutLadder", value: "BullPutLadder" }, { title: "Covered Call", value: "CoveredCall" }, { title: "Covered Put", value: "CoveredPut" }] :

                            formik.values.Measurment_Type == "Collar/Ratio" ?
                                [{ title: "Long Collar", value: "LongCollar" }, { title: "Short Collar", value: "ShortCollar" }, { title: "Ratio CallSpread", value: "RatioCallSpread" }, { title: "Ratio PutSpread", value: "RatioPutSpread" }] :

                                formik.values.Measurment_Type == "Shifting/FourLeg" ?
                                    [{ title: "Short Shifting", value: "ShortShifting" }, { title: "Long Shifting", value: "LongShifting" }, { title: "ShortFourLeg Stretegy", value: "ShortFourLegStretegy" }, { title: "LongFourLeg Stretegy", value: "LongFourLegStretegy" }] :
                                    ""

            ,
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
            showWhen: (value) => value.Measurment_Type != "Shifting/FourLeg",
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "TStypel",
            label: "Measurment Type",
            type: "cp",
            hiding: false,
            label_size: 12,
            showWhen: (value) => (value.Measurment_Type == "Shifting/FourLeg" && (value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy')),
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
            showWhen: (value) => value.Measurment_Type != "Shifting/FourLeg" || (value.Measurment_Type == "Shifting/FourLeg" && (value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy')),
            col_size: 4,
            disable: false,
        },
        {
            name: "Targetvalue",
            label: "Target Value",
            type: "number",
            hiding: false,
            label_size: 12,
            showWhen: (value) => value.Measurment_Type != "Shifting/FourLeg" || (value.Measurment_Type == "Shifting/FourLeg" && (value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy')),

            col_size: 4,
            disable: false,
        },
        {
            name: "Slvalue",
            label: "StopLoss Value",
            type: "number",
            hiding: false,
            label_size: 12,
            showWhen: (value) => value.Measurment_Type != "Shifting/FourLeg" || (value.Measurment_Type == "Shifting/FourLeg" && (value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy')),
            col_size: 4,
            disable: false,

        },
        {
            name: "Shifting_Point",
            label: "Shifting Point",
            type: "number",
            hiding: false,
            label_size: 12,
            showWhen: (value) => value.Measurment_Type == "Shifting/FourLeg" && (value.Strategy == 'ShortShifting' || value.Strategy == 'LongShifting'),
            col_size: 12,
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
            name: "CEDepthLower",
            label: "CEDepthLower",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "CEDepthHigher",
            label: "CEDepthHigher",
            type: "number",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDepthLower",
            label: "PEDepthLower",
            type: "number",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        }, {
            name: "PEDepthHigher",
            label: "PEDepthHigher",
            type: "number",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "CEDeepLower",
            label: "CEDeepLower",
            type: "number",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "CEDeepHigher",
            label: "CEDeepHigher",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDeepLower",
            label: "PEDeepLower",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDeepHigher",
            label: "PEDeepHigher",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Unique_ID",
            label: "Unique ID",
            type: "select",
            options: [
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
                { label: "E", value: "E" },
                { label: "F", value: "F" },
                { label: "G", value: "G" },
                { label: "H", value: "H" },
                { label: "I", value: "I" },
                { label: "J", value: "J" },

            ],

            showWhen: (value) => value.Strategy == "LongFourLegStretegy" || value.Strategy == "ShortFourLegStretegy",

            hiding: false,
            label_size: 12,
            col_size: 6,
            disable: false,
        },

        {
            name: "Striketype",
            label: "Strike Type",
            type: "select",
            options: [
                { label: "Depth of Strike", value: "Depth_of_Strike" },
                { label: "Straddle Width", value: "Straddle_Width" },
                { label: "Premium Range", value: "Premium_Range" },
                { label: "Per ATM", value: "Per_ATM" },
            ],
            showWhen: (value) => value.Strategy != "ShortStraddle" && value.Strategy != "LongStraddle" && value.Measurment_Type != "Shifting/FourLeg" && value.Strategy != 'ShortStraddle' && value.Strategy != 'LongStraddle',

            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "DepthofStrike",
            label: formik.values.Striketype == "Depth_of_Strike" ? "Depth of Strike" : formik.values.Striketype == "Straddle_Width" ? "Percentage" : formik.values.Striketype == "Premium_Range" ? "Premium Range" : formik.values.Striketype == "Per_ATM" ? "Per ATM" : "Depth of Strike",
            type: "number",
            hiding: false,
            showWhen: (value) => formik.values.Striketype != "Premium_Range" && value.Measurment_Type != "Shifting/FourLeg" && value.Strategy != 'LongStraddle' && value.Strategy != 'ShortStraddle',
            label_size: 12,
            col_size: 3,
            disable: false,
        },

        {
            name: "Lower_Range",
            label: "Lower Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range" && value.Measurment_Type != "Shifting/FourLeg",
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Higher_Range",
            label: "Higher Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range" && value.Measurment_Type != "Shifting/FourLeg",
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "DeepStrike",
            label: "Deep Strike",
            type: "number",
            showWhen: (value) => (value.Measurment_Type == "Ladder/Coverd" && value.Measurment_Type != "Shifting/FourLeg" && (value.Strategy == 'BullCallLadder' || value.Strategy == "BullPutLadder")) || value.Strategy == "LongIronCondor" || value.Strategy == "ShortIronCondor",
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Shifting_Value",
            label: "Shifting Value",
            type: "number",
            showWhen: (value) => value.Measurment_Type == "Shifting/FourLeg" && value.Strategy != 'ShortFourLegStretegy' && value.Strategy != 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 12,
            disable: false,
        },
    ];





    const getExpriyData = async () => {
        const data = { Exchange: "NFO", Instrument: "FUTIDX", Symbol: formik.values.Symbol, Strike: "" }
        await GET_EXPIRY_DATE(data)
            .then((response) => {
                if (response.Status) {
                    setExpiry({
                        loading: false,
                        data: response['Expiry Date']
                    })
                }
                else {
                    setExpiry({
                        loading: false,
                        data: []
                    })
                }
            })
            .catch((err) => {
                console.log("Error in finding the Expriy Data", err)
            })

    }

    useEffect(() => {
        getExpriyData()

    }, [formik.values.Expirytype])





    useEffect(() => {

        if (formik.values.Strategy == "LongStraddle" || formik.values.Strategy == "ShortStraddle") {
            formik.setFieldValue('Striketype', "Depth_of_Strike")
        }
        if (formik.values.Striketype != "Premium_Range") {
            formik.setFieldValue('Higher_Range', 1)
            formik.setFieldValue('Lower_Range', 1)
        }



    }, [formik.values.Strategy, formik.values.Striketype])


    return (
        <>
            <AddForm
                fields={fields.filter((field) => !field.showWhen || field.showWhen(formik.values))}
                page_title="Add Script option"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/user/dashboard"}
            />

        </>
    );
};
export default AddClient;























