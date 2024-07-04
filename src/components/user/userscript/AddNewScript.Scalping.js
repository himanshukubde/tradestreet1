import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol, Get_StrikePrice, GET_EXPIRY_DATE } from '../../Common API/Admin'
import { AddScript } from '../../Common API/User'



const AddClient = () => {

  const userName = localStorage.getItem('name')

  const navigate = useNavigate()
  const location = useLocation()


 
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


  const [refresh, setRefresh] = useState(false)



  const formik = useFormik({

    initialValues: {
      MainStrategy: "",
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
      Slvalue: 1.0,
      TStype: "Point",
      Quantity: 1,
      LowerRange: 1,
      HigherRange: 1,
      HoldExit: "",
      EntryPrice: 1,
      EntryRange: 1,
      EntryTime: "",
      ExitTime: "",
      ExitDay: "",
      TradeCount: 3,
      TradeExecution: "Paper Trade",
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
      Set_First_Trade_Range: ""
    },

    validate: (values) => {
      let errors = {};
      if (!values.Strategy) {
        errors.Strategy = "Select Strategy type"
      }
      if (!values.Exchange) {
        errors.Exchange = "Select Exchange type"
      }
      if (!values.Instrument) {
        errors.Instrument = "Select Instrument type"
      }
      // if (!values.Instrument) {
      //   errors.Instrument = "Select Instrument type"
      // }
      if (!values.Symbol) {
        errors.Symbol = "Select Symbol type"
      }
      if (!values.Optiontype && (values.Instrument == "OPTSTK" || values.Instrument == "OPTIDX")) {
        errors.Optiontype = "Select Optiontype type"
      }
      if (!values.Strike && (values.Instrument == "OPTSTK" || values.Instrument == "OPTIDX")) {
        errors.Strike = "Select Strike Price type"
      }
      if (!values.expirydata1) {
        errors.expirydata1 = "Select Expiry Date"
      }
      if (!values.TType) {
        errors.TType = "Select Transaction Type"
      }
      if (!values.Quantity) {
        errors.Quantity = "Select Quantity type"
      }

      if (!values.ExitTime) {
        errors.ExitTime = "Select ExitTime type"
      }
      if (!values.EntryTime) {
        errors.EntryTime = "Select EntryTime type"
      }
      if (!values.ExitDay) {
        errors.ExitDay = "Select ExitDay type"
      }
      if (!values.EntryPrice && values.Set_First_Trade_Range == "Yes") {
        errors.EntryPrice = "Enter Lowest Price"
      }
      if (!values.EntryRange && values.Set_First_Trade_Range == "Yes") {
        errors.EntryRange = "Enter High Price"
      }

      if (!values.HigherRange && values.set_Range == "Yes") {
        errors.EntryRange = "Enter High Price"
      }
      if (!values.LowerRange && values.set_Range == "Yes") {
        errors.EntryRange = "Enter High Price"
      }
      if (!values.HoldExit && values.set_Range == "Yes") {
        errors.EntryRange = "Enter High Price"
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
        TType: values.TType,
        EntryPrice: values.EntryPrice,
        EntryRange: values.EntryRange,
        TStype: values.TStype,
        Targetvalue: values.Targetvalue,
        Slvalue: values.Slvalue,
        LowerRange: values.LowerRange,
        HigherRange: values.HigherRange,
        HoldExit: values.HoldExit,
        ExitDay: values.ExitDay,
        EntryTime: values.EntryTime,
        ExitTime: values.ExitTime,
        ETPattern: "",
        Timeframe: "",
        Quantity: values.Quantity,
        TradeExecution: "Paper Trade",
        FixedSM: "Single",
        serendate: "",
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
    formik.setFieldValue('Strategy', "Multi Directional")
    formik.setFieldValue('Exchange', "NFO")
  }, [])




  const fields = [
    {
      name: "Strategy",
      label: "Scalping Type",
      type: "select",
      options: [
        { label: "Multi Directional", value: "Multi Directional" },
        { label: "Fixed Price", value: "Fixed Price" },
        { label: "One Directional", value: "One Directional" },
      ],

      hiding: false,
      label_size: 12,
      col_size: 6,
      disable: false,
    },
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
      name: "TType",
      label: "Transaction Type",
      type: "select",
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
      label: "Lot",
      type: "text5",
      label_size: 12,
      col_size: 6,
      hiding: false,
      disable: false,
    },
    {
      name: "Set_First_Trade_Range",
      label: "Set First Trade Range",
      type: "select",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      showWhen: (values) => values.Strategy == "Multi Directional" || values.Strategy == "One Directional",
      label_size: 12,
      col_size: 12,
      hiding: false,
      disable: false,
    },
    {
      name: "EntryPrice",
      label: "Lowest Price",
      type: "text5",
      showWhen: (values) => values.Set_First_Trade_Range == "Yes",
      col_size: 6,
      disable: false,
      hiding: false,
    },
    {
      name: "EntryRange",
      label: "Highest Price",
      type: "text5",
      showWhen: (values) => values.Set_First_Trade_Range == "Yes",
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
      label_size: 12,
      col_size: 4,
      hiding: false,
      disable: false,
    },
    {
      name: "Targetvalue",
      label: "Target Value",
      type: "text5",
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
    {
      name: "Slvalue",
      label: "StopLoss Value",
      type: "text5",
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
    {
      name: "set_Range",
      label: "Set Range",
      type: "select",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      showWhen: (values) => values.Strategy == "Multi Directional" || values.Strategy == "One Directional",
      label_size: 12,
      col_size: 12,
      hiding: false,
      disable: false,
    },
    {
      name: "LowerRange",
      label: "Lower Price",
      type: "text5",
      showWhen: (values) => values.set_Range == "Yes",
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
    {
      name: "HigherRange",
      label: "Higher Price",
      type: "text5",
      showWhen: (values) => values.set_Range == "Yes",
      label_size: 12,
      col_size: 4,
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
      showWhen: (values) => values.set_Range == "Yes",
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
