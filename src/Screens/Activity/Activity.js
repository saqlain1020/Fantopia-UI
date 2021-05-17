import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import ActivityContainer from "src/Components/ActivityContainer/ActivityContainer";

const useStyles = makeStyles((theme) => ({
  headingBar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    color: theme.palette.secondary.main,
  },
  filter: {
    color: theme.customColors.lightBlack,
    fontWeight: 600,
  },
  filterSelected: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
}));

const Activity = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.headingBar}>
        <Typography className="acmeFont" variant="h4">
          Activity
        </Typography>
        <Grid
          container
          alignItems="center"
          spacing={2}
          style={{ width: "max-content" }}
        >
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Likes
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Transfers
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Trades
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Bids
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Listings
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Sales
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              My Activity
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filter}>
              Following
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.filterSelected}>
              All
            </Typography>
          </Grid>
        </Grid>
      </div>
      <ActivityContainer />
    </Container>
  );
};

export default Activity;
