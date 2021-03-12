import {  Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router'
import AccountBanner from 'src/Components/AccountBanner/AccountBanner'
import AccountLeftBar from 'src/Components/AccountLeftBar/AccountLeftBar'

const useStyles = makeStyles(theme=>({
    root:{
        background: theme.customColors.veryLightBg
    },
    grid:{
        display:"grid",
        gridTemplateColumns: "350px 1fr"
    }   
}))

const Account = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <AccountBanner/>
            <Container maxWidth="lg" className={classes.grid}>
                <div style={{marginTop:50,}}>
                    <AccountLeftBar/>
                </div>
                <div>
                    <Route path="/Account/items">Items</Route>
                    <Route path="/Account/profile">Profile</Route>
                </div>
                {/* <Route path="/Account/asd">
                    <h1>hellow</h1>
                </Route> */}
            </Container>
        </div>
    )
}

export default Account
