import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import UserName from "../UserName/UserName";
import PropTypes from "prop-types";
import LikeIco from "src/Assets/Icons/Like.png";
import LoveIco from "src/Assets/Icons/Love.png";
import SadIco from "src/Assets/Icons/Sad.png";
import HappyIco from "src/Assets/Icons/Happy.png";
import FunnyIco from "src/Assets/Icons/Funny.png";
import WowIco from "src/Assets/Icons/Wow.png";
import AngryIco from "src/Assets/Icons/Angry.png";
import DislikeIco from "src/Assets/Icons/Dislike.png";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 70,
    display: "grid",
    gridTemplateColumns: "min-content 1fr min-content",
  },
  mainTitle: {
    // color: theme.customColors.lightBlack,
    color: theme.customColors.white,
    "& span": {
      color: theme.palette.secondary.main,
      fontWeight: "600",
    },
  },
}));

const Noti = ({ variant, userName, reaction }) => {
  const classes = useStyles();
  const [ico, setIco] = React.useState(null);

  React.useEffect(() => {
    switch (reaction) {
      case "like":
        setIco(LikeIco);
        break;
      case "love":
        setIco(LoveIco);
        break;
      case "sad":
        setIco(SadIco);
        break;
      case "happy":
        setIco(HappyIco);
        break;
      case "funny":
        setIco(FunnyIco);
        break;
      case "wow":
        setIco(WowIco);
        break;
      case "angry":
        setIco(AngryIco);
        break;
      case "dislike":
        setIco(DislikeIco);
        break;
      default:
        setIco(LikeIco);
    }
  }, [reaction]);

  return (
    <div className={classes.root}>
      <UserName noName />
      <div>
        {variant === "status" && (
          <Typography className={classes.mainTitle}>
            <b>{userName}</b> posted a comment on your{" "}
            <span>status update</span>
          </Typography>
        )}
        {variant === "reaction" && (
          <Typography className={classes.mainTitle}>
            <b>{userName}</b> left a{" "}
            <img
              src={ico}
              alt=""
              width="20px"
              style={{ transform: "translateY(5px)" }}
            />{" "}
            reaction on your <span>status update</span>
          </Typography>
        )}
        {variant === "photo" && (
          <Typography className={classes.mainTitle}>
            <b>{userName}</b> posted a comment on your <span>photo</span>
          </Typography>
        )}
        <Typography>2 minutes ago</Typography>
      </div>
      <div className="flex">
        {variant === "reaction" ? (
          <ThumbUpAltOutlinedIcon
            style={{ padding: "0px 20px", color: "rgba(0,0,0,0.2)" }}
          />
        ) : (
          <ChatOutlinedIcon
            style={{ padding: "0px 20px", color: "rgba(0,0,0,0.2)" }}
          />
        )}
      </div>
    </div>
  );
};

export default Noti;

Noti.propTypes = {
  variant: PropTypes.oneOf(["reaction", "photo", "status"]),
  userName: PropTypes.string,
  reaction: PropTypes.oneOf([
    "like",
    "love",
    "sad",
    "happy",
    "funny",
    "love",
    "wow",
    "angry",
    "dislike",
  ]),
};
