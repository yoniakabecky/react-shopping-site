import React from "react";
import BodyContainer from "../components/layout/BodyContainer";
import Hero from "../components/layout/Hero";

import heroImage from "../images/workshopHero.jpeg";
import LinkButton from "../components/layout/LinkButton";

const Workshops = () => {
  return (
    <BodyContainer>
      <Hero
        title="Workshops"
        subtitle="let's make it together"
        img={heroImage}
      />
      <div style={{ textAlign: "center" }}>
        <h1>No available workshop at this moment.</h1>
        <LinkButton link="/" text="back to home" />
      </div>
    </BodyContainer>
  );
};

export default Workshops;
