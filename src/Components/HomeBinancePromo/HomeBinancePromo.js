import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BinanceImg from "src/Assets/Images/binance.png";
import { LOCALE } from "src/Config/localization";
import { useLang } from "src/State/hooks";

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
  const lang = useLang();

  return (
    <Container maxWidth="md" className={classes.root}>
      <center>
        <img
          alt="binance"
          width="300px"
          src={BinanceImg}
          style={{ filter: "invert(0.3)" }}
        />
      </center>
      <Typography variant="h4" className={classes.heading}>
        {LOCALE.OVERVIEW_HEADING[lang]}
      </Typography>
      <Typography className={classes.para}>
        {LOCALE.OVERVIEW_DES[lang]}
      </Typography>
    </Container>
  );
};

export default HomeBinancePromo;
