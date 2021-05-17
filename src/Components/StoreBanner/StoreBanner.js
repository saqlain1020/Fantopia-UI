import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  bg: {
    background: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 250,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr min-content 1fr",
    paddingTop: 10,
    paddingBottom: 10,
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      paddingTop: 50,
    },
  },
  leftGrid: {
    display: "flex",
    justifyContent: "space-evenly",
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
    borderRight: "1px solid rgba(0,0,0,0.1)",
    width: "100%",
    height: "min-content",
    marginTop: "auto",
    marginBottom: "auto",
  },
  idValue: {
    whiteSpace: "pre",
    display: "flex",
    alignItems: "center",
    color: theme.customColors.veryLightBlack,
    fontWeight: 600,
    paddingBottom: 30,
    justifyContent: "center",
  },
  followBtn: {
    position: "absolute",
    width: 200,
    height: 65,
    fontWeight: 600,
    fontSize: 22,
    left: "calc(50% - 100px)",
    color: theme.customColors.white,
    borderRadius: 15,
    bottom: -40,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      bottom: 0,
      marginBottom: 10,
    },
  },
  rightGrid: {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StoreBanner = () => {
  const classes = useStyles();

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
  };

  return (
    <div>
      <div className={classes.bg}>
        <div
          style={{
            position: "relative",
            width: 45,
            height: 50,
            transform: "scale(3)",
          }}
        >
          <UserName noName />
        </div>
      </div>
      <div className={classes.grid}>
        <div className={classes.leftGrid}>
          <div className={classes.itemValueDiv}>
            <Typography variant="h4" className={classes.value}>
              130
            </Typography>
            <Typography className={classes.valueDetail}>
              Items Created
            </Typography>
          </div>
          <div className={classes.itemValueDiv}>
            <Typography variant="h4" className={classes.value}>
              82
            </Typography>
            <Typography className={classes.valueDetail}>
              Items in Collection
            </Typography>
          </div>
          <div className={classes.itemValueDiv}>
            <Typography variant="h4" className={classes.value}>
              50
            </Typography>
            <Typography className={classes.valueDetail}>
              Items For Sale
            </Typography>
          </div>
          <div className={classes.itemValueDiv}>
            <Typography variant="h4" className={classes.value}>
              5.7K
            </Typography>
            <Typography className={classes.valueDetail}>Views</Typography>
          </div>
        </div>
        <div
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 50,
            position: "relative",
          }}
        >
          <Typography variant="h4" className={classes.value}>
            Marina Valentine
          </Typography>
          <Typography className={classes.idValue}>
            <span id="unique_user_id">
              0xb5e5993512385aca01ec292DeF80f3C906d4314e
            </span>{" "}
            &nbsp;
            <img alt="copy" src={CopyIcon} style={{filter:"invert(1)"}} onClick={handleCopy} />
          </Typography>
          <Button
            className={classes.followBtn}
            variant="contained"
            color="secondary"
          >
            Follow+
          </Button>
        </div>
        <div
          style={{
            height: "min-content",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Typography variant="h4" className={classes.value}>
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
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
