import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllUserScript, DeleteUserScript } from '../../Common API/User';
import Loader from '../../../ExtraComponent/Loader';
import { getColumns, getColumns1, getColumns2 } from './Columns';
import Swal from 'sweetalert2';

const Coptyscript = ({ data, selectedType }) => {
    const userName = localStorage.getItem('name')


    const navigate = useNavigate();
    const [refresh , setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('');
    const [getAllService, setAllservice] = useState({
        loading: true,
        ScalpingData: [],
        OptionData: [],
        PatternData: [],
        PatternOption: [],
        Marketwise: [],
        PremiumRotation: []
    });

    const handleAddScript1 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.ScalpingData[selectedRowIndex];
        const data = { selectGroup: selectGroup, selectStrategyType: "Scalping", ...selectedRow };
        navigate('/user/addscript/scalping', { state: { data } });
    }

    const handleAddScript2 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.OptionData[selectedRowIndex];
        const data = { selectGroup: selectGroup, selectStrategyType: 'Option Strategy', ...selectedRow };
        navigate('/user/addscript/option', { state: { data } });
    }

    const handleAddScript3 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.PatternData[selectedRowIndex];
        const data = { selectGroup: selectGroup, selectStrategyType: 'Pattern', ...selectedRow };
        navigate('/user/addscript/pattern', { state: { data } });
    }


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
                    Group: getAllService.OptionData[index].GroupN,
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
                    setRefresh(!refresh)
                    Swal.fire({
                        title: "Deleted",
                        text: "Script Deleted successfully",
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
                else {
                    Swal.fire({
                        title: "Error !",
                        text: "error in script delete",
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
    }, [selectedType , refresh]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body">
                            <div className="tab-content" id="myTabContent-3">

                                <div className="tab-pane fade show active" id="home-justify" role="tabpanel" aria-labelledby="home-tab-justify">
                                    {data && (
                                        <>
                                           
                                            <div className="iq-card-body">
                                                <div className="table-responsive">

                                                    {getAllService.loading ? <Loader /> :
                                                        <FullDataTable
                                                            columns={data === "Scalping" ? getColumns(handleAddScript1, handleDelete) : data === "Option Strategy" ? getColumns1(handleAddScript2, handleDelete) : data === "Pattern" ? getColumns2(handleAddScript3, handleDelete) : getColumns(handleAddScript1, handleDelete)}
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
        </div>
    );
}

export default Coptyscript;
