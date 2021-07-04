import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import FilterName from "../FilterName/FilterName";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
    // background: theme.customColors.white,
    background: theme.palette.primary.dark,
    padding: 20,
    boxShadow: theme.customShadows.light,
    color: theme.customColors.white,
  },
  heading: {
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
    color: theme.palette.secondary.main,
    "& fieldset": {
      borderColor: `${theme.palette.secondary.main} !important`,
      "& legend": {
        visibility: "initial",
      },
    },
  },
}));

const CategoriesFilterBar = ({ setFilter, filter, setSortBy, sortBy }) => {
  const lang = useLang();
  const classes = useStyles();
  const [price, setPrice] = useState({ minPrice: "", maxPrice: "" });

  const handleFilterChange = (value) => {
    setFilter((_filter) => {
      return {
        ..._filter,
        ...value,
      };
    });
  };

  const handleCategorySelect = (value) => {
    setFilter((_filter) => {
      if (_filter.category.includes(value)) {
        const index = _filter.category.indexOf(value);
        if (index > -1) {
          const categories = _filter.category.filter((e) => e !== value);
          return { ..._filter, category: [...categories] };
        }
      } else {
        const categories = [..._filter.category, value];
        return { ..._filter, category: [...categories] };
      }
    });
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        className={classes.heading}
        style={{ marginBottom: 10 }}
      >
        <b>{LOCALE.SALE_TYPE[lang]}</b>
      </Typography>
      <FilterName
        onSelect={() => handleFilterChange({ saleKind: 0 })}
        selected={filter.saleKind === 0}
        name={LOCALE.FIXED_PRICE[lang]}
        type="radio"
      />
      <FilterName
        onSelect={() => handleFilterChange({ saleKind: 1 })}
        selected={filter.saleKind === 1}
        name={LOCALE.AUCTION[lang]}
        type="radio"
      />
      <Typography
        variant="h6"
        className={classes.heading}
        style={{ marginBottom: 10 }}
      >
        <b>{LOCALE.CATEGORIES[lang]}</b>
      </Typography>
      <FilterName
        onSelect={() => handleFilterChange({ verified: !filter.verified })}
        name={LOCALE.VERIFIED_CELEB[lang]}
        selected={filter.verified}
      />
      <FilterName
        onSelect={() => handleCategorySelect("digitalArt")}
        selected={filter.category.includes("digitalArt")}
        name={LOCALE.DIGITAL_ART[lang]}
      />
      <FilterName
        onSelect={() => handleCategorySelect("photos")}
        selected={filter.category.includes("photos")}
        name={LOCALE.PHOTOS[lang]}
      />
      <FilterName
        onSelect={() => handleCategorySelect("videos")}
        selected={filter.category.includes("videos")}
        name={LOCALE.VIDEOS[lang]}
      />
      <FilterName
        onSelect={() => handleCategorySelect("music")}
        selected={filter.category.includes("music")}
        name={LOCALE.MUSIC[lang]}
      />

      <Typography
        variant="h6"
        className={classes.heading}
        style={{ marginTop: 10 }}
      >
        <b>{LOCALE.SORT_BY[lang]}</b>
      </Typography>
      <FilterName
        selected={sortBy === "recentlyAdded"}
        onSelect={() => setSortBy("recentlyAdded")}
        name={LOCALE.RECENTLY_ADDED[lang]}
        type="radio"
      />
      <FilterName
        selected={sortBy === "highestValue"}
        onSelect={() => setSortBy("highestValue")}
        name={LOCALE.HIGHEST_VALUE[lang]}
        type="radio"
      />
      <FilterName
        selected={sortBy === "mostAffordable"}
        onSelect={() => setSortBy("mostAffordable")}
        name={LOCALE.MOST_AFFORDABLE[lang]}
        type="radio"
      />
      <Typography
        variant="h6"
        className={classes.heading}
        style={{ marginTop: 10 }}
      >
        <b>{LOCALE.PRICE_RANGE[lang]}</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OutlinedInput
            type="number"
            value={price.minPrice}
            onChange={(e) =>
              setPrice((p) => {
                return { ...p, minPrice: e.target.value };
              })
            }
            label={LOCALE.FROM[lang]}
            startAdornment={<AttachMoneyIcon className={classes.icon} />}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={6}>
          <OutlinedInput
            type="number"
            value={price.maxPrice}
            onChange={(e) =>
              setPrice((p) => {
                return { ...p, maxPrice: e.target.value };
              })
            }
            fullWidth
            label={LOCALE.TO[lang]}
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
            onClick={() =>
              setFilter({
                ...filter,
                minPrice: price.minPrice,
                maxPrice: price.maxPrice,
              })
            }
          >
            {LOCALE.APPLY_PRICE_FILTER[lang]}
          </Button>
          {filter.minPrice !== "" || filter.maxPrice !== "" ? (
            <Button
              style={{ marginTop: 20 }}
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.btn}
              onClick={() => {
                setPrice({ minPrice: "", maxPrice: "" });
                setFilter((_filter) => {
                  return { ..._filter, minPrice: "", maxPrice: "" };
                });
              }}
            >
              {LOCALE.CLEAR[lang]}
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoriesFilterBar;
