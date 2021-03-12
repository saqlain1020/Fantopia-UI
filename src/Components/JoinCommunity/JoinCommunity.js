import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import DiscordIco from "src/Assets/Icons/discord.png";
import TelegramIco from "src/Assets/Icons/telegram.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  heading: {
    fontWeight: 700,
    textAlign: "center",
    color: theme.customColors.white,
  },
  grid: {
    width: 300,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    background: theme.customColors.white,
    color: theme.customColors.black
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
  },
  text: {
    fontWeight: 700,
    marginLeft: 5,
    color: theme.customColors.black,
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Join Our Community</Typography>
      <Paper className={classes.grid}>
        <div
          className={classes.iconContainer}
          style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }}
        >
          <img alt="discord" src={DiscordIco} width="30px" />
          <Typography className={classes.text}>Discord</Typography>
        </div>
        <div className={classes.iconContainer}>
          <img alt="telegram" src={TelegramIco} width="30px" />
          <Typography className={classes.text}>Telegram</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default JoinCommunity;
