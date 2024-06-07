import React, { useEffect, useState } from 'react'
import { GetClientService } from '../../Common API/Admin'

const Clientservice = () => {
    const [getClientService, setClientService] = useState({
        loading: true,
        data: []
    });

    const getAllClientService = async () => {
        await GetClientService()
            .then((response) => {
                if (response.Status) {
                    setClientService({
                        loading: false,
                        data: response.Profile
                    })
                }
                else {
                    setClientService({
                        loading: false,
                        data: []
                    })
                }
            })
            .catch((err) => {
                console.log("Error in fatching the All Client service", err)
            })
    }

    useEffect(() => {
        getAllClientService()
    }, [])

    return (
        <div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Client Service</h4>
                            </div>
                        </div>
                        <div class="iq-card-body">

                            <div class="table-responsive">
                                <table id="datatable" className="table table-striped table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Username</th>
                                            <th>PhoneNo</th>
                                            <th>BrokerName</th>
                                            <th>Email Id</th>
                                            <th>Group</th>
                                            <th>Service Start Date</th>
                                            <th>Create Date</th>
                                            <th>Service End Date</th>
                                            <th>Total Service Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getClientService.data && getClientService.data.map((item, index) => {

                                            return <tr key={index} className='text-center'>
                                                <td>{index + 1}</td>
                                                <td>{item.Username}</td>
                                                <td>{item.Mobile_No}</td>
                                                <td>{item.BrokerName}</td>
                                                <td>{item.EmailId}</td>
                                                <td>{item.Group}</td>
                                                <td>{item.ServiceStartDate}</td>
                                                <td>{item.CreateDate}</td>
                                                <td>{item.ServiceEndDate}</td>
                                                <td>{item['Total Service Count']}</td>
                                            </tr>

                                        })}
                                    </tbody>
                                    {/* <tfoot> */}
                                    {/* <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr> */}
                                    {/* </tfoot> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientservice
