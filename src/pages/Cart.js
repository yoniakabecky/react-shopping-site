import React from "react";
import { withProductConsumer } from "../context/ProductContext";

import BodyContainer from "../components/layout/BodyContainer";
import SectionTitle from "../components/layout/SectionTitle";
import CartList from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";
import EmptyCart from "../components/cart/EmptyCart";

import { makeStyles } from "@material-ui/core/styles";

const Cart = ({ context }) => {
  const classes = useStyles();
  const { cart, cartSubtotal, cartTax, cartInvoiceTotal, taxRate } = context;
  const cartTotal = {
    cartSubtotal,
    cartTax,
    cartInvoiceTotal,
    taxRate
  };

  return (
    <BodyContainer>
      <div className={classes.container}>
        <SectionTitle title="your cart" />
        {cart.length > 0 ? (
          <>
            <CartList cart={cart} context={context} />
            <CartTotal cartTotal={cartTotal} />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </BodyContainer>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  container: {
    ...theme.global.container,
    marginTop: 100
  },
  table: {
    minWidth: 700
  }
}));

export default withProductConsumer(Cart);
