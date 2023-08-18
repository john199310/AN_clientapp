import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Sysordnum from './sysordnum'





const UserIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/sysordnum`} />
        <Route path={`${match.url}/sysordnum`} component={Sysordnum} />     
        
    </Switch>
)

export default UserIndex