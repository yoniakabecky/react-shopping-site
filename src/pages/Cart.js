import React from "react";
import { withProductConsumer } from "../context/ProductContext";

import BodyContainer from "../components/layout/BodyContainer";
import SectionTitle from "../components/layout/SectionTitle";
import CartList from "../components/cart/CartProductCard";
import CartTotal from "../components/cart/CartTotal";
import EmptyCart from "../components/cart/EmptyCart";

import { makeStyles } from "@material-ui/core/styles";
import CartQtyPane from "../components/cart/CartQtyPane";

const Cart = ({ context }) => {
  const classes = useStyles();
  const { cart, cartTotal, changeQty, removeProduct } = context;

  return (
    <BodyContainer>
      <section className={classes.container}>
        <SectionTitle title="your cart" />
        {cart.length > 0 ? (
          <>
            <CartList
              cart={cart}
              children={
                <CartQtyPane
                  changeQty={changeQty}
                  removeProduct={removeProduct}
                />
              }
            />
            <CartTotal cartTotal={cartTotal} />
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
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
