import React from 'react'

const Servicereport = () => {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12">
                  <div className="iq-card">
                      <div className="iq-card-body p-0">
                          <div className="iq-edit-list">
                              <ul
                                  className="iq-edit-profile nav nav-pills list-inline mb-0 flex-md-row flex-column"
                                  role="tablist"
                              >
                                  <li className="col-md-4 p-0">
                                      <a
                                          className="nav-link active"
                                          data-bs-toggle="pill"
                                          href="#personal-information"
                                          aria-selected="true"
                                          role="tab"
                                      >
                                          Scalping
                                      </a>
                                  </li>
                                  <li className="col-md-4 p-0">
                                      <a
                                          className="nav-link"
                                          data-bs-toggle="pill"
                                          href="#chang-pwd"
                                          aria-selected="false"
                                          tabIndex={-1}
                                          role="tab"
                                      >
                                          Option Strategy

                                      </a>
                                  </li>
                                  <li className="col-md-4 p-0">
                                      <a
                                          className="nav-link"
                                          aria-selected="false"
                                          data-bs-toggle="pill"
                                          href="#emailandsms"
                                          tabIndex={-1}
                                          role="tab"
                                      >
                                          Pattern
                                      </a>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12">
                  <div className="iq-edit-list-data">
                      <div className="tab-content">
                          <div
                              className="tab-pane fade active show"
                              id="personal-information"
                              role="tabpanel"
                          >
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="col-sm-12">
                                          <div className="iq-card">
                                              <div className="iq-card-header d-flex justify-content-between">
                                                  <div className="iq-header-title">
                                                      <h4 className="card-title">Scalping</h4>
                                                  </div>
                                              </div>
                                              <div className="iq-card-body">
                                                  <div className="table-responsive">
                                                      <table
                                                          id="datatable"
                                                          className="table table-striped table-bordered"
                                                      >
                                                          <thead>
                                                              <tr>
                                                                  <th>Name</th>
                                                                  <th>Position</th>
                                                                  <th>Office</th>
                                                                  <th>Age</th>
                                                                  <th>Start date</th>
                                                                  <th>Salary</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              <tr>
                                                                  <td>Tiger Nixon</td>
                                                                  <td>System Architect</td>
                                                                  <td>Edinburgh</td>
                                                                  <td>61</td>
                                                                  <td>2011/04/25</td>
                                                                  <td>$320,800</td>
                                                              </tr>
                                                              
                                                              <tr>
                                                                  <td>Donna Snider</td>
                                                                  <td>Customer Support</td>
                                                                  <td>New York</td>
                                                                  <td>27</td>
                                                                  <td>2011/01/25</td>
                                                                  <td>$112,000</td>
                                                              </tr>
                                                          </tbody>
                                                          <tfoot>
                                                              <tr>
                                                                  <th>Name</th>
                                                                  <th>Position</th>
                                                                  <th>Office</th>
                                                                  <th>Age</th>
                                                                  <th>Start date</th>
                                                                  <th>Salary</th>
                                                              </tr>
                                                          </tfoot>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="col-sm-12">
                                          <div className="iq-card">
                                              <div className="iq-card-header d-flex justify-content-between">
                                                  <div className="iq-header-title">
                                                      <h4 className="card-title">Option Strategy </h4>
                                                  </div>
                                              </div>
                                              <div className="iq-card-body">

                                                  <div className="table-responsive">
                                                      <table
                                                          id="datatable"
                                                          className="table table-striped table-bordered"
                                                      >
                                                          <thead>
                                                              <tr>
                                                                  <th>Name</th>
                                                                  <th>Position</th>
                                                                  <th>Office</th>
                                                                  <th>Age</th>
                                                                  <th>Start date</th>
                                                                  <th>Salary</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              <tr>
                                                                  <td>Tiger Nixon</td>
                                                                  <td>System Architect</td>
                                                                  <td>Edinburgh</td>
                                                                  <td>61</td>
                                                                  <td>2011/04/25</td>
                                                                  <td>$320,800</td>
                                                              </tr>
                                                             
                                                              <tr>
                                                                  <td>Donna Snider</td>
                                                                  <td>Customer Support</td>
                                                                  <td>New York</td>
                                                                  <td>27</td>
                                                                  <td>2011/01/25</td>
                                                                  <td>$112,000</td>
                                                              </tr>
                                                          </tbody>
                                                          <tfoot>
                                                              <tr>
                                                                  <th>Name</th>
                                                                  <th>Position</th>
                                                                  <th>Office</th>
                                                                  <th>Age</th>
                                                                  <th>Start date</th>
                                                                  <th>Salary</th>
                                                              </tr>
                                                          </tfoot>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="col-sm-12">
                                          <div className="iq-card">
                                              <div className="iq-card-header d-flex justify-content-between">
                                                  <div className="iq-header-title">
                                                      <h4 className="card-title">Pattern</h4>
                                                  </div>
                                              </div>
                                              <div className="iq-card-body">

                                                  <div className="table-responsive">
                                                      <table
                                                          id="datatable"
                                                          className="table table-striped table-bordered"
                                                      >
                                                          <thead>
                                                              <tr>
                                                                  <th>Name</th>
                                                                  <th>Position</th>
                                                                  <th>Office</th>
                                                                  <th>Age</th>
                                                                  <th>Start date</th>
                                                                  <th>Salary</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              <tr>
                                                                  <td>Tiger Nixon</td>
                                                                  <td>System Architect</td>
                                                                  <td>Edinburgh</td>
                                                                  <td>61</td>
                                                                  <td>2011/04/25</td>
                                                                  <td>$320,800</td>
                                                              </tr>
                                                              
                                                              <tr>
                                                                  <td>Donna Snider</td>
                                                                  <td>Customer Support</td>
                                                                  <td>New York</td>
                                                                  <td>27</td>
                                                                  <td>2011/01/25</td>
                                                                  <td>$112,000</td>
                                                              </tr>
                                                          </tbody>
                                                          <tfoot>
                                                              <tr>
                                                                  <th>Name</th>
                                                                  <th>Position</th>
                                                                  <th>Office</th>
                                                                  <th>Age</th>
                                                                  <th>Start date</th>
                                                                  <th>Salary</th>
                                                              </tr>
                                                          </tfoot>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="tab-pane fade" id="manage-contact" role="tabpanel">
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
                                                  
                                              />
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="email">Email:</label>
                                              <input
                                                  type="text"
                                                  className="form-control my-2"
                                                  id="email"
                                                  
                                              />
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="url">Url:</label>
                                              <input
                                                  type="text"
                                                  className="form-control my-2"
                                                  id="url"
                                                   
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
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Servicereport
