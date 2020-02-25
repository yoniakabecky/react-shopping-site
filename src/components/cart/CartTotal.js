import React from "react";
import LinkButton from "../layout/LinkButton";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CartTotal = ({ cartTotal }) => {
  const classes = useStyles();
  const { cartSubtotal, cartTax, cartInvoiceTotal, taxRate } = cartTotal;

  const formatPrice = price => `${price.toFixed(2)}`;

  return (
    <div className={classes.tableWrapper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{formatPrice(cartSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{(taxRate * 100).toFixed(0)} %</TableCell>
            <TableCell align="right">{formatPrice(cartTax)}</TableCell>
          </TableRow>
          <TableRow className={classes.invoiceTotal}>
            <TableCell colSpan={2} className={classes.invoiceTotal}>
              Total
            </TableCell>
            <TableCell align="right" className={classes.invoiceTotal}>
              $ {formatPrice(cartInvoiceTotal)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
    float: "right"
  },
  invoiceTotal: {
    color: theme.palette.error.main,
    fontWeight: "bold"
  },
  btnWrapper: {
    margin: "1rem auto",
    float: "left"
  }
}));

export default CartTotal;
