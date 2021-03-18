import React from "react";
import { Grid } from "@material-ui/core";
import ActivityActivity from "../ActivityActivity/ActivityActivity";
import data from "./data";

const ActivityContainer = () => {
  return (
    <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
      {data.map((item, index) => (
        <Grid item xs={12} key={index}>
          <ActivityActivity {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActivityContainer;
