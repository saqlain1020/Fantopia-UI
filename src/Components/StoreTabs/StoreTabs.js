import React from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";
import CreationCard from "../CreationCard/CreationCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
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
  const [tab, setTab] = React.useState(1);

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
        <Tab icon="On Sale" />
        <Tab icon="Collection" />
        <Tab icon="Created" />
        <Tab icon="Liked" />
        <Tab icon="Activity" />
        <Tab icon="Following" label={<span>41</span>} />
        <Tab icon="Followers" label={<span>921</span>} />
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
    </div>
  );
};

export default StoreTabs;
