import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllUserScript, DeleteUserScript } from '../../Common API/User';
import Loader from '../../../ExtraComponent/Loader';
import { getColumns3, getColumns4, getColumns5 } from './Columns';
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

    const AddScript = (data) => {
        if (data === "Option Strategy") {
            navigate('/user/addscript/option', { state: { data: { selectStrategyType: 'Option Strategy' } } });
        } else if (data === "Pattern") {
            navigate('/user/addscript/pattern', { state: { data: { selectStrategyType: 'Pattern' } } });
        } else {
            navigate('/user/addscript/scalping', { state: { data: { selectStrategyType: 'Scalping' } } });
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
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">{data}</h4>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-primary' onClick={() => AddScript(data)}>Add Script</button>
                                                </div>
                                            </div>
                                            <div className="iq-card-body">
                                                <div className="table-responsive">

                                                    {getAllService.loading ? <Loader /> :
                                                        <FullDataTable
                                                            columns={data === "Scalping" ? getColumns3(handleDelete) : data === "Option Strategy" ? getColumns4(handleDelete) : data === "Pattern" ? getColumns5(handleDelete) : getColumns3( handleDelete)}
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
