import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllUserScript } from '../../Common API/User';
import Loader from '../../../ExtraComponent/Loader';
import { getColumns, getColumns1, getColumns2 } from './Columns';

const Coptyscript = ({ data , selectedType }) => {
    const userName = localStorage.getItem('name')

 
    const navigate = useNavigate();
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

    const AddScript = (data) => {
        if (data === "Option Strategy") {
            navigate('/user/addscript/option');
        } else if (data === "Pattern") {
            navigate('/user/addscript/pattern');
        } else {
            navigate('/user/addscript/scalping');
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
                console.log("Error in finding group service" ,err);
            });
    }

    useEffect(() => {
        GetAllUserScriptDetails();
    }, [selectedType]);

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
                                                            columns={data === "Scalping" ? getColumns(handleAddScript1) : data === "Option Strategy" ? getColumns1(handleAddScript2) : data === "Pattern" ? getColumns2(handleAddScript3) : getColumns(handleAddScript1)}
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
