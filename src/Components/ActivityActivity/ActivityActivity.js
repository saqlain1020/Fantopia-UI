import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import UserName from "../UserName/UserName";
import LikeIco from "src/Assets/Icons/Like.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    boxShadow: theme.customShadows.light,
    borderRadius: 15,
    display: "flex",
    color: theme.customColors.lightBlack,    
  },
  box: {
    width: 60,
    height: 60,
    background: theme.palette.secondary.vibrant,
    marginRight: 10,
  },
  title: {
    fontWeight: 600,
    "& span": {
      color: theme.palette.secondary.main,
      fontWeight: 400,
    },
  },
  time: {
    color: theme.palette.secondary.dark,
    fontWeight: 600,
    lineHeight: 1,
  },
}));

const ActivityActivity = ({
  imgSrc,
  user,
  startText,
  userName,
  middleText,
  highlightText,
  endText,
  time,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {user && (
        <div>
          <UserName noName />
        </div>
      )}
      {!user && <div className={classes.box} />}
      <div>
        <Grid container>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {startText}&nbsp;
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className="acmeFont">
              {userName}&nbsp;
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {middleText}{" "}
              <span className="acmeFont">{highlightText}&nbsp;</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {endText}&nbsp;
            </Typography>
          </Grid>
          <Grid item>
            <img
              style={{ marginLeft: 5, marginTop: 3 }}
              src={imgSrc}
              width="25px"
              alt=""
            />
          </Grid>
        </Grid>
        <Typography className={classes.time}>{time}</Typography>
      </div>
    </div>
  );
};

export default ActivityActivity;

ActivityActivity.defaultProps = {
  imgSrc: LikeIco,
  user: false,
  startText: "started following",
  userName: "Nick Grisson",
  middleText: "started following",
  highlightText: "you",
  endText: "started following",
  time: "2 minutes ago",
};
