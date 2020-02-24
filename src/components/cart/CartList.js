import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AddIcon from "@material-ui/icons/AddBox";
import MinusIcon from "@material-ui/icons/IndeterminateCheckBox";

const CartList = ({ cart }) => {
  const classes = useStyles();

  return (
    <div className={classes.listWrapper}>
      {cart.map(item => (
        <Paper key={item.id} className={classes.paper}>
          <Grid container className={classes.gridWrapper}>
            <Grid item xs={12} sm={2} className={classes.thumbnailWrapper}>
              <img
                src={item.images[0]}
                alt="thumbnail"
                className={classes.thumbnail}
              />
            </Grid>
            <Grid item xs sm container>
              <Grid item xs md container direction="column">
                <Grid item md className={classes.name}>
                  <Typography variant="h6">{item.name}</Typography>
                </Grid>
                <Grid item className={classes.qtyWrapper}>
                  <Typography variant="body1" color="primary">
                    Qty:{" "}
                    <IconButton
                      color="primary"
                      onClick={() => console.log("qty decreased")}
                    >
                      <MinusIcon
                        fontSize="small"
                        className={classes.qtyIcons}
                      />
                    </IconButton>
                    <span className={classes.qtyCount}>{item.count}</span>
                    <IconButton
                      color="primary"
                      onClick={() => console.log("qty increased")}
                    >
                      <AddIcon fontSize="small" className={classes.qtyIcons} />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sm={1}
                container
                direction="column"
                alignItems="center"
              >
                <Grid item md>
                  <Typography variant="h6" color="error">
                    ${item.price}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log("item removed")}
                  >
                    Remove
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  listWrapper: {
    marginTop: "1rem"
  },
  paper: {
    margin: "1rem auto"
  },
  gridWrapper: {
    padding: "0.5rem"
  },
  thumbnailWrapper: {
    height: "7rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  thumbnail: {
    maxWidth: "10rem",
    maxHeight: "7rem"
  },
  name: {
    textTransform: "capitalize"
  },
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

export default CartList;