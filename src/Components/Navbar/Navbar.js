import {
  Button,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React from "react";
import Logo from "src/Assets/Images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link, withRouter } from "react-router-dom";
import Profile from "./Components/Profile";
import ModalManager from "../ModalManager/ModalManager";
import ConnectWallet from "src/Modals/ConnectWallet/ConnectWallet";
import Notifications from "../Notifications/Notifications";

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
    color: theme.customColors.white,
    // background: theme.customColors.bgGrey,
    width: 350,
    height: 40,
    borderColor: "red !important",
    "& fieldset": {
      // borderWidth: "0px !important",
      borderColor: `${theme.palette.secondary.main} !important`,
    },
    "& input": {
      // borderWidth: "0px !important",
      // borderColor:"red !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  linksContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  links: {
    color: theme.customColors.white,
    fontSize: 18,
    fontWeight: 600,
  },
  createBtn: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <div>
        <img
          src={Logo}
          width="50px"
          alt="logo"
          onClick={() => props.history.push("/")}
        />
      </div>
      <div>
        <OutlinedInput
          className={classes.search}
          startAdornment={<SearchIcon />}
          placeholder="Search item, collections, collectors or creators"
        />
      </div>
      <div className={classes.linksContainer}>
        <Link to="/Categories" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Explore</Typography>
        </Link>
        <Link to="/ProfileStore" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>My Items</Typography>
        </Link>
        <Link to="/Activity" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Activity</Typography>
        </Link>
        <Link to="/Charts" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Charts</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>Community</Typography>
        </Link>
      </div>
      <div>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.createBtn}
          onClick={() => setOpen(true)}
        >
          Create
        </Button>
      </div>
      <Notifications />
      <div>
        <Profile />
      </div>
      <ModalManager open={open} close={() => setOpen(false)}>
        <ConnectWallet />
      </ModalManager>
    </div>
  );
};

export default withRouter(Navbar);
