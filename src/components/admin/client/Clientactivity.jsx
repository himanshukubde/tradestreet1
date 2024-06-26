import React, { useState, useEffect } from 'react'
import { GetClientService , GetClientLogs } from '../../Common API/Admin'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullDataTable from '../../../ExtraComponent/CommanDataTable';

const Clientactivity = () => {
    const [ToDate, setToDate] = useState('');
    const [FromDate, setFromDate] = useState('');
 
    const [getClientActivityDetails, setClientActivityDetails] = useState({
        loading: true,
        data: []
    })
    const [getUserName, setUserName] = useState({
        loading: true,
        data: []
    })
    const [selectUserName, setSelectUserName] = useState('')


     
   




    const GetAllUserDetails = async () => {
        try {
            await GetClientService()
                .then((response) => {

                    if (response.Status) {
                        setUserName({
                            loading: false,
                            data: response.Profile
                        })
                    }
                    else {
                        setUserName({
                            loading: false,
                            data: []
                        })
                    }
                })
                .catch((err) => {
                    console.log("Group data fetch error", err)
                })
        }
        catch {
            console.log("Group data fetch error")
        }
    }

    useEffect(() => {
        GetAllUserDetails()
    }, [])




    const getClientTetails = async () => {
        const data = {User : selectUserName  , From_date : FromDate , To_date  :ToDate}
        await GetClientLogs(data)
        .then((response)=>{
            if(response.Status){
                setClientActivityDetails({
                    loading:false,
                    data : response.Data
                })
            }
            else{
                setClientActivityDetails({
                    loading:false,
                    data : []
                })
            }
        })
        .catch((err)=>{
            console.log("Error In finding the client details", err)
        })
    }


    useEffect(()=>{
        getClientTetails()
    },[selectUserName , ToDate , FromDate])

     

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
            name: "Username",
            label: "Username",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ServiceCount",
            label: "ServiceCount",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Broker",
            label: "Broker",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "CreditUse",
            label: "CreditUse",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ServiceEndDate",
            label: "ServiceEndDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ServiceStartDate",
            label: "ServiceStartDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "LicanseStartDate",
            label: "LicanseStartDate",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "RemainingAmmount",
            label: "RemainingAmmount",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Remaining Amount",
            label: "Remaining Amount",
            options: {
                filter: true,
                sort: true,
            }
        },
         
    ];


    // useEffect(() => {
    //     if (getGroupData.data && getGroupData.data.length > 0) {
    //         setSelectGroup(getGroupData.data[0].GroupName);
    //     }
    // }, [getGroupData]);

    useEffect(() => {
        setSelectUserName('komal')
    }, []);


    return (
        <div>
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-sm-12 col-lg-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Client Activity</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">

                                    <form>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="validationDefault01">Select Username </label>
                                                <select className="form-select" required=""
                                                    onChange={(e) => setSelectUserName(e.target.value)}
                                                    value={selectUserName}
                                                >
                                                    {getUserName.data && getUserName.data.map((item) => {
                                                        return <>
                                                            <option value={item.Username}>{item.Username}</option>
                                                        </>
                                                    })}
                                                </select>
                                            </div>
                                            <div className="form-group col-lg-3 ">
                                                <label>Select form Date</label>
                                                <DatePicker className="form-select" selected={FromDate} onChange={(date) => setFromDate(date)} />

                                            </div>
                                            <div className="form-group col-lg-3">
                                                <label>Select To Date</label>
                                                <DatePicker className="form-select" selected={ToDate} onChange={(date) => setToDate(date)} />

                                            </div>
                                        </div>

                                    </form>
                                    <div className="modal-body">
                                        <FullDataTable
                                            columns={columns}
                                            data={getClientActivityDetails.data}
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

export default Clientactivity
