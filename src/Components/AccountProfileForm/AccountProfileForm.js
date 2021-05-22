import {
  Button,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
    margin: 5,
    borderRadius: 10,
    background: theme.palette.primary.dark,
    padding: 20,
    color: theme.customColors.lightBlack,
  },
  mainHeading: {
    fontWeight: 700,
  },
  twitterBtn: {
    boxShadow: "none",
    color: theme.customColors.white,
    borderRadius: 15,
    padding: "15px 35px",
    background: theme.palette.primary.vibrant,
    fontWeight: 700,
  },
  linkAccName: {
    color: theme.customColors.lightBlack,
  },
}));

const AccountProfileForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.mainHeading}>
            Profile Settings
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Display Name"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="URL"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Bio"
            color="secondary"
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Public Email"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Public Website"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.mainHeading}>
            Twitter Feed
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography className={classes.mainHeading}>
                Enable Twitter Feed
              </Typography>
              <Typography>
                Turn on this switch to show your connected twitter account in
                your profile page
              </Typography>
            </div>
            <div>
              <IOSSwitch />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.twitterBtn}
            >
              <TwitterIcon fontSize="small" />
              &nbsp;&nbsp; Link your Twitter Account
            </Button>
            <Typography className={classes.linkAccName}>
              Linked Account: <b>@dghunterss</b>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountProfileForm;
