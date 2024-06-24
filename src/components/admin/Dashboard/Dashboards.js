import React, { useState, useEffect } from 'react';
import { GetAdminDashboard } from '../../Common API/Admin'

const Dashboards = () => {

    const [dashData, setData] = useState({
        totalLive: 0,
        activeLive: 0,
        expiredLive: 0,
        totalFreeDemo: 0,
        activeFreeDemo: 0,
        expiredFreeDemo: 0,
        totalTwoDaysLive: 0,
        activeTwoDaysLive: 0,
        expiredTwoDaysLive: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        await GetAdminDashboard()
            .then((response) => {
                const result = response;

                if (response) {
                    setData({
                        totalLive: result["Total Live Account"],
                        activeLive: result["Active Live Account"],
                        expiredLive: result["Expired Live Account"],
                        totalFreeDemo: result["Total Free Demo Account"],
                        activeFreeDemo: result["Active Free Demo Account"],
                        expiredFreeDemo: result["Expired Free Demo Account"],
                        totalTwoDaysLive: result["Total Two Days Live Account"],
                        activeTwoDaysLive: result["Active Two Days Live Account"],
                        expiredTwoDaysLive: result["Expired Two Days Live Account"],
                    })
                    setLoading(false);
                }
                else {
                    setData({
                        totalLive: 0,
                        activeLive: 0,
                        expiredLive: 0,
                        totalFreeDemo: 0,
                        activeFreeDemo: 0,
                        expiredFreeDemo: 0,
                        totalTwoDaysLive: 0,
                        activeTwoDaysLive: 0,
                        expiredTwoDaysLive: 0,
                    })
                    setLoading(false);
                }

            })
            .catch((err) => {
                console.log("Error in fatching the Dashboard Details", err)
                setError(err.message);
            })

    };

    useEffect(() => {
        fetchData();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="iq-card ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Live Account</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="progress mt-3">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "40%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                aria-valuenow={20}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "20%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "10%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "40%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                aria-valuenow={20}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "20%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-secondary"
                                                role="progressbar"
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "10%" }}
                                            ></div>
                                        </div>
                                        <div className="table-responsive mt-4">
                                            <table className="table mb-0 table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-online mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Total: </h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.totalLive}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-blue mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Active: </h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.activeLive}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-primary mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Expired: </h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.expiredLive}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="iq-card ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Free Demo Account</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="progress mt-3">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "40%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                aria-valuenow={20}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "20%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "10%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "40%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                aria-valuenow={20}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "20%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-secondary"
                                                role="progressbar"
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "10%" }}
                                            ></div>
                                        </div>
                                        <div className="table-responsive mt-4">
                                            <table className="table mb-0 table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-online mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Total:</h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.totalFreeDemo}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-blue mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Active</h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.activeFreeDemo}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-primary mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Expired</h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.expiredFreeDemo}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="iq-card ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Two Days Live Account</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="progress mt-3">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "40%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                aria-valuenow={20}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "20%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "10%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "40%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                aria-valuenow={20}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "20%" }}
                                            ></div>
                                            <div
                                                className="progress-bar bg-secondary"
                                                role="progressbar"
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "10%" }}
                                            ></div>
                                        </div>
                                        <div className="table-responsive mt-4">
                                            <table className="table mb-0 table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-online mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Total</h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.totalTwoDaysLive}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-blue mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Active</h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.activeTwoDaysLive}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="iq-profile-avatar status-primary mt-4"> </div>
                                                        </td>
                                                        <td>
                                                            <h4>Expired</h4>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{dashData.expiredTwoDaysLive}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="iq-card ">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">1 Script</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <div className="progress mt-3">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "40%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    aria-valuenow={20}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "20%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    aria-valuenow={10}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "10%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "40%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    aria-valuenow={20}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "20%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-secondary"
                                                    role="progressbar"
                                                    aria-valuenow={10}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "10%" }}
                                                ></div>
                                            </div>
                                            <div className="table-responsive mt-4">
                                                <table className="table mb-0 table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-online mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Total: </h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.totalLive}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-blue mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Active: </h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.activeLive}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-primary mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Expired: </h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.expiredLive}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4">
                                    <div className="iq-card ">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">2 Script</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <div className="progress mt-3">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "40%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    aria-valuenow={20}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "20%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    aria-valuenow={10}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "10%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "40%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    aria-valuenow={20}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "20%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-secondary"
                                                    role="progressbar"
                                                    aria-valuenow={10}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "10%" }}
                                                ></div>
                                            </div>
                                            <div className="table-responsive mt-4">
                                                <table className="table mb-0 table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-online mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Total:</h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.totalFreeDemo}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-blue mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Active</h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.activeFreeDemo}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-primary mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Expired</h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.expiredFreeDemo}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="iq-card ">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">5 Script</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <div className="progress mt-3">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "40%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    aria-valuenow={20}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "20%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    aria-valuenow={10}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "10%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "40%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    aria-valuenow={20}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "20%" }}
                                                ></div>
                                                <div
                                                    className="progress-bar bg-secondary"
                                                    role="progressbar"
                                                    aria-valuenow={10}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "10%" }}
                                                ></div>
                                            </div>
                                            <div className="table-responsive mt-4">
                                                <table className="table mb-0 table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-online mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Total</h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.totalTwoDaysLive}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-blue mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Active</h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.activeTwoDaysLive}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="iq-profile-avatar status-primary mt-4"> </div>
                                                            </td>
                                                            <td>
                                                                <h4>Expired</h4>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">{dashData.expiredTwoDaysLive}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>






                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="iq-card iq-user-profile-block">
                                <div className="iq-card-body">
                                    <div className="user-details-block">
                                        <div className="user-profile text-center">
                                            <img
                                                src="assets/images/user/11.png"
                                                alt="profile-img"
                                                className="avatar-130 img-fluid"
                                            />
                                        </div>
                                        <div className="text-center mt-3">
                                            <h4>
                                                <b>Bini Jets</b>
                                            </h4>
                                            <p>Doctor</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                in arcu turpis. Nunc
                                            </p>
                                            <a href="#" className="btn btn-primary">
                                                Assign
                                            </a>
                                        </div>
                                        <hr />
                                        <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                                            <li className="text-center">
                                                <h3 className="counter">4500</h3>
                                                <span>Operations</span>
                                            </li>
                                            <li className="text-center">
                                                <h3 className="counter">3.9</h3>
                                                <span>Medical Rating</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Health Curve</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body" style={{ position: "relative" }}>
                                    <div id="home-chart-06" style={{ height: 350, minHeight: 355 }}>
                                        <div
                                            id="apexchartst9oh43x4"
                                            className="apexcharts-canvas apexchartst9oh43x4 light zoomable"
                                            style={{ width: 768, height: 340 }}
                                        >
                                            <svg
                                                id="SvgjsSvg20683"
                                                width={649}
                                                height={340}
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"

                                                className="apexcharts-svg"

                                                transform="translate(0, 0)"
                                                style={{ background: "transparent" }}
                                            >
                                                <g
                                                    id="SvgjsG20685"
                                                    className="apexcharts-inner apexcharts-graphical"
                                                    transform="translate(55.359375, 30)"
                                                >
                                                    <defs id="SvgjsDefs20684">
                                                        <clipPath id="gridRectMaskt9oh43x4">
                                                            <rect
                                                                id="SvgjsRect20698"
                                                                width="706.640625"
                                                                height="271.348"
                                                                x={-2}
                                                                y={-2}
                                                                rx={0}
                                                                ry={0}
                                                                fill="#ffffff"
                                                                opacity={1}
                                                                strokeWidth={0}
                                                                stroke="none"
                                                                strokeDasharray={0}
                                                            />
                                                        </clipPath>
                                                        <clipPath id="gridRectMarkerMaskt9oh43x4">
                                                            <rect
                                                                id="SvgjsRect20699"
                                                                width="704.640625"
                                                                height="269.348"
                                                                x={-1}
                                                                y={-1}
                                                                rx={0}
                                                                ry={0}
                                                                fill="#ffffff"
                                                                opacity={1}
                                                                strokeWidth={0}
                                                                stroke="none"
                                                                strokeDasharray={0}
                                                            />
                                                        </clipPath>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient20705"
                                                            x1={0}
                                                            y1={0}
                                                            x2={0}
                                                            y2={1}
                                                        >
                                                            <stop
                                                                id="SvgjsStop20706"
                                                                stopOpacity="0.65"
                                                                stopColor="rgba(8,155,171,0.65)"
                                                                offset={0}
                                                            />
                                                            <stop
                                                                id="SvgjsStop20707"
                                                                stopOpacity="0.5"
                                                                stopColor="rgba(132,205,213,0.5)"
                                                                offset={1}
                                                            />
                                                            <stop
                                                                id="SvgjsStop20708"
                                                                stopOpacity="0.5"
                                                                stopColor="rgba(132,205,213,0.5)"
                                                                offset={1}
                                                            />
                                                        </linearGradient>
                                                    </defs>
                                                    <line
                                                        id="SvgjsLine20689"
                                                        x1={0}
                                                        y1={0}
                                                        x2={0}
                                                        y2="267.348"
                                                        stroke="#b6b6b6"
                                                        strokeDasharray={3}
                                                        className="apexcharts-xcrosshairs"
                                                        x={0}
                                                        y={0}
                                                        width={1}
                                                        height="267.348"
                                                        fill="#b1b9c4"
                                                        filter="none"
                                                        fillOpacity="0.9"
                                                        strokeWidth={1}
                                                    />
                                                    <g
                                                        id="SvgjsG20711"
                                                        className="apexcharts-xaxis"
                                                        transform="translate(0, 0)"
                                                    >
                                                        <g
                                                            id="SvgjsG20712"
                                                            className="apexcharts-xaxis-texts-g"
                                                            transform="translate(0, -4)"
                                                        >
                                                            <text
                                                                id="SvgjsText20713"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="54.04927884615385"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20714"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                >
                                                                    06:00
                                                                </tspan>
                                                                <title>06:00</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText20715"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="162.14783653846155"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20716"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                >
                                                                    07:00
                                                                </tspan>
                                                                <title>07:00</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText20717"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="270.2463942307692"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20718"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                >
                                                                    08:00
                                                                </tspan>
                                                                <title>08:00</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText20719"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="378.3449519230769"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20720"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                >
                                                                    09:00
                                                                </tspan>
                                                                <title>09:00</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText20721"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="486.4435096153846"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20722"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                >
                                                                    10:00
                                                                </tspan>
                                                                <title>10:00</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText20723"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="594.5420673076923"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20724"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                >
                                                                    11:00
                                                                </tspan>
                                                                <title>11:00</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText20725"
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="702.640625"
                                                                y="296.348"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="12px"
                                                                fontWeight={400}
                                                                fill="#373d3f"
                                                                className="apexcharts-xaxis-label "
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                <tspan
                                                                    id="SvgjsTspan20726"
                                                                    style={{
                                                                        fontFamily: "Helvetica, Arial, sans-serif"
                                                                    }}
                                                                />
                                                                <title />
                                                            </text>
                                                        </g>
                                                        <line
                                                            id="SvgjsLine20727"
                                                            x1={0}
                                                            y1="268.348"
                                                            x2="702.640625"
                                                            y2="268.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            strokeWidth={1}
                                                        />
                                                    </g>
                                                    <g id="SvgjsG20736" className="apexcharts-grid">
                                                        <g
                                                            id="SvgjsG20737"
                                                            className="apexcharts-gridlines-horizontal"
                                                        >
                                                            <line
                                                                id="SvgjsLine20745"
                                                                x1={0}
                                                                y1={0}
                                                                x2="702.640625"
                                                                y2={0}
                                                                stroke="#e0e0e0"
                                                                strokeDasharray={0}
                                                                className="apexcharts-gridline"
                                                            />
                                                            <line
                                                                id="SvgjsLine20746"
                                                                x1={0}
                                                                y1="53.4696"
                                                                x2="702.640625"
                                                                y2="53.4696"
                                                                stroke="#e0e0e0"
                                                                strokeDasharray={0}
                                                                className="apexcharts-gridline"
                                                            />
                                                            <line
                                                                id="SvgjsLine20747"
                                                                x1={0}
                                                                y1="106.9392"
                                                                x2="702.640625"
                                                                y2="106.9392"
                                                                stroke="#e0e0e0"
                                                                strokeDasharray={0}
                                                                className="apexcharts-gridline"
                                                            />
                                                            <line
                                                                id="SvgjsLine20748"
                                                                x1={0}
                                                                y1="160.40879999999999"
                                                                x2="702.640625"
                                                                y2="160.40879999999999"
                                                                stroke="#e0e0e0"
                                                                strokeDasharray={0}
                                                                className="apexcharts-gridline"
                                                            />
                                                            <line
                                                                id="SvgjsLine20749"
                                                                x1={0}
                                                                y1="213.8784"
                                                                x2="702.640625"
                                                                y2="213.8784"
                                                                stroke="#e0e0e0"
                                                                strokeDasharray={0}
                                                                className="apexcharts-gridline"
                                                            />
                                                            <line
                                                                id="SvgjsLine20750"
                                                                x1={0}
                                                                y1="267.348"
                                                                x2="702.640625"
                                                                y2="267.348"
                                                                stroke="#e0e0e0"
                                                                strokeDasharray={0}
                                                                className="apexcharts-gridline"
                                                            />
                                                        </g>
                                                        <g
                                                            id="SvgjsG20738"
                                                            className="apexcharts-gridlines-vertical"
                                                        />
                                                        <line
                                                            id="SvgjsLine20739"
                                                            x1="54.04927884615385"
                                                            y1="268.348"
                                                            x2="54.04927884615385"
                                                            y2="274.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            className="apexcharts-xaxis-tick"
                                                        />
                                                        <line
                                                            id="SvgjsLine20740"
                                                            x1="162.14783653846155"
                                                            y1="268.348"
                                                            x2="162.14783653846155"
                                                            y2="274.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            className="apexcharts-xaxis-tick"
                                                        />
                                                        <line
                                                            id="SvgjsLine20741"
                                                            x1="270.2463942307692"
                                                            y1="268.348"
                                                            x2="270.2463942307692"
                                                            y2="274.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            className="apexcharts-xaxis-tick"
                                                        />
                                                        <line
                                                            id="SvgjsLine20742"
                                                            x1="378.3449519230769"
                                                            y1="268.348"
                                                            x2="378.3449519230769"
                                                            y2="274.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            className="apexcharts-xaxis-tick"
                                                        />
                                                        <line
                                                            id="SvgjsLine20743"
                                                            x1="486.4435096153846"
                                                            y1="268.348"
                                                            x2="486.4435096153846"
                                                            y2="274.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            className="apexcharts-xaxis-tick"
                                                        />
                                                        <line
                                                            id="SvgjsLine20744"
                                                            x1="594.5420673076923"
                                                            y1="268.348"
                                                            x2="594.5420673076923"
                                                            y2="274.348"
                                                            stroke="#78909c"
                                                            strokeDasharray={0}
                                                            className="apexcharts-xaxis-tick"
                                                        />
                                                        <line
                                                            id="SvgjsLine20752"
                                                            x1={0}
                                                            y1="267.348"
                                                            x2="702.640625"
                                                            y2="267.348"
                                                            stroke="transparent"
                                                            strokeDasharray={0}
                                                        />
                                                        <line
                                                            id="SvgjsLine20751"
                                                            x1={0}
                                                            y1={1}
                                                            x2={0}
                                                            y2="267.348"
                                                            stroke="transparent"
                                                            strokeDasharray={0}
                                                        />
                                                    </g>
                                                    <g
                                                        id="SvgjsG20701"
                                                        className="apexcharts-area-series apexcharts-plot-series"
                                                    >
                                                        <g
                                                            id="SvgjsG20702"
                                                            className="apexcharts-series"
                                                            seriesname="series1"

                                                            rel={1}

                                                        >
                                                            <path
                                                                id="SvgjsPath20709"
                                                                d="M 0 267.348L 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014C 702.6406249999999 53.469600000000014 702.6406249999999 53.469600000000014 702.6406249999999 267.348M 702.6406249999999 53.469600000000014z"
                                                                fill="url(#SvgjsLinearGradient20705)"
                                                                fillOpacity={1}
                                                                strokeOpacity={1}
                                                                strokeLinecap="butt"
                                                                strokeWidth={0}
                                                                strokeDasharray={0}
                                                                className="apexcharts-area"
                                                                index={0}
                                                                clipPath="url(#gridRectMaskt9oh43x4)"
                                                                pathto="M 0 267.348L 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014C 702.6406249999999 53.469600000000014 702.6406249999999 53.469600000000014 702.6406249999999 267.348M 702.6406249999999 53.469600000000014z"
                                                                pathfrom="M -1 320.8176L -1 320.8176L 162.14783653846152 320.8176L 270.2463942307692 320.8176L 378.3449519230769 320.8176L 486.4435096153846 320.8176L 594.5420673076923 320.8176L 702.6406249999999 320.8176"
                                                            />
                                                            <path
                                                                id="SvgjsPath20710"
                                                                d="M 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014"
                                                                fill="none"
                                                                fillOpacity={1}
                                                                stroke="#089bab"
                                                                strokeOpacity={1}
                                                                strokeLinecap="butt"
                                                                strokeWidth={4}
                                                                strokeDasharray={0}
                                                                className="apexcharts-area"
                                                                index={0}
                                                                clipPath="url(#gridRectMaskt9oh43x4)"
                                                                pathto="M 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014"
                                                                pathfrom="M -1 320.8176L -1 320.8176L 162.14783653846152 320.8176L 270.2463942307692 320.8176L 378.3449519230769 320.8176L 486.4435096153846 320.8176L 594.5420673076923 320.8176L 702.6406249999999 320.8176"
                                                            />
                                                            <g
                                                                id="SvgjsG20703"
                                                                className="apexcharts-series-markers-wrap"
                                                            >
                                                                <g className="apexcharts-series-markers">
                                                                    <circle
                                                                        id="SvgjsCircle20758"
                                                                        r={0}
                                                                        cx={0}
                                                                        cy={0}
                                                                        className="apexcharts-marker wcoqozutn no-pointer-events"
                                                                        stroke="#ffffff"
                                                                        fill="#089bab"
                                                                        fillOpacity={1}
                                                                        strokeWidth={2}
                                                                        strokeOpacity="0.9"
                                                                        default-marker-size={0}
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g
                                                                id="SvgjsG20704"
                                                                className="apexcharts-datalabels"
                                                            />
                                                        </g>
                                                    </g>
                                                    <line
                                                        id="SvgjsLine20753"
                                                        x1={0}
                                                        y1={0}
                                                        x2="702.640625"
                                                        y2={0}
                                                        stroke="#b6b6b6"
                                                        strokeDasharray={0}
                                                        strokeWidth={1}
                                                        className="apexcharts-ycrosshairs"
                                                    />
                                                    <line
                                                        id="SvgjsLine20754"
                                                        x1={0}
                                                        y1={0}
                                                        x2="702.640625"
                                                        y2={0}
                                                        strokeDasharray={0}
                                                        strokeWidth={0}
                                                        className="apexcharts-ycrosshairs-hidden"
                                                    />
                                                    <g
                                                        id="SvgjsG20755"
                                                        className="apexcharts-yaxis-annotations"
                                                    />
                                                    <g
                                                        id="SvgjsG20756"
                                                        className="apexcharts-xaxis-annotations"
                                                    />
                                                    <g
                                                        id="SvgjsG20757"
                                                        className="apexcharts-point-annotations"
                                                    />
                                                    <rect
                                                        id="SvgjsRect20759"
                                                        width={0}
                                                        height={0}
                                                        x={0}
                                                        y={0}
                                                        rx={0}
                                                        ry={0}
                                                        fill="#fefefe"
                                                        opacity={1}
                                                        strokeWidth={0}
                                                        stroke="none"
                                                        strokeDasharray={0}
                                                        className="apexcharts-zoom-rect"
                                                    />
                                                    <rect
                                                        id="SvgjsRect20760"
                                                        width={0}
                                                        height={0}
                                                        x={0}
                                                        y={0}
                                                        rx={0}
                                                        ry={0}
                                                        fill="#fefefe"
                                                        opacity={1}
                                                        strokeWidth={0}
                                                        stroke="none"
                                                        strokeDasharray={0}
                                                        className="apexcharts-selection-rect"
                                                    />
                                                </g>
                                                <rect
                                                    id="SvgjsRect20688"
                                                    width={0}
                                                    height={0}
                                                    x={0}
                                                    y={0}
                                                    rx={0}
                                                    ry={0}
                                                    fill="#fefefe"
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                />
                                                <g
                                                    id="SvgjsG20728"
                                                    className="apexcharts-yaxis"
                                                    rel={0}
                                                    transform="translate(22.359375, 0)"
                                                >
                                                    <g id="SvgjsG20729" className="apexcharts-yaxis-texts-g">
                                                        <text
                                                            id="SvgjsText20730"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x={20}
                                                            y="31.5"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="11px"
                                                            fontWeight="regular"
                                                            fill="#373d3f"
                                                            className="apexcharts-yaxis-label "
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            120
                                                        </text>
                                                        <text
                                                            id="SvgjsText20731"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x={20}
                                                            y="85.06960000000001"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="11px"
                                                            fontWeight="regular"
                                                            fill="#373d3f"
                                                            className="apexcharts-yaxis-label "
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            100
                                                        </text>
                                                        <text
                                                            id="SvgjsText20732"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x={20}
                                                            y="138.63920000000002"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="11px"
                                                            fontWeight="regular"
                                                            fill="#373d3f"
                                                            className="apexcharts-yaxis-label "
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            80
                                                        </text>
                                                        <text
                                                            id="SvgjsText20733"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x={20}
                                                            y="192.20880000000002"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="11px"
                                                            fontWeight="regular"
                                                            fill="#373d3f"
                                                            className="apexcharts-yaxis-label "
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            60
                                                        </text>
                                                        <text
                                                            id="SvgjsText20734"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x={20}
                                                            y="245.77840000000003"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="11px"
                                                            fontWeight="regular"
                                                            fill="#373d3f"
                                                            className="apexcharts-yaxis-label "
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            40
                                                        </text>
                                                        <text
                                                            id="SvgjsText20735"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x={20}
                                                            y="299.348"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="11px"
                                                            fontWeight="regular"
                                                            fill="#373d3f"
                                                            className="apexcharts-yaxis-label "
                                                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                        >
                                                            20
                                                        </text>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className="apexcharts-legend" />
                                            <div className="apexcharts-tooltip light">
                                                <div
                                                    className="apexcharts-tooltip-title"
                                                    style={{
                                                        fontFamily: "Helvetica, Arial, sans-serif",
                                                        fontSize: 12
                                                    }}
                                                />
                                                <div className="apexcharts-tooltip-series-group">
                                                    <span
                                                        className="apexcharts-tooltip-marker"
                                                        style={{ backgroundColor: "rgb(8, 155, 171)" }}
                                                    />
                                                    <div
                                                        className="apexcharts-tooltip-text"
                                                        style={{
                                                            fontFamily: "Helvetica, Arial, sans-serif",
                                                            fontSize: 12
                                                        }}
                                                    >
                                                        <div className="apexcharts-tooltip-y-group">
                                                            <span className="apexcharts-tooltip-text-label" />
                                                            <span className="apexcharts-tooltip-text-value" />
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label" />
                                                            <span className="apexcharts-tooltip-text-z-value" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card iq-user-profile-block">
                            <div className="iq-card-body">
                                <div className="user-details-block">
                                    <div className="user-profile text-center">
                                        <img
                                            src="assets/images/user/11.png"
                                            alt="profile-img"
                                            className="avatar-130 img-fluid"
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <h4>
                                            <b>Bini Jets</b>
                                        </h4>
                                        <p>Doctor</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                            in arcu turpis. Nunc
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            Assign
                                        </a>
                                    </div>
                                    <hr />
                                    <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                                        <li className="text-center">
                                            <h3 className="counter">4500</h3>
                                            <span>Operations</span>
                                        </li>
                                        <li className="text-center">
                                            <h3 className="counter">3.9</h3>
                                            <span>Medical Rating</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Health Curve</h4>
                                </div>
                            </div>
                            <div className="iq-card-body" style={{ position: "relative" }}>
                                <div id="home-chart-06" style={{ height: 350, minHeight: 355 }}>
                                    <div
                                        id="apexchartst9oh43x4"
                                        className="apexcharts-canvas apexchartst9oh43x4 light zoomable"
                                        style={{ width: 768, height: 340 }}
                                    >
                                        <svg
                                            id="SvgjsSvg20683"
                                            width={649}
                                            height={340}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"

                                            className="apexcharts-svg"

                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                        >
                                            <g
                                                id="SvgjsG20685"
                                                className="apexcharts-inner apexcharts-graphical"
                                                transform="translate(55.359375, 30)"
                                            >
                                                <defs id="SvgjsDefs20684">
                                                    <clipPath id="gridRectMaskt9oh43x4">
                                                        <rect
                                                            id="SvgjsRect20698"
                                                            width="706.640625"
                                                            height="271.348"
                                                            x={-2}
                                                            y={-2}
                                                            rx={0}
                                                            ry={0}
                                                            fill="#ffffff"
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                        />
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMaskt9oh43x4">
                                                        <rect
                                                            id="SvgjsRect20699"
                                                            width="704.640625"
                                                            height="269.348"
                                                            x={-1}
                                                            y={-1}
                                                            rx={0}
                                                            ry={0}
                                                            fill="#ffffff"
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                        />
                                                    </clipPath>
                                                    <linearGradient
                                                        id="SvgjsLinearGradient20705"
                                                        x1={0}
                                                        y1={0}
                                                        x2={0}
                                                        y2={1}
                                                    >
                                                        <stop
                                                            id="SvgjsStop20706"
                                                            stopOpacity="0.65"
                                                            stopColor="rgba(8,155,171,0.65)"
                                                            offset={0}
                                                        />
                                                        <stop
                                                            id="SvgjsStop20707"
                                                            stopOpacity="0.5"
                                                            stopColor="rgba(132,205,213,0.5)"
                                                            offset={1}
                                                        />
                                                        <stop
                                                            id="SvgjsStop20708"
                                                            stopOpacity="0.5"
                                                            stopColor="rgba(132,205,213,0.5)"
                                                            offset={1}
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <line
                                                    id="SvgjsLine20689"
                                                    x1={0}
                                                    y1={0}
                                                    x2={0}
                                                    y2="267.348"
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={3}
                                                    className="apexcharts-xcrosshairs"
                                                    x={0}
                                                    y={0}
                                                    width={1}
                                                    height="267.348"
                                                    fill="#b1b9c4"
                                                    filter="none"
                                                    fillOpacity="0.9"
                                                    strokeWidth={1}
                                                />
                                                <g
                                                    id="SvgjsG20711"
                                                    className="apexcharts-xaxis"
                                                    transform="translate(0, 0)"
                                                >
                                                    <g
                                                        id="SvgjsG20712"
                                                        className="apexcharts-xaxis-texts-g"
                                                        transform="translate(0, -4)"
                                                    >
                                                        <text
                                                            id="SvgjsText20713"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="54.04927884615385"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20714"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                06:00
                                                            </tspan>
                                                            <title>06:00</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText20715"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="162.14783653846155"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20716"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                07:00
                                                            </tspan>
                                                            <title>07:00</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText20717"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="270.2463942307692"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20718"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                08:00
                                                            </tspan>
                                                            <title>08:00</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText20719"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="378.3449519230769"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20720"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                09:00
                                                            </tspan>
                                                            <title>09:00</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText20721"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="486.4435096153846"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20722"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                10:00
                                                            </tspan>
                                                            <title>10:00</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText20723"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="594.5420673076923"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20724"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            >
                                                                11:00
                                                            </tspan>
                                                            <title>11:00</title>
                                                        </text>
                                                        <text
                                                            id="SvgjsText20725"
                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                            x="702.640625"
                                                            y="296.348"
                                                            textAnchor="middle"
                                                            dominantBaseline="auto"
                                                            fontSize="12px"
                                                            fontWeight={400}
                                                            fill="#373d3f"
                                                            className="apexcharts-xaxis-label "
                                                            style={{
                                                                fontFamily: "Helvetica, Arial, sans-serif"
                                                            }}
                                                        >
                                                            <tspan
                                                                id="SvgjsTspan20726"
                                                                style={{
                                                                    fontFamily: "Helvetica, Arial, sans-serif"
                                                                }}
                                                            />
                                                            <title />
                                                        </text>
                                                    </g>
                                                    <line
                                                        id="SvgjsLine20727"
                                                        x1={0}
                                                        y1="268.348"
                                                        x2="702.640625"
                                                        y2="268.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        strokeWidth={1}
                                                    />
                                                </g>
                                                <g id="SvgjsG20736" className="apexcharts-grid">
                                                    <g
                                                        id="SvgjsG20737"
                                                        className="apexcharts-gridlines-horizontal"
                                                    >
                                                        <line
                                                            id="SvgjsLine20745"
                                                            x1={0}
                                                            y1={0}
                                                            x2="702.640625"
                                                            y2={0}
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine20746"
                                                            x1={0}
                                                            y1="53.4696"
                                                            x2="702.640625"
                                                            y2="53.4696"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine20747"
                                                            x1={0}
                                                            y1="106.9392"
                                                            x2="702.640625"
                                                            y2="106.9392"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine20748"
                                                            x1={0}
                                                            y1="160.40879999999999"
                                                            x2="702.640625"
                                                            y2="160.40879999999999"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine20749"
                                                            x1={0}
                                                            y1="213.8784"
                                                            x2="702.640625"
                                                            y2="213.8784"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                        <line
                                                            id="SvgjsLine20750"
                                                            x1={0}
                                                            y1="267.348"
                                                            x2="702.640625"
                                                            y2="267.348"
                                                            stroke="#e0e0e0"
                                                            strokeDasharray={0}
                                                            className="apexcharts-gridline"
                                                        />
                                                    </g>
                                                    <g
                                                        id="SvgjsG20738"
                                                        className="apexcharts-gridlines-vertical"
                                                    />
                                                    <line
                                                        id="SvgjsLine20739"
                                                        x1="54.04927884615385"
                                                        y1="268.348"
                                                        x2="54.04927884615385"
                                                        y2="274.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine20740"
                                                        x1="162.14783653846155"
                                                        y1="268.348"
                                                        x2="162.14783653846155"
                                                        y2="274.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine20741"
                                                        x1="270.2463942307692"
                                                        y1="268.348"
                                                        x2="270.2463942307692"
                                                        y2="274.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine20742"
                                                        x1="378.3449519230769"
                                                        y1="268.348"
                                                        x2="378.3449519230769"
                                                        y2="274.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine20743"
                                                        x1="486.4435096153846"
                                                        y1="268.348"
                                                        x2="486.4435096153846"
                                                        y2="274.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine20744"
                                                        x1="594.5420673076923"
                                                        y1="268.348"
                                                        x2="594.5420673076923"
                                                        y2="274.348"
                                                        stroke="#78909c"
                                                        strokeDasharray={0}
                                                        className="apexcharts-xaxis-tick"
                                                    />
                                                    <line
                                                        id="SvgjsLine20752"
                                                        x1={0}
                                                        y1="267.348"
                                                        x2="702.640625"
                                                        y2="267.348"
                                                        stroke="transparent"
                                                        strokeDasharray={0}
                                                    />
                                                    <line
                                                        id="SvgjsLine20751"
                                                        x1={0}
                                                        y1={1}
                                                        x2={0}
                                                        y2="267.348"
                                                        stroke="transparent"
                                                        strokeDasharray={0}
                                                    />
                                                </g>
                                                <g
                                                    id="SvgjsG20701"
                                                    className="apexcharts-area-series apexcharts-plot-series"
                                                >
                                                    <g
                                                        id="SvgjsG20702"
                                                        className="apexcharts-series"
                                                        seriesname="series1"

                                                        rel={1}

                                                    >
                                                        <path
                                                            id="SvgjsPath20709"
                                                            d="M 0 267.348L 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014C 702.6406249999999 53.469600000000014 702.6406249999999 53.469600000000014 702.6406249999999 267.348M 702.6406249999999 53.469600000000014z"
                                                            fill="url(#SvgjsLinearGradient20705)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="butt"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskt9oh43x4)"
                                                            pathto="M 0 267.348L 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014C 702.6406249999999 53.469600000000014 702.6406249999999 53.469600000000014 702.6406249999999 267.348M 702.6406249999999 53.469600000000014z"
                                                            pathfrom="M -1 320.8176L -1 320.8176L 162.14783653846152 320.8176L 270.2463942307692 320.8176L 378.3449519230769 320.8176L 486.4435096153846 320.8176L 594.5420673076923 320.8176L 702.6406249999999 320.8176"
                                                        />
                                                        <path
                                                            id="SvgjsPath20710"
                                                            d="M 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014"
                                                            fill="none"
                                                            fillOpacity={1}
                                                            stroke="#089bab"
                                                            strokeOpacity={1}
                                                            strokeLinecap="butt"
                                                            strokeWidth={4}
                                                            strokeDasharray={0}
                                                            className="apexcharts-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskt9oh43x4)"
                                                            pathto="M 0 237.93972000000002C 56.75174278846153 237.93972000000002 105.39609374999999 213.87840000000003 162.14783653846152 213.87840000000003C 199.9823317307692 213.87840000000003 232.41189903846154 245.96016000000003 270.2463942307692 245.96016000000003C 308.0808894230769 245.96016000000003 340.5104567307692 184.47012000000004 378.3449519230769 184.47012000000004C 416.1794471153846 184.47012000000004 448.6090144230769 208.53144000000003 486.4435096153846 208.53144000000003C 524.2780048076922 208.53144000000003 556.7075721153846 29.40827999999999 594.5420673076923 29.40827999999999C 632.3765625 29.40827999999999 664.8061298076922 53.469600000000014 702.6406249999999 53.469600000000014"
                                                            pathfrom="M -1 320.8176L -1 320.8176L 162.14783653846152 320.8176L 270.2463942307692 320.8176L 378.3449519230769 320.8176L 486.4435096153846 320.8176L 594.5420673076923 320.8176L 702.6406249999999 320.8176"
                                                        />
                                                        <g
                                                            id="SvgjsG20703"
                                                            className="apexcharts-series-markers-wrap"
                                                        >
                                                            <g className="apexcharts-series-markers">
                                                                <circle
                                                                    id="SvgjsCircle20758"
                                                                    r={0}
                                                                    cx={0}
                                                                    cy={0}
                                                                    className="apexcharts-marker wcoqozutn no-pointer-events"
                                                                    stroke="#ffffff"
                                                                    fill="#089bab"
                                                                    fillOpacity={1}
                                                                    strokeWidth={2}
                                                                    strokeOpacity="0.9"
                                                                    default-marker-size={0}
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            id="SvgjsG20704"
                                                            className="apexcharts-datalabels"
                                                        />
                                                    </g>
                                                </g>
                                                <line
                                                    id="SvgjsLine20753"
                                                    x1={0}
                                                    y1={0}
                                                    x2="702.640625"
                                                    y2={0}
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={0}
                                                    strokeWidth={1}
                                                    className="apexcharts-ycrosshairs"
                                                />
                                                <line
                                                    id="SvgjsLine20754"
                                                    x1={0}
                                                    y1={0}
                                                    x2="702.640625"
                                                    y2={0}
                                                    strokeDasharray={0}
                                                    strokeWidth={0}
                                                    className="apexcharts-ycrosshairs-hidden"
                                                />
                                                <g
                                                    id="SvgjsG20755"
                                                    className="apexcharts-yaxis-annotations"
                                                />
                                                <g
                                                    id="SvgjsG20756"
                                                    className="apexcharts-xaxis-annotations"
                                                />
                                                <g
                                                    id="SvgjsG20757"
                                                    className="apexcharts-point-annotations"
                                                />
                                                <rect
                                                    id="SvgjsRect20759"
                                                    width={0}
                                                    height={0}
                                                    x={0}
                                                    y={0}
                                                    rx={0}
                                                    ry={0}
                                                    fill="#fefefe"
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    className="apexcharts-zoom-rect"
                                                />
                                                <rect
                                                    id="SvgjsRect20760"
                                                    width={0}
                                                    height={0}
                                                    x={0}
                                                    y={0}
                                                    rx={0}
                                                    ry={0}
                                                    fill="#fefefe"
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    className="apexcharts-selection-rect"
                                                />
                                            </g>
                                            <rect
                                                id="SvgjsRect20688"
                                                width={0}
                                                height={0}
                                                x={0}
                                                y={0}
                                                rx={0}
                                                ry={0}
                                                fill="#fefefe"
                                                opacity={1}
                                                strokeWidth={0}
                                                stroke="none"
                                                strokeDasharray={0}
                                            />
                                            <g
                                                id="SvgjsG20728"
                                                className="apexcharts-yaxis"
                                                rel={0}
                                                transform="translate(22.359375, 0)"
                                            >
                                                <g id="SvgjsG20729" className="apexcharts-yaxis-texts-g">
                                                    <text
                                                        id="SvgjsText20730"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="31.5"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight="regular"
                                                        fill="#373d3f"
                                                        className="apexcharts-yaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        120
                                                    </text>
                                                    <text
                                                        id="SvgjsText20731"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="85.06960000000001"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight="regular"
                                                        fill="#373d3f"
                                                        className="apexcharts-yaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        100
                                                    </text>
                                                    <text
                                                        id="SvgjsText20732"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="138.63920000000002"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight="regular"
                                                        fill="#373d3f"
                                                        className="apexcharts-yaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        80
                                                    </text>
                                                    <text
                                                        id="SvgjsText20733"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="192.20880000000002"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight="regular"
                                                        fill="#373d3f"
                                                        className="apexcharts-yaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        60
                                                    </text>
                                                    <text
                                                        id="SvgjsText20734"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="245.77840000000003"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight="regular"
                                                        fill="#373d3f"
                                                        className="apexcharts-yaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        40
                                                    </text>
                                                    <text
                                                        id="SvgjsText20735"
                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                        x={20}
                                                        y="299.348"
                                                        textAnchor="end"
                                                        dominantBaseline="auto"
                                                        fontSize="11px"
                                                        fontWeight="regular"
                                                        fill="#373d3f"
                                                        className="apexcharts-yaxis-label "
                                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                                    >
                                                        20
                                                    </text>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="apexcharts-legend" />
                                        <div className="apexcharts-tooltip light">
                                            <div
                                                className="apexcharts-tooltip-title"
                                                style={{
                                                    fontFamily: "Helvetica, Arial, sans-serif",
                                                    fontSize: 12
                                                }}
                                            />
                                            <div className="apexcharts-tooltip-series-group">
                                                <span
                                                    className="apexcharts-tooltip-marker"
                                                    style={{ backgroundColor: "rgb(8, 155, 171)" }}
                                                />
                                                <div
                                                    className="apexcharts-tooltip-text"
                                                    style={{
                                                        fontFamily: "Helvetica, Arial, sans-serif",
                                                        fontSize: 12
                                                    }}
                                                >
                                                    <div className="apexcharts-tooltip-y-group">
                                                        <span className="apexcharts-tooltip-text-label" />
                                                        <span className="apexcharts-tooltip-text-value" />
                                                    </div>
                                                    <div className="apexcharts-tooltip-z-group">
                                                        <span className="apexcharts-tooltip-text-z-label" />
                                                        <span className="apexcharts-tooltip-text-z-value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Nearest Treatment</h4>
                                </div>
                            </div>
                            <div className="iq-card-body smaill-calender-home">
                                <input
                                    type="text"
                                    className="flatpicker d-none flatpickr-input"
                                    readOnly="readonly"
                                />
                                <div className="flatpickr-calendar animate inline" tabIndex={-1}>
                                    <div className="flatpickr-months">
                                        <span className="flatpickr-prev-month">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 17 17"
                                            >
                                                <g />
                                                <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" />
                                            </svg>
                                        </span>
                                        <div className="flatpickr-month">
                                            <div className="flatpickr-current-month">
                                                <select
                                                    className="flatpickr-monthDropdown-months"
                                                    tabIndex={-1}
                                                >
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={0}
                                                        tabIndex={-1}
                                                    >
                                                        January
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={1}
                                                        tabIndex={-1}
                                                    >
                                                        February
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={2}
                                                        tabIndex={-1}
                                                    >
                                                        March
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={3}
                                                        tabIndex={-1}
                                                    >
                                                        April
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={4}
                                                        tabIndex={-1}
                                                    >
                                                        May
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={5}
                                                        tabIndex={-1}
                                                    >
                                                        June
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={6}
                                                        tabIndex={-1}
                                                    >
                                                        July
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={7}
                                                        tabIndex={-1}
                                                    >
                                                        August
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={8}
                                                        tabIndex={-1}
                                                    >
                                                        September
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={9}
                                                        tabIndex={-1}
                                                    >
                                                        October
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={10}
                                                        tabIndex={-1}
                                                    >
                                                        November
                                                    </option>
                                                    <option
                                                        className="flatpickr-monthDropdown-month"
                                                        value={11}
                                                        tabIndex={-1}
                                                    >
                                                        December
                                                    </option>
                                                </select>
                                                <div className="numInputWrapper">
                                                    <input
                                                        className="numInput cur-year"
                                                        type="number"
                                                        tabIndex={-1}
                                                        aria-label="Year"
                                                    />
                                                    <span className="arrowUp" />
                                                    <span className="arrowDown" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="flatpickr-next-month">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 17 17"
                                            >
                                                <g />
                                                <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flatpickr-innerContainer">
                                        <div className="flatpickr-rContainer">
                                            <div className="flatpickr-weekdays">
                                                <div className="flatpickr-weekdaycontainer">
                                                    <span className="flatpickr-weekday">Sun</span>
                                                    <span className="flatpickr-weekday">Mon</span>
                                                    <span className="flatpickr-weekday">Tue</span>
                                                    <span className="flatpickr-weekday">Wed</span>
                                                    <span className="flatpickr-weekday">Thu</span>
                                                    <span className="flatpickr-weekday">Fri</span>
                                                    <span className="flatpickr-weekday">Sat</span>
                                                </div>
                                            </div>
                                            <div className="flatpickr-days" tabIndex={-1}>
                                                <div className="dayContainer">
                                                    <span
                                                        className="flatpickr-day prevMonthDay"
                                                        aria-label="April 28, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        28
                                                    </span>
                                                    <span
                                                        className="flatpickr-day prevMonthDay"
                                                        aria-label="April 29, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        29
                                                    </span>
                                                    <span
                                                        className="flatpickr-day prevMonthDay"
                                                        aria-label="April 30, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        30
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 1, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        1
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 2, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        2
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 3, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        3
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 4, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        4
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 5, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        5
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 6, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        6
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 7, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        7
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 8, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        8
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 9, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        9
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 10, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        10
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 11, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        11
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 12, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        12
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 13, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        13
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 14, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        14
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 15, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        15
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 16, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        16
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 17, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        17
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 18, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        18
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 19, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        19
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 20, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        20
                                                    </span>
                                                    <span
                                                        className="flatpickr-day today"
                                                        aria-label="May 21, 2024"
                                                        aria-current="date"
                                                        tabIndex={-1}
                                                    >
                                                        21
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 22, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        22
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 23, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        23
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 24, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        24
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 25, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        25
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 26, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        26
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 27, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        27
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 28, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        28
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 29, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        29
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 30, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        30
                                                    </span>
                                                    <span
                                                        className="flatpickr-day "
                                                        aria-label="May 31, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        31
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 1, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        1
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 2, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        2
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 3, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        3
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 4, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        4
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 5, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        5
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 6, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        6
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 7, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        7
                                                    </span>
                                                    <span
                                                        className="flatpickr-day nextMonthDay"
                                                        aria-label="June 8, 2024"
                                                        tabIndex={-1}
                                                    >
                                                        8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-body">
                                <h6>APPOINTMENTS</h6>
                                <h3>
                                    <b>5075</b>
                                </h3>
                            </div>
                            <div
                                className="wave-chart-container"
                                style={{ height: 80, position: "relative" }}
                            >
                                <div id="wave-chart-7" style={{ minHeight: 80 }}>
                                    <div
                                        id="apexcharts2zg7r4aw"
                                        className="apexcharts-canvas apexcharts2zg7r4aw light"
                                        style={{ width: 392, height: 80 }}
                                    >
                                        <svg
                                            id="SvgjsSvg22834"
                                            width={334}
                                            height={80}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"

                                            className="apexcharts-svg"

                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                        >
                                            <g
                                                id="SvgjsG22836"
                                                className="apexcharts-inner apexcharts-graphical"
                                                transform="translate(0, 0)"
                                            >
                                                <defs id="SvgjsDefs22835">
                                                    <clipPath id="gridRectMask2zg7r4aw">
                                                        <rect
                                                            id="SvgjsRect22850"
                                                            width={395}
                                                            height={83}
                                                            x="-1.5"
                                                            y="-1.5"
                                                            rx={0}
                                                            ry={0}
                                                            fill="#ffffff"
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                        />
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMask2zg7r4aw">
                                                        <rect
                                                            id="SvgjsRect22851"
                                                            width={394}
                                                            height={82}
                                                            x={-1}
                                                            y={-1}
                                                            rx={0}
                                                            ry={0}
                                                            fill="#ffffff"
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                        />
                                                    </clipPath>
                                                    <linearGradient
                                                        id="SvgjsLinearGradient22857"
                                                        x1={0}
                                                        y1={0}
                                                        x2={0}
                                                        y2={1}
                                                    >
                                                        <stop
                                                            id="SvgjsStop22858"
                                                            stopOpacity="0.5"
                                                            stopColor="rgba(8,155,171,0.5)"
                                                            offset={0}
                                                        />
                                                        <stop
                                                            id="SvgjsStop22859"
                                                            stopOpacity={0}
                                                            stopColor="rgba(255,255,255,0)"
                                                            offset="0.9"
                                                        />
                                                        <stop
                                                            id="SvgjsStop22860"
                                                            stopOpacity={0}
                                                            stopColor="rgba(255,255,255,0)"
                                                            offset={1}
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <line
                                                    id="SvgjsLine22839"
                                                    x1={0}
                                                    y1={0}
                                                    x2={0}
                                                    y2={80}
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={3}
                                                    className="apexcharts-xcrosshairs"
                                                    x={0}
                                                    y={0}
                                                    width={1}
                                                    height={80}
                                                    fill="#b1b9c4"
                                                    filter="none"
                                                    fillOpacity="0.9"
                                                    strokeWidth={1}
                                                />
                                                <g
                                                    id="SvgjsG22863"
                                                    className="apexcharts-xaxis"
                                                    transform="translate(0, 0)" >

                                                    <g
                                                        id="SvgjsG22864"
                                                        className="apexcharts-xaxis-texts-g"
                                                        transform="translate(0, -4)"
                                                    />
                                                </g>
                                                <g id="SvgjsG22867" className="apexcharts-grid">
                                                    <line
                                                        id="SvgjsLine22869"
                                                        x1={0}
                                                        y1={80}
                                                        x2={392}
                                                        y2={80}
                                                        stroke="transparent"
                                                        strokeDasharray={0} />

                                                    <line
                                                        id="SvgjsLine22868"
                                                        x1={0}
                                                        y1={1}
                                                        x2={0}
                                                        y2={80}
                                                        stroke="transparent"
                                                        strokeDasharray={0} />

                                                </g>
                                                <g
                                                    id="SvgjsG22853"
                                                    className="apexcharts-area-series apexcharts-plot-series"
                                                >
                                                    <g
                                                        id="SvgjsG22854"
                                                        className="apexcharts-series"
                                                        seriesname="seriesx1"

                                                        rel={1}

                                                    >
                                                        <path
                                                            id="SvgjsPath22861"
                                                            d="M-43.55555555555556 80L-43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 75.824 -43.55555555555556 75.824C-35.59795555555556 75.824 -28.777155555555556 37.6 -20.819555555555556 37.6C-5.575111111111113 37.6 7.491555555555557 20 22.736 20C37.980444444444444 20 51.04711111111112 48.8 66.29155555555556 48.8C81.536 48.8 94.60266666666666 32 109.8471111111111 32C125.09155555555554 32 138.15822222222224 44.8 153.40266666666668 44.8C168.64711111111112 44.8 181.71377777777778 12 196.95822222222222 12C212.20266666666666 12 225.26933333333332 65.6 240.51377777777776 65.6C255.75822222222223 65.6 268.8248888888889 38.4 284.06933333333336 38.4C299.3137777777778 38.4 312.3804444444445 24 327.6248888888889 24C342.8693333333333 24 355.93600000000004 30.4 371.18044444444445 30.4C378.4672888888889 30.4 384.71315555555555 44.166399999999996 392 70.05760000000001C392 70.05760000000001 392 70.05760000000001 392 80M392 44.166399999999996L392 44.166399999999996 "
                                                            fill="url(#SvgjsLinearGradient22857)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="butt"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMask2zg7r4aw)"
                                                            pathto="M -43.55555555555556 80L -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 37.6 -43.55555555555556 37.6C -28.311111111111114 37.6 -15.244444444444444 20 0 20C 15.244444444444444 20 28.311111111111114 48.8 43.55555555555556 48.8C 58.8 48.8 71.86666666666667 32 87.11111111111111 32C 102.35555555555555 32 115.42222222222222 44.8 130.66666666666666 44.8C 145.9111111111111 44.8 158.9777777777778 12 174.22222222222223 12C 189.46666666666667 12 202.53333333333333 65.6 217.77777777777777 65.6C 233.0222222222222 65.6 246.08888888888887 38.4 261.3333333333333 38.4C 276.5777777777778 38.4 289.64444444444445 24 304.8888888888889 24C 320.1333333333333 24 333.20000000000005 30.4 348.44444444444446 30.4C 363.68888888888887 30.4 376.7555555555556 59.2 392 59.2C 392 59.2 392 59.2 392 80M 392 59.2z"
                                                            pathfrom="M -43.55555555555556 80L -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 72 -43.55555555555556 72C -28.311111111111114 72 -15.244444444444444 37.6 0 37.6C 15.244444444444444 37.6 28.311111111111114 20 43.55555555555556 20C 58.8 20 71.86666666666667 48.8 87.11111111111111 48.8C 102.35555555555555 48.8 115.42222222222222 32 130.66666666666666 32C 145.9111111111111 32 158.9777777777778 44.8 174.22222222222223 44.8C 189.46666666666667 44.8 202.53333333333333 12 217.77777777777777 12C 233.0222222222222 12 246.08888888888887 65.6 261.3333333333333 65.6C 276.5777777777778 65.6 289.64444444444445 38.4 304.8888888888889 38.4C 320.1333333333333 38.4 333.20000000000005 24 348.44444444444446 24C 363.68888888888887 24 376.7555555555556 30.4 392 30.4C 392 30.4 392 30.4 392 80M 392 30.4z"
                                                        />
                                                        <path
                                                            id="SvgjsPath22862"
                                                            d="M-43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 75.76 -43.55555555555556 75.76C-35.476 75.76 -28.550666666666665 37.6 -20.47111111111111 37.6C-5.226666666666667 37.6 7.840000000000003 20 23.084444444444447 20C38.32888888888888 20 51.39555555555556 48.8 66.64 48.8C81.88444444444444 48.8 94.95111111111112 32 110.19555555555556 32C125.44 32 138.50666666666666 44.8 153.7511111111111 44.8C168.99555555555554 44.8 182.06222222222223 12 197.30666666666667 12C212.5511111111111 12 225.61777777777777 65.6 240.86222222222221 65.6C256.1066666666667 65.6 269.17333333333335 38.4 284.41777777777776 38.4C299.6622222222222 38.4 312.7288888888889 24 327.97333333333336 24C343.21777777777777 24 356.2844444444445 30.4 371.5288888888889 30.4C378.69377777777777 30.4 384.83511111111113 43.936 392 43.936 "
                                                            fill="none"
                                                            fillOpacity={1}
                                                            stroke="#089bab"
                                                            strokeOpacity={1}
                                                            strokeLinecap="butt"
                                                            strokeWidth={3}
                                                            strokeDasharray={0}
                                                            className="apexcharts-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMask2zg7r4aw)"
                                                            pathto="M -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 37.6 -43.55555555555556 37.6C -28.311111111111114 37.6 -15.244444444444444 20 0 20C 15.244444444444444 20 28.311111111111114 48.8 43.55555555555556 48.8C 58.8 48.8 71.86666666666667 32 87.11111111111111 32C 102.35555555555555 32 115.42222222222222 44.8 130.66666666666666 44.8C 145.9111111111111 44.8 158.9777777777778 12 174.22222222222223 12C 189.46666666666667 12 202.53333333333333 65.6 217.77777777777777 65.6C 233.0222222222222 65.6 246.08888888888887 38.4 261.3333333333333 38.4C 276.5777777777778 38.4 289.64444444444445 24 304.8888888888889 24C 320.1333333333333 24 333.20000000000005 30.4 348.44444444444446 30.4C 363.68888888888887 30.4 376.7555555555556 59.2 392 59.2"
                                                            pathfrom="M -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 72 -43.55555555555556 72C -28.311111111111114 72 -15.244444444444444 37.6 0 37.6C 15.244444444444444 37.6 28.311111111111114 20 43.55555555555556 20C 58.8 20 71.86666666666667 48.8 87.11111111111111 48.8C 102.35555555555555 48.8 115.42222222222222 32 130.66666666666666 32C 145.9111111111111 32 158.9777777777778 44.8 174.22222222222223 44.8C 189.46666666666667 44.8 202.53333333333333 12 217.77777777777777 12C 233.0222222222222 12 246.08888888888887 65.6 261.3333333333333 65.6C 276.5777777777778 65.6 289.64444444444445 38.4 304.8888888888889 38.4C 320.1333333333333 38.4 333.20000000000005 24 348.44444444444446 24C 363.68888888888887 24 376.7555555555556 30.4 392 30.4"
                                                        />
                                                        <g
                                                            id="SvgjsG22855"
                                                            className="apexcharts-series-markers-wrap"
                                                        >
                                                            <g className="apexcharts-series-markers">
                                                                <circle
                                                                    id="SvgjsCircle22875"
                                                                    r={0}
                                                                    cx={0}
                                                                    cy={0}
                                                                    className="apexcharts-marker wwe6pcmm2 no-pointer-events"
                                                                    stroke="#ffffff"
                                                                    fill="#089bab"
                                                                    fillOpacity={1}
                                                                    strokeWidth={2}
                                                                    strokeOpacity="0.9"
                                                                    default-marker-size={0}
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            id="SvgjsG22856"
                                                            className="apexcharts-datalabels"
                                                        />
                                                    </g>
                                                </g>
                                                <line
                                                    id="SvgjsLine22870"
                                                    x1={0}
                                                    y1={0}
                                                    x2={392}
                                                    y2={0}
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={0}
                                                    strokeWidth={1}
                                                    className="apexcharts-ycrosshairs"
                                                />
                                                <line
                                                    id="SvgjsLine22871"
                                                    x1={0}
                                                    y1={0}
                                                    x2={392}
                                                    y2={0}
                                                    strokeDasharray={0}
                                                    strokeWidth={0}
                                                    className="apexcharts-ycrosshairs-hidden"
                                                />
                                                <g
                                                    id="SvgjsG22872"
                                                    className="apexcharts-yaxis-annotations"
                                                />
                                                <g
                                                    id="SvgjsG22873"
                                                    className="apexcharts-xaxis-annotations"
                                                />
                                                <g
                                                    id="SvgjsG22874"
                                                    className="apexcharts-point-annotations"
                                                />
                                            </g>
                                            <rect
                                                id="SvgjsRect22838"
                                                width={0}
                                                height={0}
                                                x={0}
                                                y={0}
                                                rx={0}
                                                ry={0}
                                                fill="#fefefe"
                                                opacity={1}
                                                strokeWidth={0}
                                                stroke="none"
                                                strokeDasharray={0}
                                            />
                                            <g
                                                id="SvgjsG22865"
                                                className="apexcharts-yaxis"
                                                rel={0}
                                                transform="translate(-21, 0)"
                                            >
                                                <g
                                                    id="SvgjsG22866"
                                                    className="apexcharts-yaxis-texts-g"
                                                />
                                            </g>
                                        </svg>
                                        <div className="apexcharts-legend" />
                                        <div className="apexcharts-tooltip light">
                                            <div
                                                className="apexcharts-tooltip-title"
                                                style={{
                                                    fontFamily: "Helvetica, Arial, sans-serif",
                                                    fontSize: 12
                                                }}
                                            />
                                            <div className="apexcharts-tooltip-series-group">
                                                <span
                                                    className="apexcharts-tooltip-marker"
                                                    style={{ backgroundColor: "rgb(8, 155, 171)" }}
                                                />
                                                <div
                                                    className="apexcharts-tooltip-text"
                                                    style={{
                                                        fontFamily: "Helvetica, Arial, sans-serif",
                                                        fontSize: 12
                                                    }}
                                                >
                                                    <div className="apexcharts-tooltip-y-group">
                                                        <span className="apexcharts-tooltip-text-label" />
                                                        <span className="apexcharts-tooltip-text-value" />
                                                    </div>
                                                    <div className="apexcharts-tooltip-z-group">
                                                        <span className="apexcharts-tooltip-text-z-label" />
                                                        <span className="apexcharts-tooltip-text-z-value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="resize-triggers">
                                    <div className="expand-trigger">
                                        <div style={{ width: 393, height: 81 }} />
                                    </div>
                                    <div className="contract-trigger" />
                                </div>
                            </div>
                        </div>
                        <div className="iq-card">
                            <div className="iq-card-body">
                                <h6>NEW PATIENTS</h6>
                                <h3>
                                    <b>1200</b>
                                </h3>
                            </div>
                            <div
                                className="wave-chart-container"
                                style={{ height: 80, position: "relative" }}
                            >
                                <div id="wave-chart-8" style={{ minHeight: 80 }}>
                                    <div
                                        id="apexchartscytshzo5"
                                        className="apexcharts-canvas apexchartscytshzo5 light"
                                        style={{ width: 392, height: 80 }}
                                    >
                                        <svg
                                            id="SvgjsSvg22879"
                                            width={334}
                                            height={80}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"

                                            className="apexcharts-svg"

                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                        >
                                            <g
                                                id="SvgjsG22881"
                                                className="apexcharts-inner apexcharts-graphical"
                                                transform="translate(0, 0)"
                                            >
                                                <defs id="SvgjsDefs22880">
                                                    <clipPath id="gridRectMaskcytshzo5">
                                                        <rect
                                                            id="SvgjsRect22895"
                                                            width={395}
                                                            height={83}
                                                            x="-1.5"
                                                            y="-1.5"
                                                            rx={0}
                                                            ry={0}
                                                            fill="#ffffff"
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                        />
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMaskcytshzo5">
                                                        <rect
                                                            id="SvgjsRect22896"
                                                            width={394}
                                                            height={82}
                                                            x={-1}
                                                            y={-1}
                                                            rx={0}
                                                            ry={0}
                                                            fill="#ffffff"
                                                            opacity={1}
                                                            strokeWidth={0}
                                                            stroke="none"
                                                            strokeDasharray={0}
                                                        />
                                                    </clipPath>
                                                    <linearGradient
                                                        id="SvgjsLinearGradient22902"
                                                        x1={0}
                                                        y1={0}
                                                        x2={0}
                                                        y2={1}
                                                    >
                                                        <stop
                                                            id="SvgjsStop22903"
                                                            stopOpacity="0.5"
                                                            stopColor="rgba(252,159,91,0.5)"
                                                            offset={0}
                                                        />
                                                        <stop
                                                            id="SvgjsStop22904"
                                                            stopOpacity={0}
                                                            stopColor="rgba(255,255,255,0)"
                                                            offset="0.9"
                                                        />
                                                        <stop
                                                            id="SvgjsStop22905"
                                                            stopOpacity={0}
                                                            stopColor="rgba(255,255,255,0)"
                                                            offset={1}
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <line
                                                    id="SvgjsLine22884"
                                                    x1={0}
                                                    y1={0}
                                                    x2={0}
                                                    y2={80}
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={3}
                                                    className="apexcharts-xcrosshairs"
                                                    x={0}
                                                    y={0}
                                                    width={1}
                                                    height={80}
                                                    fill="#b1b9c4"
                                                    filter="none"
                                                    fillOpacity="0.9"
                                                    strokeWidth={1}
                                                />
                                                <g
                                                    id="SvgjsG22908"
                                                    className="apexcharts-xaxis"
                                                    transform="translate(0, 0)"
                                                >
                                                    <g
                                                        id="SvgjsG22909"
                                                        className="apexcharts-xaxis-texts-g"
                                                        transform="translate(0, -4)"
                                                    />
                                                </g>
                                                <g id="SvgjsG22912" className="apexcharts-grid">
                                                    <line
                                                        id="SvgjsLine22914"
                                                        x1={0}
                                                        y1={80}
                                                        x2={392}
                                                        y2={80}
                                                        stroke="transparent"
                                                        strokeDasharray={0}
                                                    />
                                                    <line
                                                        id="SvgjsLine22913"
                                                        x1={0}
                                                        y1={1}
                                                        x2={0}
                                                        y2={80}
                                                        stroke="transparent"
                                                        strokeDasharray={0}
                                                    />
                                                </g>
                                                <g
                                                    id="SvgjsG22898"
                                                    className="apexcharts-area-series apexcharts-plot-series"
                                                >
                                                    <g
                                                        id="SvgjsG22899"
                                                        className="apexcharts-series"
                                                        seriesname="seriesx1"

                                                        rel={1}

                                                    >
                                                        <path
                                                            id="SvgjsPath22906"
                                                            d="M-43.55555555555556 80L-43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 75.664 -43.55555555555556 75.664C-35.29306666666667 75.664 -28.210933333333337 37.6 -19.948444444444444 37.6C-4.704000000000001 37.6 8.36266666666667 20 23.607111111111113 20C38.85155555555555 20 51.91822222222223 48.8 67.16266666666667 48.8C82.4071111111111 48.8 95.47377777777777 32 110.71822222222221 32C125.96266666666665 32 139.02933333333334 44.8 154.27377777777778 44.8C169.51822222222222 44.8 182.58488888888888 12 197.82933333333332 12C213.07377777777776 12 226.14044444444443 65.6 241.38488888888887 65.6C256.6293333333333 65.6 269.69599999999997 38.4 284.94044444444444 38.4C300.1848888888889 38.4 313.25155555555557 24 328.49600000000004 24C343.74044444444445 24 356.80711111111117 30.4 372.0515555555556 30.4C379.0335111111111 30.4 385.01804444444446 43.5904 392 70.4736C392 70.4736 392 70.4736 392 80M392 43.5904L392 43.5904 "
                                                            fill="url(#SvgjsLinearGradient22902)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            strokeLinecap="butt"
                                                            strokeWidth={0}
                                                            strokeDasharray={0}
                                                            className="apexcharts-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskcytshzo5)"
                                                            pathto="M -43.55555555555556 80L -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 37.6 -43.55555555555556 37.6C -28.311111111111114 37.6 -15.244444444444444 20 0 20C 15.244444444444444 20 28.311111111111114 48.8 43.55555555555556 48.8C 58.8 48.8 71.86666666666667 32 87.11111111111111 32C 102.35555555555555 32 115.42222222222222 44.8 130.66666666666666 44.8C 145.9111111111111 44.8 158.9777777777778 12 174.22222222222223 12C 189.46666666666667 12 202.53333333333333 65.6 217.77777777777777 65.6C 233.0222222222222 65.6 246.08888888888887 38.4 261.3333333333333 38.4C 276.5777777777778 38.4 289.64444444444445 24 304.8888888888889 24C 320.1333333333333 24 333.20000000000005 30.4 348.44444444444446 30.4C 363.68888888888887 30.4 376.7555555555556 59.2 392 59.2C 392 59.2 392 59.2 392 80M 392 59.2z"
                                                            pathfrom="M -43.55555555555556 80L -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 72 -43.55555555555556 72C -28.311111111111114 72 -15.244444444444444 37.6 0 37.6C 15.244444444444444 37.6 28.311111111111114 20 43.55555555555556 20C 58.8 20 71.86666666666667 48.8 87.11111111111111 48.8C 102.35555555555555 48.8 115.42222222222222 32 130.66666666666666 32C 145.9111111111111 32 158.9777777777778 44.8 174.22222222222223 44.8C 189.46666666666667 44.8 202.53333333333333 12 217.77777777777777 12C 233.0222222222222 12 246.08888888888887 65.6 261.3333333333333 65.6C 276.5777777777778 65.6 289.64444444444445 38.4 304.8888888888889 38.4C 320.1333333333333 38.4 333.20000000000005 24 348.44444444444446 24C 363.68888888888887 24 376.7555555555556 30.4 392 30.4C 392 30.4 392 30.4 392 80M 392 30.4z"
                                                        />
                                                        <path
                                                            id="SvgjsPath22907"
                                                            d="M-43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C-43.55555555555556 80 -43.55555555555556 75.552 -43.55555555555556 75.552C-35.07964444444445 75.552 -27.814577777777778 37.6 -19.33866666666667 37.6C-4.094222222222225 37.6 8.972444444444445 20 24.21688888888889 20C39.46133333333333 20 52.528000000000006 48.8 67.77244444444445 48.8C83.01688888888889 48.8 96.08355555555556 32 111.328 32C126.57244444444444 32 139.6391111111111 44.8 154.88355555555555 44.8C170.128 44.8 183.19466666666668 12 198.43911111111112 12C213.68355555555556 12 226.75022222222222 65.6 241.99466666666666 65.6C257.23911111111113 65.6 270.3057777777778 38.4 285.5502222222222 38.4C300.79466666666667 38.4 313.86133333333333 24 329.1057777777778 24C344.3502222222222 24 357.41688888888893 30.4 372.66133333333335 30.4C379.42986666666667 30.4 385.2314666666667 43.187200000000004 392 43.187200000000004 "
                                                            fill="none"
                                                            fillOpacity={1}
                                                            stroke="#fc9f5b"
                                                            strokeOpacity={1}
                                                            strokeLinecap="butt"
                                                            strokeWidth={3}
                                                            strokeDasharray={0}
                                                            className="apexcharts-area"
                                                            index={0}
                                                            clipPath="url(#gridRectMaskcytshzo5)"
                                                            pathto="M -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 37.6 -43.55555555555556 37.6C -28.311111111111114 37.6 -15.244444444444444 20 0 20C 15.244444444444444 20 28.311111111111114 48.8 43.55555555555556 48.8C 58.8 48.8 71.86666666666667 32 87.11111111111111 32C 102.35555555555555 32 115.42222222222222 44.8 130.66666666666666 44.8C 145.9111111111111 44.8 158.9777777777778 12 174.22222222222223 12C 189.46666666666667 12 202.53333333333333 65.6 217.77777777777777 65.6C 233.0222222222222 65.6 246.08888888888887 38.4 261.3333333333333 38.4C 276.5777777777778 38.4 289.64444444444445 24 304.8888888888889 24C 320.1333333333333 24 333.20000000000005 30.4 348.44444444444446 30.4C 363.68888888888887 30.4 376.7555555555556 59.2 392 59.2"
                                                            pathfrom="M -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 80 -43.55555555555556 80C -43.55555555555556 80 -43.55555555555556 72 -43.55555555555556 72C -28.311111111111114 72 -15.244444444444444 37.6 0 37.6C 15.244444444444444 37.6 28.311111111111114 20 43.55555555555556 20C 58.8 20 71.86666666666667 48.8 87.11111111111111 48.8C 102.35555555555555 48.8 115.42222222222222 32 130.66666666666666 32C 145.9111111111111 32 158.9777777777778 44.8 174.22222222222223 44.8C 189.46666666666667 44.8 202.53333333333333 12 217.77777777777777 12C 233.0222222222222 12 246.08888888888887 65.6 261.3333333333333 65.6C 276.5777777777778 65.6 289.64444444444445 38.4 304.8888888888889 38.4C 320.1333333333333 38.4 333.20000000000005 24 348.44444444444446 24C 363.68888888888887 24 376.7555555555556 30.4 392 30.4"
                                                        />
                                                        <g
                                                            id="SvgjsG22900"
                                                            className="apexcharts-series-markers-wrap"
                                                        >
                                                            <g className="apexcharts-series-markers">
                                                                <circle
                                                                    id="SvgjsCircle22920"
                                                                    r={0}
                                                                    cx={0}
                                                                    cy={0}
                                                                    className="apexcharts-marker w6lqb9ntwj no-pointer-events"
                                                                    stroke="#ffffff"
                                                                    fill="#fc9f5b"
                                                                    fillOpacity={1}
                                                                    strokeWidth={2}
                                                                    strokeOpacity="0.9"
                                                                    default-marker-size={0}
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            id="SvgjsG22901"
                                                            className="apexcharts-datalabels"
                                                        />
                                                    </g>
                                                </g>
                                                <line
                                                    id="SvgjsLine22915"
                                                    x1={0}
                                                    y1={0}
                                                    x2={392}
                                                    y2={0}
                                                    stroke="#b6b6b6"
                                                    strokeDasharray={0}
                                                    strokeWidth={1}
                                                    className="apexcharts-ycrosshairs"
                                                />
                                                <line
                                                    id="SvgjsLine22916"
                                                    x1={0}
                                                    y1={0}
                                                    x2={392}
                                                    y2={0}
                                                    strokeDasharray={0}
                                                    strokeWidth={0}
                                                    className="apexcharts-ycrosshairs-hidden"
                                                />
                                                <g
                                                    id="SvgjsG22917"
                                                    className="apexcharts-yaxis-annotations"
                                                />
                                                <g
                                                    id="SvgjsG22918"
                                                    className="apexcharts-xaxis-annotations"
                                                />
                                                <g
                                                    id="SvgjsG22919"
                                                    className="apexcharts-point-annotations"
                                                />
                                            </g>
                                            <rect
                                                id="SvgjsRect22883"
                                                width={0}
                                                height={0}
                                                x={0}
                                                y={0}
                                                rx={0}
                                                ry={0}
                                                fill="#fefefe"
                                                opacity={1}
                                                strokeWidth={0}
                                                stroke="none"
                                                strokeDasharray={0}
                                            />
                                            <g
                                                id="SvgjsG22910"
                                                className="apexcharts-yaxis"
                                                rel={0}
                                                transform="translate(-21, 0)"
                                            >
                                                <g
                                                    id="SvgjsG22911"
                                                    className="apexcharts-yaxis-texts-g"
                                                />
                                            </g>
                                        </svg>
                                        <div className="apexcharts-legend" />
                                        <div className="apexcharts-tooltip light">
                                            <div
                                                className="apexcharts-tooltip-title"
                                                style={{
                                                    fontFamily: "Helvetica, Arial, sans-serif",
                                                    fontSize: 12
                                                }}
                                            />
                                            <div className="apexcharts-tooltip-series-group">
                                                <span
                                                    className="apexcharts-tooltip-marker"
                                                    style={{ backgroundColor: "rgb(252, 159, 91)" }}
                                                />
                                                <div
                                                    className="apexcharts-tooltip-text"
                                                    style={{
                                                        fontFamily: "Helvetica, Arial, sans-serif",
                                                        fontSize: 12
                                                    }}
                                                >
                                                    <div className="apexcharts-tooltip-y-group">
                                                        <span className="apexcharts-tooltip-text-label" />
                                                        <span className="apexcharts-tooltip-text-value" />
                                                    </div>
                                                    <div className="apexcharts-tooltip-z-group">
                                                        <span className="apexcharts-tooltip-text-z-label" />
                                                        <span className="apexcharts-tooltip-text-z-value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="resize-triggers">
                                    <div className="expand-trigger">
                                        <div style={{ width: 393, height: 81 }} />
                                    </div>
                                    <div className="contract-trigger" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Hospital Management</h4>
                                </div>
                            </div>
                            <div className="iq-card-body hospital-mgt">
                                <div className="progress mb-4" style={{ height: 30 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        OPD
                                    </div>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        80%
                                    </div>
                                </div>
                                <div className="progress mb-4" style={{ height: 30 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Treatment
                                    </div>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        70%
                                    </div>
                                </div>
                                <div className="progress mb-4" style={{ height: 30 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Laboratory Test
                                    </div>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "40%" }}
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        85%
                                    </div>
                                </div>
                                <div className="progress mb-4" style={{ height: 30 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "40%" }}
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        New Patient
                                    </div>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        70%
                                    </div>
                                </div>
                                <div className="progress mb-4" style={{ height: 30 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "35%" }}
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Doctors
                                    </div>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "65%" }}
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        95%
                                    </div>
                                </div>
                                <div className="progress" style={{ height: 30 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "28%" }}
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Discharge
                                    </div>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        35%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Patient Progress</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="patient-progress m-0 p-0">
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Bud Jet</h6>
                                        </div>
                                        <span className="badge badge-primary">30%</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Barney Cull</h6>
                                        </div>
                                        <span className="badge badge-success">70%</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Eric Shun</h6>
                                        </div>
                                        <span className="badge badge-danger">15%</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Rick Shaw</h6>
                                        </div>
                                        <span className="badge badge-warning">55%</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Ben Effit</h6>
                                        </div>
                                        <span className="badge badge-info">45%</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Rick Shaw</h6>
                                        </div>
                                        <span className="badge badge-warning">55%</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <div className="media-support-info">
                                            <h6>Marge Arita</h6>
                                        </div>
                                        <span className="badge badge-primary">65%</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="media-support-info">
                                            <h6>Barry Cudat</h6>
                                        </div>
                                        <span className="badge badge-danger">15%</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Patient overview</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div
                                    id="home-chart-03"
                                    style={{ height: 280, position: "relative" }}
                                >
                                    <div
                                        dir="ltr"
                                        className="resize-sensor"
                                        style={{
                                            pointerEvents: "none",
                                            position: "absolute",
                                            inset: 0,
                                            overflow: "hidden",
                                            zIndex: -1,
                                            visibility: "hidden",
                                            maxWidth: "100%"
                                        }}
                                    >
                                        <div
                                            className="resize-sensor-expand"
                                            style={{
                                                pointerEvents: "none",
                                                position: "absolute",
                                                inset: 0,
                                                overflow: "hidden",
                                                zIndex: -1,
                                                visibility: "hidden",
                                                maxWidth: "100%"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    transition: "all 0s ease 0s",
                                                    width: 570,
                                                    height: 290
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="resize-sensor-shrink"
                                            style={{
                                                pointerEvents: "none",
                                                position: "absolute",
                                                inset: 0,
                                                overflow: "hidden",
                                                zIndex: -1,
                                                visibility: "hidden",
                                                maxWidth: "100%"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    transition: "all 0s ease 0s",
                                                    width: "200%",
                                                    height: "200%"
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            position: "relative",
                                            top: "0.015625px",
                                            left: "0.109375px"
                                        }}
                                    >
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            role="group"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                overflow: "visible"
                                            }}
                                        >
                                            <desc>JavaScript chart by amCharts</desc>
                                            <defs>
                                                <clipPath id="id-46">
                                                    <rect width={560} height={280} />
                                                </clipPath>
                                                <linearGradient
                                                    id="gradient-id-69"
                                                    x1="1%"
                                                    x2="99%"
                                                    y1="59%"
                                                    y2="41%"
                                                >
                                                    <stop stopColor="#474758" offset={0} />
                                                    <stop
                                                        stopColor="#474758"
                                                        stopOpacity={1}
                                                        offset="0.75"
                                                    />
                                                    <stop
                                                        stopColor="#3cabff"
                                                        stopOpacity={1}
                                                        offset="0.755"
                                                    />
                                                </linearGradient>
                                                <clipPath id="id-78" />
                                                <filter
                                                    id="filter-id-51"
                                                    width="200%"
                                                    height="200%"
                                                    x="-50%"
                                                    y="-50%"
                                                >
                                                    <feGaussianBlur
                                                        result="blurOut"
                                                        in="SourceGraphic"
                                                        stdDeviation="1.5"
                                                    />
                                                    <feOffset result="offsetBlur" dx={1} dy={1} />
                                                    <feFlood floodColor="#000000" floodOpacity="0.5" />
                                                    <feComposite in2="offsetBlur" operator="in" />
                                                    <feMerge>
                                                        <feMergeNode />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                                <filter
                                                    id="filter-id-66"
                                                    width="120%"
                                                    height="120%"
                                                    x="-10%"
                                                    y="-10%"
                                                >
                                                    <feColorMatrix type="saturate" values={0} />
                                                </filter>
                                                <filter
                                                    id="filter-id-83"
                                                    width="200%"
                                                    height="200%"
                                                    x="-50%"
                                                    y="-50%"
                                                >
                                                    <feGaussianBlur
                                                        result="blurOut"
                                                        in="SourceGraphic"
                                                        stdDeviation="1.5"
                                                    />
                                                    <feOffset result="offsetBlur" dx={1} dy={1} />
                                                    <feFlood floodColor="#000000" floodOpacity="0.5" />
                                                    <feComposite in2="offsetBlur" operator="in" />
                                                    <feMerge>
                                                        <feMergeNode />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            <g>
                                                <g fill="#ffffff" fillOpacity={0}>
                                                    <rect width={560} height={280} />
                                                </g>
                                                <g>
                                                    <g
                                                        role="region"
                                                        clipPath='url("#id-46")'
                                                        opacity={1}
                                                        aria-describedby="id-22-description"
                                                    >
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <g transform="translate(280,201.45)">
                                                                                <g>
                                                                                    <g
                                                                                        role="menu"
                                                                                        opacity={1}
                                                                                        aria-describedby="id-73-description"
                                                                                    >
                                                                                        <g>
                                                                                            <g clipPath='url("#id-78")'>
                                                                                                <g />
                                                                                            </g>
                                                                                            <g />
                                                                                            <g>
                                                                                                <g>
                                                                                                    <g
                                                                                                        strokeOpacity={1}
                                                                                                        role="menuitem"
                                                                                                        focusable="true"
                                                                                                        id="id-121"
                                                                                                        style={{
                                                                                                            touchAction: "none",
                                                                                                            userSelect: "none",
                                                                                                            WebkitUserDrag: "none"
                                                                                                        }}
                                                                                                        fill="#089bab"
                                                                                                        stroke="#089bab"
                                                                                                    >
                                                                                                        <g>
                                                                                                            <g>
                                                                                                                <path d=" M-94.8,0  L-165.9,0  a165.89999999999998,165.89999999999998,0,0,1,114.9313,-157.8765 L-29.125,-90.2152  a94.8,94.8,0,0,0,-65.675,90.2152 L-94.8,0 " />
                                                                                                            </g>
                                                                                                            <g />
                                                                                                        </g>
                                                                                                    </g>
                                                                                                    <g
                                                                                                        strokeOpacity={1}
                                                                                                        role="menuitem"
                                                                                                        focusable="true"
                                                                                                        id="id-155"
                                                                                                        style={{
                                                                                                            touchAction: "none",
                                                                                                            userSelect: "none",
                                                                                                            WebkitUserDrag: "none"
                                                                                                        }}
                                                                                                        fill="#2ca5b2"
                                                                                                        stroke="#2ca5b2"
                                                                                                    >
                                                                                                        <g>
                                                                                                            <g>
                                                                                                                <path d=" M-29.125,-90.2152  L-50.9687,-157.8765  a165.89999999999998,165.89999999999998,0,0,1,148.6086,23.7525 L55.7942,-76.6423  a94.8,94.8,0,0,0,-84.9192,-13.5728 L-29.125,-90.2152 " />
                                                                                                            </g>
                                                                                                            <g />
                                                                                                        </g>
                                                                                                    </g>
                                                                                                    <g
                                                                                                        strokeOpacity={1}
                                                                                                        role="menuitem"
                                                                                                        focusable="true"
                                                                                                        id="id-188"
                                                                                                        style={{
                                                                                                            touchAction: "none",
                                                                                                            userSelect: "none",
                                                                                                            WebkitUserDrag: "none"
                                                                                                        }}
                                                                                                        fill="#faa264"
                                                                                                        stroke="#faa264"
                                                                                                    >
                                                                                                        <g>
                                                                                                            <g>
                                                                                                                <path d=" M55.7942,-76.6423  L97.6399,-134.124  a165.89999999999998,165.89999999999998,0,0,1,60.1565,82.9076 L90.1693,-29.2665  a94.8,94.8,0,0,0,-34.3751,-47.3758 L55.7942,-76.6423 " />
                                                                                                            </g>
                                                                                                            <g />
                                                                                                        </g>
                                                                                                    </g>
                                                                                                    <g
                                                                                                        strokeOpacity={1}
                                                                                                        role="menuitem"
                                                                                                        focusable="true"
                                                                                                        id="id-221"
                                                                                                        style={{
                                                                                                            touchAction: "none",
                                                                                                            userSelect: "none",
                                                                                                            WebkitUserDrag: "none"
                                                                                                        }}
                                                                                                        fill="#fcb07a"
                                                                                                        stroke="#fcb07a"
                                                                                                    >
                                                                                                        <g>
                                                                                                            <g>
                                                                                                                <path d=" M90.1693,-29.2665  L157.7964,-51.2164  a165.89999999999998,165.89999999999998,0,0,1,8.1036,51.2164 L94.8,0  a94.8,94.8,0,0,0,-4.6307,-29.2665 L90.1693,-29.2665 " />
                                                                                                            </g>
                                                                                                            <g />
                                                                                                        </g>
                                                                                                    </g>
                                                                                                </g>
                                                                                            </g>
                                                                                            <g>
                                                                                                <g>
                                                                                                    <g
                                                                                                        fillOpacity={0}
                                                                                                        strokeOpacity="0.2"
                                                                                                        stroke="#000000"
                                                                                                        strokeWidth={1}
                                                                                                    >
                                                                                                        <polyline points="-134.12404731873,-97.63989927194999,-140.83024968466648,-102.52189423554748,-140.83024968466648,-102.52189423554748" />
                                                                                                    </g>
                                                                                                    <g
                                                                                                        fillOpacity={0}
                                                                                                        strokeOpacity="0.2"
                                                                                                        stroke="#000000"
                                                                                                        strokeWidth={1}
                                                                                                    >
                                                                                                        <polyline points="26.183868444089995,-163.82067950933998,27.493061866294497,-172.011713484807,27.493061866294497,-172.011713484807" />
                                                                                                    </g>
                                                                                                    <g
                                                                                                        fillOpacity={0}
                                                                                                        strokeOpacity="0.2"
                                                                                                        stroke="#000000"
                                                                                                        strokeWidth={1}
                                                                                                    >
                                                                                                        <polyline points="134.27710130015998,-97.42930805159999,140.990956365168,-102.30077345417999,140.990956365168,-102.30077345417999" />
                                                                                                    </g>
                                                                                                    <g
                                                                                                        fillOpacity={0}
                                                                                                        strokeOpacity="0.2"
                                                                                                        stroke="#000000"
                                                                                                        strokeWidth={1}
                                                                                                    >
                                                                                                        <polyline points="163.86156622793996,-25.92676447116,172.05464453933695,-27.223102694717998,172.05464453933695,-27.223102694717998" />
                                                                                                    </g>
                                                                                                </g>
                                                                                            </g>
                                                                                            <g>
                                                                                                <g>
                                                                                                    <g
                                                                                                        fill="#000000"
                                                                                                        transform="translate(-173.169,-111.35000000000001)"
                                                                                                    >
                                                                                                        <g
                                                                                                            transform="translate(-35,-10)"
                                                                                                            style={{
                                                                                                                userSelect: "none"
                                                                                                            }}
                                                                                                        >
                                                                                                            <text
                                                                                                                x={70}
                                                                                                                y={20}
                                                                                                                direction="rtl"
                                                                                                                dy="-5.4"
                                                                                                                textAnchor="start"
                                                                                                            >
                                                                                                                <tspan>USA: 40.1%</tspan>
                                                                                                            </text>
                                                                                                        </g>
                                                                                                    </g>
                                                                                                    <g
                                                                                                        fill="#000000"
                                                                                                        transform="translate(34.753,-186.824)"
                                                                                                    >
                                                                                                        <g
                                                                                                            transform="translate(-41,-10)"
                                                                                                            style={{
                                                                                                                userSelect: "none"
                                                                                                            }}
                                                                                                        >
                                                                                                            <text
                                                                                                                x={82}
                                                                                                                y={20}
                                                                                                                direction="rtl"
                                                                                                                dy="-5.4"
                                                                                                                textAnchor="start"
                                                                                                            >
                                                                                                                <tspan>
                                                                                                                    India: 30.0%
                                                                                                                </tspan>
                                                                                                            </text>
                                                                                                        </g>
                                                                                                    </g>
                                                                                                    <g
                                                                                                        fill="#000000"
                                                                                                        transform="translate(189.149,-111.11)"
                                                                                                    >
                                                                                                        <g
                                                                                                            transform="translate(-54.5,-10)"
                                                                                                            style={{
                                                                                                                userSelect: "none"
                                                                                                            }}
                                                                                                        >
                                                                                                            <text
                                                                                                                x={109}
                                                                                                                y={20}
                                                                                                                direction="rtl"
                                                                                                                dy="-5.4"
                                                                                                                textAnchor="start"
                                                                                                            >
                                                                                                                <tspan>
                                                                                                                    Australia: 20.0%
                                                                                                                </tspan>
                                                                                                            </text>
                                                                                                        </g>
                                                                                                    </g>
                                                                                                    <g
                                                                                                        fill="#000000"
                                                                                                        transform="translate(216.502,-29.567)"
                                                                                                    >
                                                                                                        <g
                                                                                                            transform="translate(-40,-10)"
                                                                                                            style={{
                                                                                                                userSelect: "none"
                                                                                                            }}
                                                                                                        >
                                                                                                            <text
                                                                                                                x={80}
                                                                                                                y={20}
                                                                                                                direction="rtl"
                                                                                                                dy="-5.4"
                                                                                                                textAnchor="start"
                                                                                                            >
                                                                                                                <tspan>
                                                                                                                    Brazil: 10.0%
                                                                                                                </tspan>
                                                                                                            </text>
                                                                                                        </g>
                                                                                                    </g>
                                                                                                </g>
                                                                                            </g>
                                                                                        </g>
                                                                                        <desc id="id-73-description">
                                                                                            Series
                                                                                        </desc>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(278.5,164.9)">
                                                                                <g>
                                                                                    <g>
                                                                                        <g />
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        role="group"
                                                                        aria-describedby="id-95-description"
                                                                        transform="translate(0,237)"
                                                                    >
                                                                        <g>
                                                                            <g
                                                                                focusable="true"
                                                                                role="switch"
                                                                                aria-controls="id-121"
                                                                                aria-labelledby="id-121"
                                                                                aria-checked="true"
                                                                                transform="translate(3,0)"
                                                                                style={{ cursor: "pointer" }}
                                                                            >
                                                                                <g fill="#ffffff" fillOpacity={0}>
                                                                                    <rect width={116} height={43} />
                                                                                </g>
                                                                                <g transform="translate(0,10)">
                                                                                    <g style={{ pointerEvents: "none" }}>
                                                                                        <g
                                                                                            fill="#ffffff"
                                                                                            fillOpacity={0}
                                                                                            strokeOpacity={0}
                                                                                        >
                                                                                            <rect width={23} height={23} />
                                                                                        </g>
                                                                                        <g>
                                                                                            <g
                                                                                                strokeOpacity={1}
                                                                                                fill="#089bab"
                                                                                                stroke="#089bab"
                                                                                            >
                                                                                                <path d="M3,0 L20,0 a3,3 0 0 1 3,3 L23,20 a3,3 0 0 1 -3,3 L3,23 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3 Z" />
                                                                                            </g>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(28,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={28}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="start"
                                                                                            >
                                                                                                <tspan>USA</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(61,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={0}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="end"
                                                                                            >
                                                                                                <tspan>40.1%</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <g
                                                                                focusable="true"
                                                                                role="switch"
                                                                                aria-controls="id-155"
                                                                                aria-labelledby="id-155"
                                                                                aria-checked="true"
                                                                                transform="translate(129,0)"
                                                                                style={{ cursor: "pointer" }}
                                                                            >
                                                                                <g fill="#ffffff" fillOpacity={0}>
                                                                                    <rect width={123} height={43} />
                                                                                </g>
                                                                                <g transform="translate(0,10)">
                                                                                    <g style={{ pointerEvents: "none" }}>
                                                                                        <g
                                                                                            fill="#ffffff"
                                                                                            fillOpacity={0}
                                                                                            strokeOpacity={0}
                                                                                        >
                                                                                            <rect width={23} height={23} />
                                                                                        </g>
                                                                                        <g>
                                                                                            <g
                                                                                                strokeOpacity={1}
                                                                                                fill="#2ca5b2"
                                                                                                stroke="#2ca5b2"
                                                                                            >
                                                                                                <path d="M3,0 L20,0 a3,3 0 0 1 3,3 L23,20 a3,3 0 0 1 -3,3 L3,23 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3 Z" />
                                                                                            </g>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(28,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={35}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="start"
                                                                                            >
                                                                                                <tspan>India</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(68,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={0}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="end"
                                                                                            >
                                                                                                <tspan>30.0%</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <g
                                                                                focusable="true"
                                                                                role="switch"
                                                                                aria-controls="id-188"
                                                                                aria-labelledby="id-188"
                                                                                aria-checked="true"
                                                                                transform="translate(262,0)"
                                                                                style={{ cursor: "pointer" }}
                                                                            >
                                                                                <g fill="#ffffff" fillOpacity={0}>
                                                                                    <rect width={150} height={43} />
                                                                                </g>
                                                                                <g transform="translate(0,10)">
                                                                                    <g style={{ pointerEvents: "none" }}>
                                                                                        <g
                                                                                            fill="#ffffff"
                                                                                            fillOpacity={0}
                                                                                            strokeOpacity={0}
                                                                                        >
                                                                                            <rect width={23} height={23} />
                                                                                        </g>
                                                                                        <g>
                                                                                            <g
                                                                                                strokeOpacity={1}
                                                                                                fill="#faa264"
                                                                                                stroke="#faa264"
                                                                                            >
                                                                                                <path d="M3,0 L20,0 a3,3 0 0 1 3,3 L23,20 a3,3 0 0 1 -3,3 L3,23 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3 Z" />
                                                                                            </g>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(28,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={62}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="start"
                                                                                            >
                                                                                                <tspan>Australia</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(95,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={0}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="end"
                                                                                            >
                                                                                                <tspan>20.0%</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <g
                                                                                focusable="true"
                                                                                role="switch"
                                                                                aria-controls="id-221"
                                                                                aria-labelledby="id-221"
                                                                                aria-checked="true"
                                                                                transform="translate(422,0)"
                                                                                style={{ cursor: "pointer" }}
                                                                            >
                                                                                <g fill="#ffffff" fillOpacity={0}>
                                                                                    <rect width={125} height={43} />
                                                                                </g>
                                                                                <g transform="translate(0,10)">
                                                                                    <g style={{ pointerEvents: "none" }}>
                                                                                        <g
                                                                                            fill="#ffffff"
                                                                                            fillOpacity={0}
                                                                                            strokeOpacity={0}
                                                                                        >
                                                                                            <rect width={23} height={23} />
                                                                                        </g>
                                                                                        <g>
                                                                                            <g
                                                                                                strokeOpacity={1}
                                                                                                fill="#fcb07a"
                                                                                                stroke="#fcb07a"
                                                                                            >
                                                                                                <path d="M3,0 L20,0 a3,3 0 0 1 3,3 L23,20 a3,3 0 0 1 -3,3 L3,23 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3 Z" />
                                                                                            </g>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(28,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={37}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="start"
                                                                                            >
                                                                                                <tspan>Brazil</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        fill="#000000"
                                                                                        style={{ pointerEvents: "none" }}
                                                                                        transform="translate(70,1.5)"
                                                                                    >
                                                                                        <g style={{ userSelect: "none" }}>
                                                                                            <text
                                                                                                x={0}
                                                                                                y={20}
                                                                                                direction="rtl"
                                                                                                dy="-5.4"
                                                                                                textAnchor="end"
                                                                                            >
                                                                                                <tspan>10.0%</tspan>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                        <desc id="id-95-description">Legend</desc>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <desc id="id-22-description">Chart</desc>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <g role="tooltip" visibility="hidden" opacity={0}>
                                                                <g
                                                                    fill="#ffffff"
                                                                    fillOpacity="0.9"
                                                                    strokeWidth={1}
                                                                    strokeOpacity={1}
                                                                    stroke="#ffffff"
                                                                    filter='url("#filter-id-51")'
                                                                    style={{ pointerEvents: "none" }}
                                                                    transform="translate(0,6)"
                                                                >
                                                                    <path d="M3,0 L3,0 L0,-6 L13,0 L21,0 a3,3 0 0 1 3,3 L24,8 a3,3 0 0 1 -3,3 L3,11 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3" />
                                                                </g>
                                                                <g>
                                                                    <g
                                                                        fill="#ffffff"
                                                                        style={{ pointerEvents: "none" }}
                                                                        transform="translate(12,6)"
                                                                    >
                                                                        <g
                                                                            transform="translate(0,7)"
                                                                            display="none"
                                                                        />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g
                                                                visibility="hidden"
                                                                display="none"
                                                                style={{ pointerEvents: "none" }}
                                                            >
                                                                <g fill="#ffffff" opacity={1}>
                                                                    <rect width={560} height={280} />
                                                                </g>
                                                                <g>
                                                                    <g transform="translate(280,140)">
                                                                        <g>
                                                                            <g
                                                                                strokeOpacity={1}
                                                                                fill="#f3f3f3"
                                                                                fillOpacity="0.8"
                                                                            >
                                                                                <g>
                                                                                    <g>
                                                                                        <path d=" M53,0  a53,53,0,0,1,-106,0 a53,53,0,0,1,106,0 M42,0  a42,42,0,0,0,-84,0 a42,42,0,0,0,84,0 L42,0 " />
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <g
                                                                                strokeOpacity={1}
                                                                                fill="#000000"
                                                                                fillOpacity="0.2"
                                                                            >
                                                                                <g>
                                                                                    <g>
                                                                                        <path d=" M50,0  a50,50,0,0,1,-100,0 a50,50,0,0,1,100,0 M45,0  a45,45,0,0,0,-90,0 a45,45,0,0,0,90,0 L45,0 " />
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <g fill="#000000" fillOpacity="0.4">
                                                                                <g
                                                                                    transform="translate(-17,-10)"
                                                                                    style={{ userSelect: "none" }}
                                                                                >
                                                                                    <text x={0} y={20} dy="-5.4">
                                                                                        <tspan>100%</tspan>
                                                                                    </text>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g
                                                                opacity="0.3"
                                                                aria-labelledby="id-66-title"
                                                                filter='url("#filter-id-66")'
                                                                style={{ cursor: "pointer" }}
                                                                transform="translate(0,259)"
                                                            >
                                                                <g fill="#ffffff" opacity={0}>
                                                                    <rect width={66} height={21} />
                                                                </g>
                                                                <g>
                                                                    <g
                                                                        shapeRendering="auto"
                                                                        fill="none"
                                                                        strokeOpacity={1}
                                                                        strokeWidth="1.7999999999999998"
                                                                        stroke="#3cabff"
                                                                    >
                                                                        <path d=" M15,15  C17.4001,15 22.7998,15.0001 27,15 C31.2002,14.9999 33.2999,6 36,6 C38.7001,6 38.6999,10.5 40.5,10.5 C42.3001,10.5 42.2999,6 45,6 C47.7001,6 50.9999,14.9999 54,15 C57.0002,15.0001 58.7999,15 60,15" />
                                                                    </g>
                                                                    <g
                                                                        shapeRendering="auto"
                                                                        fill="none"
                                                                        strokeOpacity={1}
                                                                        strokeWidth="1.7999999999999998"
                                                                        stroke='url("#gradient-id-69")'
                                                                    >
                                                                        <path d=" M6,15  C8.2501,15 9.7498,15.0001 15,15 C20.2502,14.9999 20.7748,3.6 27,3.6 C33.2252,3.6 33.8998,14.9999 39.9,15 C45.9002,15.0001 45.9748,15 51,15 C56.0252,15 57.7499,15 60,15" />
                                                                    </g>
                                                                </g>
                                                                <title id="id-66-title">
                                                                    Chart created using amCharts library
                                                                </title>
                                                            </g>
                                                            <g role="tooltip" visibility="hidden" opacity={0}>
                                                                <g
                                                                    fill="#ffffff"
                                                                    fillOpacity="0.9"
                                                                    strokeWidth={1}
                                                                    strokeOpacity={1}
                                                                    stroke="#ffffff"
                                                                    filter='url("#filter-id-83")'
                                                                    style={{ pointerEvents: "none" }}
                                                                    transform="translate(0,6)"
                                                                >
                                                                    <path d="M3,0 L3,0 L0,-6 L13,0 L21,0 a3,3 0 0 1 3,3 L24,8 a3,3 0 0 1 -3,3 L3,11 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3" />
                                                                </g>
                                                                <g>
                                                                    <g
                                                                        fill="#ffffff"
                                                                        style={{ pointerEvents: "none" }}
                                                                        transform="translate(12,6)"
                                                                    >
                                                                        <g
                                                                            transform="translate(0,7)"
                                                                            display="none"
                                                                        />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Visits From Countries </h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="iq-details">
                                    <span className="title text-dark">United States</span>
                                    <div className="percentage float-end text-primary">
                                        95 <span>%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar">
                                            <span
                                                className="bg-primary"
                                                data-percent={95}
                                                style={{ transition: "width 2s ease 0s" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-details mt-4">
                                    <span className="title text-dark">India</span>
                                    <div className="percentage float-end text-warning">
                                        75 <span>%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar">
                                            <span
                                                className="bg-warning"
                                                data-percent={75}
                                                style={{ transition: "width 2s ease 0s" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-details mt-4">
                                    <span className="title text-dark">Australia</span>
                                    <div className="percentage float-end text-success">
                                        55 <span>%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar">
                                            <span
                                                className="bg-success"
                                                data-percent={55}
                                                style={{ transition: "width 2s ease 0s" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-details mt-4">
                                    <span className="title text-dark">Brazil</span>
                                    <div className="percentage float-end text-danger">
                                        25 <span>%</span>
                                    </div>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                        <div className="iq-progress-bar">
                                            <span
                                                className="bg-danger"
                                                data-percent={25}
                                                style={{ transition: "width 2s ease 0s" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">New Appointments </h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                        <span
                                            className="dropdown-toggle text-primary"
                                            id="dropdownMenuButton5"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="ri-more-fill" />
                                        </span>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButton5"
                                        >
                                            <a className="dropdown-item" href="#">
                                                <i className="ri-eye-fill me-2" />
                                                View
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="ri-delete-bin-6-fill me-2" />
                                                Delete
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="ri-pencil-fill me-2" />
                                                Edit
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="ri-printer-fill me-2" />
                                                Print
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="ri-file-download-fill me-2" />
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <table className="table mb-0 table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Patient</th>
                                                <th scope="col">Doctor</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Timing</th>
                                                <th scope="col">Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Petey Cruiser</td>
                                                <td>Dr.Monty Carlo</td>
                                                <td>20/02/2020</td>
                                                <td>8:00 AM</td>
                                                <td>+1-202-555-0146</td>
                                            </tr>
                                            <tr>
                                                <td>Anna Sthesia</td>
                                                <td>Dr.Pete Sariya</td>
                                                <td>25/02/2020</td>
                                                <td>8:30 AM</td>
                                                <td>+1-202-555-0164</td>
                                            </tr>
                                            <tr>
                                                <td>Paul Molive</td>
                                                <td>Dr.Brock Lee</td>
                                                <td>25/02/2020</td>
                                                <td>9:45 AM</td>
                                                <td>+1-202-555-0153</td>
                                            </tr>
                                            <tr>
                                                <td>Anna Mull</td>
                                                <td>Dr.Barb Ackue</td>
                                                <td>27/02/2020</td>
                                                <td>11:30 AM</td>
                                                <td>+1-202-555-0154</td>
                                            </tr>
                                            <tr>
                                                <td>Paige Turner</td>
                                                <td>Dr.Walter Melon</td>
                                                <td>28/02/2020</td>
                                                <td>3:30 PM</td>
                                                <td>+1-202-555-0101</td>
                                            </tr>
                                            <tr>
                                                <td>Don Stairs</td>
                                                <td>Dr.Arty Ficial</td>
                                                <td>28/02/2020</td>
                                                <td>4:30 PM</td>
                                                <td>+1-202-555-0176</td>
                                            </tr>
                                            <tr>
                                                <td>Pat Agonia</td>
                                                <td>Dr.Barb Ackue</td>
                                                <td>29/02/2020</td>
                                                <td>5:00 PM</td>
                                                <td>+1-202-555-0194</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Doctors Lists</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="doctors-lists m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/01.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Paul Molive</h6>
                                            <p className="mb-0 font-size-12">MBBS, MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton41"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/02.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Barb Dwyer</h6>
                                            <p className="mb-0 font-size-12">MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton42"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/03.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Terry Aki</h6>
                                            <p className="mb-0 font-size-12">MBBS</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton43"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/04.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Robin Banks</h6>
                                            <p className="mb-0 font-size-12">MBBS, MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton44"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/05.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Barry Wine</h6>
                                            <p className="mb-0 font-size-12">BAMS</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton45"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/06.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Zack Lee</h6>
                                            <p className="mb-0 font-size-12">MS, MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton46"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/07.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Otto Matic</h6>
                                            <p className="mb-0 font-size-12">MBBS, MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton47"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/08.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Moe Fugga</h6>
                                            <p className="mb-0 font-size-12">MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton48"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/09.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Bud Wiser</h6>
                                            <p className="mb-0 font-size-12">MBBS</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton49"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center">
                                        <div className="user-img img-fluid">
                                            <img
                                                src="assets/images/user/10.jpg"
                                                alt="story-img"
                                                className="rounded-circle avatar-40"
                                            />
                                        </div>
                                        <div className="media-support-info ms-3">
                                            <h6>Dr. Barry Cade</h6>
                                            <p className="mb-0 font-size-12">MBBS, MD</p>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown show">
                                                <span
                                                    className="dropdown-toggle text-primary"
                                                    id="dropdownMenuButton50"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="true"
                                                    role="button"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-eye-line me-2" />
                                                        View
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ri-bookmark-line me-2" />
                                                        Appointment
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <a
                                    href="javascript:void();"
                                    className="btn btn-primary d-block mt-3"
                                >
                                    <i className="ri-add-line" /> View All Doctors{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboards
