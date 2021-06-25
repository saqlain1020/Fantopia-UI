import {
  Container,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useOrders } from "src/Hooks/useOrder";
import CreationCard from "../CreationCard/CreationCard";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontWeight: 700,
    color: theme.palette.secondary.dark,
    marginTop: 10,
  },
  tabs: {
    marginBottom: 20,
    // background: theme.customColors.white,
    // color: theme.palette.secondary.main,
    color: "white",
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
  },
  grid: {
    width: "100%",
    maxWidth: 1500,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
    marginBottom: 10,
  },
}));

const HomeTopCreations = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const { orders } = useOrders();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.mainHeading}>
        Top Ranked Creations
      </Typography>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        className={classes.tabs}
        indicatorColor="secondary"
        textColor="inherit"
        // centered
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Fixed Price Sales" />
        <Tab label="Auctions" />
        <Tab label="Most Viewed" />
        <Tab label="Lowest Price" />
        <Tab label="Highest Price" />
      </Tabs>
      <Container maxWidth="lg" disableGutters>
        <div className="flex">
          {/* <div className={classes.grid}> */}
          <Grid container spacing={2}>
            {tab === 0
              ? orders?.results?.map((e) => <CreationCard order={e} />)
              : orders?.results?.map((e) => <CreationCard order={e} />)}
          </Grid>
        </div>
      </Container>
    </Container>
  );
};

export default HomeTopCreations;
