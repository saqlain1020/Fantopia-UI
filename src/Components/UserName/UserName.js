import React from "react";
import { Badge, makeStyles, Typography } from "@material-ui/core";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import PropTypes from "prop-types";

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
}));

const UserName = ({ badgeColor, name, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "top",
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
            width: 45,
            height: 50,
            marginRight: 15,
          }}
        >
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
              width: "36px",
              height: "38px",
              margin: 4,
              top: 2,
              left: 1,
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
      {!props.noName && (
        <div style={{ marginLeft: 5 }}>
          <Typography variant="h6" className={classes.name}>
            <b>{name ? name : "User Name"}</b>
          </Typography>
          <Typography className={classes.value}>
            <b>143 BNB</b>
          </Typography>
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
