import React, { useState } from "react";
import {
  Button,
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
import { useOrders } from "src/Hooks/useOrder";
import PageSelector from "../PageSelector/PageSelector";
import { useLoadingModal } from "src/Hooks/useModal";

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
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    verified: false,
    category: ["digitalArt", "photos", "videos", "music"],
    minPrice: "",
    maxPrice: "",
    saleKind: 0,
  });
  const [sortBy, setSortBy] = useState("recentlyAdded");
  const { orders, loading } = useOrders(filter, sortBy, page);

  useLoadingModal(loading);
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
        <CategoriesFilterBar
          setFilter={setFilter}
          filter={filter}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        {/* <FilterBar/> */}
        <Grid container>
          {orders?.results?.map((e) => (
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <CreationCard order={e} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <PageSelector
              pages={orders.totalPages}
              selectedPage={page}
              selectPage={setPage}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CategoriesCreators;
