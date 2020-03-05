import React from "react";
import { withProductConsumer } from "../context/ProductContext";

import heroImage from "../images/productsHero.jpeg";

import Hero from "../components/layout/Hero";
import SectionTitle from "../components/layout/SectionTitle";
import ProductFilter from "../components/product/ProductFilter";
import BodyContainer from "../components/layout/BodyContainer";

import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../components/product/ProductList";

const Products = ({ context }) => {
  const classes = useStyles();
  const { sortedProducts, loading } = context;

  return (
    <BodyContainer>
      <Hero title="our products" img={heroImage} />
      <article className={classes.container}>
        <SectionTitle title="search products" />
        <ProductFilter products={sortedProducts} />
        <ProductList products={sortedProducts} loading={loading} />
      </article>
    </BodyContainer>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global
}));

export default withProductConsumer(Products);
