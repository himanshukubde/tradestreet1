import React from 'react'

const Net = () => {
  return (
    <div>
      <div className="col-sm-12 col-lg-12">
        <div className="iq-card">
          <div className="iq-card-header d-flex justify-content-between">
            <div className="iq-header-title">
              <h4 className="card-title">Net P&L</h4>
            </div>
          </div>
          <div className="iq-card-body">

            <form>
              <div className='row'>

                <div className="form-group col-md-4">
                  <label htmlFor="email">Select Strategy</label>
                  <select className="form-select my-2" required="">
                    <option value="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>

                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="email">Form Date</label>
                  <input type="datetime-local" className="form-control my-2" id="email1" />
                </div>

                <div className="form-group col-md-4">
                  <label htmlFor="email">To Date</label>
                  <input type="datetime-local" className="form-control my-2" id="email1" />
                </div>





              </div>


            </form>

            <div className="table-responsive">
              <table id="datatable" className="table table-striped table-bordered">
                <thead>
                  <tr>

                    <th>Sr.No</th>
                    <th>Trading</th>
                    <th>Square off</th>
                    <th>Update Script</th>
                    <th>Scalp Type</th>
                    <th>Exchange</th>
                    <th>Symbol</th>
                    <th>Token</th>
                    <th>Trade Type</th>
                    <th>Target Value</th>
                    <th>Sl Value</th>
                    <th>Quantity</th>
                    <th>Trading</th>
                    <th>Expiry date</th>
                    <th>Trade Execution</th>
                    <th>Exit Day</th>
                    <th>Entry Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="row-1">
                    <td>1</td>
                    <td><div className="iq-checkbox-mail">
                      <div className="custom-control custom-checkbox" style={{ textAlign: "center" }}>
                        <input type="checkbox" className="custom-control-input" id="mailk" />
                        <label className="custom-control-label" htmlFor="mailk" />
                      </div>
                    </div>



                    </td>
                    <td style={{ textAlign: "center" }}><a href="#">
                      <i className="ri-delete-bin-line" style={{ "fontSize": "22px" }} />
                    </a>

                    </td>




                    <td style={{ textAlign: "center" }}>
                      <button data-bs-toggle="modal" data-bs-target="#myModal" style={{ border: "none" }}>
                        <i class="las la-edit" style={{ "fontSize": "23px" }}></i>
                      </button>
                      {/* <a href="" id='modal1' data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg"></a> */}
                    </td>

                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>$320,800</td>
                  </tr>

                </tbody>

              </table>


            </div >
          </div>


        </div >

      </div >
    </div>
  )
}

export default Net
