import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

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

const Step = ({ onClick, heading, para }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(1);

  const handleClick = async () => {
    try {
      setChecked(2);
      await onClick();
      setChecked(3);
    } catch (err) {
      console.log(err);
      setChecked(1);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4} className="flex">
          {checked === 1 && <div className={classes.line} />}
          {checked === 2 && (
            <CircularProgress
              className={classes.progress}
              style={{ opacity: 0.5 }}
            />
          )}
          {checked === 3 && <div className={classes.check} />}
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
            onClick={handleClick}
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
