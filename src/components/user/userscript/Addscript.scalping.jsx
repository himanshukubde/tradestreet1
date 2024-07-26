import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol, Get_StrikePrice, GET_EXPIRY_DATE, GetExchange, ExpriyEndDate } from '../../CommonAPI/Admin'
import { AddScript } from '../../CommonAPI/User'

const AddClient = () => {
    const userName = localStorage.getItem('name')
    const navigate = useNavigate()
    const location = useLocation()
    const [getAllExchange, setAllExchange] = useState([])
    const [getSymbolData, setSymbolData] = useState({
        loading: true,
        data: []
    })

    const [getStricke, setStricke] = useState({
        loading: true,
        data: []
    })

    const [getExpiryDate, setExpiryDate] = useState({
        loading: true,
        data: []
    })

    const [serviceEndDate, setServiceEndDate] = useState('')


    console.log("serviceEndDate :", serviceEndDate)
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
            Username: "",
            Strategy: "",
            ETPattern: "",
            Timeframe: "",
            Exchange: "",
            Symbol: "",
            Instrument: "",
            Strike: "",
            Optiontype: "",
            Targetvalue: 1,
            Slvalue: 1,
            TStype: "",
            Quantity: 1,
            LowerRange: 0,
            HigherRange: 0,
            HoldExit: "",
            EntryPrice: 0,
            EntryRange: 0,
            EntryTime: "09:15:00",
            ExitTime: "15:25:00",
            ExitDay: "",
            FixedSM: "Single",
            TType: "",
            serendate: "",
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
            set_Range: "",
            Set_First_Trade_Range: "",
            Trade_Count: 1,
            Trade_Execution: "Paper Trade",
        },
        validate: (values) => {
            let errors = {};
            const maxTime = "15:29:59";
            const minTime = "09:15:00";

            if (!values.Strategy) {
                errors.Strategy = "Please Select Strategy Type.";
            }
            if (!values.Exchange) {
                errors.Exchange = "Please Select Exchange Type.";
            }
            if (!values.Instrument && values.Exchange !== 'NSE') {
                errors.Instrument = "Please Select Instrument Type.";
            }
            if (!values.Symbol) {
                errors.Symbol = "Please Select Symbol Type.";
            }
            if (!values.Optiontype && (values.Instrument === "OPTSTK" || values.Instrument === "OPTIDX")) {
                errors.Optiontype = "Please Select Option Type.";
            }
            if (!values.Strike && (values.Instrument === "OPTSTK" || values.Instrument === "OPTIDX")) {
                errors.Strike = "Please Select Strike Price.";
            }
            if (!values.expirydata1 && values.Exchange !== 'NSE') {
                errors.expirydata1 = "Select Expiry Date.";
            }
            if (!values.TType) {
                errors.TType = "Please Select Transaction Type.";
            }
            if (!values.Quantity) {
                errors.Quantity = formik.values.Exchange == "NFO" ? "Please Enter Lot Value." : "Please Enter Quantity Value.";
            }
            if (!values.ExitTime) {
                errors.ExitTime = "Please Select Exit Time.";
            } else if (values.ExitTime > maxTime) {
                errors.ExitTime = "Exit Time Must be Before 15:29:59.";
            }
            if (!values.TStype) {
                errors.TStype = "Please Select Measurement Type.";
            }
            if (!values.EntryTime) {
                errors.EntryTime = "Please Select Entry Time.";
            } else if (values.EntryTime < minTime) {
                errors.EntryTime = "Entry Time Must be After 09:15:00.";
            }
            if (!values.ExitDay) {
                errors.ExitDay = "Please Select Exit Day.";
            }
            if (!values.EntryPrice && values.Set_First_Trade_Range) {
                errors.EntryPrice = "Please Enter The Lowest Price.";
            }
            if (!values.EntryRange && values.Set_First_Trade_Range) {
                errors.EntryRange = "Please Enter The Highest Price.";
            }
            if (!values.Targetvalue) {
                errors.Targetvalue = values.Strategy == "Fixed Price" ? "Please Enter A Target Price." : "Please Enter A Target Value.";
            }
            if (!values.LowerRange && (values.set_Range || values.Strategy === "Fixed Price")) {
                errors.LowerRange = "Please Enter The Lower Range.";
            }
            if (!values.HigherRange && (values.set_Range || values.Strategy === "Fixed Price")) {
                errors.HigherRange = "Please Enter The Higher Range.";
            }
            if (!values.Group && values.Strategy === "Fixed Price") {
                errors.Group = "Please Select A Unique ID.";
            }
            if (!values.HoldExit && values.set_Range) {
                errors.HoldExit = "Please Select Whether To Hold Or Exit.";
            }
            if (!values.Slvalue) {
                errors.Slvalue = values.Strategy == "Fixed Price" ? "Please Enter Stop Loss Price." : "Please Select A Stop Loss Value.";
            }

            return errors;
        },

        onSubmit: async (values) => {

            const req = {
                MainStrategy: location.state.data.selectStrategyType,
                Username: userName,
                Strategy: values.Strategy,
                Exchange: values.Exchange,
                Instrument: values.Instrument,
                Symbol: values.Symbol,
                Optiontype: values.Optiontype,
                Strike: values.Strike,
                expirydata1: values.expirydata1,
                TType: values.TType == 0 ? "" : values.TType,
                LowerRange: values.Strategy === "Fixed Price" ? 0 : values.LowerRange,
                HigherRange: values.Strategy === "Fixed Price" ? 0 : values.HigherRange,
                
                TStype: values.TStype,
                Targetvalue: values.Targetvalue,
                Slvalue: values.Slvalue,
                EntryPrice: values.Strategy === "Fixed Price" ? values.LowerRange : values.EntryPrice,
                EntryRange: values.Strategy === "Fixed Price" ? values.HigherRange : values.EntryRange,
                HoldExit: values.set_Range ? values.HoldExit : "Hold",
                ExitDay: values.ExitDay,
                EntryTime: values.EntryTime,
                ExitTime: values.ExitTime,
                ETPattern: "",
                Timeframe: "",
                Quantity: values.Quantity,
                serendate: serviceEndDate,
                FixedSM: "Single",
                Expirytype: "",
                Striketype: "",
                DepthofStrike: 0,
                DeepStrike: 0,
                Group: values.Strategy == "Fixed Price" ? values.Group : '',
                CEDepthLower: 0.0,
                CEDepthHigher: 0.0,
                PEDepthLower: 0.0,
                PEDepthHigher: 0.0,
                CEDeepLower: 0.0,
                CEDeepHigher: 0.0,
                PEDeepLower: 0.0,
                PEDeepHigher: 0.0,
                TradeCount: values.Trade_Count,
                TradeExecution: values.Trade_Execution
            }

            if (values.Set_First_Trade_Range == true && (Number(values.EntryPrice) >= Number(values.EntryRange) || Number(values.EntryRange) == 0 || Number(values.EntryPrice) == 0)) {
                return SweentAlertFun("First Trade Higher Range should be greater than First Trade Lower Range")
            }

            if (values.set_Range == true && (Number(values.LowerRange) >= Number(values.HigherRange) || Number(values.LowerRange) == 0 || Number(values.HigherRange) == 0)) {
                return SweentAlertFun("Higher Price should be greater than Lower Range")
            }

            if (values.Strategy == 'Fixed Price' && values.TType == 'BUY' && (Number(values.LowerRange) >= Number(values.HigherRange) || Number(values.Targetvalue) <= Number(values.HigherRange) || Number(values.Slvalue) >= Number(values.LowerRange))) {
                return SweentAlertFun(Number(values.Targetvalue) <= Number(values.HigherRange) ? "Target should be Greater than Higher Range " : Number(values.HigherRange) <= Number(values.LowerRange) ? "Higher Range should be Greater than Lower Range" : "Stoploss should be Smaller than Lower Range")
            }

            if (values.Strategy == 'Fixed Price' && values.TType == 'SELL' && (Number(values.Targetvalue) >= Number(values.LowerRange) || values.Slvalue <= Number(values.HigherRange))) {
                return SweentAlertFun(Number(values.Targetvalue) >= Number(values.LowerRange) ? "Target should be Smaller than Lower Range" : "Stoploss should be Greater than Higher Range")
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


   
    console.log("location.state.data :", location.state.data)

    useEffect(() => {
        formik.setFieldValue('Strategy', location.state.data.ScalpType)
        formik.setFieldValue('Exchange', location.state.data.Exchange)
        formik.setFieldValue('Instrument', location.state.data['Instrument Type'])
        formik.setFieldValue('Symbol', location.state.data['Instrument Symbol'])
        formik.setFieldValue('expirydata1', location.state.data.ExpiryDate)
        formik.setFieldValue('TType', location.state.data.TType)
        formik.setFieldValue('Lotsize', location.state.data.Lotsize)
        formik.setFieldValue('Set_First_Trade_Range', location.state.data.EntryPrice == 0 || location.state.data.EntryRange == 0 ? false : true)
        formik.setFieldValue('EntryPrice', location.state.data.EntryPrice)
        formik.setFieldValue('EntryRange', location.state.data.EntryRange)
        formik.setFieldValue('TStype', location.state.data.TStype)
        formik.setFieldValue('Targetvalue', location.state.data['Booking Point'])
        formik.setFieldValue('Slvalue', location.state.data['Re-entry Point'])
        formik.setFieldValue('set_Range', location.state.data.LowerRange == 0 || location.state.data.HigherRange == 0 ? false : true)
        formik.setFieldValue('LowerRange', location.state.data.LowerRange)
        formik.setFieldValue('HigherRange', location.state.data.HigherRange)
        formik.setFieldValue('HoldExit', location.state.data.HoldExit)
        formik.setFieldValue('ExitDay', location.state.data.ExitDay)
        formik.setFieldValue('EntryTime', location.state.data.EntryTime)
        formik.setFieldValue('ExitTime', location.state.data.ExitTime)
        formik.setFieldValue('Trade_Execution', location.state.data.TradeExecution)
        formik.setFieldValue('Trade_Count', location.state.data.TradeCount)
        formik.setFieldValue('Group', location.state.data.GroupN)


    }, [])

     

    const fields = [
        {
            name: "Strategy",
            label: "Scalping Type",
            type: "radio2",
            title: [{ title: "Fixed Price", value: "Fixed Price" }, { title: "One Directional", value: "One Directional" }, { title: "Multi Directional", value: "Multi Directional" }],
            hiding: false,
            label_size: 12,
            col_size: 12,
            disable: false,
          },
          {
            name: "Exchange",
            label: "Exchange",
            type: "select",
            options: getAllExchange && getAllExchange.map((item) => ({
              label: item,
              value: item,
            })),
            hiding: false,
            label_size: 12,
            col_size: formik.values.Exchange == 'NFO' && (formik.values.Instrument === "FUTSTK" || formik.values.Instrument === "FUTIDX") ? 3 : formik.values.Exchange == 'NFO' && (formik.values.Instrument === "OPTIDX" || formik.values.Instrument === "OPTSTK") ? 4 : formik.values.Exchange == 'NSE' && formik.values.Instrument == 'FUTIDX' ? 6 : 6,
            disable: false,
          },
          {
            name: "Instrument",
            label: "Instrument",
            type: "select",
            options: formik.values.Exchange === "NFO" ?
              [
                { label: "FUTIDX", value: "FUTIDX" },
                { label: "FUTSTK", value: "FUTSTK" },
                { label: "OPTIDX", value: "OPTIDX" },
                { label: "OPTSTK", value: "OPTSTK" },
              ]
              : formik.values.Exchange === "MCX" ?
                [
                  { label: "OPTFUT", value: "OPTFUT" },
                  { label: "FUTCOM", value: "FUTCOM" },
                  { label: "FUTIDX", value: "FUTIDX" },
                ]
                : formik.values.Exchange == "CDS" ?
                  [
                    { label: "OPTCUR", value: "OPTCUR" },
                    { label: "FUTCUR", value: "FUTCUR" },
                  ]
                  :
                  [],
            showWhen: (values) => values.Exchange == "NFO" || values.Exchange == "CDS" || values.Exchange == "MCX",
            hiding: false,
            label_size: 12,
            col_size: formik.values.Instrument === "FUTSTK" || formik.values.Instrument === "FUTIDX" ? 3 : formik.values.Instrument === "OPTIDX" || formik.values.Instrument === "OPTSTK" ? 4 : 3,
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
            col_size: formik.values.Exchange == "NSE" ? 6 : formik.values.Instrument === "OPTIDX" || formik.values.Instrument === "OPTSTK" ? 4 : 3,
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
            col_size: 4,
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
            col_size: 4,
            hiding: false,
            disable: false,
          },
          {
            name: "expirydata1",
            label: "Expiry Date",
            type: "select1",
            options: getExpiryDate && getExpiryDate.data.map((item) => ({
              label: item,
              value: item
            })),
            showWhen: (values) => values.Exchange === "NFO" || values.Exchange === "CDS" || values.Exchange === "MCX",
            label_size: 12,
            hiding: false,
            col_size: formik.values.Instrument === "FUTSTK" || formik.values.Instrument === "FUTIDX" ? 3 : 4,
            disable: false,
          },
          {
            name: "TType",
            label: "Type",
            type: "trt",
            showWhen: (values) => (values.Strategy === 'Multi Directional' || values.Strategy === 'One Directional') && (values.Instrument === "FUTIDX" || values.Instrument === "FUTSTK") || values.Strategy != 'Fixed Price',
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
          },
          {
            name: "Set_First_Trade_Range",
            label: "Set First Trade Range",
            type: "checkbox",
      
            showWhen: (values) => values.Strategy == "Multi Directional" || values.Strategy == "One Directional",
            label_size: 12,
            col_size: 12,
            hiding: false,
            disable: false,
          },
          {
            name: "EntryPrice",
            label: "First Trade Lower Range",
            type: "text5",
            showWhen: (values) => formik.values.Set_First_Trade_Range,
            col_size: 6,
            disable: false,
            hiding: false,
          },
          {
            name: "EntryRange",
            label: "First Trade Higher Range",
            type: "text5",
            showWhen: (values) => formik.values.Set_First_Trade_Range,
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
          },
          {
            name: "TStype",
            label: "Measurement Type",
            type: "select",
            options: [
              { label: "Percentage", value: "Percentage" },
              { label: "Point", value: "Point" },
            ],
            showWhen: (values) => values.Strategy != "Fixed Price",
            label_size: 12,
            col_size: 4,
            hiding: false,
            disable: false,
          },
      
          {
            name: "Targetvalue",
            label: formik.values.Strategy == "Fixed Price" ? "Target Price" : formik.values.Strategy == "One Directional" ? "Fixed Target" : "Booking Point",
            type: "text5",
            label_size: 12,
            col_size: formik.values.Strategy == "Fixed Price" ? 6 : 4,
            disable: false,
            hiding: false,
          },
          {
            name: "Slvalue",
            label: formik.values.Strategy == "Fixed Price" ? "Stoploss Price" : "Re-Entry Point",
            type: "text5",
            label_size: 12,
            col_size: formik.values.Strategy == "Fixed Price" ? 6 : 4,
            disable: false,
            hiding: false,
          },
          {
            name: "TType",
            label: "Transaction Type",
            type: "select1",
            options: [
              { label: "BUY", value: "BUY" },
              { label: "SELL", value: "SELL" },
            ],
            label_size: 12,
            hiding: false,
            col_size: 6,
            disable: false,
          },
          {
            name: "Quantity",
            label: formik.values.Exchange == "NFO" ? "Lot" : "Quantity",
            type: "text5",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
          },
      
          {
            name: "set_Range",
            label: "Trade Range",
            type: "checkbox",
      
            showWhen: (values) => values.Strategy == "Multi Directional" || values.Strategy == "One Directional",
            label_size: 12,
            col_size: 12,
            hiding: false,
            disable: false,
          },
          {
            name: "LowerRange",
            label: "Lower Range",
            type: "text5",
            showWhen: (values) => values.set_Range == true || values.Strategy == "Fixed Price",
            label_size: 12,
            col_size: formik.values.Strategy == "Fixed Price" ? 4 : 4,
            disable: false,
            hiding: false,
          },
          {
            name: "HigherRange",
            label: "Higher Range",
            type: "text5",
            showWhen: (values) => values.set_Range == true || values.Strategy == "Fixed Price",
            label_size: 12,
            col_size: formik.values.Strategy == "Fixed Price" ? 4 : 4,
            disable: false,
            hiding: false,
          },
      
          {
            name: "HoldExit",
            label: "Hold/Exit",
            type: "select",
            options: [
              { label: "Hold", value: "Hold" },
              { label: "Exit", value: "Exit" },
            ],
            showWhen: (values) => values.set_Range == true && (values.Strategy == "Multi Directional" || values.Strategy == "One Directional"),
            label_size: 12,
            col_size: formik.values.set_Range ? 4 : 3,
            disable: false,
            hiding: false,
          },
      
          {
            name: "Group",
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
            showWhen: (values) => values.Strategy == "Fixed Price",
            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
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
            col_size: 4,
            disable: false,
            hiding: false,
          },
          
        {
            name: "Trade_Execution",
            label: "Trade Execution",
            type: "select",
            options: [
                { label: "Paper Trade", value: "Paper Trade" },
                { label: "Live Trade", value: "Live Trade" },
            ],

            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
        {
            name: "Trade_Count",
            label: "Trade Count",
            type: "text5",
            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },

        {
            name: "EntryTime",
            label: "Entry Time",
            type: "timepiker",
            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "timepiker",
            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
    ];






    const GetExpriyEndDate = async () => {
        const data = { Username: userName }
        await ExpriyEndDate(data)
            .then((response) => {
                if (response.Status) {

                    setServiceEndDate(response.Data[0].ExpiryDate)
                }
                else {
                    setServiceEndDate('')
                }
            })
            .catch((err) => {
                console.log("Error in finding the Service end date", err)
            })
    }


    useEffect(() => {
        GetExpriyEndDate()
    }, [])

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
    }, [formik.values.Instrument, formik.values.Exchange])


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


    const get_Exchange = async () => {

        await GetExchange()
            .then((response) => {
                if (response.Status) {
                    setAllExchange(response.Exchange)
                }
                else {
                    setAllExchange([])
                }
            })
            .catch((err) => {
                console.log("Error to finding the Exchange value", err)

            })
    }
    useEffect(() => {
        get_Exchange()
    }, [])




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


    useEffect(() => {

        if (!formik.values.set_Range == false) {
          formik.setFieldValue('LowerRange', 0)
          formik.setFieldValue('HigherRange', 0)
    
        }
        if (!formik.values.Set_First_Trade_Range) {
          formik.setFieldValue('EntryPrice', 0)
          formik.setFieldValue('EntryRange', 0)
        }
    
    
    
        if (formik.values.Instrument == "FUTIDX" || formik.values.Instrument == "FUTSTK") {
          formik.setFieldValue('Optiontype', "")
          formik.setFieldValue('Strike', "")
        }
        if (formik.values.Exchange == "NSE") {
          formik.setFieldValue('Instrument', "FUTIDX")
          formik.setFieldValue('Symbol', "")
          formik.setFieldValue('expirydata1', "")
          formik.setFieldValue('Strike', "")
          formik.setFieldValue('Optiontype', "")
        }
    
      }, [formik.values.set_Range, formik.values.Set_First_Trade_Range, formik.values.Instrument, formik.values.Exchange])


    return (
        <>
            <AddForm
                fields={fields.filter(
                    (field) => !field.showWhen || field.showWhen(formik.values)
                )}
                page_title="Add Script scalping"
                btn_name="Add"
                btn_name1="Cancel"
                formik={formik}
                btn_name1_route={"/user/dashboard"}
            />
        </>
    );
};
export default AddClient;
