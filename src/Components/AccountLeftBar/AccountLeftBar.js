import {
  Button,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.customColors.white,
    borderRadius: 5,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.06)",
  },
  icon: {
    color: theme.palette.primary.main,
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 5,
  },
  heading: {
    fontWeight: 700,
    color: theme.customColors.lightBlack,
  },
  para: {
    color: theme.customColors.veryLightBlack,
    fontWeight: 500,
  },
  btn: {
    color: theme.customColors.white,
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "none",
  },
}));

const AccountLeftBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        style={{ padding: 25, minHeight: 100 }}
        onClick={() => props.history.push("/Account/profile")}
      >
        <div style={{ display: "flex" }}>
          <AccountCircleOutlinedIcon className={classes.icon} />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" className={classes.heading}>
                My Profile
              </Typography>

              <Typography variant="h6" className={classes.heading}>
                {props.location.pathname === "/Account/profile" ? (
                  <RemoveOutlinedIcon />
                ) : (
                  <AddOutlinedIcon />
                )}
              </Typography>
            </div>
            <Typography className={classes.para}>
              You can set preffered display name, create your branded profile
              URL and manage other personel settings
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{ padding: 25, minHeight: 100 }}
        onClick={() => props.history.push("/Account/items")}
      >
        <div style={{ display: "flex" }}>
          <StorefrontOutlinedIcon className={classes.icon} />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" className={classes.heading}>
                My Items
              </Typography>
              <Typography variant="h6" className={classes.heading}>
                {props.location.pathname === "/Account/items" ? (
                  <RemoveOutlinedIcon />
                ) : (
                  <AddOutlinedIcon />
                )}
              </Typography>
            </div>
            <Typography className={classes.para}>
              Review your account, manage products, check stats and much more
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <div style={{ padding: 30 }}>
        <Button
          className={classes.btn}
          fullWidth
          variant="contained"
          color="primary"
        >
          Save Changes!
        </Button>
      </div>
    </div>
  );
};

export default withRouter(AccountLeftBar);
