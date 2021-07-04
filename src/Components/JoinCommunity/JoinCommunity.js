import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import DiscordIco from "src/Assets/Icons/discord.png";
import TelegramIco from "src/Assets/Icons/telegram.png";
import { LOCALE } from "src/Config/localization";
import { useLang } from "src/State/hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  heading: {
    fontWeight: 700,
    textAlign: "center",
    color: theme.palette.secondary.main,
  },
  grid: {
    width: 300,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    boxShadow: "0px 1px 10px rgba(255,255,255,.2)",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    "& img": {
      width: "30px !important",
    },
  },
  text: {
    fontWeight: 700,
    marginLeft: 5,
    color: theme.customColors.black,
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();
  const lang = useLang();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>
        {LOCALE.JOIN_COMMUNITY[lang]}
      </Typography>
      <Paper className={classes.grid}>
        <div
          className={classes.iconContainer}
          style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }}
        >
          <img alt="discord" src={DiscordIco} />
          <Typography className={classes.text}>Discord</Typography>
        </div>
        <div className={classes.iconContainer}>
          <img alt="telegram" src={TelegramIco} />
          <Typography className={classes.text}>Telegram</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default JoinCommunity;
