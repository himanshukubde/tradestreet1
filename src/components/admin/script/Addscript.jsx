import { useLocation, useNavigate } from "react-router-dom"
import AddForm from "../../../ExtraComponent/FormData";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Get_Symbol } from '../../Common API/Admin'
const AddClient = () => {
    const location = useLocation()
    const [getSymbolData, setSymbolData] = useState({
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
            PEDeepHigher: ''
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
            col_size: 4,
            disable: false,
        },
        {
            name: "Symbol",
            label: "Symbol",
            type: "select",
            // options:[],
            options: getSymbolData.data && getSymbolData.data.map((item) => ({
                label: item,
                value: item,
            })),
            showWhen: (values) => values.Exchange === "NFO" || values.Exchange === "NSE" || values.Exchange === "CDS" || values.Exchange === "MCX",
            label_size: 12,
            hiding: false,
            col_size: formik.values.Exchange == "NSE" ? 12 : 4,
            disable: false,
        },
        {
            name: "expirydata1",
            label: "Expiry Date",
            type: "select",
            options: [
                { label: "2024-06-27", value: "0" },
                { label: "2024-06-27", value: "1" },
                { label: "2024-06-27", value: "2" },
                { label: "2024-06-27", value: "3" },
            ],
            showWhen: (values) => values.Exchange === "NFO" || values.Exchange === "CDS" || values.Exchange === "MCX",
            label_size: 12,
            hiding: false,
            col_size: 4,
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
            options: [
                { label: "120", value: "0" },
                { label: "120", value: "1" },
                { label: "120", value: "2" },
                { label: "102", value: "3" },
            ],
            showWhen: (values) => values.Instrument == "OPTIDX" || values.Instrument == "OPTSTK",
            label_size: 12,
            col_size: 2,
            hiding: false,
            disable: false,
        },

        {
            name: "Transaction Type",
            label: "Transaction Type",
            type: "select",
            options: [
                { label: "BUY", value: "0" },
                { label: "SELL", value: "1" },

            ],
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
            name: "Measurment Type",
            label: "Measurment Type",
            type: "select",
            options: [
                { label: "OPTIDX", value: "0" },
                { label: "FUTIDX", value: "1" },
                { label: "FUTSTK", value: "2" },
                { label: "OPTSTK", value: "3" },
            ],
            label_size: 12,
            col_size: 4,
            hiding: false,
            disable: false,
        },
        {
            name: "Target Value",
            label: "Target Value",
            type: "text5",

            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
        {
            name: "StopLoss Value",
            label: "StopLoss Value",
            type: "text5",

            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
        {
            name: "Lower Price",
            label: "Lower Price",
            type: "text5",

            label_size: 12,
            col_size: 3,
            disable: false,
            hiding: false,
        },
        {
            name: "Higher Price",
            label: "Higher Price",
            type: "text5",

            label_size: 12,
            col_size: 3,
            disable: false,
            hiding: false,
        },
        {
            name: "Target Price",
            label: "Target Price",
            type: "text5",

            label_size: 12,
            col_size: 2,
            disable: false,
            hiding: false,
        },
        {
            name: "StopLoss Price",
            label: "StopLoss Price",
            type: "text5",

            label_size: 12,
            col_size: 2,
            disable: false,
            hiding: false,
        },
        {
            name: "Unique ID",
            label: "Unique ID",
            type: "select",
            options: [
                { label: "A", value: "0" },
                { label: "B", value: "1" },
                { label: "C", value: "2" },
                { label: "D", value: "3" },
            ],
            label_size: 12,
            col_size: 2,
            disable: false,
            hiding: false,
        },
        {
            name: "Exit Day",
            label: "Exit Day",
            type: "select",
            options: [
                { label: "OPTIDX", value: "0" },
                { label: "FUTIDX", value: "1" },
                { label: "FUTSTK", value: "2" },
                { label: "OPTSTK", value: "3" },
            ],
            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
        {
            name: "Entry Time",
            label: "Entry Time",
            type: "select",
            options: [
                { label: "OPTIDX", value: "0" },
                { label: "FUTIDX", value: "1" },
                { label: "FUTSTK", value: "2" },
                { label: "OPTSTK", value: "3" },
            ],
            label_size: 12,
            col_size: 4,
            disable: false,
            hiding: false,
        },
        {
            name: "Entry Time",
            label: "Entry Time",
            type: "select",
            options: [
                { label: "OPTIDX", value: "0" },
                { label: "FUTIDX", value: "1" },
                { label: "FUTSTK", value: "2" },
                { label: "OPTSTK", value: "3" },
            ],
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

    useEffect(() => {
        getSymbol()
    }, [formik.values.Instrument, refresh])


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
