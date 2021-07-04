import React from "react";
import { Route, Switch } from "react-router";
import Account from "./Screens/Account/Account";
import Activity from "./Screens/Activity/Activity";
import Categories from "./Screens/Categories/Categories";
import Charts from "./Screens/Charts/Charts";
import Collection from "./Screens/Collection/Collection";
import CreateItem from "./Screens/CreateItem/CreateItem";
import Home from "./Screens/Home/Home";
import PendingApprovals from "./Screens/PendingApprovals/PendingApprovals";
import Product from "./Screens/Product/Product";
import ProfileStore from "./Screens/ProfileStore/ProfileStore";
import ShortUrl from "./Screens/ShortUrl/ShortUrl";
import Test from "./Screens/Test/Test";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Account" component={Account} />
      <Route path="/ProfileStore" component={ProfileStore} />
      <Route path="/collection/:address/:tokenId/:buynow" component={Product} />
      <Route path="/collection/:address/:tokenId" component={Product} />
      <Route path="/collection/:address" component={Collection} />
      <Route path="/explore" component={Categories} />
      <Route path="/CreateItem" component={CreateItem} />
      <Route path="/Activity" component={Activity} />
      <Route path="/Charts" component={Charts} />
      <Route path="/pending-approvals" component={PendingApprovals} />
      <Route path="/test" component={Test} />
      <Route path="/:shortUrl" component={ShortUrl} />
    </Switch>
  );
};

export default Routes;
