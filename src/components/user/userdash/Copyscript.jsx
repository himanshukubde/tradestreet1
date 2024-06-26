import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllGroupService } from '../../Common API/Admin';
import Loader from '../../../ExtraComponent/Loader';
import { getColumns, getColumns1, getColumns2 } from './Columns';

const Coptyscript = ({ data }) => {
    const navigate = useNavigate();
    const [selectGroup, setSelectGroup] = useState('');
    const [getAllService, setAllservice] = useState({ loading: true, data: [] });

    const handleAddScript1 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.data[selectedRowIndex];
        const data = { selectGroup: selectGroup, selectStrategyType: "Scalping", ...selectedRow };
        navigate('/user/addscript/scalping', { state: { data } });
    }

    const handleAddScript2 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.data[selectedRowIndex];
        const data = { selectGroup: selectGroup, selectStrategyType: 'Option Strategy', ...selectedRow };
        navigate('/user/addscript/option', { state: { data } });
    }

    const handleAddScript3 = (data1) => {
        const selectedRowIndex = data1.rowIndex;
        const selectedRow = getAllService.data[selectedRowIndex];
        const data = { selectGroup: selectGroup, selectStrategyType: 'Pattern', ...selectedRow };
        navigate('/user/addscript/pattern', { state: { data } });
    }

    const AddScript = (data) => {
        if (data === "optionStrategy") {
            navigate('/user/addscript/option');
        } else if (data === "pattern") {
            navigate('/user/addscript/pattern');
        } else {
            navigate('/user/addscript/scalping');
        }
    }

    const getAllgroupService = async () => {
        const data = { Data: "Scalping", Username: "komal" };
        await GetAllGroupService(data)
            .then((response) => {
                if (response.Status) {
                    setAllservice({
                        loading: false,
                        data: response.Data
                    });
                } else {
                    setAllservice({
                        loading: false,
                        data: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in finding group service");
            });
    }

    useEffect(() => {
        getAllgroupService();
    }, []);

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
                                                            columns={data === "scalping" ? getColumns(handleAddScript1) : data === "optionStrategy" ? getColumns1(handleAddScript2) : data === "pattern" ? getColumns2(handleAddScript3) : getColumns(handleAddScript1)}
                                                            data={getAllService.data}
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
