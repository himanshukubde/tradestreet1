import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import {GET_EXPIRY_DATE, Get_StrikePrice, Get_Symbol, Get_Pattern_Time_Frame, Get_Pattern_Charting, Get_Pattern_Name } from '../../Common API/Admin'
import { AddScript} from '../../Common API/User'

const AddClient = () => {

    const location = useLocation()
    const userName = localStorage.getItem('name')
    const navigate = useNavigate()
    const [getSymbolData, setSymbolData] = useState({
        loading: true,
        data: []
    })

    const [getStricke, setStricke] = useState({
        loading: true,
        data: []
    })

    const [getTimeFrame, setTimeFrame] = useState({
        loading: true,
        data: []
    })


  
    const [getExpiryDate, setExpiryDate] = useState({
        loading: true,
        data: []
    })

    const [getChartPattern, setChartPattern] = useState({
        loading: true,
        data: []
    })

    const [getPattern, setPattern] = useState({
        loading: true,
        data: []
    })
    const [refresh, setRefresh] = useState(false)


 

    const formik = useFormik({
 
        initialValues: {
           MainStrategy: location.state.data.selectStrategyType,
            Username: "",
            Strategy: "",
            ETPattern: "",
            Timeframe: "",
            Exchange: "",
            Symbol: "",
            Instrument: "",
            Strike: "",
            Optiontype: "",
            Targetvalue: 1.0,
            Slvalue: 1.00,
            TStype: "",
            Quantity: 1,
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
            expirydata1: "",
            Expirytype: "",
            Striketype: "",
            DepthofStrike: 0,
            DeepStrike: 0,
            Group: "",
            CEDepthLower: 0.0,
            CEDepthHigher: 0.0,
            PEDepthLower: 0.0,
            PEDepthHigher: 0.0,
            CEDeepLower: 0.0,
            CEDeepHigher: 0.0,
            PEDeepLower: 0.0,
            PEDeepHigher: 0.0,
            TradeCount: 3

        },

        validate: (values) => {
            let errors = {};
            if (!values.Exchange) {
                errors.Exchange = "Select Exchange type"
            }
            if (!values.Instrument) {
                errors.Instrument = "Enter Instrument Type"
            }
            if (!values.Symbol) {
                errors.Symbol = "Enter Symbol Type"
            }
            if (!values.Optiontype) {
                errors.Optiontype = "Enter Option Type"
            }
            if (!values.Strike) {
                errors.Strike = "Enter Strike Price"
            }
            if (!values.expirydata1) {
                errors.expirydata1 = "Enter expirydata Type"
            }
            
            if (!values.Strategy) {
                errors.Strategy = "Enter Strategy Type"
            }
            if (!values.Timeframe) {
                errors.Timeframe = "Enter Timeframe Type"
            }
            if (!values.ETPattern) {
                errors.ETPattern = "Enter ETPattern Type"
            }
            if (!values.HoldExit) {
                errors.HoldExit = "Enter HoldExit Type"
            }
            if (!values.TStype) {
                errors.TStype = "Enter TStype Type"
            }
            if (!values.Slvalue) {
                errors.Slvalue = "Enter Slvalue Type"
            }
            if (!values.Targetvalue) {
                errors.Targetvalue = "Enter Targetvalue Type"
            }

            if (!values.TType) {
                errors.TType = "Enter TType Type"
            }
            if (!values.Quantity) {
                errors.Quantity = "Enter Quantity Type"
            }
            if (!values.ExitDay) {
                errors.ExitDay = "Enter ExitDay Type"
            }
            if (!values.EntryTime) {
                errors.EntryTime = "Enter EntryTime Type"
            }
            if (!values.ExitTime) {
                errors.ExitTime = "Enter ExitTime Type"
            }

            return errors;
        },
        onSubmit: async (values) => {
            const req = {
                MainStrategy: location.state.data.selectStrategyType,
                Username: userName,
                Strategy: values.Strategy,
                ETPattern: values.ETPattern,
                Timeframe: values.Timeframe,
                Exchange: values.Exchange,
                Symbol: values.Symbol,
                Instrument: values.Instrument,
                Strike: values.Strike,
                Optiontype: values.Optiontype,
                Targetvalue: values.Targetvalue,
                Slvalue: values.Slvalue,
                TStype: values.TStype,
                Quantity: values.Quantity,
                LowerRange: 0.0,
                HigherRange: 0.0,
                HoldExit: values.HoldExit,
                EntryPrice: 0.0,
                EntryRange: 0.0,
                EntryTime: values.EntryTime,
                ExitTime: values.ExitTime,
                ExitDay: values.ExitDay,
                TradeExecution: "Paper Trade",
                TradeCount: 3,
                FixedSM: "",
                TType: values.TType,
                serendate: "2023-10-25",
                expirydata1: values.expirydata1,
                Expirytype: "",
                Striketype: "",
                DepthofStrike: 0,
                DeepStrike: 0,
                Group: "",
                CEDepthLower: 0.0,
                CEDepthHigher: 0.0,
                PEDepthLower: 0.0,
                PEDepthHigher: 0.0,
                CEDeepLower: 0.0,
                CEDeepHigher: 0.0,
                PEDeepLower: 0.0,
                PEDeepHigher: 0.0,
            }
           
            await AddScript(req)
                .then((response) => {
                    if (response.Status) {
                        Swal.fire({
                            title: "Script Added !",
                            text: "New Script Added successfully..!",
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
                            text: "Error in added new Script..!",
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
        formik.setFieldValue('Exchange', location.state.data.Exchange)
        formik.setFieldValue('Instrument', location.state.data['Instrument Type'])
        formik.setFieldValue('Symbol', location.state.data['Instrument Name'])
        formik.setFieldValue('Strategy', location.state.data.TradePattern)
        formik.setFieldValue('Timeframe', location.state.data.TimeFrame)
        formik.setFieldValue('ETPattern', location.state.data.Pattern)
        formik.setFieldValue('HoldExit', location.state.data.Trend)
        formik.setFieldValue('TStype', location.state.data.TStype)
        formik.setFieldValue('Slvalue', location.state.data['SL value'])
        formik.setFieldValue('Targetvalue', location.state.data['Target value'])
        formik.setFieldValue('TType', location.state.data.TType)
        formik.setFieldValue('Quantity', location.state.data.Quantity)
        formik.setFieldValue('ExitDay', location.state.data.ExitDay)
        formik.setFieldValue('EntryTime', location.state.data.EntryTime)
        formik.setFieldValue('ExitTime', location.state.data.ExitTime)
    }, [])





    const fields = [

        {
            name: "Exchange",
            label: "Exchange",
            type: "select",
            options: [
                { label: "NFO", value: "NFO" },
                { label: "NSE", value: "NSE" },
                { label: "MCX", value: "MCX" },
                { label: "CDS", value: "CDS" },
            ],

            hiding: false,
            label_size: 12,
            col_size: 4,
            disable: false,
        },
        {
            name: "Exchange",
            label: "Exchange",
            type: "cp",
            hiding: false,
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Instrument",
            label: "Instrument",
            type: "select",
            options: formik.values.Exchange == "NFO" ?
                [
                    { label: "OPTIDX", value: "OPTIDX" },
                    { label: "FUTIDX", value: "FUTIDX" },
                    { label: "FUTSTK", value: "FUTSTK" },
                    { label: "OPTSTK", value: "OPTSTK" },
                ]
                : formik.values.Exchange == "MCX" ?
                    [
                        { label: "OPTFUT", value: "OPTFUT" },
                        { label: "FUTCOM", value: "FUTCOM" },
                        { label: "FUTIDX", value: "FUTIDX" },
                    ]
                    : formik.values.Exchange == "CDS" ?
                        [
                            { label: "FUTCUR", value: "FUTCUR" },
                            { label: "OPTCUR", value: "OPTCUR" },
                        ]
                        :
                        [],
            showWhen: (values) => values.Exchange == "NFO" || values.Exchange == "CDS" || values.Exchange == "MCX",
            hiding: false,
            label_size: 12,
            col_size: 3,
            disable: false,
        },
        {
            name: "Symbol",
            label: "Symbol",
            type: "select",
            options: getSymbolData.data && getSymbolData.data.map((item) => ({
                label: item,
                value: item,
            })),
            showWhen: (values) => values.Exchange === "NFO" || values.Exchange === "NSE" || values.Exchange === "CDS" || values.Exchange === "MCX",
            label_size: 12,
            hiding: false,
            col_size: formik.values.Exchange == "NSE" ? 12 : 3,
            disable: false,
        },
        {
            name: "Optiontype",
            label: "Option Type",
            type: "select",
            options: [
                { label: "CE", value: "CE" },
                { label: "PE", value: "PE" },
            ],
            showWhen: (values) => values.Instrument == "OPTIDX" || values.Instrument == "OPTSTK",
            label_size: 12,
            hiding: false,
            col_size: 2,
            disable: false,
        },
        {
            name: "Strike",
            label: "Strike Price",
            type: "select",
            options: getStricke.data && getStricke.data.map((item) => ({
                label: item,
                value: item
            })),
            showWhen: (values) => values.Instrument == "OPTIDX" || values.Instrument == "OPTSTK",
            label_size: 12,
            col_size: 2,
            hiding: false,
            disable: false,
        },
        {
            name: "expirydata1",
            label: "Expiry Date",
            type: "select",
            options: getExpiryDate && getExpiryDate.data.map((item) => ({
                label: item,
                value: item
            })),
            showWhen: (values) => values.Exchange === "NFO" || values.Exchange === "CDS" || values.Exchange === "MCX",
            label_size: 12,
            hiding: false,
            col_size: 2,
            disable: false,
        },
        {
            name: "Strategy",
            label: "Select  Pattern Type",
            type: "select",
            options: [
                { label: "Candlestick Pattern", value: "CandlestickPattern" },
                { label: "Charting Pattern", value: "ChartingPattern" },
            ],

            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "Timeframe",
            label: "Time Frame",
            type: "select",
            options: getTimeFrame && getTimeFrame.data.map((item) => ({
                label: item,
                value: item
            })),
          
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "ETPattern",
            label: "Select Pattern",
            type: "select",
            options: formik.values.Strategy == 'ChartingPattern' ? getChartPattern.data && getChartPattern.data.map((item) => ({
                label: item,
                value: item
            })) :
                getPattern.data && getPattern.data.map((item) => ({
                    label: item,
                    value: item
                })),


            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "HoldExit",
            label: "Previous Trend",
            type: "select",
            options: [
                { label: "Uptrend", value: "Uptrend" },
                { label: "Medium", value: "Medium" },
                { label: "Downtrend", value: "Downtrend" },
                { label: "Without Trend", value: "Without Trend" },
            ],

            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
        },
        {
            name: "TStype",
            label: "Measurment Type",
            type: "select",
            options: [
                { label: "Point", value: "Point" },
                { label: "Percantage", value: "Percantage" },
            ],

            label_size: 12,
            hiding: false,
            col_size: 4,
            disable: false,
        },
        {
            name: "Slvalue",
            label: "Stop Loss",
            type: "number",


            label_size: 12,
            hiding: false,
            col_size: 4,
            disable: false,
        },
        {
            name: "Targetvalue",
            label: "Target value",
            type: "number",

            label_size: 12,
            hiding: false,
            col_size: 4,
            disable: false,
        },
        {
            name: "TType",
            label: "Transation Type",
            type: "select",
            options: [
                { label: "BUY", value: "BUY" },
                { label: "SELL", value: "SELL" },

            ],
            label_size: 12,
            hiding: false,
            col_size: 3,
            disable: false,
        },
        {
            name: "Quantity",
            label: "Quantity",
            type: "number",

            label_size: 12,
            hiding: false,
            col_size: 3,
            disable: false,
        },
        {
            name: "Quantity",
            label: "Quantity",
            type: "cp",
            label_size: 12,
            hiding: false,
            col_size: 3,
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
            label_size: 12,
            hiding: false,
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


    ];


    const getSymbol = async () => {
        if (formik.values.Exchange) {
            const data = { Exchange: formik.values.Exchange, Instrument: formik.values.Instrument }
            await Get_Symbol(data)
                .then((response) => {
                    if (response.Status) {
                        setSymbolData({
                            loading: false,
                            data: response.Symbol
                        })

                    }
                    else {
                        setSymbolData({
                            loading: false,
                            data: []
                        })

                    }
                })
                .catch((err) => {
                    console.log("Error in fatching the Symbol", err)
                })
        }
    }

    useEffect(() => {
        getSymbol()
    }, [formik.values.Instrument, formik.values.Exchange, refresh])


    const getStrikePrice = async () => {
        if (formik.values.Instrument && formik.values.Exchange && formik.values.Symbol) {

            const data = {
                Exchange: formik.values.Exchange,
                Instrument: formik.values.Instrument,
                Symbol: formik.values.Symbol
            }
            await Get_StrikePrice(data)
                .then((response) => {
                    if (response.Status) {
                        setStricke({
                            loading: false,
                            data: response.Strike
                        })
                    }
                })
        }


    }
    useEffect(() => {
        getStrikePrice()
    }, [formik.values.Instrument, formik.values.Exchange, formik.values.Symbol])


    const getExpiry = async () => {
        if (formik.values.Instrument && formik.values.Exchange && formik.values.Symbol && formik.values.Exchange != 'NSE') {
            const data = {
                Exchange: formik.values.Exchange,
                Instrument: formik.values.Instrument,
                Symbol: formik.values.Symbol,
                Strike: formik.values.Strike
            }

            await GET_EXPIRY_DATE(data)
                .then((response) => {
                    if (response.Status) {
                        setExpiryDate({
                            loading: false,
                            data: response['Expiry Date']
                        })

                    } else {
                        setExpiryDate({
                            loading: false,
                            data: []
                        })

                    }
                })
                .catch((err) => {
                    console.log("Error in finding the Expiry date", err)
                })
        }

    }

    useEffect(() => {
        getExpiry()
    }, [formik.values.Instrument, formik.values.Exchange, formik.values.Symbol, formik.values.Strike])


    const GetPatternTimeFrame = async () => {

        await Get_Pattern_Time_Frame()
            .then((response) => {
                setTimeFrame({
                    loading: false,
                    data: response
                })
            })
            .catch((err) => {
                console.log("Error in finding the time frame", err)
            })
    }



    const GetPatternName = async () => {
        await Get_Pattern_Name()
            .then((response) => {
                if (response.Status) {
                    setPattern({
                        loading: false,
                        data: response.PatternName
                    })
                }
                else {
                    setPattern({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding the pattern", err)
            })
    }




    const GetPatternCharting = async () => {
        await Get_Pattern_Charting()
            .then((response) => {
                if (response.Status) {
                    setChartPattern({
                        loading: false,
                        data: response.PatternName
                    })
                }
                else {
                    setChartPattern({
                        loading: false,
                        data: []
                    })

                }
            })
    }

    useEffect(() => {
        GetPatternTimeFrame()
        GetPatternName()
        GetPatternCharting()
    }, [])





    useEffect(() => {

        if (formik.values.set_Range == "No") {
            formik.setFieldValue('LowerRange', "1")
            formik.setFieldValue('HigherRange', "1")
            formik.setFieldValue('HoldExit', "")
        }
        if (formik.values.Set_First_Trade_Range == "No") {
            formik.setFieldValue('EntryPrice', "1")
            formik.setFieldValue('EntryRange', "1")

        }
        if (formik.values.Instrument == "FUTIDX" || formik.values.Instrument == "FUTSTK") {
            formik.setFieldValue('Optiontype', "")
            formik.setFieldValue('Strike', "")
        }
        if (formik.values.Exchange == "NSE") {
            formik.setFieldValue('Instrument', "")

        }

    }, [formik.values.set_Range, formik.values.Set_First_Trade_Range, formik.values.Instrument, formik.values.Exchange])


    return (
        <>
            <AddForm
                fields={fields.filter((field) => !field.showWhen || field.showWhen(formik.values))}
                page_title="Add Script pattern"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/user/dashboard"}
            />
        </>
    );
};
export default AddClient;
