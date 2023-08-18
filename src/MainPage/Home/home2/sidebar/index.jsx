import React, { useEffect, useState } from "react";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from "feather-icons-react";

const SidebarTwo = () => {
  const [isSideMenu, setSideMenu] = useState("");
  const [path, setPath] = useState("");
  const history = useHistory();

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  const pageRefresh = (url, page) => {
    history.push(`/${url}/${page}`);
    window.location.reload();
  };
  const location = useLocation();
  let pathname = location.pathname;

 

  useEffect(() => {
    document.querySelector(".main-wrapper").classList.remove("slide-nav");
    document.querySelector(".sidebar-overlay").classList.remove("opened");
    document.querySelector(".sidebar-overlay").onclick = function () {
      this.classList.remove("opened");
      document.querySelector(".main-wrapper").classList.remove("slide-nav");
    };
  }, [pathname]);
  const exclusionArray =[
    '/reactjs/template/index-three',
    '/reactjs/template/index-four',
    
    
  ]
  if (exclusionArray.indexOf(window.location.pathname) >= 0) {
        return '';
    }
    

  return (
    <>
      <div className="sidebar sidebar-two" id="sidebar">
        <Scrollbars>
          <div className="sidebar-inner slimscroll">
            <div
              id="sidebar-menu"
              className="sidebar-menu"
              onMouseOver={expandMenuOpen}
              onMouseLeave={expandMenu}
            >
              <ul>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Main</h6>
                  <ul>
                    <li
                      className={pathname.includes("dashboard") ? "active" : ""}
                    >
                      <Link to="/dashboard">
                        {/* <i data-feather="grid" /> */}
                        <FeatherIcon icon="grid" />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/application")
                            ? "subdrop active"
                            : "" || isSideMenu == "Application"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "Application" ? "" : "Application"
                          )
                        }
                      >
                        {/* <img src={Product} alt="img" /> */}
                        <FeatherIcon icon="smartphone" />
                        <span> Application</span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Application" ? (
                        <ul>
                          <li>
                            <Link
                              to="/application/chat"
                              className={
                                pathname.includes("chat") ? "active" : ""
                              }
                            >
                              Chat
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/application/calendar"
                              className={
                                pathname.includes("calendar") ? "active" : ""
                              }
                            >
                              Calendar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/application/email"
                              className={
                                pathname.includes("email") ? "active" : ""
                              }
                            >
                              Email
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Products</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("productlist-product") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("productlist-") ? "active" : ""
                        }
                        to="/product/productlist-product"
                      >
                        <FeatherIcon icon="box" />
                        <span>Products</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("addproduct-product") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("addproduct-") ? "active" : ""
                        }
                        to="/product/addproduct-product"
                      >
                        <FeatherIcon icon="plus-square" />
                        <span>Create Product</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("categorylist-product")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("categorylist-") ? "active" : ""
                        }
                        to="/product/categorylist-product"
                      >
                        <FeatherIcon icon="codepen" />
                        <span>Category</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("brandlist-product") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("brandlist-") ? "active" : ""
                        }
                        to="/product/brandlist-product"
                      >
                        {/* <i data-feather="tag" /> */}
                        <FeatherIcon icon="tag" />
                        <span>Brands</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("subcategorytable-product")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("subcategorytable-") ? "active" : ""
                        }
                        to="/product/subcategorytable-product"
                      >
                        <FeatherIcon icon="speaker" />
                        <span>Sub Category</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("printbarcode-product")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("printbarcode-") ? "active" : ""
                        }
                        to="/product/printbarcode-product"
                      >
                        {/* <i data-feather="align-justify" /> */}
                        <FeatherIcon icon="align-justify" />
                        <span>Print Barcode</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("importproduct-product")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("importproduct-") ? "active" : ""
                        }
                        to="/product/importproduct-product"
                      >
                        {/* <i data-feather="minimize-2" /> */}
                        <FeatherIcon icon="minimize-2" />
                        <span>Import Products</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Sales</h6>
                  <ul>
                    <li
                      className={pathname.includes("saleslist") ? "active" : ""}
                    >
                      <Link
                        className={
                          pathname.includes("saleslist") ? "active" : ""
                        }
                        to="/sales/saleslist"
                      >
                        <i data-feather="shopping-cart" />
                        <FeatherIcon icon="shopping-cart" />
                        <span>Sales</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("invoicereport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/invoicereport"
                        className={
                          pathname.includes("invoicereport") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="file-text" /> */}
                        <FeatherIcon icon="file-text" />
                        <span>Invoices</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("salesreturnlist-return")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("salesreturnlist-") ? "active" : ""
                        }
                        to="/return/salesreturnlist-return"
                      >
                        {/* <i data-feather="copy" /> */}
                        <FeatherIcon icon="copy" />
                        <span>Sales Return</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("quotationlist-quotation")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("quotationlist-") ? "active" : ""
                        }
                        to="/quotation/quotationlist-quotation"
                      >
                        {/* <i data-feather="save" /> */}
                        <FeatherIcon icon="save" />
                        <span>Quotation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pos">
                        <FeatherIcon icon="hard-drive" />
                        <span>POS</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/transfer")
                            ? "subdrop active"
                            : "" || isSideMenu == "transfer"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "transfer" ? "" : "transfer"
                          )
                        }
                      >
                        {" "}
                        <FeatherIcon icon="shuffle" />
                        <span>Transfer</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      {isSideMenu == "transfer" ? (
                        <ul>
                          <li>
                            <Link
                              className={
                                pathname.includes("transferlist-")
                                  ? "active"
                                  : ""
                              }
                              to="/transfer/transferlist-transfer"
                            >
                              Transfer List
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={
                                pathname.includes("importtransfer-")
                                  ? "active"
                                  : ""
                              }
                              to="/transfer/importtransfer-transfer"
                            >
                              Import Transfer
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/return")
                            ? "subdrop active"
                            : "" || isSideMenu == "return"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "return" ? "" : "return")
                        }
                      >
                        {" "}
                        <FeatherIcon icon="corner-up-left" />{" "}
                        <span>Return</span> <span className="menu-arrow"></span>
                      </Link>
                      {isSideMenu == "return" ? (
                        <ul>
                          <li>
                            <Link
                              className={
                                pathname.includes("salesreturnlist-")
                                  ? "active"
                                  : ""
                              }
                              to="/return/salesreturnlist-return"
                            >
                              Sales Return
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={
                                pathname.includes("purchasereturnlist-")
                                  ? "active"
                                  : ""
                              }
                              to="/return/purchasereturnlist-return"
                            >
                              Purchase Return
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Purchases</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("purchaselist-purchase")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("purchaselist-") ? "active" : ""
                        }
                        to="/purchase/purchaselist-purchase"
                      >
                        {/* <i data-feather="shopping-bag" /> */}
                        <FeatherIcon icon="shopping-bag" />
                        <span>Purchases</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("importpurchase-purchase")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("importpurchase-") ? "active" : ""
                        }
                        to="/purchase/importpurchase-purchase"
                      >
                        <FeatherIcon icon="minimize-2" />
                        <span>Import Purchases</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("purchaseorderreport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/purchaseorderreport"
                        className={
                          pathname.includes("purchaseorderreport")
                            ? "active"
                            : ""
                        }
                      >
                        <FeatherIcon icon="file-minus" />
                        <span>Purchase Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/return/purchasereturnlist-return">
                        <FeatherIcon icon="refresh-cw" />
                        Purchase Return
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Finance &amp; Accounts</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/expense")
                            ? "subdrop active"
                            : "" || isSideMenu == "expense"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "expense" ? "" : "expense"
                          )
                        }
                      >
                        <FeatherIcon icon="file-text" />
                        <span>Expense</span>
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "expense" ? (
                        <ul>
                          <li>
                            <Link
                              className={
                                pathname.includes("expenselist-")
                                  ? "active"
                                  : ""
                              }
                              to="/expense/expenselist-expense"
                            >
                              Expenses
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={
                                pathname.includes("expensecategory-")
                                  ? "active"
                                  : ""
                              }
                              to="/expense/expensecategory-expense"
                            >
                              Expenses Category
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Peoples</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("customerlist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("customerlist-") ? "active" : ""
                        }
                        to="/people/customerlist-people"
                      >
                        {/* <i data-feather="user" /> */}
                        <FeatherIcon icon="user" />
                        <span>Customers</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("supplierlist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("supplierlist-") ? "active" : ""
                        }
                        to="/people/supplierlist-people"
                      >
                        <FeatherIcon icon="users" />
                        <span>Suppliers</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("userlist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("userlist-") ? "active" : ""
                        }
                        to="/people/userlist-people"
                      >
                        {/* <i data-feather="user-check" /> */}
                        <FeatherIcon icon="user-check" />
                        <span>Users</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("storelist-people") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("storelist-") ? "active" : ""
                        }
                        to="/people/storelist-people"
                      >
                        <FeatherIcon icon="home" />
                        <span>Stores</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Reports</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("salesreport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/salesreport"
                        className={
                          pathname.includes("salesreport") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="bar-chart-2" /> */}
                        <FeatherIcon icon="bar-chart-2" />
                        <span>Sales Report</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/report/purchaseorderreport"
                        className={
                          pathname.includes("purchaseorderreport")
                            ? "active"
                            : ""
                        }
                      >
                        {/* <i data-feather="pie-chart" /> */}
                        <FeatherIcon icon="pie-chart" />
                        <span>Purchase report</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("inventoryreport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/inventoryreport"
                        className={
                          pathname.includes("inventoryreport") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="credit-card" /> */}
                        <FeatherIcon icon="credit-card" />
                        <span>Inventory Report</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("invoicereport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/invoicereport"
                        className={
                          pathname.includes("invoicereport") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="file" />
                        <span>Invoice Report</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("purchasereport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/purchasereport"
                        className={
                          pathname.includes("purchasereport") ? "active" : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Purchase Report</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("supplierreport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/supplierreport"
                        className={
                          pathname.includes("supplierreport") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="database" /> */}
                        <FeatherIcon icon="database" />
                        <span>Supplier Report</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("customerreport") ? "active" : ""
                      }
                    >
                      <Link
                        to="/report/customerreport"
                        className={
                          pathname.includes("customerreport") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="pie-chart" /> */}
                        <FeatherIcon icon="pie-chart" />
                        <span>Customer Report</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">User Management</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/users")
                            ? "subdrop active"
                            : "" || isSideMenu == "Users"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Users" ? "" : "Users")
                        }
                      >
                        <FeatherIcon icon="users" />
                        <span>Manage Users</span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Users" ? (
                        <ul>
                          <li>
                            <Link
                              to="/users/newuser"
                              className={
                                pathname.includes("newuser") ? "active" : ""
                              }
                            >
                              New User{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/users/userlists"
                              className={
                                pathname.includes("userlists") ? "active" : ""
                              }
                            >
                              Users List
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Pages</h6>
                  <ul>
                    <li className="submenu">
                      <Link to="#"
                        className={
                          pathname.includes("/authentication")
                            ? "subdrop active"
                            : "" || isSideMenu == "authentication"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "authentication" ? "" : "authentication")
                        }
                      >
                        <FeatherIcon icon="shield"/>
                        <span>Authentication</span>
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "authentication" ? ( 
                      <ul>
                        <li>
                          <Link
                            to="/signIn"
                            className={
                              pathname.includes("signIn") ? "active" : ""
                            }
                          >
                            Log in
                          </Link>
                        </li>
                        <li>
                          <Link to="/signUp"
                            className={
                              pathname.includes("signUp") ? "active" : ""
                            }
                            >Register</Link>
                        </li>
                        <li>
                          <Link to="/forgetpassword">Forgot Password</Link>
                        </li>
                        <li>
                          <Link to="resetpassword.html">Reset Password</Link>
                        </li>
                      </ul>
                      ) : ( 
                        " " 
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          isSideMenu == "error pages" ? "subdrop active" : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "error pages" ? "" : "error pages"
                          )
                        }
                      >
                        {" "}
                        <FeatherIcon icon="file-minus" />
                        <span> Error Pages </span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "error pages" ? (
                        <ul>
                          <li>
                            <Link to="/error-404">404 Error </Link>
                          </li>
                          <li>
                            <Link to="/error-500">500 Error </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/places")
                            ? "subdrop active"
                            : "" || isSideMenu == "places"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "places" ? "" : "places")
                        }
                      >
                        {" "}
                        <FeatherIcon icon="map" />
                        <span>Places</span> <span className="menu-arrow"></span>
                      </Link>
                      {isSideMenu == "places" ? (
                        <ul>
                          <li>
                            <Link
                              className={
                                pathname.includes("countrylist-")
                                  ? "active"
                                  : ""
                              }
                              to="/places/countrylist-places"
                            >
                              Countries
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={
                                pathname.includes("statelist-") ? "active" : ""
                              }
                              to="/places/statelist-places"
                            >
                              States
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={pathname.includes("blankpage") ? "active" : ""}
                    >
                      <Link
                        to="/blankpage"
                        onClick={() =>
                          toggleSidebar(isSideMenu == "" ? "" : "")
                        }
                      >
                        <FeatherIcon icon="file" />
                        <span>Blank Page</span>{" "}
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("components") ? "active" : ""
                      }
                    >
                      <Link
                        to="/components"
                        onClick={() =>
                          toggleSidebar(isSideMenu == "" ? "" : "")
                        }
                      >
                        <FeatherIcon icon="pen-tool" />
                        <span>Components</span>{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">UI Interface</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/elements")
                            ? "subdrop active"
                            : "" || isSideMenu == "elements"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "elements" ? "" : "elements"
                          )
                        }
                      >
                        <FeatherIcon icon="box" />
                        <span>Elements </span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "elements" ? (
                        <ul>
                          <li>
                            <Link
                              to="/elements/sweetalerts"
                              className={
                                pathname.includes("sweetalerts") ? "active" : ""
                              }
                            >
                              Sweet Alerts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/tooltip"
                              className={
                                pathname.includes("tooltip") ? "active" : ""
                              }
                            >
                              Tooltip
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={
                                pathname.includes("popover") ? "active" : ""
                              }
                              to="/elements/popover"
                            >
                              Popover
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/ribbon"
                              className={
                                pathname.includes("ribbon") ? "active" : ""
                              }
                            >
                              Ribbon
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/clipboard"
                              className={
                                pathname.includes("clipboard") ? "active" : ""
                              }
                            >
                              Clipboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/drag-drop"
                              className={
                                pathname.includes("drag-drop") ? "active" : ""
                              }
                            >
                              Drag &amp; Drop
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/rangeslider"
                              className={
                                pathname.includes("rangeslider") ? "active" : ""
                              }
                              onClick={(e) =>
                                pageRefresh("elements", "rangeslider")
                              }
                            >
                              Range Slider
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/rating"
                              className={
                                pathname.includes("rating") ? "active" : ""
                              }
                            >
                              Rating
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/toastr"
                              className={
                                pathname.includes("toastr") ? "active" : ""
                              }
                            >
                              Toastr
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/text-editor"
                              className={
                                pathname.includes("text-editor") ? "active" : ""
                              }
                            >
                              Text Editor
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/counter"
                              className={
                                pathname.includes("counter") ? "active" : ""
                              }
                            >
                              Counter
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/scrollbar"
                              className={
                                pathname.includes("scrollbar") ? "active" : ""
                              }
                            >
                              Scrollbar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/spinner"
                              className={
                                pathname.includes("spinner") ? "active" : ""
                              }
                            >
                              Spinner
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/notification"
                              className={
                                pathname.includes("notification")
                                  ? "active"
                                  : ""
                              }
                            >
                              Notification
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/lightbox"
                              className={
                                pathname.includes("lightbox") ? "active" : ""
                              }
                            >
                              Lightbox
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/stickynote"
                              className={
                                pathname.includes("stickynote") ? "active" : ""
                              }
                            >
                              Sticky Note
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/timeline"
                              className={
                                pathname.includes("timeline") ? "active" : ""
                              }
                            >
                              Timeline
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/elements/form-wizard"
                              className={
                                pathname.includes("form-wizard") ? "active" : ""
                              }
                              onClick={(e) =>
                                pageRefresh("elements", "form-wizard")
                              }
                            >
                              Form Wizard
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/charts")
                            ? "subdrop active"
                            : "" || isSideMenu == "Charts"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Charts" ? "" : "Charts")
                        }
                      >
                        <FeatherIcon icon="bar-chart-2" />
                        <span> Charts</span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Charts" ? (
                        <ul>
                          <li>
                            <Link
                              to="/charts/chart-apex"
                              className={
                                pathname.includes("chart-apex") ? "active" : ""
                              }
                            >
                              Apex Charts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/charts/chart-js"
                              className={
                                pathname.includes("chart-js") ? "active" : ""
                              }
                            >
                              Chart Js
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/charts/chart-morris"
                              className={
                                pathname.includes("chart-morris")
                                  ? "active"
                                  : ""
                              }
                            >
                              Morris Charts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/charts/chart-flot"
                              className={
                                pathname.includes("chart-flot") ? "active" : ""
                              }
                            >
                              Flot Charts
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/icons")
                            ? "subdrop active"
                            : "" || isSideMenu == "Icons"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Icons" ? "" : "Icons")
                        }
                      >
                        <FeatherIcon icon="award" />
                        <span> Icons</span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Icons" ? (
                        <ul>
                          <li>
                            <Link
                              to="/icons/icon-fontawesome"
                              className={
                                pathname.includes("fontawesome") ? "active" : ""
                              }
                            >
                              Fontawesome Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-feather"
                              className={
                                pathname.includes("feather") ? "active" : ""
                              }
                            >
                              Feather Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-ionic"
                              className={
                                pathname.includes("ionic") ? "active" : ""
                              }
                            >
                              Ionic Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-material"
                              className={
                                pathname.includes("material") ? "active" : ""
                              }
                            >
                              Material Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-pe7"
                              className={
                                pathname.includes("icon-pe7") ? "active" : ""
                              }
                            >
                              Pe7 Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-simpleline"
                              className={
                                pathname.includes("simpleline") ? "active" : ""
                              }
                            >
                              Simpleline Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-themify"
                              className={
                                pathname.includes("themify") ? "active" : ""
                              }
                            >
                              Themify Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-weather"
                              className={
                                pathname.includes("weather") ? "active" : ""
                              }
                            >
                              Weather Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-typicon"
                              className={
                                pathname.includes("typicon") ? "active" : ""
                              }
                            >
                              Typicon Icons
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/icons/icon-flag"
                              className={
                                pathname.includes("icon-flag") ? "active" : ""
                              }
                            >
                              Flag Icons
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/forms")
                            ? "subdrop active"
                            : "" || isSideMenu == "Forms"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Forms" ? "" : "Forms")
                        }
                      >
                        <FeatherIcon icon="edit" />
                        <span> Forms</span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Forms" ? (
                        <ul>
                          <li>
                            <Link
                              to="/forms/form-basic-inputs"
                              className={
                                pathname.includes("form-basic-inputs")
                                  ? "active"
                                  : ""
                              }
                            >
                              Basic Inputs{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-input-groups"
                              className={
                                pathname.includes("form-input-groups")
                                  ? "active"
                                  : ""
                              }
                            >
                              Input Groups{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-horizontal"
                              className={
                                pathname.includes("horizontal") ? "active" : ""
                              }
                            >
                              Horizontal Form{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-vertical"
                              className={
                                pathname.includes("form-vertical")
                                  ? "active"
                                  : ""
                              }
                            >
                              {" "}
                              Vertical Form{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-mask"
                              className={
                                pathname.includes("form-mask") ? "active" : ""
                              }
                            >
                              Form Mask{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-validation"
                              className={
                                pathname.includes("validation") ? "active" : ""
                              }
                            >
                              Form Validation{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-select2"
                              className={
                                pathname.includes("form-select2")
                                  ? "active"
                                  : ""
                              }
                            >
                              Form Select2{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/forms/form-fileupload"
                              className={
                                pathname.includes("fileupload") ? "active" : ""
                              }
                            >
                              File Upload{" "}
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/table")
                            ? "subdrop active"
                            : "" || isSideMenu == "Table"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(isSideMenu == "Table" ? "" : "Table")
                        }
                      >
                        <FeatherIcon icon="layout" />
                        <span> Table</span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Table" ? (
                        <ul>
                          <li>
                            <Link
                              to="/table/tables-basic"
                              className={
                                pathname.includes("tables-basic")
                                  ? "active"
                                  : ""
                              }
                            >
                              Basic Tables{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/table/data-tables"
                              className={
                                pathname.includes("data-tables") ? "active" : ""
                              }
                            >
                              Data Table{" "}
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Settings</h6>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={
                          pathname.includes("/settings")
                            ? "subdrop active"
                            : "" || isSideMenu == "Settings"
                            ? "subdrop active"
                            : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu == "Settings" ? "" : "Settings"
                          )
                        }
                      >
                        {/* <img src={settings} alt="img" /> */}
                        <FeatherIcon icon="settings" />
                        <span> Settings</span> <span className="menu-arrow" />
                      </Link>
                      {isSideMenu == "Settings" ? (
                        <ul>
                          <li>
                            <Link
                              to="/settings/generalsettings"
                              className={
                                pathname.includes("generalsettings")
                                  ? "active"
                                  : ""
                              }
                            >
                              General Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings/emailsettings"
                              className={
                                pathname.includes("emailsettings")
                                  ? "active"
                                  : ""
                              }
                            >
                              Email Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings/paymentsettings"
                              className={
                                pathname.includes("paymentsettings")
                                  ? "active"
                                  : ""
                              }
                            >
                              Payment Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings/currencysettings"
                              className={
                                pathname.includes("currencysettings")
                                  ? "active"
                                  : ""
                              }
                            >
                              Currency Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings/grouppermissions"
                              className={
                                pathname.includes("permission") ? "active" : ""
                              }
                            >
                              Group Permissions
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/settings/taxrates"
                              className={
                                pathname.includes("taxrates") ? "active" : ""
                              }
                            >
                              Tax Rates
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link
                        to="/signIn"
                        className={pathname.includes("signIn") ? "active" : ""}
                      >
                        <FeatherIcon icon="log-out" />
                        <span>Logout</span>{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default SidebarTwo;
