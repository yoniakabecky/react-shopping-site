import React from "react";
import { withProductConsumer } from "../context/ProductContext";

import heroImage from "../images/productsHero.jpeg";

import Hero from "../components/layout/Hero";
import SectionTitle from "../components/layout/SectionTitle";
import ProductFilter from "../components/product/ProductFilter";
import Footer from "../components/layout/Footer";

import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../components/product/ProductList";

const Products = ({ context }) => {
  const classes = useStyles();
  const { sortedProducts, loading } = context;

  return (
    <>
      <Hero title="our products" img={heroImage} />
      <SectionTitle title="search products" />
      <div className={classes.container}>
        <ProductFilter products={sortedProducts} />
        <ProductList products={sortedProducts} loading={loading} />
      </div>
      <Footer />
    </>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global
}));

export default withProductConsumer(Products);
