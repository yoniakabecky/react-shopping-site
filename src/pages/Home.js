import React from "react";
import Hero from "../components/layout/Hero";
import About from "../components/home/About";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Footer from "../components/layout/Footer";
import MakeYourOwn from "../components/home/MakeYourOwn";

import heroImage from "../images/hero.jpeg";

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
