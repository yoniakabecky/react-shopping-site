import React from "react";
import Hero from "../components/Hero";

import heroImage from "../images/hero.jpeg";
import About from "../components/About";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import MakeYourOwn from "../components/MakeYourOwn";

const Home = () => {
  return (
    <>
      <Hero img={heroImage} title="macramé shop 37" subtitle="welcome" full />
      <FeaturedProducts />
      <About />
      <MakeYourOwn />
      <Footer />
    </>
  );
};

export default Home;
