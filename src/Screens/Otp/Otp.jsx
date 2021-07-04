import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    color: theme.customColors.lightBlack,
    [theme.breakpoints.up("md")]: {
      height: "45vh",
    },
  },
  otpNumber: {
    display: "block",
    width: "fit-content",
    margin: "auto",
    marginTop: 30,
    background: theme.customColors.veryLightBlack,
    padding: "5px 20px",
    letterSpacing: 10,
  },
  otpDiv: {
    marginTop: 30,
    width: 280,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  otpNum: {
    background: "white",
    opacity: 0.7,
    color: "black",
    fontSize: 32,
    padding: "4px 12px",
    borderRadius: 5,
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
  },
}));

const Otp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center">
          OTP
        </Typography>
        {/* <Typography align="center"  variant="h4"  className={classes.otpNumber}>123456</Typography> */}
        <div className={classes.otpDiv}>
          <span className={classes.otpNum}>1</span>
          <span className={classes.otpNum}>2</span>
          <span className={classes.otpNum}>3</span>
          <span className={classes.otpNum}>4</span>
          <span className={classes.otpNum}>5</span>
          <span className={classes.otpNum}>6</span>
        </div>
        <Typography align="center" variant="h6" style={{ marginTop: 10 }}>
          Subtext for otp
        </Typography>
      </Container>
    </div>
  );
};

export default Otp;
