import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { PasswordChange } from '../../Common API/Common'
import { Eye, EyeOff } from 'lucide-react'

const Editprofile = () => {
    const userName = localStorage.getItem('name')
    const [currPass, setCurrPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [verifyPass, setVerifyPass] = useState('')
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [showPass3, setShowPass3] = useState(false)






    const handleSubmit = async () => {
        const data = { User: userName, new_password: newPass, old_password: currPass, confirm_password: verifyPass }

        await PasswordChange(data)
            .then((response) => {
                if (response.Status) {
                    Swal.fire({
                        title: "Success",
                        text: response.message,
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true
                    });
                }
                else {
                    Swal.fire({
                        title: "Error !",
                        text: response.message,
                        icon: "error",
                        timer: 1500,
                        timerProgressBar: true
                    });

                }
            })
            .catch((err) => {
                console.log("Error in finding the response", err)
            })

    }





    return (
        <div>
            <div className="col-lg-12">
                <div className="iq-edit-list-data">
                    <div className="tab-content">
                        {/* <div className="tab-pane d-flex" id="personal-information" role="tabpanel">
                          <div className="iq-card">
                              <div className="iq-card-header d-flex justify-content-between">
                                  <div className="iq-header-title">
                                      <h4 className="card-title">Personal Information</h4>
                                  </div>
                              </div>
                              <div className="iq-card-body">
                                  <form>
                                      <div className="form-group row align-items-center">
                                          <div className="col-md-12">
                                              <div className="profile-img-edit">
                                                  <img
                                                      className="profile-pic"
                                                      src="images/user/11.png"
                                                      alt="profile-pic"
                                                  />
                                                  <div className="p-image">
                                                      <i className="ri-pencil-line upload-button" />
                                                      <input
                                                          className="file-upload"
                                                          type="file"
                                                          accept="image/*"
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className=" row align-items-center">
                                          <div className="form-group col-sm-6">
                                              <label htmlFor="fname">First Name:</label>
                                              <input
                                                  type="text"
                                                  className="form-control my-2"
                                                  id="fname"
                                                  defaultValue="Bini"
                                              />
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label htmlFor="lname">Last Name:</label>
                                              <input
                                                  type="text"
                                                  className="form-control my-2"
                                                  id="lname"
                                                  defaultValue="Jets"
                                              />
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label htmlFor="uname">User Name:</label>
                                              <input
                                                  type="text"
                                                  className="form-control my-2"
                                                  id="uname"
                                                  defaultValue="Bini@01"
                                              />
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label htmlFor="cname">City:</label>
                                              <input
                                                  type="text"
                                                  className="form-control my-2"
                                                  id="cname"
                                                  defaultValue="Atlanta"
                                              />
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label className="d-block">Gender:</label>
                                              <div className="custom-control custom-radio d-inline-flex me-3">
                                                  <input
                                                      type="radio"
                                                      id="customRadio6"
                                                      name="customRadio1"
                                                      className="custom-control-input"
                                                      defaultChecked=""
                                                  />
                                                  <label
                                                      className="custom-control-label"
                                                      htmlFor="customRadio6"
                                                  >
                                                      {" "}
                                                      Male{" "}
                                                  </label>
                                              </div>
                                              <div className="custom-control custom-radio d-inline-flex me-3">
                                                  <input
                                                      type="radio"
                                                      id="customRadio7"
                                                      name="customRadio1"
                                                      className="custom-control-input"
                                                  />
                                                  <label
                                                      className="custom-control-label"
                                                      htmlFor="customRadio7"
                                                  >
                                                      {" "}
                                                      Female{" "}
                                                  </label>
                                              </div>
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label htmlFor="dob">Date Of Birth:</label>
                                              <input
                                                  className="form-control my-2"
                                                  id="dob"
                                                  defaultValue="1984-01-24"
                                              />
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label>Marital Status:</label>
                                              <select
                                                  className="form-control my-2"
                                                  id="exampleFormControlSelect1"
                                              >
                                                  <option selected="">Single</option>
                                                  <option>Married</option>
                                                  <option>Widowed</option>
                                                  <option>Divorced</option>
                                                  <option>Separated </option>
                                              </select>
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label>Age:</label>
                                              <select
                                                  className="form-control my-2"
                                                  id="exampleFormControlSelect2"
                                              >
                                                  <option>12-18</option>
                                                  <option>19-32</option>
                                                  <option selected="">33-45</option>
                                                  <option>46-62</option>
                                                  <option>63 &gt; </option>
                                              </select>
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label>Country:</label>
                                              <select
                                                  className="form-control my-2"
                                                  id="exampleFormControlSelect3"
                                              >
                                                  <option>Caneda</option>
                                                  <option>Noida</option>
                                                  <option selected="">USA</option>
                                                  <option>India</option>
                                                  <option>Africa</option>
                                              </select>
                                          </div>
                                          <div className="form-group col-sm-6">
                                              <label>State:</label>
                                              <select
                                                  className="form-control my-2"
                                                  id="exampleFormControlSelect4"
                                              >
                                                  <option>California</option>
                                                  <option>Florida</option>
                                                  <option selected="">Georgia</option>
                                                  <option>Connecticut</option>
                                                  <option>Louisiana</option>
                                              </select>
                                          </div>
                                          <div className="form-group col-sm-12">
                                              <label>Address:</label>
                                              <div className="form-floating overflow-hidden">
                                                  <textarea
                                                      className="form-control"
                                                      placeholder="Leave a comment here"
                                                      id="floatingTextarea2"
                                                      style={{ height: 100 }}
                                                      defaultValue={""}
                                                  />
                                                  <label htmlFor="floatingTextarea2">
                                                      37 Cardinal Lane Petersburg, VA 23803 United States of
                                                      America Zip Code: 85001
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                      <button type="submit" className="btn btn-primary me-2 mt-3">
                                          Submit
                                      </button>
                                      <button type="reset" className="btn iq-bg-danger mt-3">
                                          cancel
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div> */}
                        <div className="tab-pane fade active show" id="chang-pwd" role="tabpanel">
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Change Password</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <div>
                        <div className="form-group">
                            <label htmlFor="cpass">Current Password:</label>
                            
                            <div className="input-container">
                                <input
                                    type={showPass1 ? 'text' : 'password'}
                                    className="form-control my-2"
                                    id="cpass"
                                    placeholder='Enter current password'
                                    onChange={(e) => setCurrPass(e.target.value)}
                                    value={currPass}
                                />
                                <div className="input-span" onClick={() => setShowPass1(!showPass1)}>
                                    {showPass1 ? <EyeOff /> : <Eye />}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="npass">New Password:</label>
                            <div className="input-container">
                                <input
                                    type={showPass2 ? 'text' : 'password'}
                                    className="form-control my-2"
                                    id="npass"
                                     placeholder='Enter new password'
                                    onChange={(e) => setNewPass(e.target.value)}
                                    value={newPass}
                                />
                                <div className="input-span" onClick={() => setShowPass2(!showPass2)}>
                                    {showPass2 ? <EyeOff /> : <Eye />}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="vpass">Verify Password:</label>
                            <div className="input-container">
                                <input
                                    type={showPass3 ? 'text' : 'password'}
                                    className="form-control my-2"
                                    id="vpass"
                                     placeholder='Enter verify password'
                                    onChange={(e) => setVerifyPass(e.target.value)}
                                    value={verifyPass}
                                />
                                <div className="input-span" onClick={() => setShowPass3(!showPass3)}>
                                    {showPass3 ? <EyeOff /> : <Eye />}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2" onClick={handleSubmit}>
                            Submit
                        </button>
                        <Link to={'/user/dashboard'} className="btn iq-bg-danger">
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
                        {/* <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                          <div className="iq-card">
                              <div className="iq-card-header d-flex justify-content-between">
                                  <div className="iq-header-title">
                                      <h4 className="card-title">Email and SMS</h4>
                                  </div>
                              </div>
                              <div className="iq-card-body">
                                  <form>
                                      <div className="form-group">
                                          <div className="row align-items-center">
                                              <div className="col-md-3">
                                                  <label htmlFor="emailnotification">
                                                      Email Notification:
                                                  </label>
                                              </div>
                                              <div className="col-md-9">
                                                  <div className="custom-control custom-switch">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="emailnotification"
                                                          defaultChecked=""
                                                      />
                                                      <label
                                                          className="custom-control-label"
                                                          htmlFor="emailnotification"
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <div className="row align-items-center">
                                              <div className="col-md-3">
                                                  <label htmlFor="smsnotification">SMS Notification:</label>
                                              </div>
                                              <div className="col-md-9">
                                                  <div className="custom-control custom-switch">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="smsnotification"
                                                          defaultChecked=""
                                                      />
                                                      <label
                                                          className="custom-control-label"
                                                          htmlFor="smsnotification"
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <div className="row align-items-center">
                                              <div className="col-md-3">
                                                  <label htmlFor="npass">When To Email</label>
                                              </div>
                                              <div className="col-md-9">
                                                  <div className="custom-control custom-checkbox">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="email01"
                                                      />
                                                      <label className="custom-control-label" htmlFor="email01">
                                                          You have new notifications.
                                                      </label>
                                                  </div>
                                                  <div className="custom-control custom-checkbox">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="email02"
                                                      />
                                                      <label className="custom-control-label" htmlFor="email02">
                                                          You're sent a direct message
                                                      </label>
                                                  </div>
                                                  <div className="custom-control custom-checkbox">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="email03"
                                                          defaultChecked=""
                                                      />
                                                      <label className="custom-control-label" htmlFor="email03">
                                                          Someone adds you as a connection
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <div className="row align-items-center">
                                              <div className="col-md-3">
                                                  <label htmlFor="npass">When To Escalate Emails</label>
                                              </div>
                                              <div className="col-md-9">
                                                  <div className="custom-control custom-checkbox">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="email04"
                                                      />
                                                      <label className="custom-control-label" htmlFor="email04">
                                                          {" "}
                                                          Upon new order.
                                                      </label>
                                                  </div>
                                                  <div className="custom-control custom-checkbox">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="email05"
                                                      />
                                                      <label className="custom-control-label" htmlFor="email05">
                                                          {" "}
                                                          New membership approval
                                                      </label>
                                                  </div>
                                                  <div className="custom-control custom-checkbox">
                                                      <input
                                                          type="checkbox"
                                                          className="custom-control-input"
                                                          id="email06"
                                                          defaultChecked=""
                                                      />
                                                      <label className="custom-control-label" htmlFor="email06">
                                                          {" "}
                                                          Member registration
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <button type="submit" className="btn btn-primary me-2">
                                          Submit
                                      </button>
                                      <button type="reset" className="btn iq-bg-danger">
                                          cancel
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div> */}
                        {/* <div className="tab-pane fade" id="manage-contact" role="tabpanel">
                          <div className="iq-card">
                              <div className="iq-card-header d-flex justify-content-between">
                                  <div className="iq-header-title">
                                      <h4 className="card-title">Manage Contact</h4>
                                  </div>
                              </div>
                              <div className="iq-card-body">
                                  <form>
                                      <div className="form-group">
                                          <label htmlFor="cno">Contact Number:</label>
                                          <input
                                              type="text"
                                              className="form-control my-2"
                                              id="cno"
                                              defaultValue="001 2536 123 458"
                                          />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="email">Email:</label>
                                          <input
                                              type="text"
                                              className="form-control my-2"
                                              id="email"
                                              defaultValue="Binijone@demo.com"
                                          />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="url">Url:</label>
                                          <input
                                              type="text"
                                              className="form-control my-2"
                                              id="url"
                                              defaultValue="https://getbootstrap.com"
                                          />
                                      </div>
                                      <button type="submit" className="btn btn-primary me-2">
                                          Submit
                                      </button>
                                      <button type="reset" className="btn iq-bg-danger">
                                          cancel
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Editprofile
