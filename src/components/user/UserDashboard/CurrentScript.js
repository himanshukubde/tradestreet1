import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllUserScript, DeleteUserScript, Discontinue, Continue } from '../../CommonAPI/User';
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
    const [EditData, setEditData] = useState({})



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


        await DeleteUserScript(req)
            .then((response) => {
                if (response.Status) {
                    Swal.fire({
                        title: "Deleted",
                        text: "Script Deleted successfully",
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
                        text: "Error in script delete",
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








    const handleEdit = async (rowData) => {
        setShowEditModal(true)
        const index = rowData.rowIndex
        setEditData(getAllService.ScalpingData[index])
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
            MainStrategy: "",
            Strategy: "",
            Symbol: "",
            Username: "",
            ETPattern: "",
            Timeframe: "",
            Targetvalue: 5.0,
            Slvalue: 5.0,
            TStype: "",
            Quantity: 5,
            LowerRange: 0.0,
            HigherRange: 0.0,
            HoldExit: "Hold",
            EntryPrice: 0.0,
            EntryRange: 0.0,
            EntryTime: "09:00:00",
            ExitTime: "14:00:00",
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
            showWhen: (values) => showEditModal && EditData.ScalpType != "Fixed Price",
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
            col_size: showEditModal && EditData.ScalpType == "Fixed Price" ? 12 : 6,
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
            label: showEditModal && EditData.ScalpType == "Fixed Price" ? "Stoploss Price" : "Re-Entry Point",
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
            showWhen: (values) => showEditModal && EditData.ScalpType != "Fixed Price",

            col_size: 6,
            disable: false,
            hiding: false,
        },
        {
            name: "EntryRange",
            label: "First Trade Higher Range",
            type: "text5",
            showWhen: (values) => showEditModal && EditData.ScalpType != "Fixed Price",

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
            showWhen: (values) =>showEditModal && EditData.ScalpType != "Fixed Price",

            label_size: 12,
            col_size: showEditModal && EditData.ScalpType != "Fixed Price" ? 4 :6,
            disable: false,
            hiding: false,
        },
         ,
        {
            name: "EntryTime",
            label: "Entry Time",
            type: "timepiker",
            label_size: 12,
            col_size: showEditModal && EditData.ScalpType != "Fixed Price" ? 4 :6,
            disable: false,
            hiding: false,
        },
        {
            name: "ExitTime",
            label: "Exit Time",
            type: "timepiker",
            label_size: 12,
            col_size: showEditModal && EditData.ScalpType != "Fixed Price" ? 4 :6,
            disable: false,
            hiding: false,
        },

    ];



    useEffect(() => {

        formik.setFieldValue('EntryPrice', EditData.EntryPrice)
        formik.setFieldValue('EntryRange', EditData.EntryRange)
        formik.setFieldValue('TStype', EditData.TStype)
        formik.setFieldValue('Targetvalue', EditData['Booking Point'])
        formik.setFieldValue('Slvalue', EditData['Re-entry Point'])
        formik.setFieldValue('LowerRange', EditData.LowerRange)
        formik.setFieldValue('HigherRange', EditData.HigherRange)
        formik.setFieldValue('HoldExit', EditData.HoldExit)
        formik.setFieldValue('EntryTime', EditData.EntryTime)
        formik.setFieldValue('ExitTime', EditData.ExitTime)
    }, [showEditModal])

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
                        <Formikform
                            fields={fields.filter(
                                (field) => !field.showWhen || field.showWhen(formik.values)
                            )}

                            btn_name="Update"
                            formik={formik}
                        />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Coptyscript;
