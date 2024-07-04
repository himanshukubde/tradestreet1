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
                    <div className="row">
                        {/* <div className="col-sm-12">
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
                        </div> */}
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
                                                <b>Admin</b>
                                            </h4>
                                            <p>Investor</p>
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
                                                <span>Investors</span>
                                            </li>
                                            <li className="text-center">
                                                <h3 className="counter">3.9</h3>
                                                <span>client Rating</span>
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
                                        <h4 className="card-title">Admin</h4>
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
                                                width={560}
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

                </div>


            </div>
        </div>
    )
}

export default Dashboards
