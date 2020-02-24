import React from "react";
import BodyContainer from "../components/layout/BodyContainer";
import Hero from "../components/layout/Hero";

import heroImage from "../images/wall.jpg";

const Error = () => {
  return (
    <BodyContainer>
      <Hero title="page not found" img={heroImage} full />
    </BodyContainer>
  );
};

export default Error;
