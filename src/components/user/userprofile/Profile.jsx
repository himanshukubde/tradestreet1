import React, { useState, useEffect } from 'react'
import { Get_Profile_Data } from '../../Common API/User'

const Profile = () => {
    var username = localStorage.getItem('name')
    const [data, setData] = useState({})

    const getprofiledata = async () => {
        const data = {
            username: username,

        }
        await Get_Profile_Data(data).then((response) => {
            if (response.Profile) {
      
                setData(response.Profile[0])
            }
        })
    }


    useEffect(() => {
        getprofiledata()
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-body ps-0 pe-0 pt-0">
                                <div className="docter-details-block">
                                    <div
                                        className="doc-profile-bg bg-primary"
                                        style={{ height: "46px" }}
                                    ></div>
                                    <div className="docter-profile text-center">
                                        <img
                                            src="assets/images/user/11.png"
                                            alt="profile-img"
                                            className="avatar-130 img-fluid"
                                        />
                                    </div>
                                    <div className="text-center mt-3 ps-3 pe-3">
                                        <h4>
                                            <b>{data.Username}</b>
                                        </h4>


                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-8">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Personal Information</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="about-info m-0 p-0">
                                    <div className="row">
                                        <div className="col-4">Username:</div>
                                        <div className="col-8">{data && data.Username} </div>
                                        <div className="col-4">Mobile No :</div>
                                        <div className="col-8">{data && data.Mobile_No} </div>
                                        <div className="col-4">Email Id:</div>
                                        <div className="col-8">{data && data.EmailId}</div>
                                        <div className="col-4">BrokerName :</div>
                                        <div className="col-8">{data && data.BrokerName}</div>
                                        <div className="col-4">Services :</div>
                                        <div className="col-8">
                                            {data && data.ServiceCount}
                                        </div>
                                        <div className="col-4">Group :</div>
                                        <div className="col-8">
                                            {data && data.Group}
                                        </div>

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

export default Profile
