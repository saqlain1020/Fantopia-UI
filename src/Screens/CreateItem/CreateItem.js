import React from "react";
import { makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import CreateSingleItem from "src/Components/CreateSingleItem/CreateSingleItem";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    paddingTop:70,
  },
  subHeading:{
      color: theme.customColors.veryLightBlack,
      lineHeight:1,
  },
  tabs: {
      boxShadow: theme.customShadows.light,
      maxWidth:350,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:10,
      marginBottom:10,
      "& button":{
          height:50,
      }
  }
}));

const CreateItem = () => {
  const classes = useStyles();
const [tab,setTab] = React.useState(1);

  return (
    <div className={classes.root}>
      <Typography className="acmeFont" variant="h4" align="center">
        Create Digital Asset
      </Typography>
      <Typography variant="h6" align="center" className={classes.subHeading}>
        Choose "Single Edition" to create a one of a kinds items
        <br />
        or "Multiple Editions" to sell one item multiple times.
      </Typography>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        className={classes.tabs}
        indicatorColor="primary"
        textColor="inherit"
        centered
      >
        <Tab label="Single Edition" />
        <Tab label="Multiple Editions" />
      </Tabs>
      <CreateSingleItem/>
    </div>
  );
};

export default CreateItem;