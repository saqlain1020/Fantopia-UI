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
  },
  value: {
    color: theme.palette.primary.main,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  icon: {
    transform: "translateY(5px)",
  },
}));

const FilterName = ({ name, items = [], type = "checkbox",value }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <div className="flexAlign">
          {type === "checkbox" && (
            <Checkbox
              color="primary"
              checked={checked}
              onChange={(e, v) => setChecked(v)}
              className={classes.checkbox}
              checkedIcon={<img alt="checkbox" width="20px" src={CheckboxIco} />}
            />
          )}
          {type === "radio" && (
            <Radio
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              color="primary"
              className={classes.checkbox}
            />
          )}

          <Typography variant="h6">
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