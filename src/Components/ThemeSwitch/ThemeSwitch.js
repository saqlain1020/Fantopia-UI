import React from "react";
import { makeStyles } from "@material-ui/core";
import "./ThemeSwitch.scss";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 80,
    right: 30,
    zIndex: 9999,
    background: "black",
    borderRadius: 360,
    padding: 15,
    transform: "scale(0.8)",
    boxShadow: theme.customShadows.medium,
  },
}));
let item = localStorage.getItem("theme");
  if (item === "light") item = true;
  else item = false;

const ThemeSwitch = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(item);
  const history = useHistory();

  React.useEffect(() => {
    let item = localStorage.getItem("theme");
    if (item === "light") setChecked(true);
    else setChecked(false);
  }, []);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setTimeout(() => {
      history.go(0);
    }, 300);
  };

  return (
    <div className={classes.root}>
      <label class="dayNight">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <div></div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
