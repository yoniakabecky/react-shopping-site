import React from "react";
import { Redirect } from "react-router-dom";

import { withProductConsumer } from "../context/ProductContext";
import BodyContainer from "../components/layout/BodyContainer";
import SectionTitle from "../components/layout/SectionTitle";
import CartProductCard from "../components/cart/CartProductCard";
import CheckoutQtyPane from "../components/cart/CheckoutQtyPane";
import CheckoutTotal from "../components/cart/CheckoutTotal";

import { makeStyles } from "@material-ui/core/styles";

const Checkout = ({ context }) => {
  const classes = useStyles();
  const { cart, cartTotal, clearCart } = context;

  return (
    <BodyContainer>
      <div className={classes.container}>
        <SectionTitle title="checkout" />
        {cart.length > 0 ? (
          <>
            <CartProductCard cart={cart} children={<CheckoutQtyPane />} />
            <CheckoutTotal cartTotal={cartTotal} clearCart={clearCart} />
          </>
        ) : (
          <Redirect to="/cart" />
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
