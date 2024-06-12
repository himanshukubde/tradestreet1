import React from 'react'

const Profile = () => {
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
                                        style={{ height: 150 }}
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
                                            <b>Neha mam</b>
                                        </h4>
                                        <p>Full stack Devloper</p>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Delectus repudiandae eveniet harum.
                                        </p>
                                    </div>
                                    <hr />
                                    <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
                                        <li className="text-center">
                                            <h3 className="counter">4500</h3>
                                            <span>Operations</span>
                                        </li>
                                        <li className="text-center">
                                            <h3 className="counter">100</h3>
                                            <span>Hospital</span>
                                        </li>
                                        <li className="text-center">
                                            <h3 className="counter">10000</h3>
                                            <span>Patients</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Personal Information</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="about-info m-0 p-0">
                                    <div className="row">
                                        <div className="col-4">First Name:</div>
                                        <div className="col-8">neha </div>
                                        <div className="col-4">Last Name:</div>
                                        <div className="col-8">mam</div>
                                        <div className="col-4">Age:</div>
                                        <div className="col-8">55</div>
                                        <div className="col-4">Position:</div>
                                        <div className="col-8">fullstack devloper</div>
                                        <div className="col-4">Email:</div>
                                        <div className="col-8">
                                            <a href="mailto:biniJets24@demo.com"> biniJets24@demo.com </a>
                                        </div>
                                        <div className="col-4">Phone:</div>
                                        <div className="col-8">
                                            <a href="tel:001-2351-25612">001 2351 256 12</a>
                                        </div>
                                        <div className="col-4">Location:</div>
                                        <div className="col-8">USA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Photos</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                                    <li className="col-md-4 col-6 pb-3">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g1.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-3">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g2.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-3">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g3.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-3">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g4.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-3">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g5.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-3">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g6.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-0">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g7.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-0">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g8.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                    <li className="col-md-4 col-6 pb-0">
                                        <a href="javascript:void();">
                                            <img
                                                src="images/page-img/g9.jpg"
                                                alt="gallary-image"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Speciality</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ul className="speciality-list m-0 p-0">
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="user-img img-fluid">
                                                    <a href="#" className="iq-bg-primary">
                                                        <i className="ri-award-fill" />
                                                    </a>
                                                </div>
                                                <div className="media-support-info ms-3">
                                                    <h6>professional</h6>
                                                    <p className="mb-0">Certified Skin Treatment</p>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="user-img img-fluid">
                                                    <a href="#" className="iq-bg-warning">
                                                        <i className="ri-award-fill" />
                                                    </a>
                                                </div>
                                                <div className="media-support-info ms-3">
                                                    <h6>Certified</h6>
                                                    <p className="mb-0">Cold Laser Operation</p>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="user-img img-fluid">
                                                    <a href="#" className="iq-bg-info">
                                                        <i className="ri-award-fill" />
                                                    </a>
                                                </div>
                                                <div className="media-support-info ms-3">
                                                    <h6>Medication Laser</h6>
                                                    <p className="mb-0">Hair Lose Product</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Notifications</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ul className="iq-timeline">
                                            <li>
                                                <div className="timeline-dots border-success" />
                                                <h6 className="">Dr. Joy Send you Photo</h6>
                                                <small className="mt-1">23 November 2019</small>
                                            </li>
                                            <li>
                                                <div className="timeline-dots border-danger" />
                                                <h6 className="">Reminder : Opertion Time!</h6>
                                                <small className="mt-1">20 November 2019</small>
                                            </li>
                                            <li>
                                                <div className="timeline-dots border-primary" />
                                                <h6 className="mb-1">Patient Call</h6>
                                                <small className="mt-1">19 November 2019</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Schedule</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ul className="list-inline m-0 p-0">
                                            <li>
                                                <h6 className="float-start mb-1">Ruby saul (Blood Check)</h6>
                                                <small className="float-end mt-1">Today</small>
                                                <div className="d-inline-block w-100">
                                                    <p className="badge badge-primary">09:00 AM </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h6 className="float-start mb-1"> Anna Mull (Fever)</h6>
                                                <small className="float-end mt-1">Today</small>
                                                <div className="d-inline-block w-100">
                                                    <p className="badge badge-danger">09:15 AM </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h6 className="float-start mb-1">Petey Cruiser (X-ray)</h6>
                                                <small className="float-end mt-1">Today</small>
                                                <div className="d-inline-block w-100">
                                                    <p className="badge badge-warning">10:00 AM </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h6 className="float-start mb-1">
                                                    Anna Sthesia (Full body Check up)
                                                </h6>
                                                <small className="float-end mt-1">Today</small>
                                                <div className="d-inline-block w-100">
                                                    <p className="badge badge-info">01:00 PM </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h6 className="float-start mb-1">Paul Molive (Operation)</h6>
                                                <small className="float-end mt-1">Tomorrow</small>
                                                <div className="d-inline-block w-100">
                                                    <p className="badge badge-success">09:00 AM </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Patients Notes</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ul className="list-inline m-0 p-0">
                                            <li className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h6>Treatment was good!</h6>
                                                    <p className="mb-0">Eye Test </p>
                                                </div>
                                                <div>
                                                    <a href="#" className="btn iq-bg-primary">
                                                        Open
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h6>My Helth in better Now</h6>
                                                    <p className="mb-0">Fever Test</p>
                                                </div>
                                                <div>
                                                    <a href="#" className="btn iq-bg-primary">
                                                        Open
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h6>No Effacted</h6>
                                                    <p className="mb-0">Thyroid Test</p>
                                                </div>
                                                <div>
                                                    <a href="#" className="btn iq-bg-danger">
                                                        Close
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h6>Operation Successfull</h6>
                                                    <p className="mb-0">Orthopaedic</p>
                                                </div>
                                                <div>
                                                    <a href="#" className="btn iq-bg-primary">
                                                        Open
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h6>Mediacal Care is just a click away</h6>
                                                    <p className="mb-0">Join Pain </p>
                                                </div>
                                                <div>
                                                    <a href="#" className="btn iq-bg-danger">
                                                        Close
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h6>Treatment is good</h6>
                                                    <p className="mb-0">Skin Treatment </p>
                                                </div>
                                                <div>
                                                    <a href="#" className="btn iq-bg-primary">
                                                        Open
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Education</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Year</th>
                                                        <th scope="col">Degree</th>
                                                        <th scope="col">Institute</th>
                                                        <th scope="col">Result</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2010</td>
                                                        <td>MBBS, M.D</td>
                                                        <td>University of Wyoming</td>
                                                        <td>
                                                            <span className="badge badge-success">Distinction</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2014</td>
                                                        <td>M.D. of Medicine</td>
                                                        <td>Netherland Medical College</td>
                                                        <td>
                                                            <span className="badge badge-success">Distinction</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Experience</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Year</th>
                                                        <th scope="col">Department</th>
                                                        <th scope="col">Position</th>
                                                        <th scope="col">Hospital</th>
                                                        <th scope="col">Feedback</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2014 - 2018</td>
                                                        <td>MBBS, M.D</td>
                                                        <td>Senior Docter</td>
                                                        <td>Midtown Medical Clinic</td>
                                                        <td>
                                                            <span className="badge badge-primary">Good</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018 - 2020</td>
                                                        <td>M.D. of Medicine</td>
                                                        <td>Associate Prof.</td>
                                                        <td>Netherland Medical College</td>
                                                        <td>
                                                            <span className="badge badge-success">excellence</span>
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
                </div>
            </div>

        </div>
    )
}

