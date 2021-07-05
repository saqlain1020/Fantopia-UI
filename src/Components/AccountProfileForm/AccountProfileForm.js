import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useCreateUser, useUpdateeUser } from "src/Hooks/useUser";
import { useWeb3 } from "@react-dapp/wallet";
import CustomButton from "../CustomButton/CustomButton";
import { useWaleltSign } from "src/Hooks/useWalletSign";
import { getEditProfileMessage } from "src/Utils";
import { STATE } from "src/Config/enums";
import { useLang, useLoadUser } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";
import { useHistory } from "react-router-dom";
import { useOTP } from "src/Hooks/useVerification";

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
    width: 290,
    "&:hover": {
      background: theme.palette.primary.vibrant,
      color: theme.customColors.white,
    },
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

const AccountProfileForm = ({ user, coverPic, profilePic }) => {
  const lang = useLang();
  const classes = useStyles();
  const history = useHistory();
  const { create, creating } = useCreateUser();
  const { update, updating } = useUpdateeUser();
  const { sign, signState } = useWaleltSign();
  const { getCode, loading } = useOTP();
  const loadUser = useLoadUser();

  const { account } = useWeb3();
  const [name, setName] = useState("");
  const [shortUrl, setShorlUrl] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setShorlUrl(user.shortUrl);
      setBio(user.bio);
      setEmail(user.email);
      setWebsite(user.website);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (creating) return;

    const _user = {
      name,
      shortUrl,
      bio,
      email,
      website,
      address: account,
      profilePic,
      coverPic,
    };

    const signature = await sign(getEditProfileMessage(account));
    if (signature) {
      user ? await update(_user) : await create({ ..._user, signature });
      loadUser();
    }
  };

  const handleVerifyAccount = async () => {
    if (user?.email) {
      const code = await getCode();
      history.push(`/otp`, code);
    } else {
      alert("Please first update your email to get verified!");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.mainHeading}>
            {LOCALE.PROFILE_SETTING[lang]}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={LOCALE.DISPLAY_NAME[lang]}
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={LOCALE.SHORT_URL[lang]}
            color="secondary"
            value={shortUrl}
            onChange={(e) => setShorlUrl(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={LOCALE.BIO[lang]}
            color="secondary"
            multiline
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={LOCALE.EMAIL[lang]}
                color="secondary"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={LOCALE.PERSONAL_WEBSITE[lang]}
                color="secondary"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="h6" className={classes.mainHeading}>
            Twitter Feed
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          </div> */}
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexFlow: "column",
            }}
          >
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.twitterBtn}
              style={{ marginBottom: 10 }}
            >
              <TwitterIcon fontSize="small" />
              &nbsp;&nbsp; Link your Twitter Account
            </Button> */}

            <Button
              variant="contained"
              color="primary"
              className={classes.twitterBtn}
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              }}
              onClick={() => handleVerifyAccount()}
            >
              {loading && <CircularProgress color="inherit" />}
              {!loading && <InstagramIcon fontSize="small" />}
              {!loading && ` ${LOCALE.VERIFY_ACCOUNT[lang]}`}
            </Button>
          </div>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography className={classes.linkAccName}>
            Linked Account: <b>@dghunterss</b>
          </Typography>
        </Grid> */}
        <Grid item md={3} xs={12}>
          <CustomButton
            type="submit"
            className={classes.btn}
            variant="outlined"
            color="secondary"
            loading={creating || updating}
          >
            {LOCALE.SAVE_CHANGES[lang]}
          </CustomButton>
        </Grid>
        <Grid item md={3} xs={12}>
          <div style={{ margin: 20, color: "red" }}>
            {signState === STATE.FAILED ? "Signature Failed!" : null}
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default AccountProfileForm;
