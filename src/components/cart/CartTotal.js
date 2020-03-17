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
    maxWidth: "30rem",
    minWidth: "20rem",
    [theme.breakpoints.up("sm")]: {
      float: "right",
      width: "27vw"
    }
  },
  btnWrapper: {
    margin: "1rem auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
    alignItems: "center",
    justifyContent: "space-around"
  }
}));

export default CartTotal;
