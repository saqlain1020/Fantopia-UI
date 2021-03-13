import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import WallpaperOutlinedIcon from "@material-ui/icons/WallpaperOutlined";
import AccountProfileForm from "../AccountProfileForm/AccountProfileForm";
import AccountChangePassword from "../AccountChangePassword/AccountChangePassword";

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
    background: `linear-gradient(180deg, #45437f 50%,${theme.customColors.white} 50%)`,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
    height: 140,
  },
  profile2: {
    margin: 5,
    borderRadius: 10,
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.customColors.white,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
    height: 140,
    color: theme.customColors.lightBlack,
  },
  userIcon: {
    color: theme.palette.primary.main,
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
    color: theme.customColors.veryLightBlack,
    marginBottom: 17,
  },
}));

const AccountProfile = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 50 }}>
      <Typography className={classes.topHeading}>My Profile</Typography>
      <Typography variant="h4" className={classes.heading}>
        Profile Info
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.profile1}>
            <div
              style={{
                position: "relative",
                width: 45,
                height: 50,
                transform: "scale(1.8)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "37px",
                  height: "38px",
                  margin: 5,
                  top: 0,
                  left: 0,
                  clipPath:
                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                  transform: "rotate(90deg) scale(1.5)",
                  background: "white",
                  zIndex: 0,
                }}
              ></div>
              <img
                alt=""
                src={HexPng}
                width="45px"
                style={{ position: "absolute", top: 0, left: 0 }}
              />

              <div
                style={{
                  background: "#615DFA",
                  position: "absolute",
                  width: "37px",
                  height: "38px",
                  margin: 5,
                  top: 0,
                  left: 0,
                  clipPath:
                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                  transform: "rotate(90deg)",
                }}
              ></div>
              <img
                alt=""
                src={SmallHexPng}
                width="28px"
                style={{
                  position: "absolute",
                  left: "53%",
                  transform: "translateY(25px)",
                }}
              />
              <Typography
                style={{
                  position: "absolute",
                  fontSize: 12,
                  color: "white",
                  left: "70%",
                  top: "62%",
                  fontWeight: 600,
                }}
              >
                23
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
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
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.profile2}>
            <WallpaperOutlinedIcon className={classes.imageIcon} />
            <Typography className={classes.changeText}>Change Cover</Typography>
            <Typography className={classes.sizeText}>
              1184x300px size minimum
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
            <AccountProfileForm/>
        </Grid>
      </Grid>
      <Typography className={classes.topHeading}>Account</Typography>
      <Typography variant="h4" className={classes.heading}>
        Change Password
      </Typography>
      <AccountChangePassword/>
    </div>
  );
};

export default AccountProfile;
