import {
  Container,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import CreationCard from "../CreationCard/CreationCard";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontWeight: 700,
    color: theme.palette.secondary.dark,
    marginTop: 10,
  },
  tabs: {
    marginBottom: 20,
    background: theme.customColors.white,
  },
  grid: {
    width: "100%",
    maxWidth: 1500,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
    marginBottom:10,
  },
}));

const HomeTopCreations = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(1);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.mainHeading}>
        Top Ranked Creations
      </Typography>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        className={classes.tabs}
        indicatorColor="primary"
        textColor="inherit"
        centered
      >
        <Tab label="Best Seller" />
        <Tab label="Recently Added" />
        <Tab label="Most Viewed" />
        <Tab label="Lowest Price" />
        <Tab label="Highest Price" />
      </Tabs>
      <div className="flex">
        <div className={classes.grid}>
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
          <CreationCard />
        </div>
      </div>
    </Container>
  );
};

export default HomeTopCreations;
