import React from "react";
import LinkButton from "../layout/LinkButton";
import CartTotalTable from "./CartTotalTable";

import { makeStyles } from "@material-ui/core/styles";

const CartTotal = ({ cartTotal }) => {
  const classes = useStyles();

  return (
    <div className={classes.tableWrapper}>
      <CartTotalTable cartTotal={cartTotal} />
      <div className={classes.btnWrapper}>
        <LinkButton link="/products" text="back to products" />
        <LinkButton link="/cart/checkout" text="checkout" color="secondary" />
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  tableWrapper: {
    maxWidth: "25rem",
    [theme.breakpoints.up("md")]: {
      float: "right"
    }
  },
  btnWrapper: {
    margin: "1rem auto",
    textAlign: "center"
  }
}));

export default CartTotal;
