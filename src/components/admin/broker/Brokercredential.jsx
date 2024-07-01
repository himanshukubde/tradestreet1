import React, { useState } from 'react'
import {AddBrokerCredential} from '../../Common API/Admin'
import Swal from 'sweetalert2'

const Brokercredential = () => {
    const [getData , setData] = useState({
        data:[]
    })


    const [borkerInfo, setBrokerInfo] = useState({
        Username: '',
        api_key: '',
        Pwd: '',
        APIPassword: '',
        Userid :'',
        DOB:'',
        MOb:''
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBrokerInfo((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    const handleSubmit = async () => {

        try {
            const data = { borkerInfo }
            await AddBrokerCredential(data.borkerInfo)
                .then((response) => {
                    if (response.Status) {
                        setData({
                            data:response.Data
                        })
                        Swal.fire({
                            title: "Updated successfully!",
                            text: "Broker Credential Updated successfully!",
                            icon: "success",
                            timer: 1500,
                            timerProgressBar: true
                        });
                    }
                    else {
                        Swal.fire({
                            title: "Error",
                            text: response.message,
                            icon: "Error",
                            timer: 1500,
                            timerProgressBar: true
                        });
                    }
                })
                .catch((error) => {
                    console.log("Error in Updated Broker", error)
                })
        }
        catch (err) {
            console.log("Error in Updated Broker", err)
        }


    }



    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Broker Credential</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">Username</label>
                                        <input
                                            type="text"
                                            className="form-control my-2"
                                            id="Username"
                                            placeholder='enter username'
                                            onChange={handleChange}
                                            value={borkerInfo.Username}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">Api key</label>
                                        <input
                                            type="text"
                                            className="form-control my-2"
                                            id="api_key"
                                            placeholder='Enter Api Key'
                                            onChange={handleChange}
                                            value={borkerInfo.api_key}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">Password</label>
                                        <input type="text"
                                            className="form-control my-2"
                                            id="Pwd"
                                            placeholder='Enter Password'
                                            onChange={handleChange}
                                            value={borkerInfo.Pwd}
                                        />
                                    </div>
                                    
                                    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="api">Authorization Key</label>
                                        <input
                                            type="text"
                                            className="form-control my-2"
                                            id="APIPassword"
                                            placeholder='Enter API Password'
                                            onChange={handleChange}
                                            value={borkerInfo.APIPassword}
                                        />
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary me-2 mt-2"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                                

                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Brokercredential
