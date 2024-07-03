import React, { useState } from 'react'

const Userbroker = () => {

    const [getBrokerInfo , setBrokerInfo] = useState({
        loading: true,
        data:[]
    })

    const getBrokerInformation = async()=>{
    
        
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Broker Credential jj</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form>
                                <div className="row">
                                  

                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">Username</label>
                                        <input type="text" className="form-control my-2" id="email1" placeholder='Enter User Name' />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="api">API Key</label>
                                        <input type="text" className="form-control my-2" id="pwd" placeholder='Enter API Key' />
                                    </div>
                                   
                                </div>

                                <button type="submit" className="btn btn-primary me-2 mt-2">
                                    Submit
                                </button>
                                <button type="submit" className="btn iq-bg-danger mt-2">
                                    Cancel
                                </button>

                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Userbroker
