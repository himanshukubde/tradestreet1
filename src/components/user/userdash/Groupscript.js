
import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import FullDataTable from '../../../ExtraComponent/CommanDataTable';
import { GetAllGroupService, GetGroupNames } from '../../Common API/Admin';
import Loader from '../../../ExtraComponent/Loader'
import { columns, columns1, columns2 } from './Columns'



const Groupscript = ({ data }) => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [selectGroup, setSelectGroup] = useState('')
    const [getAllService, setAllservice] = useState({ loading: true, data: [] })

    const handleAddScript1 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: "Scalping" };
        navigate('/user/addscript/scalping', { state: { data } });
    }
    const handleAddScript2 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: 'Option Strategy' };
        navigate('/user/addscript/option', { state: { data } });
    }
    const handleAddScript3 = () => {
        const data = { selectGroup: selectGroup, selectStrategyType: 'Pattern' };
        navigate('/user/addscript/pattern', { state: { data } });
    }



    const getAllgroupService = async () => {
        const data = { Data: "Scalping", Username: "Chandra" }
        await GetAllGroupService(data)
            .then((response) => {
                if (response.Status) {
                    setAllservice({
                        loading: false,
                        data: response.Data
                    })

                }
                else {
                    setAllservice({
                        loading: false,
                        data: []
                    })

                }
            })
            .catch((err) => {
                console.log("Error in finding group service")
            })
    }


    useEffect(() => {
        getAllgroupService()
    }, [])








    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body">

                            {getAllService.loading ? <Loader /> :
                                <div className="tab-content" id="myTabContent-3">
                                    <div
                                        className="tab-pane fade show active"
                                        id="home-justify"
                                        role="tabpanel"
                                        aria-labelledby="home-tab-justify"
                                    >

                                        {data == "scalping" && (<>
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Scalping</h4>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-primary' onClick={handleAddScript1}>Add Script</button>
                                                </div>
                                            </div>

                                            <div className="iq-card-body">
                                                <div className="table-responsive">

                                                    <FullDataTable
                                                        columns={columns}
                                                        data={getAllService.data}
                                                        checkBox={false}
                                                    />

                                                </div>

                                            </div>
                                        </>)}


                                        {data == "optionStrategy" && (<>
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Option</h4>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-primary' onClick={handleAddScript2}>Add Script</button>
                                                </div>
                                            </div>

                                            <div className="iq-card-body">
                                                <div className="table-responsive">

                                                    <FullDataTable
                                                        columns={columns1}
                                                        data={getAllService.data}
                                                        checkBox={false}
                                                    />

                                                </div>

                                            </div></>)}


                                        {data == "pattern" && (<>
                                            <div className="iq-card-header d-flex justify-content-between">
                                                <div className="iq-header-title">
                                                    <h4 className="card-title">Pattern</h4>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-primary' onClick={handleAddScript3}>Add Script</button>
                                                </div>
                                            </div>

                                            <div className="iq-card-body">
                                                <div className="table-responsive">

                                                    <FullDataTable
                                                        columns={columns2}
                                                        data={getAllService.data}
                                                        checkBox={false}
                                                    />

                                                </div>

                                            </div></>)}



                                    </div>


                                </div>
                            }
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Groupscript
