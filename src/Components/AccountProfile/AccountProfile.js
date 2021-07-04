import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import WallpaperOutlinedIcon from "@material-ui/icons/WallpaperOutlined";
import AccountProfileForm from "../AccountProfileForm/AccountProfileForm";
import AccountChangePassword from "../AccountChangePassword/AccountChangePassword";
import UserName from "../UserName/UserName";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import { useLang, useUser } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

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
    cursor: "pointer",
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
    color: theme.customColors.whiteBtn,
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
  const lang = useLang();
  const classes = useStyles();
  const avatarUpload = React.useRef();
  const coverUpload = React.useRef();
  const [profilePic, setProfilePic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);

  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [coverPicUrl, setCoverPicUrl] = useState("");

  const avatarChange = (e) => {
    setProfilePic(e.target.files[0]);
    setProfilePicUrl(URL.createObjectURL(e.target.files[0]));
  };
  const coverChange = (e) => {
    setCoverPic(e.target.files[0]);
    setCoverPicUrl(URL.createObjectURL(e.target.files[0]));
  };

  const { user } = useUser();

  useEffect(() => {
    setProfilePic(user?.profilePic);
    setCoverPic(user?.coverPic);
    setProfilePicUrl(user?.profilePic);
    setCoverPicUrl(user?.coverPic);
  }, [user]);
  console.log(coverPicUrl);
  return (
    <div style={{ marginTop: 50 }}>
      <div className={classes.headingDiv}>
        <div>
          <Typography className={classes.topHeading}> {LOCALE.MY_PROFILE[lang]}</Typography>
          <Typography variant="h4" className={classes.heading}>
            {LOCALE.PROFILE_INFO[lang]}
          </Typography>
        </div>
        {/* <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/Account/items")}
          >
            <StorefrontOutlinedIcon />
          </Button>
        </div> */}
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <div
            className={classes.profile1}
            style={{
              backgroundImage: coverPicUrl && `url(${coverPicUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 40,
                height: 40,
                transform: "scale(2.2)",
              }}
            >
              <UserName image={profilePicUrl} noName />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div
            className={classes.profile2}
            onClick={() => avatarUpload.current.click()}
          >
            <PersonOutlineOutlinedIcon className={classes.userIcon} />
            <Typography className={classes.changeText}>
            {LOCALE.CHANGE_AVATAR[lang]}
            </Typography>
            <Typography className={classes.sizeText}>
              110x110px size minimum
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div
            className={classes.profile2}
            onClick={() => coverUpload.current.click()}
          >
            <WallpaperOutlinedIcon className={classes.imageIcon} />
            <Typography className={classes.changeText}> {LOCALE.CHANGE_COVER_TEXT[lang]}</Typography>
            <Typography className={classes.sizeText}>
              1184x300px size minimum
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <AccountProfileForm
            user={user}
            coverPic={coverPic}
            profilePic={profilePic}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Button className={classes.btn} variant="outlined" color="secondary">
            Save Changes!
          </Button>
        </Grid> */}
      </Grid>
      {/* <Typography className={classes.topHeading}>Account</Typography>
      <Typography variant="h4" className={classes.heading}>
        Change Password
      </Typography>
      <AccountChangePassword /> */}
      <input
        ref={avatarUpload}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={avatarChange}
      />
      <input
        ref={coverUpload}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={coverChange}
      />
    </div>
  );
};

export default AccountProfile;
