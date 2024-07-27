import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllUserScript, DeleteUserScript, Discontinue, Continue, UpdateUserScript } from '../../CommonAPI/User';
import Loader from '../../../ExtraComponent/Loader';
import { getColumns3, getColumns4, getColumns5 } from './Columns';
import Swal from 'sweetalert2';
import Formikform from "../../../ExtraComponent/FormData";
import { useFormik } from 'formik';

const Coptyscript = ({ data, selectedType, data2 }) => {
    const userName = localStorage.getItem('name')


    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false)
    const [getAllService, setAllservice] = useState({
        loading: true,
        ScalpingData: [],
        OptionData: [],
        PatternData: [],
        PatternOption: [],
        Marketwise: [],
        PremiumRotation: []
    });
    const [showEditModal, setShowEditModal] = useState(false)
    const [EditDataScalping, setEditDataScalping] = useState({})
    const [EditDataOption, setEditDataOption] = useState({})
    const [EditDataPattern, setEditDataPattern] = useState({})

    console.log("EditDataPattern :", EditDataPattern)



    const handleDelete = async (rowData) => {
        const index = rowData.rowIndex
        const req =
            data == 'Scalping' ?
                {
                    Username: userName,
                    MainStrategy: data,
                    Strategy: getAllService.ScalpingData[index].ScalpType,
                    Symbol: getAllService.ScalpingData[index].Symbol,
                    ETPattern: "",
                    Timeframe: "",
                    TType: "",
                    Group: getAllService.ScalpingData[index].GroupN,
                    TradePattern: "",
                    TSymbol: "",
                    PatternName: ""
                } : data == 'Option Strategy' ?
                    {
                        MainStrategy: data,
                        Strategy: getAllService.OptionData[index].STG,
                        Symbol: getAllService.OptionData[index].MainSymbol,
                        Username: userName,
                        ETPattern: getAllService.OptionData[index].Targettype,
                        Timeframe: "",
                        TType: "",
                        Group: getAllService.OptionData[index].GroupN,
                        TSymbol: "",
                        TradePattern: "",
                        PatternName: ""
                    }
                    : data == 'Pattern' ?
                        {

                            MainStrategy: data,
                            Strategy: getAllService.PatternData[index].TradePattern,
                            Symbol: getAllService.PatternData[index].Symbol,
                            Username: userName,
                            ETPattern: getAllService.PatternData[index].Pattern,
                            Timeframe: getAllService.PatternData[index].TimeFrame,
                            TType: getAllService.PatternData[index].TType,
                            Group: "",
                            TSymbol: "",
                            TradePattern: "",
                            PatternName: ""

                        } : ''

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteUserScript(req)
                    .then((response) => {
                        if (response.Status) {
                            Swal.fire({
                                title: "Square off Successfully!",
                                text:  response.massage ,
                                icon: "success",
                                timer: 1500,
                                timerProgressBar: true,
                                didClose: () => {
                                    setRefresh(!refresh);
                                }
                            });
                        } else {
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
                        console.log("Error in delete script", err)
                    })
            }
        });
        
    }


    const handleEdit = async (rowData) => {
        setShowEditModal(true)
        const index = rowData.rowIndex
        if (data == 'Scalping') {
            setEditDataScalping(getAllService.ScalpingData[index])
        }
        else if (data == 'Option Strategy') {
            setEditDataOption(getAllService.OptionData[index])
        }
        else {
            setEditDataPattern(getAllService.PatternData[index])
        }
    }


    const HandleContinueDiscontinue = async (rowData) => {
        const index = rowData.rowIndex
        let trading;

        if (data == 'Scalping') {
            trading = getAllService.ScalpingData[index].Trading
        }
        else if (data == 'Pattern') {
            trading = getAllService.PatternData[index].Trading
        }
        else {
            trading = getAllService.OptionData[index].Trading
        }

        if (trading) {
            Swal.fire({
                title: "Do you want to Discontinue",
                text: "You won't be able to revert this!",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const req =
                        data == 'Scalping' ?
                            {
                                Username: userName,
                                MainStrategy: data,
                                Strategy: getAllService.ScalpingData[index].ScalpType,
                                Symbol: getAllService.ScalpingData[index].Symbol,
                                ETPattern: "",
                                Timeframe: "",
                                TType: "",
                                Group: getAllService.ScalpingData[index].GroupN,
                                TradePattern: "",
                                TSymbol: "",
                                PatternName: ""
                            } : data == 'Option Strategy' ?
                                {
                                    MainStrategy: data,
                                    Strategy: getAllService.OptionData[index].STG,
                                    Symbol: getAllService.OptionData[index].MainSymbol,
                                    Username: userName,
                                    ETPattern: getAllService.OptionData[index].Targettype,
                                    Timeframe: "",
                                    TType: "",
                                    Group: getAllService.OptionData[index].GroupN,
                                    TSymbol: "",
                                    TradePattern: "",
                                    PatternName: ""
                                }
                                : data == 'Pattern' ?
                                    {

                                        MainStrategy: data,
                                        Strategy: getAllService.PatternData[index].TradePattern,
                                        Symbol: getAllService.PatternData[index].Symbol,
                                        Username: userName,
                                        ETPattern: getAllService.PatternData[index].Pattern,
                                        Timeframe: getAllService.PatternData[index].TimeFrame,
                                        TType: getAllService.PatternData[index].TType,
                                        Group: "",
                                        TSymbol: "",
                                        TradePattern: "",
                                        PatternName: ""

                                    } : ''


                    await Discontinue(req)
                        .then((response) => {
                            if (response.Status) {
                                Swal.fire({
                                    title: "Success",
                                    text: response.massage,
                                    icon: "success",
                                    timer: 2000,
                                    timerProgressBar: true
                                });
                                setRefresh(!refresh)
                            }
                            else {
                                Swal.fire({
                                    title: "Error !",
                                    text: response.massage,
                                    icon: "error",
                                    timer: 2000,
                                    timerProgressBar: true
                                });
                            }
                        })
                        .catch((err) => {
                            console.log("Error in delete script", err)
                        })
                }
            })
        }
        else {
            {

                Swal.fire({
                    title: "Do you want to Continue",
                    text: "You won't be able to revert this!",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes"
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const req =
                            data == 'Scalping' ?
                                {
                                    Username: userName,
                                    MainStrategy: data,
                                    Strategy: getAllService.ScalpingData[index].ScalpType,
                                    Symbol: getAllService.ScalpingData[index].Symbol,
                                    ETPattern: "",
                                    Timeframe: "",
                                    TType: "",
                                    Group: getAllService.ScalpingData[index].GroupN,
                                    TradePattern: "",
                                    TSymbol: "",
                                    PatternName: ""
                                } : data == 'Option Strategy' ?
                                    {
                                        MainStrategy: data,
                                        Strategy: getAllService.OptionData[index].STG,
                                        Symbol: getAllService.OptionData[index].MainSymbol,
                                        Username: userName,
                                        ETPattern: getAllService.OptionData[index].Targettype,
                                        Timeframe: "",
                                        TType: "",
                                        Group: getAllService.OptionData[index].GroupN,
                                        TSymbol: "",
                                        TradePattern: "",
                                        PatternName: ""
                                    }
                                    : data == 'Pattern' ?
                                        {

                                            MainStrategy: data,
                                            Strategy: getAllService.PatternData[index].TradePattern,
                                            Symbol: getAllService.PatternData[index].Symbol,
                                            Username: userName,
                                            ETPattern: getAllService.PatternData[index].Pattern,
                                            Timeframe: getAllService.PatternData[index].TimeFrame,
                                            TType: getAllService.PatternData[index].TType,
                                            Group: "",
                                            TSymbol: "",
                                            TradePattern: "",
                                            PatternName: ""

                                        } : ''


                        await Continue(req)
                            .then((response) => {
                                if (response.Status) {
                                    setRefresh(!refresh)
                                    Swal.fire({
                                        title: "Success",
                                        text: "Script Continued",
                                        icon: "success",
                                        timer: 1500,
                                        timerProgressBar: true
                                    });
                                }
                                else {
                                    Swal.fire({
                                        title: "Error !",
                                        text: "",
                                        icon: response.massage,
                                        timer: 1500,
                                        timerProgressBar: true
                                    });
                                }
                            })
                            .catch((err) => {
                                console.log("Error in delete script", err)
                            })
                    }
                })
            }

        }


    }

    const AddScript = (data) => {
        if (data2.status == false) {
            Swal.fire({
                title: "Error",
                text: data2.msg,
                icon: "error",
                timer: 1500,
                timerProgressBar: true
            });

        }
        else {

            if (data === "Option Strategy") {
                navigate('/user/newscript/option', { state: { data: { selectStrategyType: 'Option Strategy' } } });
            } else if (data === "Pattern") {
                navigate('/user/newscript/pattern', { state: { data: { selectStrategyType: 'Pattern' } } });
            } else {
                navigate('/user/newscript/scalping', { state: { data: { selectStrategyType: 'Scalping' } } });
            }
        }

    }

    const GetAllUserScriptDetails = async () => {
        const data = { userName: userName };

        await GetAllUserScript(data)
            .then((response) => {
                if (response.Status) {
                    setAllservice({
                        loading: false,
                        ScalpingData: response.Scalping,
                        OptionData: response.Option,
                        PatternData: response.Pattern,
                        PatternOption: response.PatternOption,
                        Marketwise: response.Marketwise,
                        PremiumRotation: response.PremiumRotation

                    });
                } else {
                    setAllservice({
                        loading: false,
                        ScalpingData: [],
                        OptionData: [],
                        PatternData: [],
                        PatternOption: [],
                        Marketwise: [],
                        PremiumRotation: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in finding group service", err);
            });
    }

    useEffect(() => {
        GetAllUserScriptDetails();
    }, [selectedType, refresh]);



    const formik = useFormik({
        initialValues: {
            TStype: "",
            Quantity: 0,
            Targetvalue: 0.0,
            Slvalue: 0,
            EntryPrice: 0.0,
            EntryRange: 0.0,
            LowerRange: 0.0,
            HigherRange: 0.0,
            HoldExit: "Hold",
            EntryTime: "",
            ExitTime: ""
        },
        validate: (values) => {
            let errors = {};
            if (values.TStype == "" && showEditModal && EditDataScalping.ScalpType != "Fixed Price") {
                errors.TStype = "Please select Measurement Type";
            }
            if (values.Quantity == 0) {
                errors.Quantity = "Please enter Quantity";
            }
            if (values.Targetvalue == 0.0) {
                errors.Targetvalue = "Please enter Target value";
            }
            if (values.Slvalue == 0) {
                errors.Slvalue = "Please enter SL value";
            }
            if (values.EntryPrice == 0.0 && showEditModal && EditDataScalping.ScalpType != "Fixed Price") {
                errors.EntryPrice = "Please enter Entry Price";
            }
            if (values.EntryRange == 0.0 && showEditModal && EditDataScalping.ScalpType != "Fixed Price") {
                errors.EntryRange = "Please enter Entry Range";
            }
            if (values.LowerRange == 0.0) {
                errors.LowerRange = "Please enter Lower Range";
            }
            if (values.HigherRange == 0.0) {
                errors.HigherRange = "Please enter Higher Range";
            }
            if (values.HoldExit == "" && showEditModal && EditDataScalping.ScalpType != "Fixed Price") {
                errors.HoldExit = "Please select Hold/Exit";
            }
            if (values.EntryTime == "") {
                errors.EntryTime = "Please select Entry Time";
            }
            if (values.ExitTime == "") {
                errors.ExitTime = "Please select Exit Time";
            }
            return errors;
        },
        onSubmit: async (values) => {
            const req = {
                Strategy: EditDataScalping.ScalpType,
                Symbol: EditDataScalping.Symbol,
                Username: userName,
                MainStrategy: data,
                ETPattern: "",
                Timeframe: "",
                Targetvalue: values.Targetvalue,
                Slvalue: values.Slvalue,
                TStype: EditDataScalping.ScalpType != "Fixed Price" ? values.TStype : EditDataScalping.TStype,
                Quantity: values.Quantity,
                LowerRange: values.LowerRange,
                HigherRange: values.HigherRange,
                HoldExit: showEditModal && EditDataScalping.ScalpType != "Fixed Price" ? EditDataScalping.HoldExit : values.HoldExit,
                EntryPrice: EditDataScalping.ScalpType != "Fixed Price" ? EditDataScalping.EntryPrice : values.EntryPrice,
                EntryRange: showEditModal && EditDataScalping.ScalpType != "Fixed Price" ? EditDataScalping.EntryRange : values.EntryRange,
                EntryTime: values.EntryTime,
                ExitTime: values.ExitTime,
                ExitDay: EditDataScalping.ExitDay,
                TradeExecution: EditDataScalping.TradeExecution,
                Group: EditDataScalping.GroupN,
                CEDepthLower: 0.0,
                CEDepthHigher: 0.0,
                PEDepthLower: 0.0,
                PEDepthHigher: 0.0,
                CEDeepLower: 0.0,
                CEDeepHigher: 0.0,
                PEDeepLower: 0.0,
                PEDeepHigher: 0.0,
                DepthofStrike: 0
            }
            await UpdateUserScript(req)
                .then((response) => {
                    if (response.Status) {
                        Swal.fire({
                            title: "Updated",
                            text: response.massage,
                            icon: "success",
                            timer: 1500,
                            timerProgressBar: true,
                        });
                        setTimeout(() => {
                            setShowEditModal(false)
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
                })
        }
    });
    const formik1 = useFormik({
        initialValues: {
            MainStrategy: "",
            Strategy: "",
            Symbol: "",
            Username: "",
            ETPattern: "",
            Timeframe: "",
            Targetvalue: 0.0,
            Slvalue: 0,
            TStype: "CP",
            Quantity: 0,
            LowerRange: 0.0,
            HigherRange: 0.0,
            HoldExit: "Hold",
            EntryPrice: 0.0,
            EntryRange: 0.0,
            EntryTime: "",
            ExitTime: "",
            ExitDay: "Intraday",
            TradeExecution: "Paper Trade",
            Group: "",
            CEDepthLower: 0.0,
            CEDepthHigher: 0.0,
            PEDepthLower: 0.0,
            PEDepthHigher: 0.0,
            CEDeepLower: 0.0,
            CEDeepHigher: 0.0,
            PEDeepLower: 0.0,
            PEDeepHigher: 0.0,
            DepthofStrike: 1
        },
        validate: (values) => {
            let errors = {};

            return errors;
        },
        onSubmit: async (values) => {

        }
    });
    const formik2 = useFormik({
        initialValues: {
            MainStrategy: "",
            Strategy: "",
            Symbol: "",
            Username: "",
            ETPattern: "",
            Timeframe: "",
            Targetvalue: 0.0,
            Slvalue: 0,
            TStype: "CP",
            Quantity: 0,
            LowerRange: 0.0,
            HigherRange: 0.0,
            HoldExit: "Hold",
            EntryPrice: 0.0,
            EntryRange: 0.0,
            EntryTime: "",
            ExitTime: "",
            ExitDay: "Intraday",
            TradeExecution: "Paper Trade",
            Group: "",
            CEDepthLower: 0.0,
            CEDepthHigher: 0.0,
            PEDepthLower: 0.0,
            PEDepthHigher: 0.0,
            CEDeepLower: 0.0,
            CEDeepHigher: 0.0,
            PEDeepLower: 0.0,
            PEDeepHigher: 0.0,
            DepthofStrike: 1
        },
        validate: (values) => {
            let errors = {};

            return errors;
        },
        onSubmit: async (values) => {

        }
    });



    const fields = [
        {
            name: "TStype",
            label: "Measurement Type",
            type: "select",
            options: [
                { label: "Percentage", value: "Percentage" },
                { label: "Point", value: "Point" },
            ],
            showWhen: (values) => showEditModal && EditDataScalping.ScalpType != "Fixed Price",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Quantity",
            label: formik.values.Exchange == "NFO" ? "Lot" : "Quantity",
            type: "text5",
            label_size: 12,
            col_size: showEditModal && EditDataScalping.ScalpType == "Fixed Price" ? 12 : 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Targetvalue",
            label: formik.values.Strategy == "Fixed Price" ? "Target Price" : formik.values.Strategy == "One Directional" ? "Fixed Target" : "Booking Point",
            type: "text5",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        }, {
            name: "Slvalue",
            label: showEditModal && EditDataScalping.ScalpType == "Fixed Price" ? "Stoploss Price" : "Re-Entry Point",
            type: "text5",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },
        {
            name: "EntryPrice",
            label: "First Trade Lower Range",
            type: "text5",
            showWhen: (values) => showEditModal && EditDataScalping.ScalpType != "Fixed Price",

            col_size: 6,
            disable: false,
            hiding: false,
        },
        {
            name: "EntryRange",
            label: "First Trade Higher Range",
            type: "text5",
            showWhen: (values) => showEditModal && EditDataScalping.ScalpType != "Fixed Price",

            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        }, {
            name: "LowerRange",
            label: "Lower Range",
            type: "text5",

            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },
        {
            name: "HigherRange",
            label: "Higher Range",
            type: "text5",

            label_size: 12,
            col_size: 6,
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
            showWhen: (values) => showEditModal && EditDataScalping.ScalpType != "Fixed Price",

            label_size: 12,
            col_size: showEditModal && EditDataScalping.ScalpType != "Fixed Price" ? 4 : 6,
            disable: false,
            hiding: false,
        },
        ,
        {
            name: "EntryTime",
            label: "Entry Time",
            type: "timepiker",
            label_size: 12,
            col_size: showEditModal && EditDataScalping.ScalpType != "Fixed Price" ? 4 : 6,
            disable: false,
            hiding: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "timepiker",
            label_size: 12,
            col_size: showEditModal && EditDataScalping.ScalpType != "Fixed Price" ? 4 : 6,
            disable: false,
            hiding: false,
        },

    ];
    const fields1 = [
        {
            name: "TStype",
            label: "Measurement Type",
            type: "select",
            options: [
                { label: "Percentage", value: "Percentage" },
                { label: "Point", value: "Point" },
            ],

            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Quantity",
            label: "Lot Size",
            type: "text5",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Targetvalue",
            label: "Target",
            type: "text5",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        }, {
            name: "Slvalue",
            label: "Stoploss",
            type: "text5",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },

        {
            name: "EntryTime",
            label: "Entry Time",
            type: "timepiker",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "timepiker",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },

    ];
    const fields2 = [
        {
            name: "TStype",
            label: "Measurement Type",
            type: "select",
            options: [
                { label: "Percantage", value: "Percantage" },
                { label: "Point", value: "Point" },
            ],

            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Quantity",
            label: "Lot Size",
            type: "text5",
            label_size: 12,
            col_size: 6,
            hiding: false,
            disable: false,
        },
        {
            name: "Targetvalue",
            label: "Target",
            type: "text5",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        }, {
            name: "Slvalue",
            label: "Stoploss",
            type: "text5",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },

        {
            name: "EntryTime",
            label: "Entry Time",
            type: "timepiker",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "timepiker",
            label_size: 12,
            col_size: 6,
            disable: false,
            hiding: false,
        },

    ];



    useEffect(() => {
        if (data == "Scalping") {
            formik.setFieldValue('EntryPrice', EditDataScalping.EntryPrice)
            formik.setFieldValue('EntryRange', EditDataScalping.EntryRange)
            formik.setFieldValue('TStype', EditDataScalping.TStype)
            formik.setFieldValue('Targetvalue', EditDataScalping['Booking Point'])
            formik.setFieldValue('Slvalue', EditDataScalping['Re-entry Point'])
            formik.setFieldValue('LowerRange', EditDataScalping.LowerRange)
            formik.setFieldValue('HigherRange', EditDataScalping.HigherRange)
            formik.setFieldValue('HoldExit', EditDataScalping.HoldExit)
            formik.setFieldValue('EntryTime', EditDataScalping.EntryTime)
            formik.setFieldValue('ExitTime', EditDataScalping.ExitTime)
            formik.setFieldValue('Quantity', EditDataScalping.Quantity)
        }
        else if (data == "Option Strategy") {
            formik1.setFieldValue('TStype', EditDataOption.strategytype)
            formik1.setFieldValue('Targetvalue', EditDataOption['Target value'])
            formik1.setFieldValue('Slvalue', EditDataOption['SL value'])
            formik1.setFieldValue('Quantity', EditDataOption['Lot Size'])
            formik1.setFieldValue('EntryTime', EditDataOption['Entry Time'])
            formik1.setFieldValue('ExitTime', EditDataOption['Exit Time'])
        }
        else if (data == "Pattern") {
            console.log("cpppp :")
            formik2.setFieldValue('TStype', EditDataPattern.TStype)
            formik2.setFieldValue('Targetvalue', EditDataPattern['Target value'])
            formik2.setFieldValue('Slvalue', EditDataPattern['SL value'])
            formik2.setFieldValue('Quantity', EditDataPattern.Quantity)
            formik2.setFieldValue('EntryTime', EditDataPattern.EntryTime)
            formik2.setFieldValue('ExitTime', EditDataPattern.ExitTime)
        }
    }, [showEditModal, data])


    console.log("data :", data)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body" style={{ padding: '3px' }}>
                            <div className="tab-content" id="myTabContent-3">

                                <div className="tab-pane fade show active" id="home-justify" role="tabpanel" aria-labelledby="home-tab-justify">
                                    {data && (
                                        <>
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">{data}</h4>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-primary' onClick={() => AddScript(data)}>Add Script</button>
                                                </div>
                                            </div>
                                            <div className="iq-card-body " style={{ padding: '3px' }}>
                                                <div className="table-responsive">

                                                    {getAllService.loading ? <Loader /> :
                                                        <FullDataTable
                                                            columns={data === "Scalping" ? getColumns3(handleDelete, handleEdit, HandleContinueDiscontinue) : data === "Option Strategy" ? getColumns4(handleDelete, handleEdit, HandleContinueDiscontinue) : data === "Pattern" ? getColumns5(handleDelete, handleEdit, HandleContinueDiscontinue) : getColumns3(handleDelete, handleEdit, HandleContinueDiscontinue)}
                                                            data={data === "Scalping" ? getAllService.ScalpingData : data === "Option Strategy" ? getAllService.OptionData : data === "Pattern" ? getAllService.PatternData : []}
                                                            checkBox={false}
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showEditModal && <div className="modal show" id="exampleModal" style={{ display: "block" }}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header ">
                            <h5 className="modal-title">Edit Script</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setShowEditModal(false)}
                            />
                        </div>

                        {
                            data == "Scalping" ? <>
                                <Formikform
                                    fields={fields.filter(
                                        (field) => !field.showWhen || field.showWhen(formik.values)
                                    )}

                                    btn_name="Update"
                                    formik={formik}
                                />
                            </> :
                                data == "Option Strategy" ? <>
                                   
                                    <Formikform
                                        fields={fields1}

                                        btn_name="Update"
                                        formik={formik1}
                                    />
                                </>
                                    :

                                    <Formikform
                                        fields={fields2.filter(
                                            (field) => !field.showWhen || field.showWhen(formik2.values)
                                        )}

                                        btn_name="Update"
                                        formik={formik2}
                                    />



                        }
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Coptyscript;
