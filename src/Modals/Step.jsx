import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CancleIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";
import { STATE } from "src/Config/enums";

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    boxShadow: "none",
  },
  line: {
    width: 50,
    height: 6,
    background: theme.customColors.lightBlack,
    opacity: 0.5,
  },
  progress: {
    color: theme.customColors.lightBlack,
  },
  check: {
    height: 35,
    transform: "rotate(45deg)",
    width: 17,
    borderBottom: `7px solid ${theme.customColors.lightBlack}`,
    borderRight: `7px solid ${theme.customColors.lightBlack}`,
    opacity: 0.5,
  },
}));

const Step = ({ state, onClick, heading, para }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4} className="flex">
          {state === STATE.IDLE ? (
            <div className={classes.line} />
          ) : state === STATE.BUSY ? (
            <CircularProgress
              className={classes.progress}
              style={{ opacity: 0.5 }}
            />
          ) : state === STATE.SUCCEED ? (
            <div className={classes.check} />
          ) : (
            <CancleIcon color="error" />
          )}
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">
            <b>{heading}</b>
          </Typography>
          <Typography>{para}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.btn}
            onClick={onClick}
            disabled={state === STATE.BUSY || state === STATE.SUCCEED}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Step;

Step.propTypes = {
  onClick: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
