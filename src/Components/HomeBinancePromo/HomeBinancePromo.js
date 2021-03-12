import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BinanceImg from "src/Assets/Images/binance.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 40,
    paddingTop: 30,
    color: theme.customColors.lightBlack,
  },
  heading: {
    textAlign: "center",
    fontWeight: 500,
    marginTop: 10,
  },
  para: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 18,
  },
}));

const HomeBinancePromo = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <center>
        <img alt="binance" src={BinanceImg} />
      </center>
      <Typography variant="h4" className={classes.heading}>
        Kelekshen runs on Binance Smart Chain
      </Typography>
      <Typography className={classes.para}>
        This means fast low cost transaction fees on their world leading
        blockchain technology to keep your digital assets safe
      </Typography>
    </Container>
  );
};

export default HomeBinancePromo;
