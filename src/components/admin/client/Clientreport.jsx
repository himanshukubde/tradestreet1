import React, { useEffect, useState } from 'react'
import {Get_Client_Report} from '../../Common API/Admin'
import FullDataTable from '../../../ExtraComponent/CommanDataTable';


const Clientreport = () => {
    const [selectUserName, setSelectUserName] = useState('')
    const [getTableData, setTableData] = useState({
        loading: true,
        data: []
    })

    const GetClientData = async()=>{
        const data = {User  : selectUserName}
        await Get_Client_Report(data)
        .then((response)=>{
            if(response.Status){
                setTableData({
                    loading:false,
                    data:response.Data
                })
            }
            else{
                setTableData({
                    loading:false,
                    data:[]
                })
            }
        })
        .catch((err)=>{
            console.log("Error in finding the client details" , err)
        })
    }


    useEffect(()=>{
        GetClientData()
    },[selectUserName])

 
    const columns = [
        {
            name: "S.No",
            label: "S.No",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const rowIndex = tableMeta.rowIndex;
                    return rowIndex + 1;
                }
            },
        },
        {
            name: "Thread",
            label: "Thread",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Username",
            label: "Username",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ScalpType",
            label: "ScalpType",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Targettype",
            label: "Targettype",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Symbol",
            label: "Symbol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Threading Status",
            label: "Threading Status",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ThreadName",
            label: "ThreadName",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Time",
            label: "Time",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ProjectName",
            label: "ProjectName",
            options: {
                filter: true,
                sort: true,
            }
        },
         
    ];


    useEffect(()=>{
        setSelectUserName('AllUser')
    },[])

    

    return (
        <div>
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Client Report</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="validationDefault01" className='mb-1'>Select Username</label>
                                                <select className="form-select" required=""
                                                    onChange={(e) => setSelectUserName(e.target.value)}
                                                    value={selectUserName}>
                                                    <option value={"AllUser"}>AllUser</option>
                                                    <option value={"ReadData"}>ReadData</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <FullDataTable
                                            columns={columns}
                                            data={getTableData.data}
                                            checkBox={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientreport
