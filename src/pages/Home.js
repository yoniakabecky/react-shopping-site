import React from "react";
import Hero from "../components/Hero";

import heroImage from "../images/hero.jpeg";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Hero img={heroImage} title="macramé shop 37" subtitle="welcome" />
      <About />
    </>
  );
};

export default Home;
