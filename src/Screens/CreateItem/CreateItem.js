import React from "react";
import { makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import CreateSingleItem from "src/Components/CreateSingleItem/CreateSingleItem";
import { LOCALE } from "src/Config/localization";
import { useLang } from "src/State/hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    paddingTop: 70,
  },
  subHeading: {
    color: theme.customColors.veryLightBlack,
    lineHeight: 1,
  },
  tabs: {
    boxShadow: theme.customShadows.light,
    maxWidth: 350,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
    "& button": {
      height: 50,
    },
  },
}));

const CreateItem = () => {
  const lang = useLang();
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  return (
    <div className={classes.root}>
      <Typography className="acmeFont" variant="h4" align="center">
        {LOCALE.CREATE_DIGITAL_ASSET[lang]}
      </Typography>
      {/* <Typography variant="h6" align="center" className={classes.subHeading}>
        Choose "Single Edition" to create a one of a kinds items
        <br />
        or "Multiple Editions" to sell one item multiple times.
      </Typography>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        className={classes.tabs}
        indicatorColor="secondary"
        textColor="inherit"
        centered
      >
        <Tab label="Single Edition" />
        <Tab label="Multiple Editions" />
      </Tabs> */}
      <CreateSingleItem />
    </div>
  );
};

export default CreateItem;
