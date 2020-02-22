import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../layout/SectionTitle";
import { withProductConsumer } from "../../context/ProductContext";

import ProductList from "../product/ProductList";

import { makeStyles } from "@material-ui/core/styles";

const FeaturedProducts = ({ context }) => {
  const classes = useStyles();
  const { loading, featuredProducts } = context;

  return (
    <div className={classes.container}>
      <SectionTitle title="Featured Products" />
      <ProductList products={featuredProducts} loading={loading} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global
}));

FeaturedProducts.propTypes = {
  context: PropTypes.object
};

export default withProductConsumer(FeaturedProducts);
