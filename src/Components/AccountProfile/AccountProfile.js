import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import WallpaperOutlinedIcon from "@material-ui/icons/WallpaperOutlined";
import AccountProfileForm from "../AccountProfileForm/AccountProfileForm";
import AccountChangePassword from "../AccountChangePassword/AccountChangePassword";
import UserName from "../UserName/UserName";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";

const useStyles = makeStyles((theme) => ({
  topHeading: {
    color: theme.customColors.veryLightBlack,
    fontWeight: 500,
  },
  heading: {
    color: theme.customColors.lightBlack,
    fontWeight: 700,
  },
  profile1: {
    margin: 5,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(180deg, ${theme.palette.secondary.main} 50%,${theme.palette.primary.dark} 50%)`,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
    height: 200,
  },
  profile2: {
    margin: 5,
    borderRadius: 10,
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.dark,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
    height: 140,
    color: theme.palette.secondary.main,
  },
  userIcon: {
    color: theme.palette.secondary.main,
    marginBottom: 17,
  },
  changeText: {
    fontWeight: 700,
    lineHeight: 1,
  },
  sizeText: {
    lineHeight: 1,
    color: theme.customColors.veryLightBlack,
  },
  imageIcon: {
    color: theme.palette.secondary.main,
    marginBottom: 17,
  },
  btn: {
    color: theme.customColors.white,
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "none",
    width: 200,
    marginLeft: "auto",
    display: "block",
  },
  headingDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const AccountProfile = ({ history }) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 50 }}>
      <div className={classes.headingDiv}>
        <div>
          <Typography className={classes.topHeading}>My Profile</Typography>
          <Typography variant="h4" className={classes.heading}>
            Profile Info
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/Account/items")}
          >
            <StorefrontOutlinedIcon />
          </Button>
        </div>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.profile1}>
            <div
              style={{
                position: "relative",
                width: 40,
                height: 40,
                transform: "scale(2.2)",
              }}
            >
              <UserName noName />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.profile2}>
            <PersonOutlineOutlinedIcon className={classes.userIcon} />
            <Typography className={classes.changeText}>
              Change Avatar
            </Typography>
            <Typography className={classes.sizeText}>
              110x110px size minimum
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.profile2}>
            <WallpaperOutlinedIcon className={classes.imageIcon} />
            <Typography className={classes.changeText}>Change Cover</Typography>
            <Typography className={classes.sizeText}>
              1184x300px size minimum
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <AccountProfileForm />
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.btn} variant="outlined" color="secondary">
            Save Changes!
          </Button>
        </Grid>
      </Grid>
      <Typography className={classes.topHeading}>Account</Typography>
      <Typography variant="h4" className={classes.heading}>
        Change Password
      </Typography>
      <AccountChangePassword />
    </div>
  );
};

export default AccountProfile;
