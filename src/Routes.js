import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Screens/Home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>    
        </Switch>
    )
}

export default Routes
