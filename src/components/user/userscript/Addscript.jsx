import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol, Get_StrikePrice, GET_EXPIRY_DATE } from '../../Common API/Admin'
import { lazy } from "react";
const AddClient = () => {

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
      MainStrategy: location.state.data.selectStrategyType,
      Username: location.state.data.selectGroup,
      Strategy: '',
      ETPattern: '',
      Timeframe: '',
      Exchange: '',
      Symbol: '',
      Instrument: '',
      Strike: "",
      Optiontype: '',
      Targetvalue: '',
      Slvalue: '',
      TStype: '',
      Quantity: '',
      LowerRange: '',
      HigherRange: '',
      HoldExit: '',
      EntryPrice: '',
      EntryRange: '',
      EntryTime: '',
      ExitTime: '',
      ExitDay: '',
      TradeExecution: '',
      FixedSM: '',
      TType: '',
      serendate: '',
      expirydata1: '',
      Expirytype: '',
      Striketype: '',
      DepthofStrike: '',
      DeepStrike: '',
      Group: '',
      CEDepthLower: '',
      CEDepthHigher: "",
      PEDepthLower: '',
      PEDepthHigher: '',
      CEDeepLower: '',
      CEDeepHigher: '',
      PEDeepLower: '',
      PEDeepHigher: '',
      set_Range: false,
      Set_First_Trade_Range: false
    },

    validate: (values) => {
      let errors = {};

      return errors;
    },
    onSubmit: async (values) => {
      const req = {
        MainStrategy: location.state.data.selectStrategyType,
        Username: location.state.data.selectGroup,
        Strategy: values.Strategy,
        Exchange: values.Exchange,
        Instrument: values.Instrument,
        Symbol: values.Symbol,
        Optiontype: values.Optiontype,
        Strike: values.Strike,
        expirydata1: values.expirydata1,
        TType: values.TType,
        Lot: values.Lot,
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
        ExitTime: values.ExitTime
      }

    
    },
  });


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
      defaultValue: "Multi Directional", // default selected
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
      defaultValue: "NFO", // default selected
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
      defaultValue: formik.values.Exchange == "NFO" ? "OPTIDX" : formik.values.Exchange == "MCX" ? "OPTFUT" : formik.values.Exchange == "CDS" ? "FUTCUR" : "", // default selected
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
      defaultValue: getSymbolData.data ? getSymbolData.data[0] : "", // default selected
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
        { label: "CE", value: "0" },
        { label: "PE", value: "1" },
      ],
      defaultValue: "0", // default selected
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
      defaultValue: getStricke.data ? getStricke.data[0] : "", // default selected
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
      defaultValue: getExpiryDate.data ? getExpiryDate.data[0] : "", // default selected
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
      defaultValue: "BUY", // default selected
      label_size: 12,
      hiding: false,
      col_size: 6,
      disable: false,
    },
    {
      name: "Lot",
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
      defaultValue: "Yes", // default selected
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
      defaultValue: "Percentage", // default selected
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
      defaultValue: "Yes", // default selected
      showWhen: (values) => values.Strategy == "Multi Directional" || values.Strategy == "One Directional",
      label_size: 12,
      col_size: 12,
      hiding: false,
      disable: false,
    },
    {
      name: "LowerRange",
      label: "Lowest Price",
      type: "text5",
      showWhen: (values) => values.set_Range == "Yes",
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
    {
      name: "HigherRange",
      label: "Highest Price",
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
      type: "text5",
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
      defaultValue: "Intraday", // default selected
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
    {
      name: "EntryTime",
      label: "Entry Time",
      type: "text5",
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
    {
      name: "ExitTime",
      label: "Exit Time",
      type: "text5",
      label_size: 12,
      col_size: 4,
      disable: false,
      hiding: false,
    },
  ];
  



  const getSymbol = async () => {
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


  const getStrikePrice = async () => {
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


  const getExpiry = async () => {
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

        }
      })
  }

  useEffect(() => {
    getExpiry()
  }, [formik.values.Instrument, formik.values.Exchange, formik.values.Symbol, formik.values.Strike])

  useEffect(() => {
    getSymbol()
  }, [formik.values.Instrument, formik.values.Exchange, refresh])

  useEffect(() => {

    getStrikePrice()
  }, [formik.values.Instrument, formik.values.Exchange, formik.values.Symbol])


 
 


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
                btn_name1_route={"/admin/allscript"}
            />
        </>
    );
};
export default AddClient;
