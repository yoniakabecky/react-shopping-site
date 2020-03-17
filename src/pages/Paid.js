import React from "react";
import { Redirect } from "react-router-dom";

import BodyContainer from "../components/layout/BodyContainer";
import LinkButton from "../components/layout/LinkButton";

import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Paid = props => {
  const classes = useStyles();

  if (props.location.state) {
    const { paymentId } = props.location.state;

    return (
      <BodyContainer>
        <article className={classes.container}>
          <section className={classes.sectionBody}>
            <CheckCircleIcon color="secondary" className={classes.checkIcon} />
            <h1>Payment Successful!</h1>
            <p>Thank you for shopping with us.</p>
            <p>Transaction Number: {paymentId}</p>
            <LinkButton link="/" text="back to home" />
          </section>
        </article>
      </BodyContainer>
    );
  } else {
    return <Redirect to="/cart/checkout" />;
  }
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  container: {
    textAlign: "center"
  },
  checkIcon: {
    fontSize: "4rem"
  },
  sectionBody: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

export default Paid;
