import React from "react";
import LinkButton from "../layout/LinkButton";

const styles = {
  wrapper: {
    textTransform: "capitalize",
    textAlign: "center",
    marginTop: "4rem"
  }
};

const EmptyCart = () => {
  return (
    <div style={styles.wrapper}>
      <h2>Your shopping cart is empty.</h2>
      <LinkButton link="/products" text="back to products" />
    </div>
  );
};

export default EmptyCart;
