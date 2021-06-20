import React from "react";
import { Checkbox, makeStyles, Radio, Typography } from "@material-ui/core";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import CheckboxIco from "src/Assets/Icons/checkbox.png";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.customColors.whiteBtn,
  },
  value: {
    color: theme.palette.secondary.main,
  },
  checkbox: {
    width: 20,
    height: 20,
    color: theme.customColors.whiteBtn,
  },
  icon: {
    transform: "translateY(5px)",
  },
}));

const FilterName = ({ name, items = [], type = "checkbox", value }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <div className="flexAlign">
          {type === "checkbox" && (
            <Checkbox
              color="secondary"
              checked={checked}
              onChange={(e, v) => setChecked(v)}
              className={classes.checkbox}
            />
          )}
          {type === "radio" && (
            <Radio
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              color="secondary"
              className={classes.checkbox}
            />
          )}

          <Typography
            variant="h6"
            onClick={() => setChecked(!checked)}
            style={{ cursor: "pointer" }}
          >
            <b>{name ? name : "Filter"} </b>
            {expanded && items.length > 0 && (
              <KeyboardArrowUpIcon
                className={classes.icon}
                onClick={() => setExpanded(false)}
              />
            )}
            {!expanded && items.length > 0 && (
              <KeyboardArrowDownOutlinedIcon
                className={classes.icon}
                onClick={() => setExpanded(true)}
              />
            )}
          </Typography>
        </div>
        <Typography className={classes.value} variant="h6">
          {value}
        </Typography>
      </div>
      {expanded && (
        <div style={{ paddingLeft: 35 }}>
          {items.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterName;
