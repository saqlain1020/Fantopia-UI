import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BannerImg from "src/Assets/Images/acchubbanner.png";
import IOSSwitch from "../IOSSwitch/IOSSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: 20,
    marginBottom: 20,
    color: theme.customColors.white,
  },
  image: {
    maxWidth: "100%",
    borderRadius:20,
    objectFit:"cover",
      filter: "brightness(0.5)"
  },
  mainHeading: {
    fontWeight: 700,
    position: "absolute",
    textShadow: "2px 2px 10px black",
    left: "5%",
    top: "25%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  subHeading: {
    position: "absolute",
    textShadow: "2px 2px 10px black",
    left: "5%",
    top: "45%",
    [theme.breakpoints.down("xs")]: {
      top: "50%",
      fontSize: "14px",
    },
  },
  switch: {
    position: "absolute",
    top: -17,
    left: "10%",
    transform: "scale(1.5)",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.8)",
    },
  },
}));

const AccountBanner = () => {
  const classes = useStyles();
  const [switchValue, setSwitch] = React.useState(true);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div style={{ position: "relative",width:"100%" }}>
        <img alt="account hub" width="100%" height="200px" className={classes.image} src={BannerImg} />
        <Typography variant="h4" className={classes.mainHeading}>
          Account Hub
        </Typography>
        <Typography variant="h6" className={classes.subHeading}>
          Manage profile and items
        </Typography>
        <div className={classes.switch}>
          <IOSSwitch
            checked={switchValue}
            onChange={(e) => setSwitch(e.target.checked)}
          />
        </div>
      </div>
    </Container>
  );
};

export default AccountBanner;
