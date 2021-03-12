import {
  Badge,
  Button,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import Logo from "src/Assets/Images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Profile from "./Components/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: 70,
    display: "grid",
    gridTemplateColumns:
      "min-content min-content 1fr min-content min-content min-content",
    gap: 10,
    alignItems: "center",
    justifyItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  search: {
    color: theme.palette.secondary.main,
    background: theme.customColors.bgGrey,
    width: 350,
    height: 40,
    "& fieldset": {
      borderWidth: "0px !important",
    },
    "& input": {
      borderWidth: "0px !important",
    },
  },
  linksContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  links: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <img src={Logo} width="50px" alt="logo" />
      </div>
      <div>
        <OutlinedInput
          className={classes.search}
          startAdornment={<SearchIcon />}
          placeholder="Search item, collections, collectors or creators"
        />
      </div>
      <div className={classes.linksContainer}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Explore</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>My Items</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Activity</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Charts</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Community</Typography>
        </Link>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          Create
        </Button>
      </div>
      <div>
        <Badge variant="dot" color="primary">
          <NotificationsNoneOutlinedIcon style={{ color: "white" }} />
        </Badge>
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
