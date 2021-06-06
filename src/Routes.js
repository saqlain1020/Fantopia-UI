import React from "react";
import { Route, Switch } from "react-router";
import Account from "./Screens/Account/Account";
import Activity from "./Screens/Activity/Activity";
import Categories from "./Screens/Categories/Categories";
import Charts from "./Screens/Charts/Charts";
import CreateItem from "./Screens/CreateItem/CreateItem";
import Home from "./Screens/Home/Home";
import Product from "./Screens/Product/Product";
import ProfileStore from "./Screens/ProfileStore/ProfileStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Account" component={Account} />
      <Route path="/ProfileStore" component={ProfileStore} />
      <Route path="/collection/:address:tokenId" component={Product} />
      <Route path="/Categories" component={Categories} />
      <Route path="/CreateItem" component={CreateItem} />
      <Route path="/Activity" component={Activity} />
      <Route path="/Charts" component={Charts} />
    </Switch>
  );
};

export default Routes;
