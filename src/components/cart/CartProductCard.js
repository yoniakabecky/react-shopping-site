import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const CartProductCard = ({ children, cart }) => {
  const classes = useStyles();

  return (
    <section className={classes.sectionWrapper}>
      {cart.map(item => (
        <Paper key={item.id} className={classes.paper}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} sm={2} className={classes.thumbnailWrapper}>
              <img
                src={item.images[0]}
                alt="thumbnail"
                className={classes.thumbnail}
              />
            </Grid>
            <Grid
              item
              sm
              container
              direction="column"
              className={classes.detailWrapper}
            >
              <Grid item xs sm container>
                <Grid item xs={12} sm className={classes.gridItem}>
                  <Link to={`/products/${item.path}`}>
                    <Typography variant="h6">{item.name}</Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={1} className={classes.gridItem}>
                  <Typography
                    variant="body1"
                    color="secondary"
                    style={{ textAlign: "center" }}
                  >
                    ${item.price}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs sm container>
                {React.cloneElement(children, (item = { item }))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </section>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  sectionWrapper: {
    marginTop: "1rem"
  },
  paper: {
    margin: "1rem auto"
  },
  gridContainer: {
    padding: "0.5rem"
  },
  gridItem: {
    alignSelf: "center",
    textTransform: "capitalize"
  },
  thumbnailWrapper: {
    height: "7rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  thumbnail: {
    height: "6rem",
    width: "6rem",
    objectFit: "cover"
  },
  detailWrapper: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left"
    },
    alignItems: "center"
  },
  name: {
    textTransform: "capitalize"
  }
}));

export default CartProductCard;
