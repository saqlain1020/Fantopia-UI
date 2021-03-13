import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CreationCard from "../CreationCard/CreationCard";

const useStyles = makeStyles((theme) => ({
  topHeading: {
    color: theme.customColors.veryLightBlack,
    fontWeight: 500,
  },
  heading: {
    color: theme.customColors.lightBlack,
    fontWeight: 700,
  },
}));

const AccountItems = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.topHeading}>My Items</Typography>
      <Typography variant="h4" className={classes.heading}>
        Manage Items
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <CreationCard gift highestBid={"0.01 BNB"} create />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountItems;
