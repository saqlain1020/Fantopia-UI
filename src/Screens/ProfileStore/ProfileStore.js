import React from "react";
import StoreBanner from "src/Components/StoreBanner/StoreBanner";
import StoreTabs from "src/Components/StoreTabs/StoreTabs";
import { Container, Grid } from "@material-ui/core";

const ProfileStore = () => {
  return (
    <Container maxWidth="lg" style={{marginTop:40,}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <StoreBanner />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <StoreTabs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileStore;
