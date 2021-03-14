import { Badge, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    width: "max-content",
    fontSize: 24,
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
        background: "rgba(255,255,255,0.4)",
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
      }}
      onClick={() => props.history.push("/Account")}
    >
      <Typography className={classes.text}>20 KELEK</Typography>
      <Badge
        variant="dot"
        color="primary"
        overlap="circle"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div style={{ position: "relative", width: 45, height: 50 }}>
          <img
            alt=""
            src={HexPng}
            width="45px"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <div
            style={{
              background: "#615DFA",
              position: "absolute",
              width: "37px",
              height: "38px",
              margin: 5,
              top: 0,
              left: 0,
              clipPath:
                "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              transform: "rotate(90deg)",
            }}
          ></div>
          <img
            alt=""
            src={SmallHexPng}
            width="28px"
            style={{
              position: "absolute",
              left: "53%",
              transform: "translateY(25px)",
            }}
          />
          <Typography
            style={{
              position: "absolute",
              fontSize: 12,
              color: "white",
              left: "70%",
              top: "62%",
              fontWeight: 600,
            }}
          >
            23
          </Typography>
        </div>
      </Badge>
    </div>
  );
};

export default withRouter(Profile);
