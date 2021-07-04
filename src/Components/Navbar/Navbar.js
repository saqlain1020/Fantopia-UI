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
import Notifications from "../Notifications/Notifications";
import { useWalletModal, useWeb3 } from "@react-dapp/wallet";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import UserName from "./../UserName/UserName";
import { LOCALE } from "src/Config/localization";
import { useLang, useUser } from "src/State/hooks";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: 70,
    display: "grid",
    gridTemplateColumns:
      "min-content min-content 1fr min-content min-content min-content min-content",
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
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { open, setOpen } = useWalletModal();
  const { account } = useWeb3();
  const lang = useLang();
  const { user } = useUser();

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
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>
            {LOCALE.EXPLORE[lang]}
          </Typography>
        </Link>
        <Link to="/CreateItem" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>
            {LOCALE.CREATE[lang]}
          </Typography>
        </Link>
        <Link to="/ProfileStore" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>
            {LOCALE.MY_PROFILE[lang]}
          </Typography>
        </Link>
        {/* <Link to="/Activity" style={{ textDecoration: "none" }}>
          <Typography className={classes.links}>{LOCALE.ACCOUNT[lang]}</Typography>
        </Link> */}
      </div>
      <div>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.createBtn}
          onClick={() => setOpen(true)}
        >
          {account ? account.substring(0, 5) + "..." : "Connect"}
        </Button>
      </div>
      <Notifications />
      <div>
        {/* <Profile /> */}
        <UserName
          image={user?.profilePic}
          noName
          onClick={() => props.history.push("/Account/profile")}
        />
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default withRouter(Navbar);
