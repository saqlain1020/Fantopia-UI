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
import InstagramIcon from '@material-ui/icons/Instagram';

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
    width:290
  },
  linkAccName: {
    color: theme.customColors.lightBlack,
  },
  btn: {
    color: theme.customColors.whiteBtn,
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "none",
    width: 200,
    // marginLeft: "auto",
    display: "block",
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
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexFlow:"column"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.twitterBtn}
              style={{marginBottom:10}}
            >
              <TwitterIcon fontSize="small" />
              &nbsp;&nbsp; Link your Twitter Account
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              className={classes.twitterBtn}
              style={{background:"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}}
            >
              <InstagramIcon fontSize="small" />
              &nbsp;&nbsp; Link your Instagram Account
            </Button>
            
          </div>
        </Grid>
        <Grid item xs={6}>
        <Typography className={classes.linkAccName}>
              Linked Account: <b>@dghunterss</b>
            </Typography>
        </Grid>
        <Grid item xs={12}>
        <Button className={classes.btn} variant="outlined" color="secondary">
            Save Changes!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountProfileForm;
