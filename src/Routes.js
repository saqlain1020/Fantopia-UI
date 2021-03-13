import React from 'react'
import { Route, Switch } from 'react-router'
import Account from './Screens/Account/Account'
import Home from './Screens/Home/Home'
import Product from './Screens/Product/Product'
import ProfileStore from './Screens/ProfileStore/ProfileStore'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>    
            <Route path="/Account" component={Account}/>
            <Route path="/ProfileStore" component={ProfileStore}/>
            <Route path="/Product" component={Product}/>
        </Switch>
    )
}

export default Routes
