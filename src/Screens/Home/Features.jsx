import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import AccountBalanceWalletTwoToneIcon from "@material-ui/icons/AccountBalanceWalletTwoTone";
import { Typography } from "@material-ui/core";
import ViewQuiltTwoToneIcon from "@material-ui/icons/ViewQuiltTwoTone";
import ImageTwoToneIcon from "@material-ui/icons/ImageTwoTone";
import LocalOfferTwoToneIcon from "@material-ui/icons/LocalOfferTwoTone";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    color: theme.customColors.lightBlack,
    "& a": {
      fontWeight: 700,
      color: theme.palette.secondary.main,
      textDecoration: "none",
    },
  },
  stepNumber: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "white",
    color: "black",
    borderRadius: 360,
    width: 30,
    display: "flex",
    justifyContent: "center",
  },
}));

const Features = () => {
  const classes = useStyles();
  const lang = useLang();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <Typography variant="h5" className={classes.stepNumber}>
              <b>1</b>
            </Typography>
            <AccountBalanceWalletTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>{LOCALE.SETUP_WALLET[lang]}</b>
            </Typography>
            <Typography align="center">
              {LOCALE.SETUP_WALLET_TEXT[lang]}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <Typography variant="h5" className={classes.stepNumber}>
              <b>2</b>
            </Typography>
            <ViewQuiltTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>{LOCALE.CREATE_COLLECTION[lang]}</b>
            </Typography>
            <Typography align="center">
              {LOCALE.CREATE_COLLECTION_TEXT[lang]}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <Typography variant="h5" className={classes.stepNumber}>
              <b>3</b>
            </Typography>
            <ImageTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>{LOCALE.ADD_NFT[lang]}</b>
            </Typography>
            <Typography align="center">{LOCALE.ADD_NFT_TEXT[lang]}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <Typography variant="h5" className={classes.stepNumber}>
              <b>4</b>
            </Typography>
            <LocalOfferTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>{LOCALE.LIST_FOR_SALE[lang]}</b>
            </Typography>
            <Typography align="center">
              {LOCALE.LIST_FOR_SALE_TEXT[lang]}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
