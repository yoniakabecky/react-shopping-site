import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CartTotal = ({ total }) => {
  const classes = useStyles();
  const { subtotal, taxRate } = total;

  const tax = subtotal * taxRate;
  const invoiceTotal = subtotal + tax;
  const formatPrice = price => `${price.toFixed(2)}`;

  return (
    <Table className={classes.tableWrapper}>
      <TableBody>
        <TableRow>
          <TableCell colSpan={2}>Subtotal</TableCell>
          <TableCell align="right">{subtotal}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tax</TableCell>
          <TableCell align="right">{(taxRate * 100).toFixed(0)} %</TableCell>
          <TableCell align="right">{formatPrice(tax)}</TableCell>
        </TableRow>
        <TableRow className={classes.invoiceTotal}>
          <TableCell colSpan={2} className={classes.invoiceTotal}>
            Total
          </TableCell>
          <TableCell align="right" className={classes.invoiceTotal}>
            $ {formatPrice(invoiceTotal)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
  }
}));

export default CartTotal;
