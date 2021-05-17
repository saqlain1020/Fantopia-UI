import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import FilterName from "../FilterName/FilterName";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
    // background: theme.customColors.white,
    background: theme.palette.primary.dark,
    padding: 20,
    boxShadow: theme.customShadows.light,
    color: "white",
  },
  heading:{
    color: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  btn: {
    color: theme.customColors.white,
    fontWeight: 700,
    padding: "10px 10px",
  },
  input: {
    color:theme.palette.secondary.main,
    "& fieldset": {
      borderColor:`${theme.palette.secondary.main} !important`,
      "& legend": {
        visibility: "initial",
      },
    },
  },
}));

const CategoriesFilterBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.heading} style={{ marginBottom: 10 }}>
        <b>Categories</b>
      </Typography>
      <FilterName value="1207" name="Art" />
      <FilterName value="1207" name="Comic Books" items={["Fun", "Science"]} />
      <FilterName value="1207" name="Gaming" />
      <FilterName value="1207" name="Trading Cards" />
      <FilterName value="1207" name="Memes" />
      <FilterName value="1207" name="Music /Audio" />
      <FilterName value="1207" name="Video" />
      <FilterName value="1207" name="Defi" />
      <FilterName value="1207" name="Domains" />
      <FilterName value="1207" name="Photographs" />
      <FilterName value="1207" name="Vectors" />
      <FilterName value="1207" name="Patterns" />
      <FilterName value="1207" name="Illustrations" />
      <FilterName value="1207" name="Mock Ups" />
      <FilterName value="1207" name="Collectibles" />
      <FilterName value="1207" name="Code" />
      <FilterName value="1207" name="Antiques" items={["Maps", "Rare Books"]} />
      <Typography variant="h6" className={classes.heading} style={{ marginTop: 10 }}>
        <b>Price Range</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OutlinedInput
            label="from"
            startAdornment={<AttachMoneyIcon className={classes.icon} />}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <OutlinedInput
            fullWidth
            label="to"
            startAdornment={<AttachMoneyIcon className={classes.icon} />}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.btn}
          >
            Apply Price Filter!
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h6" className={classes.heading} style={{ marginTop: 10 }}>
        <b>Sort By</b>
      </Typography>
      <FilterName name="Recently added" type="radio" />
      <FilterName name="Cheapest" type="radio" />
      <FilterName name="Highest price" type="radio" />
      <FilterName name="Most liked" type="radio" />
      <FilterName name="Hotest" type="radio" />
      <FilterName name="Rarest" type="radio" />
      <FilterName name="Most editions" type="radio" />
    </div>
  );
};

export default CategoriesFilterBar;
