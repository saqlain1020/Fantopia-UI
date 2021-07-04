import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Data from "./Data";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedCreationOrders } from "src/Hooks/useOrder";
import { useHistory } from "react-router-dom";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";
import hottestImage from "src/Assets/Images/hottest.jpg";
import mostTalkedImage from "src/Assets/Images/most-talked.jpg";
import mostValuedImage from "src/Assets/Images/most-valued.jpg";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontWeight: 700,
    color: theme.palette.secondary.dark,
    marginTop: 10,
  },
  panel: {
    background: theme.palette.secondary.main,
    padding: "10px 15px",
    minHeight: 300,
    color: theme.palette.primary.main,
    margin: 10,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    transition: "background-size 200ms ease-in-out",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "inherit",
      backgroundSize: "cover",
      transformOrigin: "center",
      transition: "transform .2s ease-in-out",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: 1,
      // opacity:.3,
      background:
        "linear-gradient(0deg , rgba(0,0,0,0.8),rgba(0,0,0,0),rgba(0,0,0,0))",
    },
    "&:hover::after": {
      transform: "scale(1.1)",
    },
    "& > div": {
      zIndex: 1,
    },
  },
  panelHeading: {
    fontWeight: 700,

    color: "white",
  },
  panelPara: {
    color: "white",
  },
  discover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    cursor: "default",
  },
  slider: {
    cursor: "pointer",
    "& .slick-slide": {
      transform: "scale(1) !important",
      opacity: "1 !important",
    },
    "& .slick-arrow": {
      transform: "scale(1) !important",
      display: "none !important",
    },
    "& .slick-dots > li > button::before": {
      color: `${theme.palette.secondary.dark} !important`,
    },
  },
  content: {
    // background: "white",
    width: "fit-content",
    padding: 5,
    borderRadius: 10,
    // boxShadow: "-2px 2px 5px rgba(0,0,0,0.2)",
  },
}));

const HomeFeaturedCollections = () => {
  const lang = useLang();
  const classes = useStyles();
  const history = useHistory();
  const { highestPriceOrders, mostAffordable, trendingOrders } =
    useFeaturedCreationOrders();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.mainHeading}>
        {LOCALE.FEATURED_COLLETION[lang]}
      </Typography>
      <Slider
        className={classes.slider}
        infinite={true}
        dots={true}
        centerPadding={"20px"}
        slidesToShow={3}
        speed={500}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {[
          {
            ...trendingOrders,
            image: hottestImage,
            heading: LOCALE.TRENDING[lang],
            para: LOCALE.TRENDING_TEXT[lang],
          },
          {
            ...highestPriceOrders,
            image: mostTalkedImage,
            heading: LOCALE.HIGHEST_VALUE[lang],
            para: LOCALE.HIGHEST_VALUE_TEXT[lang],
          },
          {
            ...mostAffordable,
            image: mostValuedImage,
            heading: LOCALE.MOST_AFFORDABLE[lang],
            para: LOCALE.MOST_AFFORDABLE_TEXT[lang],
          },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() =>
              history.push(`collection/${item.address}/${item.tokenId}`)
            }
          >
            <div
              className={classes.panel}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={classes.content}>
                <Typography
                  className={classes.panelHeading}
                  variant="h4"
                  align="center"
                >
                  {item.heading}
                </Typography>
                <Typography className={classes.panelPara} align="center">
                  {item.para}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <Grid container spacing={2} style={{ padding: 10 }}>
        {Data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <div className={classes.panel}>
              <Typography className={classes.panelHeading} variant="h5">
                {item.heading}
              </Typography>
              <Typography className={classes.panelPara}>{item.para}</Typography>
            </div>
          </Grid>
        ))}
      </Grid> */}
      {/* <Typography variant="h6" className={classes.discover}>
        Discover More <ChevronRightIcon />
      </Typography> */}
    </Container>
  );
};

export default HomeFeaturedCollections;
