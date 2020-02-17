import React from "react";
import Hero from "../components/Hero";

import heroImage from "../images/hero.jpeg";

const Home = () => {
  return (
    <>
      <Hero img={heroImage} title="macramé shop 37" subtitle="welcome" />
    </>
  );
};

export default Home;
