import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.light,
    background: "rgba(0,0,0,0.5)",
    paddingTop: 20,
    paddingBottom: 20,
    color: theme.palette.secondary.main,
  },
  mainHeading: {
    fontWeight: 700,
    textAlign: "center",
    color: theme.palette.secondary.main,
  },
  mainPara: {
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontWeight: 500,
    lineHeight: 1,
    marginTop: 10,
  },
  howHeading: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    paddingLeft: 20,
    textAlign: "center",
  },
  subParas: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    lineHeight: 1,
  },
  learnBtn:{
    fontWeight:700,
    fontSize:24,
    width:180,
    marginTop:30,
    height:40,
  }
}));

const HomeHowItWorks = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography className={classes.mainHeading} variant="h3">
        Create and Collect Digital Items (NFTs) on Kelekshen
      </Typography>
      <Typography variant="h5" className={classes.mainPara}>
        Just because you take a picture of the Mona Lisa doesn't mean you own
        it.
        <br />
        That's where NFTs come in. NFTs are digital items with built-in proof of
        ownership.
        <br />
        It uses blockchain "smart contracts" to prove your ownership not of a
        copy but of the original item.
        <br />
        <b>Kelekshen</b> is a marketplace for buying, selling, trading, and
        re-selling digital items.
        <br />
      </Typography>
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={12} lg={5}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" className={classes.howHeading}>
                How it
                <br />
                Works.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" className={classes.subParas}>
                <b>Creators Create</b>
              </Typography>
              <Typography variant="h5" className={classes.subParas}>
                Creators create unique or limited edition digital works. Each
                item is encrypted on the blockchainto authenticate with
                historical tracking. Get paid royalties each time your work
                resells.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <Grid
            container
            spacing={2}
            style={{ height: "100%" }}
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" className={classes.subParas}>
                <b>BUY, SELL, RE-SALE.</b>
              </Typography>
              <Typography variant="h5" className={classes.subParas}>
                See something you like, buy or place a bid on it. Each
                transaction is recorded on the public blockchain. Resell it to
                other collectors or trade with someone else.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" className={classes.subParas}>
                <b>SHOW OFF YOUR COLLECTION.</b>
              </Typography>
              <Typography variant="h5" className={classes.subParas}>
                Display your collection to people around the world. NFT
                collectibles appreciate in value just like physical ones. Never
                worry about theft or forgeries.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <center>
          <Button variant="contained" color="secondary" className={classes.learnBtn}>
              Learn More
          </Button>
      </center>
    </Container>
  );
};

export default HomeHowItWorks;
