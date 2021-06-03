import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "./Step";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
}));

const CollectionSteps = () => {
  const classes = useStyles();

  const stepClick = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Follow Steps</b>
      </Typography>

      <Step
        heading="Deploy contract"
        para="Deploy code for the new collection smart contract"
        onClick={stepClick}
      />
      <br />

      <Step
        heading="Sign message"
        para="Sign message with new collection prefrences"
        onClick={stepClick}
      />

      <br />
      <Button color="secondary" variant="outlined" fullWidth>
        Cancel
      </Button>
    </div>
  );
};

export default CollectionSteps;
