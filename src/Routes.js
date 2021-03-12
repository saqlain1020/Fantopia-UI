import React from 'react'
import { Route, Switch } from 'react-router'
import Account from './Screens/Account/Account'
import Home from './Screens/Home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>    
            <Route path="/Account" component={Account}/>
        </Switch>
    )
}

export default Routes
