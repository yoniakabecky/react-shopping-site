import React from "react";
import { withRouter } from "react-router-dom";

import LinkButton from "../layout/LinkButton";
import CartTotalTable from "./CartTotalTable";
import PayPalBtn from "./PayPalButton";

import { makeStyles } from "@material-ui/core/styles";

const CheckoutTotal = ({ cartTotal, clearCart, history }) => {
  const classes = useStyles();

  return (
    <div className={classes.tableWrapper}>
      <CartTotalTable cartTotal={cartTotal} />
      <div className={classes.btnWrapper}>
        <LinkButton link="/cart" text="cancel" color="default" />
        <span style={{ margin: "1rem" }}>
          <PayPalBtn
            total={cartTotal.cartInvoiceTotal}
            clearCart={clearCart}
            history={history}
          />
        </span>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  tableWrapper: {
    maxWidth: "25rem",
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

export default withRouter(CheckoutTotal);
