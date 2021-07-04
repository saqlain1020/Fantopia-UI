import React from "react";
import { Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import CreationCard from "../CreationCard/CreationCard";
import { useUserCollections } from "src/Hooks/useCollection";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import CollectionCard from "../CollectionCard/CollectionCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  tabs: {
    marginBottom: 20,
    background: theme.palette.primary.dark,
    maxWidth: 1150,
    color: theme.palette.secondary.main,
    marginRight: "auto",
    marginLeft: "auto",

    borderRadius: 10,
  },
  grid: {
    width: "100%",
    maxWidth: 1500,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
    marginBottom: 10,
  },
}));

const StoreTabs = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const { userCollections } = useUserCollections();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        className={classes.tabs}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab icon="Collection" />
        <Tab icon="On Sale" />
        <Tab icon="Auctions" />
      </Tabs>
      <Grid container>
        {userCollections.map((e) => (
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <CollectionCard data={e} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StoreTabs;
