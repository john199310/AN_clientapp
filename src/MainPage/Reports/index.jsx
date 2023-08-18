import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Sales from './sales'
import Purchase from './purchase'
import Statement from './statement'





const AppIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/purchaseorderreport`} />
                                                                                                 
        <Route path={`${match.url}/sales-ledger`} component={Sales} />                                                                                             
        <Route path={`${match.url}/purchase-ledger`} component={Purchase} />                                                                                             
        <Route path={`${match.url}/report-statement`} component={Statement} />                                                                                             
        
    </Switch>
)

export default AppIndex