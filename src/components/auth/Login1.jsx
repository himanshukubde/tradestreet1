import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [changeType, setChangeType] = useState("password");
    const [visiablity, setVisiablity] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://193.239.237.95:8000/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Username: Username, password: password }),
        });

        const data = await response.json();

        localStorage.setItem("Role", data.Role)

        if (data.Status == true) {
            if (data.Role === 'Admin') {

                navigate('/dashboards');
            } else if (data.Role === 'User') {

                navigate('/ dashboard');
            }
        } else {
            alert('Login failed');
        }
    };
    const toggle = (e) => {
        e.preventDefault();
        if (changeType === "password") {
            setChangeType("text");
            setVisiablity("eye");
        } else {
            setChangeType("password");
        }
    };
    return (
        <section className="sign-in-page">
            <div className="container sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
                <div className="row no-gutters">
                    <div className="col-md-6 text-center">
                        <div className="sign-in-detail text-white">
                            <a className="sign-in-logo mb-5" href="index.html">
                                <img src="assets/images/logo-white.png" className="img-fluid" alt="logo" />
                            </a>
                            <div
                                className="owl-carousel owl-loaded owl-drag"
                                data-autoplay="true"
                                data-loop="true"
                                data-nav="false"
                                data-dots="true"
                                data-items={1}
                                data-items-laptop={1}
                                data-items-tab={1}
                                data-items-mobile={1}
                                data-items-mobile-sm={1}
                                data-margin={0}
                            >
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-1432px, 0px, 0px)",
                                            transition: "all 0.25s ease 0s",
                                            width: 2506
                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/2.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/3.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/1.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/2.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/3.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/1.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 358 }}>
                                            <div className="item">
                                                <img
                                                    src="assets/images/login/2.png"
                                                    className="img-fluid mb-4"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-1 text-white">Manage your orders</h4>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left fa-2x" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right fa-2x" />
                                    </button>
                                </div>
                                <div className="owl-dots">
                                    <button role="button" className="owl-dot">
                                        <span />
                                    </button>
                                    <button role="button" className="owl-dot">
                                        <span />
                                    </button>
                                    <button role="button" className="owl-dot active">
                                        <span />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 position-relative">
                        <div className="sign-in-from">
                            <h1 className="mb-0">Sign in</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <form className="mt-4" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="mb-2">
                                        UserName
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control mb-0"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your UserName"
                                        value={Username}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-between my-2">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <a href="pages-recoverpw.html" className="float-end">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className='position-relative'>
                                    <input
                                        type={changeType}
                                        className="form-control mb-0"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <i
                                        className={
                                            changeType === "text"
                                                ? "ri-eye-off-line password-eye"
                                                : "ri-eye-line password-eye"
                                        }
                                        onClick={(e) => toggle(e)}
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="password Visiblity"
                                    ></i>
                                </div>
                                <div className="d-flex w-100 justify-content-between  align-items-center mt-3 w-100">
                                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                        />
                                        <label className="custom-control-label" htmlFor="customCheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-end">
                                        Sign in
                                    </button>
                                </div>
                                <div className="sign-info">
                                    <span className="dark-color d-inline-block line-height-2">
                                        Don't have an account? <a href="sign-up.html">Sign up</a>
                                    </span>
                                    <ul className="iq-social-media">
                                        <li>
                                            <a href="#">
                                                <i className="ri-facebook-box-line" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ri-twitter-line" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ri-instagram-line" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
