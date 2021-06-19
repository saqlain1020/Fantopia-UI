import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Data from "./Data";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    backgroundPosition:"center",
    borderRadius: 10,
    display:"flex",
    justifyContent:"space-between",
    alignItems:"flex-start"
  },
  panelHeading: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  discover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    cursor: "default",
  },
  slider: {
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
  content:{
    background: "white",
    width:"fit-content",
    padding:5,
    borderRadius:10,
    boxShadow: "-2px 2px 5px rgba(0,0,0,0.2)"
  }
}));

const HomeFeaturedCollections = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.mainHeading}>
        Featured Collection
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
        {Data.map((item, index) => (
          <div key={index}>
            <div className={classes.panel} style={{backgroundImage: `url(${item.image})`}}>
              <div className={classes.content}>
              <Typography className={classes.panelHeading} variant="h5">
                {item.heading}
              </Typography>
              <Typography className={classes.panelPara}>{item.para}</Typography>
              </div>
              <div className={classes.content}>
              <Typography className={classes.panelHeading} variant="h5">
                ${item.cost}
              </Typography>
              {/* <Typography className={classes.panelPara}>{item.para}</Typography> */}
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
      <Typography variant="h6" className={classes.discover}>
        Discover More <ChevronRightIcon />
      </Typography>
    </Container>
  );
};

export default HomeFeaturedCollections;
