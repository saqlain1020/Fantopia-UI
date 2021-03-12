import React from "react";
import HomeBanner from "src/Components/HomeBanner/HomeBanner";
import HomeFeaturedCollections from "src/Components/HomeFeaturedCollections/HomeFeaturedCollections";
import HomeHowItWorks from "src/Components/HomeHowItWorks/HomeHowItWorks";
import HomeTopCreations from "src/Components/HomeTopCreations/HomeTopCreations";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeFeaturedCollections />
      <HomeTopCreations />
      <HomeHowItWorks/>
    </div>
  );
};

export default Home;
