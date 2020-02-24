import React from "react";
import BodyContainer from "../components/layout/BodyContainer";

import SectionTitle from "../components/layout/SectionTitle";
import CartList from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";
import EmptyCart from "../components/cart/EmptyCart";

import { makeStyles } from "@material-ui/core/styles";

const cart = [
  {
    name: "shopping bag",
    price: 20,
    count: 10,
    total: 0,
    images: ["/static/media/bag1.0c93097e.jpeg"],
    id: "1"
  },
  {
    name: "round bag",
    price: 40,
    count: 0,
    total: 0,
    images: [
      "/static/media/bag2.1057e5be.jpeg",
      "/static/media/bag2-detail1.0d887d47.jpeg"
    ],
    id: "2"
  }
];

const tempSubtotal = {
  subtotal: 100,
  taxRate: 0.13
};

const Cart = () => {
  const classes = useStyles();

  return (
    <BodyContainer>
      <div className={classes.container}>
        <SectionTitle title="your cart" />
        {cart.length > 0 ? (
          <>
            <CartList cart={cart} />
            <CartTotal total={tempSubtotal} />
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

export default Cart;
