import React, { useEffect, useState } from 'react';
import { GetClientService } from '../../Common API/Admin';

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
                    });
                } else {
                    setClientService({
                        loading: false,
                        data: []
                    });
                }
            })
            .catch((err) => {
                console.log("Error in fetching the All Client service", err);
            });
    };

    useEffect(() => {
        getAllClientService();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Client Service</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered text-center">
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
                                        {getClientService.data && getClientService.data.map((item, index) => (
                                            <tr key={index} className='text-center'>
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
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clientservice;
