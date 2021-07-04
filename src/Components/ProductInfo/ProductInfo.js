import React from "react";
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import LikeIco from "src/Assets/Icons/Like.png";
import SadIco from "src/Assets/Icons/Sad.png";
import HappyIco from "src/Assets/Icons/Happy.png";
import FunnyIco from "src/Assets/Icons/Funny.png";
import WowIco from "src/Assets/Icons/Wow.png";
import LoveIco from "src/Assets/Icons/Love.png";
import AngryIco from "src/Assets/Icons/Angry.png";
import DislikeIco from "src/Assets/Icons/Dislike.png";
import ProductInfoTabs from "../ProductInfoTabs/ProductInfoTabs";
import Vid from "src/Assets/Videos/vid.mp4";
import WaveBg from "src/Assets/Images/audio-wave.png";
import clsx from "clsx";
import { useReactions, usePostReaction } from "src/Hooks/useSocialInfo";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bg: {
    width: "calc(100% - 16px)",
    objectFit: "cover",
    backgroundColor: theme.palette.secondary.vibrant,
    backgroundImage: `url(${WaveBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
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
  btn: {
    height: "auto",
    width: "100%",
    minWidth: "auto",
    borderRadius: 5,
  },
}));

const ProductInfo = ({ media, order }) => {
  const classes = useStyles();
  const { address, tokenId } = useParams();
  const { reactions, loadingReactions, fetchReactions } = useReactions(
    address,
    tokenId
  );
  const { postReaction, postingReaction } = usePostReaction(address, tokenId);

  const _postReaction = async (type) => {
    if (postingReaction) return;
    await postReaction(type);
    await fetchReactions();
  };

  return (
    <div>
      {/* Use img or video based on any conditon */}
      <img src={media} className={classes.bg}></img>
      {/* <video controls={true} controlsList="nodownload" autoPlay loop src={Vid}className={classes.bg}/> */}
      <div className={classes.reactsDiv}>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("like")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={LikeIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.like}
            </Typography>
            <Typography className={classes.valueHeading}>LIKES</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("love")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={LoveIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.love}
            </Typography>
            <Typography className={classes.valueHeading}>LOVES</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("dislike")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={DislikeIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.dislike}
            </Typography>
            <Typography className={classes.valueHeading}>DISLIKES</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("happy")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={HappyIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.happy}
            </Typography>
            <Typography className={classes.valueHeading}>HAPPY</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("funny")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={FunnyIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.funny}
            </Typography>
            <Typography className={classes.valueHeading}>FUNNY</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("wow")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={WowIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.wow}
            </Typography>
            <Typography className={classes.valueHeading}>WOW!</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn, classes.reactBorder)}
          onClick={() => _postReaction("angry")}
        >
          <div className={`${classes.react}`}>
            <center>
              <img alt="reaction" src={AngryIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.angry}
            </Typography>
            <Typography className={classes.valueHeading}>ANGRY</Typography>
          </div>
        </Button>
        <Button
          className={clsx(classes.btn)}
          onClick={() => _postReaction("sad")}
        >
          <div className={classes.react}>
            <center>
              <img alt="reaction" src={SadIco} width="35px" />
            </center>
            <Typography variant="h5" className={classes.value}>
              {reactions?.sad}
            </Typography>
            <Typography className={classes.valueHeading}>SAD</Typography>
          </div>
        </Button>
      </div>
      <ProductInfoTabs order={order} />
    </div>
  );
};

export default ProductInfo;
