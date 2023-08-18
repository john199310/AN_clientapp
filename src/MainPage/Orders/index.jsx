import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import Orders from "./orders";
import Orders from "./orders_r";
import BackOrders from "./backorders";
import PurchaseOrder from "./purchaseorders";
import ImportOrder from "./importorder";
import NotInvList from "./notinvlist";
import SysOrdNum from "./sysordnum";

const ChartIndex = ({ match }) => (
  <Switch refresh={true}>    
    <Redirect exact from={`${match.url}/`} to={`${match.url}/common-orders`} />    
  <Route path={`${match.url}/common-orders`} component={Orders} />
    <Route path={`${match.url}/back-orders`} component={BackOrders} />
    <Route path={`${match.url}/purchase-orders`} component={PurchaseOrder} />
    <Route path={`${match.url}/import-order`} component={ImportOrder} />    
    <Route path={`${match.url}/not-inviced-list`} component={NotInvList} />    
    <Route path={`${match.url}/system-order-numbers`} component={SysOrdNum} />    
  </Switch>
);

export default ChartIndex;
