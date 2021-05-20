import React from "react";
import { Grid } from "@material-ui/core";
import ActivityActivity from "../ActivityActivity/ActivityActivity";
import data from "./data";
import LoadingImg from 'src/Assets/Icons/activityloading.png'

const ActivityContainer = () => {
  return (
    <Grid container spacing={1} style={{ marginTop: 20, marginBottom: 20 }}>
      {data.map((item, index) => (
        <Grid item xs={12} key={index}>
          <ActivityActivity {...item} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <center>
        <img src={LoadingImg} className="Activity_loading" alt=""/>
        </center>
      </Grid>
    </Grid>
  );
};

export default ActivityContainer;
