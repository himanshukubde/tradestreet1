import React, { useState } from 'react'
import { setSmtpDetail } from '../../Common API/Admin'
import Swal from 'sweetalert2'
const Smtp = () => {

    const [email, setEmail] = useState('')
    const [cc, setCc] = useState('')
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = async () => {
        const data = {
            emailid: email,
            cc: cc,
            password: password,
            url: url
        }
        await setSmtpDetail(data).then((response) => {
            if (response.Status) {
                Swal.fire({
                    title: "Data Saved!",
                    text: "Smtp detail saved Successfully",
                    icon: "success",
                    timer: 1500,
                    timerProgressBar: true

                });
            }
            else {
                Swal.fire({
                    title: "Error!",
                    text: "Smtp detail cant be reflected",
                    icon: "error",
                    timer: 1500,
                    timerProgressBar: true

                });
            }
        }).catch((error) => {
            console.log("server error")
        })
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">SMTP Details</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">

                            <div>
                                <div className='row'>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control my-2" id="email1" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="pwd">CC</label>
                                        <input type="text" onChange={(e) => setCc(e.target.value)} value={cc} className="form-control my-2" id="pwd" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control my-2" id="pwd" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="pwd">URL</label>
                                        <input type="password" onChange={(e) => setUrl(e.target.value)} value={url} className="form-control my-2" id="pwd" />
                                    </div>



                                </div>
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary me-1 mt-2">
                                    Submit
                                </button>
                                <button type="submit" className="btn iq-bg-danger mt-2">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Smtp
