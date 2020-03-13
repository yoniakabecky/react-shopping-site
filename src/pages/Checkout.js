import React from "react";
import { withProductConsumer } from "../context/ProductContext";
import BodyContainer from "../components/layout/BodyContainer";
import SectionTitle from "../components/layout/SectionTitle";
import CartProductCard from "../components/cart/CartProductCard";
import CheckoutQtyPane from "../components/cart/CheckoutQtyPane";

import { makeStyles } from "@material-ui/core/styles";
import CheckoutTotal from "../components/cart/CheckoutTotal";

const Checkout = ({ context }) => {
  const classes = useStyles();
  const { cart, cartTotal } = context;

  return (
    <BodyContainer>
      <div className={classes.container}>
        <SectionTitle title="checkout" />
        {cart.length > 0 ? (
          <>
            <CartProductCard cart={cart} children={<CheckoutQtyPane />} />
            <CheckoutTotal cartTotal={cartTotal} />
          </>
        ) : (
          // TODO: Redirect to Cart Page
          <h1 style={{ textAlign: "center" }}>Sorry Still in Progress</h1>
        )}
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

export default withProductConsumer(Checkout);
