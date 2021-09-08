import {
  Container,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import { LOCALE } from "src/Config/localization";
import { useTopCreationOrders } from "src/Hooks/useOrder";
import { useLang } from "src/State/hooks";
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
  const lang = useLang();
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const { orders, loading } = useTopCreationOrders(
    tab === 0 ? 0 : 1,
    tab === 2 ? "highestValue" : tab === 3 ? "mostAffordable" : "recentlyAdded",
    1
  );

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.mainHeading}>
        {LOCALE.TOP_RANKED_COLLECTION[lang]}
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
        <Tab label={LOCALE.FIXED_PRICE[lang]} />
        <Tab label={LOCALE.AUCTION[lang]} />
        <Tab label={LOCALE.HIGHEST_VALUE[lang]} />
        <Tab label={LOCALE.MOST_AFFORDABLE[lang]} />
      </Tabs>
      <Grid container>
        {loading ? (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
            <Grid item xs={3}>
              <CircularProgress />
            </Grid>
          </Grid>
        ) : (
          orders?.results?.map((e) => (
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <CreationCard order={e} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default HomeTopCreations;
