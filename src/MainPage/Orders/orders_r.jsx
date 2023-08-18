import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import Table from "../../EntryFile/datatable"

const options = [
  { id: 1, text: "Code", text: "Code" },
  { id: 2, text: "Description", text: "Description" },
  { id: 3, text: "Sort", text: "Sort" },
  { id: 4, text: "List", text: "List" },
];
class CommonOrders extends Component {
  constructor(props) {
    super(props);
    
  };
  
  selectedID = null;
  tableData = [
    { id: 1, text: "Code" },
    { id: 2, text: "Description" },
    { id: 3, text: "Sort" },
    { id: 4, text: "List" },
  ];
  
setID = (recID) =>{
  this.selectedID = recID;
}
  render() {
    return (
      <div className="page-wrapper cardhead">
        <div className="content ">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Orders</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Orders</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Search Options</h5>
                </div>
                <div className="card-body">
                  <div className="form-group row">
                                    
                    <label className="col-lg-4 col-form-label">Role</label>
                    
                    <div className="col-lg-8">
                      <Select2
                        className="select"
                        data={options}
                        options={{
                          placeholder: "Choose",
                        }}
                      />
                    </div>                  
                  </div>
                  <div className="form-group row">                                    
                    <label className="col-lg-4 col-form-label">Value</label>                    
                    <div className="col-lg-8">
                      <input type="text" className="form-control" />
                    </div>                    
                  </div>
                  <div className="form-group row">     
                        <div className="col-lg-9"></div>
                        <div className="col-lg-3">
                          <a className="mb-1 btn clip-btn btn-primary me-1"><i className="fa fa-search" /> Find </a>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Product Details</h5>
                </div>
                <div className="card-body">
                   <div className="productdetails">
                    <ul className="product-bar">
                      <li>
                        <h4>Order No</h4>
                        <h6>2023/04-0137</h6>
                      </li>
                      <li>
                        <h4>Order Date</h4>
                        <h6>18/8/2023</h6>
                      </li>
                      <li>
                        <h4>Account No</h4>
                        <h6>E0001</h6>
                      </li>
                      <li>
                        <h4>Ref</h4>
                        <h6>PO 22012</h6>
                      </li>
                      <li>
                        <h4>Net</h4>
                        <h6>19.59</h6>
                      </li>
                      <li>
                        <h4>VAT</h4>
                        <h6>3.92</h6>
                      </li>
                      <li>
                        <h4>Total</h4>
                        <h6>23.51</h6>
                      </li>
                      <li>
                        <h4>Settlement</h4>
                        <h6>0.98  5%</h6>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Select a Product...</h2>
                </div>
                <div className="card-body">                  
                  <div className="table-responsive">
                  {/* <Table data={tableData} /> */}
                    <table className="table table-nowrap mb-0">
                      <thead>
                        <tr
                        data-bs-toggle="modal"
                        data-bs-target="#confirm_invoice">
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Age</th>
                          <th>City</th>
                          <th>Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr onClick={() => this.setID(record.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#confirm_invoice">
                          <td>1</td>
                          <td>Anna</td>
                          <td>Pitt</td>
                          <td>35</td>
                          <td>New York</td>
                          <td>USA</td>
                        </tr>
                        <tr 
                        data-bs-toggle="modal"
                        data-bs-target="#confirm_invoice">
                          <td>1</td>
                          <td>Anna</td>
                          <td>Pitt</td>
                          <td>35</td>
                          <td>New York</td>
                          <td>USA</td>
                        </tr>
                        <tr 
                        data-bs-toggle="modal"
                        data-bs-target="#confirm_invoice">
                          <td>1</td>
                          <td>Anna</td>
                          <td>Pitt</td>
                          <td>35</td>
                          <td>New York</td>
                          <td>USA</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* Invoice Confirm Modal */}
                    <div className="modal custom-modal fade" id="confirm_invoice">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Add Category</h4>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label>Category Name</label>
                                <input
                                  className="form-control form-white"
                                  placeholder="Enter name"
                                  type="text"
                                  name="category-name"
                                />
                              </div>
                              <div className="form-group mb-0">
                                <label>Choose Category Color</label>
                                              
                              </div>
                              <div className="submit-section">
                                <button
                                  type="button"
                                  className="btn btn-primary save-category submit-btn"
                                  data-dismiss="modal"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice Confirm Modal */}
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
    );
  }
}
export default CommonOrders;
