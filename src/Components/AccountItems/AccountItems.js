import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CreationCard from "../CreationCard/CreationCard";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  topHeading: {
    color: theme.customColors.veryLightBlack,
    fontWeight: 500,
  },
  heading: {
    color: theme.customColors.lightBlack,
    fontWeight: 700,
  },
  headingDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const AccountItems = ({ history }) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 50 }}>
      <div className={classes.headingDiv}>
        <div>
          <Typography className={classes.topHeading}>My Items</Typography>
          <Typography variant="h4" className={classes.heading}>
            Manage Items
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/Account/profile")}
          >
            <AccountCircleOutlinedIcon />
          </Button>
        </div>
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <CreationCard gift highestBid={"0.01 BNB"} create />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <CreationCard edit highestBid={"0.01 BNB"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountItems;
