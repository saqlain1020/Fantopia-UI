import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FireIco from "src/Assets/Icons/fire.png";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  container: {
    width: "90%",
    height: 28,
    margin: "auto",
    borderRadius: 360,
    background: "linear-gradient(to right, #615DFA, purple)",
    padding: 2,
  },
  content: {
    height: "100%",
    background: theme.palette.primary.mainWhite,
    borderRadius: 360,
  },
  text: {
    color: theme.customColors.lightBlack,
    fontSize: 15,
    fontWeight: 900,
    paddingTop: 2,
  },
}));

const AuctionTimer = ({ endDate, ...restProps }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    let interval = setInterval(calcTimeLeft, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  const calcTimeLeft = () => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = new Date(endDate) - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setState({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className={classes.root} {...restProps}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Typography align="center" className={classes.text}>
            {`${state.days}d ${state.hours}h ${state.minutes}m ${state.seconds}s left`}{" "}
            <img src={FireIco} height="13px" />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AuctionTimer;

AuctionTimer.propTypes = {
  endDate: PropTypes.string,
};

AuctionTimer.defaultProps = {
  endDate: new Date(new Date(new Date().setDate(32))).toString(),
};