<div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
            <div className="iq-card">
                <div className="iq-card-body ps-0 pe-0 pt-0">
                    <div className="docter-details-block">
                        <div
                            className="doc-profile-bg bg-primary"
                            style={{ height: 150 }}
                        ></div>
                        <div className="docter-profile text-center">
                            <img
                                src="images/user/11.png"
                                alt="profile-img"
                                className="avatar-130 img-fluid"
                            />
                        </div>
                        <div className="text-center mt-3 ps-3 pe-3">
                            <h4>
                                <b>Bini Jets</b>
                            </h4>
                            <p>Doctor</p>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Delectus repudiandae eveniet harum.
                            </p>
                        </div>
                        <hr />
                        <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
                            <li className="text-center">
                                <h3 className="counter">4500</h3>
                                <span>Operations</span>
                            </li>
                            <li className="text-center">
                                <h3 className="counter">100</h3>
                                <span>Hospital</span>
                            </li>
                            <li className="text-center">
                                <h3 className="counter">10000</h3>
                                <span>Patients</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Personal Information</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <div className="about-info m-0 p-0">
                        <div className="row">
                            <div className="col-4">First Name:</div>
                            <div className="col-8">Bini</div>
                            <div className="col-4">Last Name:</div>
                            <div className="col-8">Jets</div>
                            <div className="col-4">Age:</div>
                            <div className="col-8">27</div>
                            <div className="col-4">Position:</div>
                            <div className="col-8">Senior Docter</div>
                            <div className="col-4">Email:</div>
                            <div className="col-8">
                                <a href="mailto:biniJets24@demo.com"> biniJets24@demo.com </a>
                            </div>
                            <div className="col-4">Phone:</div>
                            <div className="col-8">
                                <a href="tel:001-2351-25612">001 2351 256 12</a>
                            </div>
                            <div className="col-4">Location:</div>
                            <div className="col-8">USA</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Photos</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                        <li className="col-md-4 col-6 pb-3">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g1.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-3">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g2.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-3">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g3.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-3">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g4.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-3">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g5.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-3">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g6.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-0">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g7.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-0">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g8.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                        <li className="col-md-4 col-6 pb-0">
                            <a href="javascript:void();">
                                <img
                                    src="images/page-img/g9.jpg"
                                    alt="gallary-image"
                                    className="img-fluid"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="row">
                <div className="col-md-6">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Speciality</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <ul className="speciality-list m-0 p-0">
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                        <a href="#" className="iq-bg-primary">
                                            <i className="ri-award-fill" />
                                        </a>
                                    </div>
                                    <div className="media-support-info ms-3">
                                        <h6>professional</h6>
                                        <p className="mb-0">Certified Skin Treatment</p>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                        <a href="#" className="iq-bg-warning">
                                            <i className="ri-award-fill" />
                                        </a>
                                    </div>
                                    <div className="media-support-info ms-3">
                                        <h6>Certified</h6>
                                        <p className="mb-0">Cold Laser Operation</p>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 align-items-center">
                                    <div className="user-img img-fluid">
                                        <a href="#" className="iq-bg-info">
                                            <i className="ri-award-fill" />
                                        </a>
                                    </div>
                                    <div className="media-support-info ms-3">
                                        <h6>Medication Laser</h6>
                                        <p className="mb-0">Hair Lose Product</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Notifications</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <ul className="iq-timeline">
                                <li>
                                    <div className="timeline-dots border-success" />
                                    <h6 className="">Dr. Joy Send you Photo</h6>
                                    <small className="mt-1">23 November 2019</small>
                                </li>
                                <li>
                                    <div className="timeline-dots border-danger" />
                                    <h6 className="">Reminder : Opertion Time!</h6>
                                    <small className="mt-1">20 November 2019</small>
                                </li>
                                <li>
                                    <div className="timeline-dots border-primary" />
                                    <h6 className="mb-1">Patient Call</h6>
                                    <small className="mt-1">19 November 2019</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Schedule</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <ul className="list-inline m-0 p-0">
                                <li>
                                    <h6 className="float-start mb-1">Ruby saul (Blood Check)</h6>
                                    <small className="float-end mt-1">Today</small>
                                    <div className="d-inline-block w-100">
                                        <p className="badge badge-primary">09:00 AM </p>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="float-start mb-1"> Anna Mull (Fever)</h6>
                                    <small className="float-end mt-1">Today</small>
                                    <div className="d-inline-block w-100">
                                        <p className="badge badge-danger">09:15 AM </p>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="float-start mb-1">Petey Cruiser (X-ray)</h6>
                                    <small className="float-end mt-1">Today</small>
                                    <div className="d-inline-block w-100">
                                        <p className="badge badge-warning">10:00 AM </p>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="float-start mb-1">
                                        Anna Sthesia (Full body Check up)
                                    </h6>
                                    <small className="float-end mt-1">Today</small>
                                    <div className="d-inline-block w-100">
                                        <p className="badge badge-info">01:00 PM </p>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="float-start mb-1">Paul Molive (Operation)</h6>
                                    <small className="float-end mt-1">Tomorrow</small>
                                    <div className="d-inline-block w-100">
                                        <p className="badge badge-success">09:00 AM </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Patients Notes</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <ul className="list-inline m-0 p-0">
                                <li className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6>Treatment was good!</h6>
                                        <p className="mb-0">Eye Test </p>
                                    </div>
                                    <div>
                                        <a href="#" className="btn iq-bg-primary">
                                            Open
                                        </a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6>My Helth in better Now</h6>
                                        <p className="mb-0">Fever Test</p>
                                    </div>
                                    <div>
                                        <a href="#" className="btn iq-bg-primary">
                                            Open
                                        </a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6>No Effacted</h6>
                                        <p className="mb-0">Thyroid Test</p>
                                    </div>
                                    <div>
                                        <a href="#" className="btn iq-bg-danger">
                                            Close
                                        </a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6>Operation Successfull</h6>
                                        <p className="mb-0">Orthopaedic</p>
                                    </div>
                                    <div>
                                        <a href="#" className="btn iq-bg-primary">
                                            Open
                                        </a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h6>Mediacal Care is just a click away</h6>
                                        <p className="mb-0">Join Pain </p>
                                    </div>
                                    <div>
                                        <a href="#" className="btn iq-bg-danger">
                                            Close
                                        </a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6>Treatment is good</h6>
                                        <p className="mb-0">Skin Treatment </p>
                                    </div>
                                    <div>
                                        <a href="#" className="btn iq-bg-primary">
                                            Open
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Education</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="table mb-0 table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Year</th>
                                            <th scope="col">Degree</th>
                                            <th scope="col">Institute</th>
                                            <th scope="col">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2010</td>
                                            <td>MBBS, M.D</td>
                                            <td>University of Wyoming</td>
                                            <td>
                                                <span className="badge badge-success">Distinction</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2014</td>
                                            <td>M.D. of Medicine</td>
                                            <td>Netherland Medical College</td>
                                            <td>
                                                <span className="badge badge-success">Distinction</span>
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
    </div>
</div>
export default Profile
