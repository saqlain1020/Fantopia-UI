import React from "react";
import { Avatar, Badge, makeStyles, Typography } from "@material-ui/core";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import PropTypes from "prop-types";
import VerifyIco from "src/Assets/Icons/verifyIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
  },
  name: {
    color: theme.customColors.lightBlack,
    lineHeight: 1,
  },
  value: {
    color: theme.palette.secondary.vibrant,
    lineHeight: 1.5,
    fontSize: 14,
  },
  avatarText: {
    position: "absolute",
    fontSize: 10,
    color: theme.palette.primary.main,
    // background: theme.palette.secondary.main,
    width: 15,
    height: 15,
    textAlign: "center",
    borderRadius: 360,
    left: "70%",
    top: "62%",
    fontWeight: 600,
  },
}));

const UserName = ({ badgeColor, name, image,onClick, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={onClick}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "10px",
          horizontal: "left",
        }}
        variant="dot"
        color={
          badgeColor === "green"
            ? "primary"
            : badgeColor === "red"
            ? "error"
            : badgeColor === "default"
            ? "secondary"
            : ""
        }
      >
        <div
          style={{
            position: "relative",
            width: 40,
            height: 40,
            marginRight: 15,
          }}
        >
          <Avatar src={image} style={{ width: "100%", height: "100%" }} />
          <Typography className={classes.avatarText}>
            {/* {props?.level || "✓"} */}
            {props?.level || (
              <img
                src={VerifyIco}
                width="110%"
                style={{ transform: "translateX(-10%)" }}
              />
            )}
          </Typography>
        </div>
      </Badge>
      {!props.noName && (
        <div style={{ marginLeft: 5 }}>
          <Typography variant="h6" className={classes.name}>
            <b>{name ? name : "User Name"}</b>
          </Typography>
          {/* <Typography className={classes.value}>
            <b>143 BNB</b>
          </Typography> */}
        </div>
      )}
    </div>
  );
};

export default UserName;

UserName.propTypes = {
  badgeColor: PropTypes.oneOf(["green", "red", "default"]),
  name: PropTypes.string,
  noName: PropTypes.bool,
};
