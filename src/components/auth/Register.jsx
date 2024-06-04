import React from 'react'

const Register = () => {
  return (
    <div>
          <section className="sign-in-page">
              <div className="container sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
                  <div className="row no-gutters">
                      <div className="col-md-6 text-center">
                          <div className="sign-in-detail text-white">
                              <a className="sign-in-logo mb-5" href="index.html">
                                  <img src="images/logo-white.png" className="img-fluid" alt="logo" />
                              </a>
                              <div
                                  className="owl-carousel"
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
                                  <div className="item">
                                      <img
                                          src="images/login/1.png"
                                          className="img-fluid mb-4"
                                          alt="logo"
                                      />
                                      <h4 className="mb-1 text-white">Manage your orders</h4>
                                      <p>
                                          It is a long established fact that a reader will be distracted
                                          by the readable content.
                                      </p>
                                  </div>
                                  <div className="item">
                                      <img
                                          src="images/login/2.png"
                                          className="img-fluid mb-4"
                                          alt="logo"
                                      />
                                      <h4 className="mb-1 text-white">Manage your orders</h4>
                                      <p>
                                          It is a long established fact that a reader will be distracted
                                          by the readable content.
                                      </p>
                                  </div>
                                  <div className="item">
                                      <img
                                          src="images/login/3.png"
                                          className="img-fluid mb-4"
                                          alt="logo"
                                      />
                                      <h4 className="mb-1 text-white">Manage your orders</h4>
                                      <p>
                                          It is a long established fact that a reader will be distracted
                                          by the readable content.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 position-relative">
                          <div className="sign-in-from">
                              <h1 className="mb-0">Sign Up</h1>
                              <form className="mt-4">
                                  <div className="form-group">
                                      <label htmlFor="exampleInputEmail1" className="my-2">
                                          Your Full Name
                                      </label>
                                      <input
                                          type="email"
                                          className="form-control mb-0"
                                          id="exampleInputEmail1"
                                          placeholder="Your Full Name"
                                      />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="exampleInputEmail2" className="my-2">
                                          Email address
                                      </label>
                                      <input
                                          type="email"
                                          className="form-control mb-0"
                                          id="exampleInputEmail2"
                                          placeholder="Enter email"
                                      />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="exampleInputPassword1" className="my-2">
                                          Password
                                      </label>
                                      <input
                                          type="password"
                                          className="form-control mb-0"
                                          id="exampleInputPassword1"
                                          placeholder="Password"
                                      />
                                  </div>
                                  <div className="d-flex justify-content-between w-100 align-items-center mt-2">
                                      <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                          <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck1"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck1">
                                              I accept <a href="#">Terms and Conditions</a>
                                          </label>
                                      </div>
                                      <button type="submit" className="btn btn-primary float-end">
                                          Sign Up
                                      </button>
                                  </div>
                                  <div className="sign-info">
                                      <span className="dark-color d-inline-block line-height-2">
                                          Already Have Account ? <a href="sign-in.html">Log In</a>
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

    </div>
  )
}

export default Register
