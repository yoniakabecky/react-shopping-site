import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CheckoutQtyPane = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm className={classes.gridItem}>
        <Typography variant="body1" color="primary">
          Qty: {item.count}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} md={2} className={classes.gridItem}>
        <Typography variant="body1" color="error" className={classes.itemTotal}>
          Item Total: ${item.total}
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
  itemTotal: {
    fontSize: "1.1rem",
    textAlign: "center"
  }
}));

export default CheckoutQtyPane;
