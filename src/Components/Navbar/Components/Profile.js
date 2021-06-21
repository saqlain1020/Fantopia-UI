import { Avatar, Badge, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import HexPng from "src/Assets/Images/hex.png";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    width: "max-content",
    fontSize: 24,
  },
  avatarText: {
    position: "absolute",
    fontSize: 12,
    color: "black",
    left: "70%",
    top: "62%",
    fontWeight: 600,
    background: theme.palette.secondary.main,
    borderRadius: 360,
    width: 15,
    height: 15,
    textAlign: "center",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        // background: "rgba(255,255,255,0.4)",
        // paddingLeft: 8,
        // paddingRight: 8,
        // borderRadius: 5,
      }}
      onClick={() => props.history.push("/Account/profile")}
    >
      {/* <Typography className={classes.text}>0x4865...</Typography> */}
      {/* <Badge
        variant="dot"
        color="primary"
        overlap="circle"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      > */}
      <div
        style={{ position: "relative", width: 40, height: 40, marginLeft: 10 }}
      >
        <Avatar style={{ width: "40px", height: "40px" }} />
        <Typography className={classes.avatarText}>✓</Typography>
      </div>
      {/* </Badge> */}
    </div>
  );
};

export default withRouter(Profile);
