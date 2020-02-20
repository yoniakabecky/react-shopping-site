import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle";
import { withProductConsumer } from "../context/ProductContext";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ context }) => {
  const classes = useStyles();
  const { loading, products, featuredProducts } = context;
  return (
    <div className={classes.container}>
      <SectionTitle title="Featured Products" />

      <div className={classes.sectionBody}>
        {loading ? (
          <CircularProgress color="secondary" size="4rem" />
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  sectionBody: {
    ...theme.global.sectionBody,
    flexWrap: "no-wrap"
  }
}));

FeaturedProducts.propTypes = {
  context: PropTypes.object
};

export default withProductConsumer(FeaturedProducts);
