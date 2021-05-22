import React from "react";
import { Chip, makeStyles, MenuItem, Popover } from "@material-ui/core";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  chip: {
    marginRight: 25,
    marginBottom: 10,
    paddingBottom: 3,
    paddingRight: 8,
    paddingLeft: 8,
    cursor: "pointer",
  },
}));

const filters = [
  {
    title: "all",
    selected: false,
  },
  {
    title: "art",
    selected: false,
  },
  {
    title: "games",
    selected: false,
  },
  {
    title: "photos",
    selected: false,
  },
  {
    title: "Memes",
    selected: false,
  },
  {
    title: "Videos",
    selected: false,
  },
  {
    title: "Tokens",
    selected: false,
  },
];

const FilterBar = () => {
  const classes = useStyles();
  const [options, setOptions] = React.useState(filters);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChip = (title) => {
    let arr = options.map((item) => {
      if (item.title === title) {
        item.selected = true;
        return item;
      } else {
        item.selected = false;
        return item;
      }
    });
    setOptions(arr);
  };

  return (
    <div className={classes.root}>
      <div>
        {options.map((item) => (
          <Chip
            key={uuid()}
            className={classes.chip}
            label={item.title}
            color="secondary"
            variant={item.selected ? "default" : "outlined"}
            onClick={() => handleChip(item.title)}
          />
        ))}
        <Chip
          className={classes.chip}
          label={"Other Filters"}
          color="secondary"
          variant={"outlined"}
          onClick={handleClick}
        />
        <Popover
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem disabled>Filter by</MenuItem>
          <MenuItem onClick={handleClose}>Highest Price</MenuItem>
          <MenuItem onClick={handleClose}>Lowest Price</MenuItem>
          <MenuItem onClick={handleClose}>Top Selling</MenuItem>
          <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Popover>
      </div>
    </div>
  );
};

export default FilterBar;
