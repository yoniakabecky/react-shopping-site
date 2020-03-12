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
      <Grid item xs={12} sm className={classes.gridItem}>
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
      <Grid item xs={12} sm={1} md={1} className={classes.gridItem}>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.removeBtn}
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
  gridItem: {
    alignSelf: "center"
  },
  qtyIcons: {
    marginBottom: "0.2rem"
  },
  qtyCount: {
    fontSize: "1.2rem"
  },
  removeBtn: {
    cursor: "pointer",
    textAlign: "center"
  }
}));

export default CartQtyPane;
