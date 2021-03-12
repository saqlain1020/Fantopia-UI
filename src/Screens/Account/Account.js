import {  Container, makeStyles } from '@material-ui/core'
import React from 'react'
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
                <div></div>
            </Container>
        </div>
    )
}

export default Account
