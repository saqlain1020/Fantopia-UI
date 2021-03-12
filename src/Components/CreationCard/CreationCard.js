import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import HeartIcon from "src/Assets/Icons/heart.png";
import HexGoldIcon from "src/Assets/Images/hexGold.png";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid rgba(0,0,0,0.1)",
    paddingTop: 10,
    paddingBottom: 5,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    height: "max-content",
  },
  img: {
    background: theme.palette.secondary.vibrant,
    height: 180,
  },
  dollarText: {
    fontWeight: 600,
    position: "absolute",
    bottom: "-20px",
    right: "20px",
    color: theme.customColors.black,
    background: theme.customColors.white,
    borderRadius: 360,
    padding: "5px 10px",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.07)",
  },
  dollar: {
    color: theme.palette.primary.main,
  },
  dotIcon: {
    color: theme.palette.primary.dark,
    width: 13,
    marginRight: 5,
  },
  titleText: {
    fontWeight: 600,
  },
  titleType: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    transform: "translateY(-3px)",
  },
  bidBtn: {
    background: theme.palette.secondary.vibrant,
    borderRadius: "360px",
    padding: 0,
    fontWeight: 700,
    width: 50,
    minWidth: 0,
  },
  valueText: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  ratingValue: {
    fontWeight: 700,
    color: theme.customColors.black,
  },
  hexContainer: {
    display: "flex",
    paddingLeft: 10,
    paddingTop: 10,
  },
  hexClip: {
    clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
    transform: "rotate(90deg) ",
    width: 30,
    height: 30,
  },
  hexClipGold: {
    clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
    transform: "rotate(90deg)",
    width: 30,
    height: 30,
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "-50%",
      left: "-50%",
      zIndex: -1,
      background: `url(${HexGoldIcon})`,
      transform: "rotate(30deg)",
      backgroundSize: "45%",
      backgroundPosition: "center",
    },
  },
}));

const CreationCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ position: "relative" }}>
        <div className={classes.img} />
        <Typography className={classes.dollarText}>
          <span className={classes.dollar}>$</span> 12.00
        </Typography>
      </div>
      <div style={{ padding: "10px 20px" }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.titleText}>Twitch</Typography>
            <Typography className={classes.titleType}>
              <FiberManualRecordOutlinedIcon className={classes.dotIcon} /> Art
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "flex-end",
                marginTop: 10,
              }}
            >
              <Typography className={classes.valueText}>0.02 BNB</Typography>
              <Button variant="contained" className={classes.bidBtn}>
                Bid
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={8}>
          <div className={classes.hexContainer}>
            <div
              className={classes.hexClip}
              style={{ backgroundColor: "#615dfa" }}
            ></div>
            <div
              className={classes.hexClip}
              style={{
                backgroundColor: "#1cb5e0",
                transform: "translateX(-10px) rotate(90deg)",
              }}
            ></div>
            <div
              className={classes.hexClip}
              style={{
                backgroundColor: "#4f8dff",
                transform: "translateX(-20px) rotate(90deg)",
              }}
            ></div>
            <div
              className={classes.hexClipGold}
              style={{
                transform: "translateX(-30px) rotate(90deg) scale(1.1)",
                zIndex: -1,
                backgroundImage: `url(${HexGoldIcon})`,
              }}
            ></div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography align="center" className={classes.ratingValue}>
            1 of 1<br />
            <img alt="like" src={HeartIcon} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreationCard;
