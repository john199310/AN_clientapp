import React, { useEffect, useState } from "react";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from "feather-icons-react";

const Sidebar = (props) => {
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
  const exclusionArray = [
    "/reactjs/template/index-three",
    "/reactjs/template/index-four",
    "/reactjs/template/index-two",
    "/reactjs/template/index-one",
  ];
  if (exclusionArray.indexOf(window.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      <div className="sidebar" id="sidebar">
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
                  <h6 className="submenu-hdr">Orders</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("common-orders") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("common-orders") ? "active" : ""
                        }
                        to="/orders/common-orders"
                      >
                        <FeatherIcon icon="box" />
                        <span>Orders</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("back-orders") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("back-orders") ? "active" : ""
                        }
                        to="/orders/back-orders"
                      >
                        <FeatherIcon icon="plus-square" />
                        <span>Back Orders</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("purchase-orders")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("purchase-orders") ? "active" : ""
                        }
                        to="/orders/purchase-orders"
                      >
                        <FeatherIcon icon="codepen" />
                        <span>Purchase Orders</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("import-order") ? "active" : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("import-order") ? "active" : ""
                        }
                        to="/orders/import-order"
                      >
                        {/* <i data-feather="tag" /> */}
                        <FeatherIcon icon="shuffle" />
                        <span>Import Order</span>
                      </Link>
                    </li>
                  </ul>
                </li>  
                <li  className={pathname.includes("not-inviced-list") ? "submenu-open active" : "submenu-open"} >
                  <a href="/orders/not-inviced-list" className="topm">                    
                  <span style={{height: '24px'}}></span>
                  <span>Not Invoiced List</span>
                  </a>
                </li>
                <li  className={pathname.includes("system-order-numbers") ? "submenu-open active" : "submenu-open"} >
                  <a href="/orders/system-order-numbers" className="topm">                    
                    <span style={{height: '24px'}}></span>
                    <span>Sys Order Numbers</span>
                  </a>
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
                        to="/products/productlist-product"
                      >
                        <FeatherIcon icon="box" />
                        <span>Products</span>
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
                        to="/products/categorylist-product"
                      >
                        <FeatherIcon icon="codepen" />
                        <span>Category</span>
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
                        to="/products/subcategorytable-product"
                      >
                        <FeatherIcon icon="speaker" />
                        <span>Sub Category</span>
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
                        to="/products/brandlist-product"
                      >
                        {/* <i data-feather="tag" /> */}
                        <FeatherIcon icon="tag" />
                        <span>Brands</span>
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
                        to="/products/importproduct-product"
                      >
                        {/* <i data-feather="minimize-2" /> */}
                        <FeatherIcon icon="minimize-2" />
                        <span>Import Products</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Peoples</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("customerlist-people")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("customerlist-people") ? "active" : ""
                        }
                        to="/peoples/customerlist-people"
                      >
                        {/* <i data-feather="shopping-bag" /> */}
                        <FeatherIcon icon="user" />
                        <span>Customers</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("supplierlist-people")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          pathname.includes("supplierlist-people") ? "active" : ""
                        }
                        to="/peoples/supplierlist-people"
                      >
                        <FeatherIcon icon="users" />
                        <span>Suppliers</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("discountlist") ? "active" : ""
                      }
                    >
                      <Link
                        to="/peoples/discountlist"
                        className={
                          pathname.includes("discountlist")
                            ? "active"
                            : ""
                        }
                      >
                        <FeatherIcon icon="bar-chart" />
                        <span>Discounts</span>
                      </Link>
                    </li>

                    <li
                      className={
                        pathname.includes("userlist-people") ? "active" : ""
                      }
                    >
                      <Link
                        to="/peoples/userlist-people"
                        className={
                          pathname.includes("userlist-people")
                            ? "active"
                            : ""
                        }
                      >
                        <FeatherIcon icon="user-check" />
                        <span>Manage Users</span>
                      </Link>
                    </li>

                    {/* <li>
                      <Link to="/return/discountlist">
                        <FeatherIcon icon="refresh-cw" />
                        Purchase Return
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Reports</h6>
                  <ul>
                    <li
                      className={
                        pathname.includes("sales-ledger") ? "active" : ""
                      }
                    >
                      <Link
                        to="/reports/sales-ledger"
                        className={
                          pathname.includes("sales-ledger") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="bar-chart-2" /> */}
                        <FeatherIcon icon="bar-chart-2" />
                        <span>Sales Ledger</span>
                      </Link>
                    </li>
                    <li
                    className={
                        pathname.includes("purchase-ledger") ? "active" : ""
                      }
                    >
                      <Link
                        to="/reports/purchase-ledger"
                        className={
                          pathname.includes("purchase-ledger")
                            ? "active"
                            : ""
                        }
                      >
                        {/* <i data-feather="pie-chart" /> */}
                        <FeatherIcon icon="pie-chart" />
                        <span>Purchase Ledger</span>
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("report-statement") ? "active" : ""
                      }
                    >
                      <Link
                        to="/reports/report-statement"
                        className={
                          pathname.includes("report-statement") ? "active" : ""
                        }
                      >
                        {/* <i data-feather="credit-card" /> */}
                        <FeatherIcon icon="credit-card" />
                        <span>Statement</span>
                      </Link>
                    </li>
                    
                  </ul>
                </li>
                <li className="submenu-open">
                  <h6 className="submenu-hdr">Sys Order Numbers</h6>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default withRouter(Sidebar);
