import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import AccountBalanceWalletTwoToneIcon from "@material-ui/icons/AccountBalanceWalletTwoTone";
import { Typography } from "@material-ui/core";
import ViewQuiltTwoToneIcon from "@material-ui/icons/ViewQuiltTwoTone";
import ImageTwoToneIcon from "@material-ui/icons/ImageTwoTone";
import LocalOfferTwoToneIcon from "@material-ui/icons/LocalOfferTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {
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
}));

const Features = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <AccountBalanceWalletTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>Set up your wallet</b>
            </Typography>
            <Typography align="center">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              <a href="#"> wallets we support.</a>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <ViewQuiltTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>Create your collection</b>
            </Typography>
            <Typography align="center">
              Click <a href="#">Create</a> and set up your collection. Add
              social links, a description, profile & banner images, and set a
              secondary sales fee.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <ImageTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>Add your NFTs</b>
            </Typography>
            <Typography align="center">
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFTs with properties, stats, and
              unlockable content.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.wrapper}>
            <LocalOfferTwoToneIcon fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: 10 }}
            >
              <b>List them for sale</b>
            </Typography>
            <Typography align="center">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs, and we help
              you sell them!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
