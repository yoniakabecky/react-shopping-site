import React from "react";
import BodyContainer from "../components/layout/BodyContainer";

import { makeStyles } from "@material-ui/core/styles";
import SectionTitle from "../components/layout/SectionTitle";

const Checkout = props => {
  const classes = useStyles();

  return (
    <BodyContainer>
      <div className={classes.container}>
        <SectionTitle title="checkout" />
        <h1 style={{ textAlign: "center" }}>Sorry Still in Progress</h1>
      </div>
    </BodyContainer>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    ...theme.global.container,
    marginTop: 100
  }
}));

export default Checkout;
