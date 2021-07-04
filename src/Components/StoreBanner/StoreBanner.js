import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import HexPng from "src/Assets/Images/hex2x.png";
import SmallHexPng from "src/Assets/Images/smallhex2x.png";
import CopyIcon from "src/Assets/Icons/copy.png";
import Discord from "src/Assets/Icons/discordLink.png";
import Facebook from "src/Assets/Icons/Facebook.png";
import Patreon from "src/Assets/Icons/Patreon.png";
import Twitch from "src/Assets/Icons/Twitch.png";
import Twitter from "src/Assets/Icons/Twitter.png";
import Youtube from "src/Assets/Icons/Youtube.png";
import Instagram from "src/Assets/Icons/Instagram.png";
import UserName from "../UserName/UserName";
import { useLang, useUser } from "src/State/hooks";
import { useHistory } from "react-router-dom";
import { LOCALE } from "src/Config/localization";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    borderRadius: 20,
    overflow: "hidden",
    paddingBottom: 20,
  },
  bg: {
    background: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 250,
  },
  value: {
    textAlign: "center",
    fontWeight: 700,
    color: theme.customColors.lightBlack,
  },
  valueDetail: {
    fontWeight: 700,
    textAlign: "center",
    color: theme.customColors.veryLightBlack,
  },
  itemValueDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  idValue: {
    whiteSpace: "pre",
    display: "flex",
    alignItems: "center",
    color: theme.customColors.veryLightBlack,
    fontWeight: 600,
    paddingBottom: 10,
    fontSize: 12,
    justifyContent: "center",
  },
  followBtn: {
    // position: "absolute",
    width: 200,
    height: 65,
    fontWeight: 600,
    fontSize: 22,
    display: "block",
    margin: "auto",
    // left: "calc(50% - 100px)",
    color: theme.customColors.white,
    borderRadius: 15,
    // bottom: -40,
    [theme.breakpoints.down("sm")]: {
      // position: "relative",
      // bottom: 0,
      marginBottom: 10,
    },
  },
  rightGrid: {
    display: "flex",
    marginTop: 10,
    justifyContent: "space-evenly",
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    "& img": {
      width: 30,
      height: 30,
    },
  },
}));

const StoreBanner = () => {
  const lang = useLang();
  const classes = useStyles();
  const { user } = useUser();
  const history = useHistory();

  const copy = (id) => {
    var configId = document.querySelector(id);
    var range = document.createRange();
    range.selectNode(configId);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copy command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    selection.removeAllRanges();
  };

  const handleCopy = () => {
    copy("#unique_user_id");
    alert("copied");
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.bg}
        style={{
          background: `url(${user?.coverPic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 45,
            height: 45,
            transform: "scale(3)",
          }}
        >
          <UserName name={user?.name} image={user?.profilePic} noName />
        </div>
      </div>
      <Grid
        container
        spacing={2}
        style={{ paddingLeft: 30, paddingRight: 30, marginTop: 50 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.value}>
            {user?.name}
          </Typography>
          <Typography className={classes.idValue}>
            <span id="unique_user_id">{user?.address}</span> &nbsp;
            <img
              alt="copy"
              src={CopyIcon}
              style={{ filter: "invert(1)" }}
              onClick={handleCopy}
            />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.followBtn}
            variant="contained"
            color="secondary"
          >
             {LOCALE.FOLLOW[lang]}
          </Button>
          <Button
            // className={classes.followBtn}
            // variant="outlined"
            color="secondary"
            style={{
              margin: "auto",
              display: "block",
              fontSize: 20,
              padding: 10,
              marginTop: 10,
            }}
            onClick={() => history.push("pending-approvals")}
          >
            {LOCALE.PENDING_NFT[lang]}
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.itemValueDiv}>
          <Typography className={classes.valueDetail}>
            {" "}
            {LOCALE.ITEMS_CREATED[lang]}
          </Typography>
          <Typography variant="h4" className={classes.value}>
            130
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.itemValueDiv}>
          <Typography className={classes.valueDetail}>
            {LOCALE.ITEM_IN_COLLECTION[lang]}
          </Typography>
          <Typography variant="h4" className={classes.value}>
            82
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.itemValueDiv}>
          <Typography className={classes.valueDetail}>
            {LOCALE.ITEM_FOR_SALE[lang]}
          </Typography>
          <Typography variant="h4" className={classes.value}>
            50
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.itemValueDiv}>
          <Typography className={classes.valueDetail}>Views</Typography>
          <Typography variant="h4" className={classes.value}>
            5.7K
          </Typography>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="h6" className={classes.value}>
            Share link to this page
          </Typography>
          <div className={classes.rightGrid}>
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitch} alt="Twitch" />
            <img src={Youtube} alt="Youtube" />
            <img src={Patreon} alt="Patreon" />
            <img src={Discord} alt="Discord" />
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default StoreBanner;
