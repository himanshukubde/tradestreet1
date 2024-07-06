import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { AddAdminScript, GET_EXPIRY_DATE } from '../../Common API/Admin'


const AddClient = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [getExpiry, setExpiry] = useState({
        loading: true,
        data: []
    })


    const SweentAlertFun = (text) => {
        Swal.fire({
            title: "Error",
            text: text,
            icon: "error",
            timer: 1500,
            timerProgressBar: true
        });

    }

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
            Quantity: 0,
            Higher_Range: 0.0,
            Lower_Range: 0.0,
            HoldExit: "",
            EntryPrice: 0.0,
            EntryRange: 0.0,
            EntryTime: "",
            ExitTime: "",
            ExitDay: "",
            FixedSM: "",
            TType: "",
            expirydata1: "",
            Expirytype: "",
            Striketype: "",
            DepthofStrike: "",
            DeepStrike: "",
            Group: "",
            CEDepthLower: 1,
            CEDepthHigher: 1,
            PEDepthLower: 1,
            PEDepthHigher: 1,
            CEDeepLower: 1,
            CEDeepHigher: 1,
            PEDeepLower: 1,
            PEDeepHigher: 1,
            Unique_ID: ""
        },

        validate: (values) => {
            let errors = {};
            const maxTime = "15:29:59";
            const minTime = "09:15:00";
            if (!values.Strategy) {
                errors.Strategy = "Please select a strategy type.";
            }
            if (!values.ETPattern) {
                errors.ETPattern = "Please select an ETPattern type.";
            }
            if (!values.Symbol) {
                errors.Symbol = "Please select a symbol type.";
            }
            if (!values.Targetvalue) {
                errors.Targetvalue = "Please enter a target value.";
            }
            if (!values.Slvalue) {
                errors.Slvalue = "Please enter a stop loss value.";
            }
            if (!values.TStype) {
                errors.TStype = "Please select a TStype.";
            }
            if (!values.Quantity) {
                errors.Quantity = "Please enter the quantity.";
            }
            if (!values.ExitTime) {
                errors.ExitTime = "Please select an exit time.";
            }
            else if (values.ExitTime > maxTime) {
                errors.ExitTime = "Exit time must be before 15:29:59.";
            }
            if (!values.EntryTime) {
                errors.EntryTime = "Please select an entry time.";
            }
            else if (values.EntryTime < minTime) {
                errors.EntryTime = "Entry time must be after 09:15:00.";
            }
            if (!values.ExitDay) {
                errors.ExitDay = "Please select an exit day.";
            }
            if (!values.Expirytype) {
                errors.Expirytype = "Please select an expiry type.";
            }
            if (!values.Lower_Range && values.Striketype === 'Premium_Range') {
                errors.Lower_Range = "Please enter the lower range.";
            }
            if (!values.Higher_Range && values.Striketype === 'Premium_Range') {
                errors.Higher_Range = "Please enter the higher range.";
            }
            if (!values.Striketype) {
                errors.Striketype = "Please select a strike type.";
            }
            if (!values.Unique_ID && (values.Strategy == "LongFourLegStretegy" || values.Strategy == "ShortFourLegStretegy" )) {
                errors.Unique_ID = "Please select Unique ID.";
            }
            if (!values.PEDeepLower && values.PEDeepLower == 0) {
                errors.PEDeepLower = values.PEDeepLower == 0 ? "PE Hedge Lower can not be Zero" : "Please Enter PE Hedge Lower.";
            }
            if (!values.PEDeepHigher) {
                errors.PEDeepHigher = values.PEDeepHigher == 0 ? "PE Hedge Higher can not be Zero" : "Please Enter PE Hedge Higher.";
            }
            if (!values.CEDepthLower) {
                errors.CEDepthLower = values.CEDepthLower == 0 ? "CE Main Lower can not be Zero" : "Please Enter CE Main Lower";
            }
            if (!values.CEDepthHigher) {
                errors.CEDepthHigher = values.CEDepthHigher == 0 ? "CE Main Higher can not be Zero" : "Please Enter CE Main Higher";
            }
            if (!values.PEDepthLower) {
                errors.PEDepthLower = values.PEDepthLower == 0 ? "PE Main Lower can not be Zero" : "Please Enter PE Main Lower";
            }
            if (!values.CEDeepLower) {
                errors.CEDeepLower = values.CEDeepLower == 0 ? "CE Hedge Lower can not be Zero" : "Please Enter CE Hedge Lower";
            }
            if (!values.CEDeepHigher) {
                errors.CEDeepHigher = values.CEDeepHigher == 0 ? "CE Hedge Higher can not be Zero" : "Please Enter CE Hedge Higher";
            }
            if (!values.PEDeepHigher) {
                errors.PEDeepHigher = values.PEDeepHigher == 0 ? "PE Hedge Higher can not be Zero" : "Please Enter PE Hedge Higher";
            }

            if (values.Striketype == "Depth_of_Strike" && values.Measurment_Type != "Shifting/FourLeg" && values.Strategy != 'LongStraddle' && values.Strategy != 'ShortStraddle') {
                if (values.DepthofStrike > 5 || values.DepthofStrike < -5 || values.DepthofStrike == 0)
                    errors.DepthofStrike = values.DepthofStrike == 0 ? "Depth of Strike cannot be Zero" : "Enter Depth of Strike value between -5 to 5";
            }
            if (values.Striketype == "Straddle_Width" && values.Measurment_Type != "Shifting/FourLeg" && values.Strategy != 'LongStraddle' && values.Strategy != 'ShortStraddle') {
                if (values.DepthofStrike > 250 || values.DepthofStrike < -250 || values.DepthofStrike == 0)
                    errors.DepthofStrike = values.DepthofStrike == 0 ? "Straddle Width cannot be Zero" : "Enter Straddle Width between -250 to 250";
            }
            if (values.Striketype == "Per_ATM" && values.Measurment_Type != "Shifting/FourLeg" && values.Strategy != 'LongStraddle' && values.Strategy != 'ShortStraddle') {
                if (values.DepthofStrike > 2.5 || values.DepthofStrike < -2.5 || values.DepthofStrike == 0)
                    errors.DepthofStrike = values.DepthofStrike == 0 ? "% of ATM cannot be Zero" : "Please Enter % of ATM value between -2.5 to 2.5";
            }
            if ((values.Measurment_Type == "Ladder/Coverd" && values.Measurment_Type != "Shifting/FourLeg" && (values.Strategy == 'BullCallLadder' || values.Strategy == "BullPutLadder")) || values.Strategy == "LongIronCondor" || values.Strategy == "ShortIronCondor") {
                if (values.DeepStrike > 10 || values.DeepStrike < -10 || values.DeepStrike == 0 || values.DeepStrike == 1 || values.DeepStrike == -1) {
                    errors.DeepStrike = values.DeepStrike == 0 ? "Deep Strike cannot be Zero" : values.DeepStrike == 1 ? "Deep Strike cannot be 1" : values.DeepStrike == -1 ? "Deep Strike cannot be -1" : "Enter Deep Strike Between -10 to 10"
                }
            }
            if (values.Measurment_Type == "Shifting/FourLeg" && (values.Strategy == 'ShortShifting' || values.Strategy == 'LongShifting')) {
                if (values.Shifting_Point > 1000 || values.Shifting_Point < 100) {
                    errors.Shifting_Point = "Please Enter in range 100-1000"
                }
            }
            if (values.Measurment_Type == "Shifting/FourLeg" && values.Strategy != 'ShortFourLegStretegy' && values.Strategy != 'LongFourLegStretegy') {
                if (values.Shifting_Value > 5 || values.Shifting_Value < 1) {
                    errors.Shifting_Value = "Please Enter Number of Shifts Between 1-5"
                }

            }
            console.log(errors)

        

            return errors;
        },

        // console.log("CPPPP")
        onSubmit: async (values) => {
            const req = {
                MainStrategy: location.state.data.selectStrategyType,
                Username: location.state.data.selectGroup,
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
                expirydata1: values.Expirytype == "Weekly" ? getExpiry && getExpiry.data[0] : values.Expirytype == "Next Week" ? getExpiry && getExpiry.data[1] : getExpiry && getExpiry.data[2],
                Expirytype: values.Expirytype,
                Striketype: values.Striketype,
                DepthofStrike: values.DepthofStrike,
                DeepStrike: values.DeepStrike,
                Group: values.Unique_ID,
                CEDepthLower: values.CEDepthLower,
                CEDepthHigher: values.CEDepthHigher,
                PEDepthLower: values.PEDepthLower,
                PEDepthHigher: values.PEDepthHigher,
                CEDeepLower: values.CEDeepLower,
                CEDeepHigher: values.CEDeepHigher,
                PEDeepLower: values.PEDeepLower,
                PEDeepHigher: values.PEDeepHigher
            }


            if (values.Striketype == "Depth_of_Strike" && (values.DepthofStrike < 0 || values.DepthofStrike > 10)) {

                return SweentAlertFun("Enter Depth of Strike's Range between 1 - 10")
            }

            if (values.Striketype == "Premium_Range" && (values.Lower_Range >= values.Higher_Range)) {

                return SweentAlertFun("Higher Range should be Greater than Lower Range")
            }

            else if (values.Strategy == 'ShortFourLegStretegy' || values.Strategy == 'LongFourLegStretegy') {
                if (values.CEDepthHigher <= values.CEDepthLower) {

                    return SweentAlertFun("Enter CE Main Higher Greater Than CE Main Lower")
                }
                else if (values.PEDepthLower >= values.PEDepthHigher) {

                    return SweentAlertFun("Enter PE Main Higher Greater Than PE Main Lower")
                }
                else if (values.CEDeepLower >= values.CEDeepHigher) {

                    return SweentAlertFun("Enter CE Hedge Higher Greater Than CE Hedge Lower")
                }
                else if (values.PEDeepLower >= values.PEDeepHigher) {

                    return SweentAlertFun("Enter PE Hedge Higher Greater Than PE Hedge Lower")
                }
                else if (values.CEDepthLower <= values.CEDeepLower || values.CEDepthLower <= values.CEDeepHigher) {

                    return SweentAlertFun("Enter CE Hedge Lower & CE Hedge Higher Smaller than CE Main Lower")
                }
                else if (values.PEDepthLower <= values.PEDeepLower || values.PEDepthLower <= values.PEDeepHigher) {

                    return SweentAlertFun("Enter PE Hedge Lower & PE Hedge Higher Smaller than PE Main Lower")
                }
            }

            console.log("CPPPP")
            try {
                const response = await AddAdminScript(req);
                if (response.Status) {
                    Swal.fire({
                        title: "Script Added !",
                        text: response.massage,
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                    setTimeout(() => {
                        navigate('/admin/allscript')
                    }, 1500)
                } else {
                    Swal.fire({
                        title: "Error !",
                        text: response.massage,
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
            } catch (err) {
                console.log("Error in adding new Script", err);
            }




        }
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
        formik.setFieldValue('DeepStrike', 2)
        formik.setFieldValue('Lower_Range', 0)
        formik.setFieldValue('Higher_Range', 0)
        formik.setFieldValue('EntryTime', "09:15:00")
        formik.setFieldValue('ExitTime', "15:25:00")
        formik.setFieldValue('TStype', "Point")
        formik.setFieldValue('Shifting_Point', 100)
        formik.setFieldValue('Shifting_Value', 1)


    }, [])

    useEffect(() => {
        formik.setFieldValue('Strategy', formik.values.Measurment_Type == "Straddle/Strangle" ? "ShortStrangle" : formik.values.Measurment_Type == "Butterfly/Condor" ? "LongIronButterfly" : formik.values.Measurment_Type == "Spread" ? "BearCallSpread" : formik.values.Measurment_Type == "Ladder/Coverd" ? "BullCallLadder" : formik.values.Measurment_Type == "Collar/Ratio" ? "LongCollar" : formik.values.Measurment_Type == "Shifting/FourLeg" ? "ShortShifting" : "")
    }, [formik.values.Measurment_Type])

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
                                [{ title: "Long Collar", value: "LongCollar" }, { title: "Short Collar", value: "ShortCollar" }, { title: "Ratio CallSpread", value: "RatioCallSpread" }, { title: "RatioPutSpread", value: "Ratio PutSpread" }] :

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
            name: "Striketype",
            label: "Strike Type",
            type: "select",
            options: [
                { label: "Depth of Strike", value: "Depth_of_Strike" },
                { label: "Straddle Width", value: "Straddle_Width" },
                { label: "Premium Range", value: "Premium_Range" },
                { label: "% of ATM", value: "Per_ATM" },
            ],
            showWhen: (value) => value.Strategy != "ShortStraddle" && value.Strategy != "LongStraddle" && value.Measurment_Type != "Shifting/FourLeg" && value.Strategy != 'ShortStraddle' && value.Strategy != 'LongStraddle',

            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "DepthofStrike",
            label: formik.values.Striketype == "Depth_of_Strike" ? "Depth of Strike" : formik.values.Striketype == "Straddle_Width" ? "Percentage" : formik.values.Striketype == "Premium_Range" ? "Premium Range" : formik.values.Striketype == "Per_ATM" ? "% of ATM" : "Depth of Strike",
            type: formik.values.Striketype == "Per_ATM" || formik.values.Striketype == "Straddle_Width" || formik.values.Striketype == "Depth_of_Strike" ? "number" : "text4",
            hiding: false,
            showWhen: (value) => formik.values.Striketype != "Premium_Range" && value.Measurment_Type != "Shifting/FourLeg" && value.Strategy != 'LongStraddle' && value.Strategy != 'ShortStraddle',
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Lower_Range",
            label: "Lower Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range" && value.Measurment_Type != "Shifting/FourLeg",
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Higher_Range",
            label: "Higher Range",
            type: "number",
            hiding: false,
            showWhen: (value) => value.Striketype == "Premium_Range" && value.Measurment_Type != "Shifting/FourLeg",
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "DeepStrike",
            label: "Deep Strike",
            type: "number",
            showWhen: (value) => (value.Measurment_Type == "Ladder/Coverd" && value.Measurment_Type != "Shifting/FourLeg" && (value.Strategy == 'BullCallLadder' || value.Strategy == "BullPutLadder")) || value.Strategy == "LongIronCondor" || value.Strategy == "ShortIronCondor",
            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Shifting_Value",
            label: "Number of Shifts",
            type: "number",
            showWhen: (value) => value.Measurment_Type == "Shifting/FourLeg" && value.Strategy != 'ShortFourLegStretegy' && value.Strategy != 'LongFourLegStretegy',
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
            name: "TStype",
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
            options: formik.values.ETPattern == "Premium Addition" ?
                [
                    { label: "Point", value: "Point" },
                ] :
                [
                    { label: "Point", value: "Point" },
                    { label: "Percentage", value: "Percentage" },
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
            col_size: 4,
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
            name: "CEDepthLower",
            label: "CE Main Lower",
            type: "text3",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "CEDepthHigher",
            label: "CE Main Higher",
            type: "text3",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDepthLower",
            label: "PE Main Lower",
            type: "text3",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDepthHigher",
            label: "PE Main Higher",
            type: "text3",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "CEDeepLower",
            label: "CE Hedge Lower",
            type: "text3",
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "CEDeepHigher",
            label: "CE Hedge Higher",
            type: "text3",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDeepLower",
            label: "PE Hedge Lower",
            type: "text3",
            hiding: false,
            showWhen: (value) => value.Strategy == 'ShortFourLegStretegy' || value.Strategy == 'LongFourLegStretegy',
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "PEDeepHigher",
            label: "PE Hedge Higher",
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
            type: "select1",
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
            col_size: 3,
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
                btn_name1_route={"/admin/allscript"}
            />

        </>
    );
};
export default AddClient;























