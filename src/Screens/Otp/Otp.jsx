import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CustomButton from "src/Components/CustomButton/CustomButton";
import { useOTP, useVerification } from "src/Hooks/useVerification";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const classes = useStyles();
  const [resendTime, setResendTime] = useState(0);
  const { code, loading, getCode } = useOTP(history.location.state);

  console.log(history.location.state);
  const startTimer = async () => {
    await getCode();
    setResendTime(60);
    let interval = setInterval(() => {
      setResendTime((t) => {
        if (t === 1) clearInterval(interval);
        return --t;
      });
    }, 1000);
  };

  const getOtpText = () => {
    let list = [];
    if (code)
      for (let i = 0; i < code.length; i++) {
        list.push(<span className={classes.otpNum}>{code[i]}</span>);
      }
    return list;
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography className="acmeFont" variant="h2" align="center">
          OTP
        </Typography>
        {/* <Typography align="center"  variant="h4"  className={classes.otpNumber}>123456</Typography> */}
        <div className={classes.otpDiv}>{getOtpText()}</div>
        <center>
          <CustomButton
            loading={loading}
            disabled={resendTime !== 0}
            style={{ marginTop: 20 }}
            onClick={() => startTimer()}
          >
            <Typography>
              {resendTime === 0
                ? "Resend Code"
                : `Resend Code in ${resendTime} seconds`}
            </Typography>
          </CustomButton>
          <Typography
            align="center"
            variant="h6"
            style={{ marginTop: 10, width: "65%" }}
          >
            Send the above code to our{" "}
            <a href="https://www.instagram.com/fantopia.io/" target="_blank">
              Official Instagram Account
            </a>{" "}
            with your verified account, to get verified as a Celebrity and get
            your verfication Badge
          </Typography>
        </center>
      </Container>
    </div>
  );
};

export default Otp;
