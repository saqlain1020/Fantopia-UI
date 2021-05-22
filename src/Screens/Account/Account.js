import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Route } from "react-router";
import AccountBanner from "src/Components/AccountBanner/AccountBanner";
import AccountItems from "src/Components/AccountItems/AccountItems";
import AccountLeftBar from "src/Components/AccountLeftBar/AccountLeftBar";
import AccountProfile from "src/Components/AccountProfile/AccountProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.customColors.veryLightBg
  },
  // grid:{
  //     display:"grid",
  //     gridTemplateColumns: "350px 1fr",
  //     [theme.breakpoints.down('xs')]:{
  //         gridTemplateColumns: "1fr",
  //         gridTemplateRows: 'min-content 1fr'
  //     }
  // }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AccountBanner />
      {/* <Container maxWidth="lg" className={classes.grid}> */}
      <Container maxWidth="lg">
        <div style={{ paddingLeft: 10, paddingBottom: 20 }}>
          <Route path="/Account/items" component={AccountItems} />
          <Route path="/Account/profile" component={AccountProfile} />
        </div>
      </Container>
    </div>
  );
};

export default Account;
