import React from "react";
import LinkButton from "../layout/LinkButton";

import { makeStyles } from "@material-ui/core/styles";

const ShoppingPane = ({ price, isInCart, addProductToCart, id }) => {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.priceWrapper}>
        <p className={classes.price}>$ {price}</p>
      </div>
      <div className={classes.linkBtnWrapper}>
        <LinkButton link="/products" text="back to list" />
        <LinkButton
          link="/cart"
          color={isInCart ? "default" : "secondary"}
          text={isInCart ? "in cart" : "add to cart"}
          onClick={isInCart ? null : () => addProductToCart(id)}
        />
      </div>
    </section>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,

  priceWrapper: {
    display: "inline-block"
  },
  price: {
    fontSize: "1.5rem",
    flexGrow: 1,
    display: "inline-block",
    margin: "0 auto",
    lineHeight: "3rem",
    fontWeight: "bold"
  },
  linkBtnWrapper: {
    float: "center",
    [theme.breakpoints.up("md")]: {
      float: "right"
    },
    marginTop: "1rem"
  }
}));

export default ShoppingPane;
