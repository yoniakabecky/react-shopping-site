import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CartTotalTable = ({ cartTotal }) => {
  const classes = useStyles();
  const { cartSubtotal, cartTax, cartInvoiceTotal, taxRate } = cartTotal;

  const formatPrice = price => `${price.toFixed(2)}`;

  return (
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
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  invoiceTotal: {
    color: theme.palette.error.main,
    fontWeight: "bold"
  }
}));

export default CartTotalTable;
