import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import Table from "../../EntryFile/datatable"
import {
  PlusIcon,
} from "../../EntryFile/imagePath";

const options = [
  { id: 1, text: "Code", text: "Code" },
  { id: 2, text: "Description", text: "Description" },
  { id: 3, text: "Sort", text: "Sort" },
  { id: 4, text: "List", text: "List" },
];

class CommonOrders extends Component {
  constructor(props) {
    super(props);
    this.tableData = {
       data: [
              {id:1,code:"SHCUSB-PRINTER-CABLE",description:"PD7 =DISUSBMS CRUZER-MEMORY STICK-FLASH DRIVE",pack:"20000",follow:"20238",net:"2499.99",total:"2499.99",qty:"5799"},
              {id:2,code:"SHCUSB-PRINTER-CABLE",description:	"PD7 =DISUSBMS CRUZER-MEMORY STICK-FLASH DRIVE",pack:	"20000"	,follow:"20238",	net:"2499.99",total:"2499.99",qty:"5799"},
              {id:3,code:"SHCUSB-PRINTER-CABLE",description:	"PD7 =DISUSBMS CRUZER-MEMORY STICK-FLASH DRIVE"	,pack:"20000"	,follow:"20238",	net:"2499.99",total:"2499.99",qty:"5799"},
              {id:4,code:"SHCUSB-PRINTER-CABLE",description:	"PD7 =DISUSBMS CRUZER-MEMORY STICK-FLASH DRIVE",pack:	"20000",	follow:"20238",	net:"2499.99",total:"2499.99",qty:"5799"},
              {id:5,code:"SHCUSB-PRINTER-CABLE",description:"PD7 =DISUSBMS CRUZER-MEMORY STICK-FLASH DRIVE",pack:"20000",follow:"20238",net:"2499.99",total:"2499.99",qty:"5799"},
              {id:6,code:"SHCUSB-PRINTER-CABLE",description:"PD7 =DISUSBMS CRUZER-MEMORY STICK-FLASH DRIVE",pack:"20000",follow:"20238",net:"2499.99",total:"2499.99",qty:"5799"},
              
            ],         
            columns : [
             
             {
               title: 'Code',
               dataIndex: 'code',
                 sorter: (a, b) => a.code[0] - b.code[0],
             },
             {
               title: 'Description',
               dataIndex: 'description',
               sorter: (a, b) => a.position.length - b.position.length,
             },
           
             {
               title: 'Pack',
               dataIndex: 'pack',
               sorter: (a, b) => a.office.length - b.office.length,
             },
 
             {
              title: 'Follow',
              dataIndex: 'follow',
              sorter: (a, b) => a.age.length - b.age.length,
            },
            {
              title: 'Net',
              dataIndex: 'net',
              sorter: (a, b) => a.age.length - b.age.length,
            },
            {
              title: 'Total',
              dataIndex: 'total',
              sorter: (a, b) => a.age.length - b.age.length,
            },
            {
              title: 'Qty',
              dataIndex: 'qty',
              sorter: (a, b) => a.age.length - b.age.length,
            },

            //  {
            //    title: 'Net',
            //    dataIndex: 'net', 
            //    render: (text, record) => (            
            //    <span>$ {text}</span>
            //      ), 
            //    sorter: (a, b) => a.salary.length - b.salary.length,
            //  },
           ]
    };
    
   
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
                    <Table columns={this.tableData.columns} dataSource={this.tableData.data} />                         
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
