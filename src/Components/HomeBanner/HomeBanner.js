import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Bg from "src/Assets/Images/landing-bg.jpg";
import JoinCommunity from "../JoinCommunity/JoinCommunity";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 650,
    color: theme.customColors.white,
    position: "relative",
    marginBottom:30,
  },
  btnsContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 360,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    width: 380,
    overflow: "hidden",
    cursor: "default",
    marginTop: 10,
    [theme.breakpoints.down('xs')]:{
        width: "90%",
    }
  },
  btnSelected: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
    fontWeight: "700",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 200ms ease-out",
  },
  btn: {
    color: theme.palette.primary.main,
    background: "transparent",
    fontWeight: "700",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  joinCommunity: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "-30px",
  },
}));

const HomeBanner = () => {
  const classes = useStyles();
  const [selection, setSelection] = React.useState(1);

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5" style={{ paddingTop: 20 }}>
        WELCOME TO
      </Typography>
      <Typography align="center" variant="h1">
        kə-ˈlek-shən
      </Typography>
      <Typography align="center" variant="h6" style={{ marginTop: 20 }}>
        Buy, sell and trade authentic digital assets
        <br />
        that can be owned securely with blockchain
      </Typography>
      <center>
        <div className={classes.btnsContainer}>
          <div>
            <Typography
              className={selection === 1 ? classes.btnSelected : classes.btn}
              onClick={() => setSelection(1)}
            >
              Create
            </Typography>
          </div>
          <div>
            <Typography
              className={selection === 2 ? classes.btnSelected : classes.btn}
              onClick={() => setSelection(2)}
            >
              Collect
            </Typography>
          </div>
        </div>
      </center>
      <div className={classes.joinCommunity}>
        <JoinCommunity />
      </div>
    </div>
  );
};

export default HomeBanner;
