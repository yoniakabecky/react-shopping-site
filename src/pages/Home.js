import React from "react";
import Hero from "../components/layout/Hero";
import About from "../components/home/About";
import FeaturedProducts from "../components/home/FeaturedProducts";
import MakeYourOwn from "../components/home/MakeYourOwn";

import heroImage from "../images/hero.jpeg";
import BodyContainer from "../components/layout/BodyContainer";

const Home = () => {
  return (
    <BodyContainer>
      <Hero img={heroImage} title="macramé shop 37" subtitle="welcome" full />
      <FeaturedProducts />
      <About />
      <MakeYourOwn />
    </BodyContainer>
  );
};

export default Home;
