import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import NotInvlist from './notinvlist'





const UserIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/notinvlist`} />
        <Route path={`${match.url}/notinvlist`} component={NotInvlist} />     
        
    </Switch>
)

export default UserIndex