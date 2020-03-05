import React from "react";
import PropTypes from "prop-types";

import ProductCard from "./ProductCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const ProductList = ({ products, loading }) => {
  const classes = useStyles();

  if (products.length === 0) {
    return (
      <h3 style={{ textAlign: "center" }}>
        unfortunately no products matched your search
      </h3>
    );
  }

  return (
    <section className={classes.sectionBody}>
      <Grid container spacing={3}>
        {loading ? (
          <CircularProgress color="secondary" size="4rem" />
        ) : (
          products.map(product => (
            <Grid item xs key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </section>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global
}));

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ProductList;
