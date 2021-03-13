import React from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
    margin: 5,
    borderRadius: 10,
    background: theme.customColors.white,
    padding: 20,
    color: theme.customColors.lightBlack,
  },
  forgotBtn:{
    fontSize:18,
    fontWeight:700,
    color: theme.customColors.white,
    background: theme.palette.secondary.vibrant,
    boxShadow:"none",
    borderRadius:15,
    paddingTop:10,
    paddingBottom:10,
  },
  changeBtn:{
    fontSize:18,
    fontWeight:700,
    color: theme.customColors.white,
    boxShadow:"none",
    borderRadius:15,
    paddingTop:10,
    paddingBottom:10,
  }
}));

const AccountChangePassword = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Confirm your Current Password"
            color="secondary"
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Your New Password"
            color="secondary"
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Confirm New Password"
            color="secondary"
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button variant="contained" color="secondary" fullWidth className={classes.forgotBtn}>
            Forgot your Password?
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button variant="contained" color="primary" fullWidth className={classes.changeBtn}>
            Change Password Now!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountChangePassword;
