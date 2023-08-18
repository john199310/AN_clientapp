import React from "react";
import {
  menu_icon,
  menu_icon01,
  menu_icon02,
  menu_icon04,
  menu_icon05,
  menu_icon06,
} from "../../../../EntryFile/imagePath";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBarFoure = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menu6, setMenu6] = useState(false);
  const [menu7, setMenu7] = useState(false);
  const [menu8, setMenu8] = useState(false);
  const [menu9, setMenu9] = useState(false);
  const [menu10, setMenu10] = useState(false);
  const [menu11, setMenu11] = useState(false);
  const [menu12, setMenu12] = useState(false);
  const [menu13, setMenu13] = useState(false);
  const [menu14, setMenu14] = useState(false);
  const [menu15, setMenu15] = useState(false);
  const [menu16, setMenu16] = useState(false);
  const [menu17, setMenu17] = useState(false);
  const [menu18, setMenu18] = useState(false);
  const [menu19, setMenu19] = useState(false);
  const [menu20, setMenu20] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered) {
      document.body.classList.remove("expand-menu");
    } else {
      document.body.classList.remove("expand-menu");
    }

    return () => {
      document.body.classList.remove("expand-menu");
    };
  }, [isHovered]);
  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar sidebar-four"
        id="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu sidebar-menu-three">
            <aside id="aside" className="ui-aside">
              <ul className="tab nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link active"
                    to="#home"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    role="tab"
                    aria-controls="home"
                  >
                    <img src={menu_icon} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    id="messages-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#messages"
                    role="tab"
                    aria-controls="messages"
                  >
                    <img src={menu_icon01} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    role="tab"
                    aria-controls="profile"
                  >
                    <img src={menu_icon02} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    id="apps-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#apps"
                    role="tab"
                    aria-controls="apps"
                  >
                    <img src={menu_icon04} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    to="#report"
                    id="report-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#report"
                    role="tab"
                    aria-controls="report"
                  >
                    <img src={menu_icon05} alt="" />
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="tablinks nav-link"
                    to="#set"
                    id="set-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#set"
                    role="tab"
                    aria-controls="set"
                  >
                    <img src={menu_icon06} alt="" />
                  </Link>
                </li>
              </ul>
            </aside>
            <div className="tab-content tab-content-four pt-2">
              <ul
                className="tab-pane active"
                id="home"
                aria-labelledby="home-tab"
              >
                <li>
                  <Link to="/dashboard">
                    <span> Dashboard</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu6 === true ? "subdrop" : ""}`}
                    onClick={() => {
                      setMenu6(!menu6);
                    }}
                  >
                    <span> Product</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu6 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/product/productlist-product">
                        Product List
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/addproduct-product">
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/categorylist-product">
                        Category List
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/addcategory-product">
                        Add Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/subcategorytable-product">
                        Sub Category List
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/addsubcategory-product">
                        Add Sub Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/brandlist-product">
                        Brand List
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/addbrand-product">
                        Add Brand
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/importproduct-product">
                        Import Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/printbarcode-product">
                        Print Barcode
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu7 === true ? "subdrop" : ""}`}
                    onClick={() => {
                      setMenu7(!menu7);
                    }}
                  >
                    <span> Sales</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu7 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/sales/saleslist">Sales List</Link>
                    </li>
                    <li>
                      <Link to="/pos">POS</Link>
                    </li>
                    <li>
                      <Link to="/pos">New Sales</Link>
                    </li>
                    <li>
                      <Link to="/return/salesreturnlist-return">
                        Sales Return List
                      </Link>
                    </li>
                    <li>
                      <Link to="/return/addsalesreturn-return">
                        New Sales Return
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu8 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu8(!menu8);
                    }}
                  >
                    <span> Purchase</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu8 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/purchase/purchaselist-purchase">
                        Purchase List
                      </Link>
                    </li>
                    <li>
                      <Link to="/purchase/addpurchase-purchase">
                        Add Purchase
                      </Link>
                    </li>
                    <li>
                      <Link to="/purchase/importpurchase-purchase">
                        Import Purchase
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu9 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu9(!menu9);
                    }}
                  >
                    <span> Expense</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu9 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/expense/expenselist-expense">
                        Expense List
                      </Link>
                    </li>
                    <li>
                      <Link to="/expense/addexpense-expense">
                        Add Expense
                      </Link>
                    </li>
                    <li>
                      <Link to="/expense/expensecategory-expense">
                        Expense Category
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu10 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu10(!menu10);
                    }}
                  >
                    <span> Quotation</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu10 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/quotation/quotationlist-quotation">
                        Quotation List
                      </Link>
                    </li>
                    <li>
                      <Link to="/quotation/addquotation-quotation">
                        Add Quotation
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu11 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu11(!menu11);
                    }}
                  >
                    <span> Transfer</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu11 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/transfer/transferlist-transfer">
                        Transfer List
                      </Link>
                    </li>
                    <li>
                      <Link to="/transfer/addtransfer-transfer">
                        Add Transfer{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/transfer/importtransfer-transfer">
                        Import Transfer{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu12 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu12(!menu12);
                    }}
                  >
                    <span> Return</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu12 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/return/salesreturnlist-return">
                        Sales Return List
                      </Link>
                    </li>
                    <li>
                      <Link to="/return/addsalesreturn-return">
                        Add Sales Return{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/return/purchasereturnlist-return">
                        Purchase Return List
                      </Link>
                    </li>
                    <li>
                      <Link to="/return/addpurchasereturn-return">
                        Add Purchase Return{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu13 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu13(!menu13);
                    }}
                  >
                    <span> People</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu13 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/people/customerlist-people">
                        Customer List
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/addcustomer-people">
                        Add Customer
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/supplierlist-people">
                        Supplier List
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/addsupplier-people">
                        Add Supplier{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/userlist-people">
                        User List
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/adduser-people">
                        Add User
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/storelist-people">
                        Store List
                      </Link>
                    </li>
                    <li>
                      <Link to="/people/addstore-people">
                        Add Store
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu14 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu14(!menu14);
                    }}
                  >
                    <span> Places</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu14 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/places/newcountry-places">
                        New Country
                      </Link>
                    </li>
                    <li>
                      <Link to="/places/countrylist-places">
                        Countries list
                      </Link>
                    </li>
                    <li>
                      <Link to="/places/newstate-places">
                        New State{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/places/statelist-places">
                        State list
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul
                className="tab-pane"
                id="messages"
                aria-labelledby="messages-tab"
              >
                <li>
                  <Link to="/users/newuser">New User </Link>
                </li>
                <li>
                  <Link to="/users/userlists">Users List</Link>
                </li>
              </ul>
              <ul
                className="tab-pane"
                id="profile"
                aria-labelledby="profile-tab"
              >
                <li>
                  <Link to="/components">
                    <span> Components</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu15 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu15(!menu15);
                    }}
                  >
                    <span>Elements</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu15 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/elements/sweetalerts">
                        Sweet Alerts
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements/tooltip">Tooltip</Link>
                    </li>
                    <li>
                      <Link to="/elements/popover">Popover</Link>
                    </li>
                    <li>
                      <Link to="/elements/ribbon">Ribbon</Link>
                    </li>
                    <li>
                      <Link to="/elements/clipboard">Clipboard</Link>
                    </li>
                    <li>
                      <Link to="/elements/drag-drop">
                        Drag &amp; Drop
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements/rangeslider">
                        Range Slider
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements/rating">Rating</Link>
                    </li>
                    <li>
                      <Link to="/elements/toastr">Toastr</Link>
                    </li>
                    <li>
                      <Link to="/elements/text-editor">
                        Text Editor
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements/counter">Counter</Link>
                    </li>
                    <li>
                      <Link to="/elements/scrollbar">Scrollbar</Link>
                    </li>
                    <li>
                      <Link to="/elements/spinner">Spinner</Link>
                    </li>
                    <li>
                      <Link to="/elements/notification">
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements/lightbox">Lightbox</Link>
                    </li>
                    <li>
                      <Link to="/elements/stickynote">
                        Sticky Note
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements/timeline">Timeline</Link>
                    </li>
                    <li>
                      <Link to="/elements/form-wizard">
                        Form Wizard
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu16 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu16(!menu16);
                    }}
                  >
                    <span>Charts</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu16 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/charts/chart-apex">Apex Charts</Link>
                    </li>
                    <li>
                      <Link to="/charts/chart-js">Chart Js</Link>
                    </li>
                    <li>
                      <Link to="/charts/chart-morris">
                        Morris Charts
                      </Link>
                    </li>
                    <li>
                      <Link to="/charts/chart-flot">Flot Charts</Link>
                    </li>
                    <li>
                      <Link to="/charts/chart-peity">
                        Peity Charts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu17 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu17(!menu17);
                    }}
                  >
                    <span> Icons </span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu17 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/icons/icon-fontawesome">
                        Fontawesome Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-feather">
                        Feather Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-ionic">Ionic Icons</Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-material">
                        Material Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-pe7">Pe7 Icons</Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-simpleline">
                        Simpleline Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-themify">
                        Themify Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-weather">
                        Weather Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-typicon">
                        Typicon Icons
                      </Link>
                    </li>
                    <li>
                      <Link to="/icons/icon-flag">Flag Icons</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu18 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu18(!menu18);
                    }}
                  >
                    {" "}
                    <span>Forms</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu18 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/forms/form-basic-inputs">
                        Basic Inputs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-input-groups">
                        Input Groups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-horizontal">
                        Horizontal Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-vertical">
                        {" "}
                        Vertical Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-mask">Form Mask </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-validation">
                        Form Validation{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-select2">
                        Form Select2{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/form-fileupload">
                        File Upload{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu19 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu19(!menu19);
                    }}
                  >
                    {" "}
                    <span>Table</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu19 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/table/tables-basic">
                        Basic Tables{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/table/data-tables">Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blankpage">
                    <span>
                      {" "}
                      Blank Page<span> </span>
                    </span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={`${menu20 === true ? "d-block" : ""}`}
                    onClick={() => {
                      setMenu20(!menu20);
                    }}
                  >
                    <span> Error Pages</span> <span className="menu-arrow" />
                  </Link>
                  <ul className={`${menu20 === true ? "d-block" : ""}`}>
                    <li>
                      <Link to="/error-404">404 Error </Link>
                    </li>
                    <li>
                      <Link to="/error-500">500 Error </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="tab-pane" id="apps" aria-labelledby="apps-tab">
                <li>
                  <Link to="/application/chat">Chat</Link>
                </li>
                <li>
                  <Link to="/application/calendar">Calendar</Link>
                </li>
                <li>
                  <Link to="/application/email">Email</Link>
                </li>
              </ul>
              <ul className="tab-pane" id="report" aria-labelledby="report-tab">
                <li>
                  <Link to="/report/purchaseorderreport">
                    Purchase order report
                  </Link>
                </li>
                <li>
                  <Link to="/report/inventoryreport">
                    Inventory Report
                  </Link>
                </li>
                <li>
                  <Link to="/report/salesreport">Sales Report</Link>
                </li>
                <li>
                  <Link to="/report/invoicereport">
                    Invoice Report
                  </Link>
                </li>
                <li>
                  <Link to="/report/purchasereport">
                    Purchase Report
                  </Link>
                </li>
                <li>
                  <Link to="/report/supplierreport">
                    Supplier Report
                  </Link>
                </li>
                <li>
                  <Link to="/report/customerreport">
                    Customer Report
                  </Link>
                </li>
              </ul>
              <ul className="tab-pane" id="set" aria-labelledby="set-tab">
                <li>
                  <Link to="/settings/generalsettings">
                    General Settings
                  </Link>
                </li>
                <li>
                  <Link to="/settings/emailsettings">
                    Email Settings
                  </Link>
                </li>
                <li>
                  <Link to="/settings/paymentsettings">
                    Payment Settings
                  </Link>
                </li>
                <li>
                  <Link to="/settings/currencysettings">
                    Currency Settings
                  </Link>
                </li>
                <li>
                  <Link to="/settings/grouppermissions">
                    Group Permissions
                  </Link>
                </li>
                <li>
                  <Link to="/settings/taxrates">Tax Rates</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
    </>
  );
};
export default SideBarFoure;
