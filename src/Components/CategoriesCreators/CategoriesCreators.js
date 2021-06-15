import React from "react";
import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import UserName from "../UserName/UserName";
import CategoriesFilterBar from "../CategoriesFilterBar/CategoriesFilterBar";
import CreationCard from "../CreationCard/CreationCard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FilterBar from "../FilterBar/FilterBar";
import { useAuctionOrders, useFixedPriceOrders } from "src/Hooks/useOrder";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    marginBottom: 20,
  },
  dropIcon: {
    transform: "translateY(5px) scale(1.4)",
    marginRight: 5,
  },
  grid: {
    marginTop: 10,
    maxWidth: 1300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  productsGrid: {
    display: "grid",
    marginTop: 20,
    gridTemplateColumns: "350px 1fr",
    gap: 10,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

const CategoriesCreators = () => {
  const classes = useStyles();
  const { orders, loading } = useFixedPriceOrders();
  const { orders: auctionOrders } = useAuctionOrders();

  return (
    <div className={classes.root}>
      {/* <Typography variant="h4">
        <b>Top Ranked Creator and Collectors</b>
      </Typography>
      <Typography variant="h5">
        <b>
          Top Creators <KeyboardArrowDownIcon className={classes.dropIcon} /> 7
          Days <KeyboardArrowDownIcon className={classes.dropIcon} />
        </b>
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        {users.map((item, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} className="flexAlign">
            <Typography variant="h5">
              <b>{index + 1}</b>&nbsp;&nbsp;&nbsp;
            </Typography>
            <UserName name={item.name} badgeColor={item.badge} />
          </Grid>
        ))}
      </Grid> */}
      <div className={classes.productsGrid}>
        <CategoriesFilterBar />
        {/* <FilterBar/> */}
        <Grid container>
          {loading ? (
            <CircularProgress />
          ) : (
            [...(orders?.results ?? []), ...(auctionOrders?.results ?? [])].map(
              (e) => (
                <Grid item xs={12} sm={12} md={4} lg={3}>
                  <CreationCard order={e} />
                </Grid>
              )
            )
          )}
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              <ChevronLeftIcon className={classes.dropIcon} />{" "}
              {/* <b>Displaying 1 of 20 of 2,000</b>{" "} */}
              <ChevronRightIcon className={classes.dropIcon} />
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CategoriesCreators;
