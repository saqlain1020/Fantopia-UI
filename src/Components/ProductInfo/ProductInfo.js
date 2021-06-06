import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import LikeIco from "src/Assets/Icons/Like.png";
import SadIco from "src/Assets/Icons/Sad.png";
import HappyIco from "src/Assets/Icons/Happy.png";
import FunnyIco from "src/Assets/Icons/Funny.png";
import WowIco from "src/Assets/Icons/Wow.png";
import LoveIco from "src/Assets/Icons/Love.png";
import AngryIco from "src/Assets/Icons/Angry.png";
import DislikeIco from "src/Assets/Icons/Dislike.png";
import ProductInfoTabs from "../ProductInfoTabs/ProductInfoTabs";

const useStyles = makeStyles((theme) => ({
  bg: {
    width:"calc(100% - 16px)",
    objectFit: 'cover',
    background: theme.palette.secondary.vibrant,
    height: "90vh",
    maxHeight: 750,
    borderRadius: 15,
  },
  reactsDiv: {
    // background: theme.customColors.white,
    padding: 20,
    boxShadow: theme.customShadows.light,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(80px,1fr))",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
      alignContent: "center",
    },
  },
  react: {
    width: "100%",
    position: "relative",
  },
  reactBorder: {
    "&:after": {
      content: "''",
      position: "absolute",
      top: "25%",
      left: 0,
      width: "100%",
      height: "50%",
      borderRight: `1px solid rgba(0,0,0,.1)`,
    },
  },
  value: {
    color: theme.customColors.lightBlack,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 5,
  },
  valueHeading: {
    color: theme.customColors.veryLightBlack,
    textAlign: "center",
    fontSize: 12,
    fontWeight: 600,
  },
}));

const ProductInfo = ({media}) => {
  const classes = useStyles();

  return (
    <div>
      <img src={media} className={classes.bg}></img>
      <div className={classes.reactsDiv}>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={LikeIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            12,642
          </Typography>
          <Typography className={classes.valueHeading}>LIKES</Typography>
        </div>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={LoveIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            8,913
          </Typography>
          <Typography className={classes.valueHeading}>LOVES</Typography>
        </div>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={DislikeIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            034
          </Typography>
          <Typography className={classes.valueHeading}>DISLIKES</Typography>
        </div>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={HappyIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            356
          </Typography>
          <Typography className={classes.valueHeading}>HAPPY</Typography>
        </div>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={FunnyIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            944
          </Typography>
          <Typography className={classes.valueHeading}>FUNNY</Typography>
        </div>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={WowIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            706
          </Typography>
          <Typography className={classes.valueHeading}>WOW!</Typography>
        </div>
        <div className={`${classes.react} ${classes.reactBorder}`}>
          <center>
            <img alt="reaction" src={AngryIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            801
          </Typography>
          <Typography className={classes.valueHeading}>ANGRY</Typography>
        </div>
        <div className={classes.react}>
          <center>
            <img alt="reaction" src={SadIco} width="35px" />
          </center>
          <Typography variant="h5" className={classes.value}>
            12,642
          </Typography>
          <Typography className={classes.valueHeading}>SAD</Typography>
        </div>
      </div>
      <ProductInfoTabs />
    </div>
  );
};

export default ProductInfo;
