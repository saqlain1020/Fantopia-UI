import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Bg from "src/Assets/Images/landing-bg.jpg";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArr from "src/Assets/Images/leftarrow.png";
import RightArr from "src/Assets/Images/rightarrow.png";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 650,
    color: theme.customColors.white,
    position: "relative",
    marginBottom: 30,
    paddingTop: 10,
    [theme.breakpoints.down("xs")]: {
      height: 550,
    },
  },
  btnsContainer: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 360,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    width: 380,
    overflow: "hidden",
    cursor: "default",
    marginTop: 150,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
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
    color: theme.customColors.white,
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
    bottom: "10px",
  },
  carousel: {
    maxWidth: 700,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
  },
  slideBox: {
    width: "calc(100% - 20px)",
    height: "100%",
    borderRadius: 15,

    margin: 10,
  },
  slideWrapper: {
    width: 500,
    height: 300,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 180,
    },
  },
  arrow:{
    "&:before":{
      content: "'' !important",
    },
    height:"10%",
  }
}));

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <div onClick={onClick} className={clsx(className,classes.arrow)} style={{ ...style, }}>
      <img src={LeftArr} height="100%"/>
    </div>
  );
};
const RightArrow = (props) => {
  const { className, style, onClick } = props;
  const classes = useStyles();

  return (
    <div onClick={onClick} className={clsx(className,classes.arrow)} style={{ ...style,paddingLeft:40 }}>
      <img src={RightArr} height="100%"/>
    </div>
  );
};

const HomeBanner = () => {
  const classes = useStyles();
  const [selection, setSelection] = React.useState(1);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* <Carousel> */}
      <div className={classes.root}>
        {/* <Typography align="center" variant="h5" style={{ paddingTop: 20 }}>
            WELCOME TO
          </Typography>
          <Typography align="center" variant="h1">
            Fantopia
          </Typography>
          <Typography align="center" variant="h6" style={{ marginTop: 20 }}>
            Buy, sell and trade authentic digital assets
            <br />
            that can be owned securely with blockchain
          </Typography> */}
        <div className={classes.carousel}>
          <Slider
            className="center"
            centerMode={true}
            infinite={true}
            centerPadding={matches ? "0px" : "100px"}
            slidesToShow={1}
            speed={500}
            prevArrow={<LeftArrow/>}
            nextArrow={<RightArrow/>}
          >
            <div>
              <div className={classes.slideWrapper}>
                <div
                  className={classes.slideBox}
                  style={{ backgroundColor: "yellow" }}
                />
              </div>
            </div>
            <div>
              <div className={classes.slideWrapper}>
                <div
                  className={classes.slideBox}
                  style={{ backgroundColor: "green" }}
                />
              </div>
            </div>
            <div>
              <div className={classes.slideWrapper}>
                <div
                  className={classes.slideBox}
                  style={{ backgroundColor: "red" }}
                />
              </div>
            </div>
            <div>
              <div className={classes.slideWrapper}>
                <div
                  className={classes.slideBox}
                  style={{ backgroundColor: "magenta" }}
                />
              </div>
            </div>
          </Slider>
        </div>
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

      {/* </Carousel> */}
    </>
  );
};

export default HomeBanner;
