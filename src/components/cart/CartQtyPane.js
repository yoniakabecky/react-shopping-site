import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AddIcon from "@material-ui/icons/AddBox";
import MinusIcon from "@material-ui/icons/IndeterminateCheckBox";

const CartQtyPane = ({ item, changeQty, removeProduct }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm className={classes.qtyWrapper}>
        <Typography variant="body1" color="primary">
          Qty:{" "}
          <IconButton
            color="primary"
            onClick={() => changeQty(item.id, "decrease")}
          >
            <MinusIcon fontSize="small" className={classes.qtyIcons} />
          </IconButton>
          <span className={classes.qtyCount}>{item.count}</span>
          <IconButton
            color="primary"
            onClick={() => changeQty(item.id, "increase")}
          >
            <AddIcon fontSize="small" className={classes.qtyIcons} />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={1} md={1}>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ cursor: "pointer" }}
          onClick={() => removeProduct(item.id)}
        >
          Remove
        </Typography>
      </Grid>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  qtyWrapper: {
    marginBottom: "-0.5rem"
  },
  qtyIcons: {
    marginBottom: "0.2rem"
  },
  qtyCount: {
    fontSize: "1.2rem"
  }
}));

export default CartQtyPane;
