import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Data from "./Data";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
    color: theme.palette.primary.main
  },
  panelHeading: {
    fontWeight: 700,
    color: theme.palette.primary.main
  },
  discover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    cursor: "default",
  },
}));

const HomeFeaturedCollections = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.mainHeading}>
        Featured Collection
      </Typography>
      <Grid container spacing={2} style={{ padding: 10 }}>
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
      </Grid>
      <Typography variant="h6" className={classes.discover}>
        Discover More <ChevronRightIcon />
      </Typography>
    </Container>
  );
};

export default HomeFeaturedCollections;
