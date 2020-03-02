import React from "react";
import { withProductConsumer } from "../context/ProductContext";

import Hero from "../components/layout/Hero";
import Error from "./Error";
import BodyContainer from "../components/layout/BodyContainer";
import LinkButton from "../components/layout/LinkButton";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import defaultImage from "../images/productsHero.jpeg";

const SingleProduct = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    path: props.match.params.type,
    defaultImage
  });

  const { getProductDetails, addProductToCart } = props.context;
  const product = getProductDetails(state.path);

  if (!product) {
    return <Error />;
  }

  const { id, name, price, description, inCart, images } = product;
  // const [mainImage, ...otherImages] = images;

  return (
    <BodyContainer>
      <Hero title={name} img={images[0]} />
      <div className={classes.container}>
        <Grid container spacing={2}>
          <Grid item>
            <Card className={classes.mainImageWrapper}>
              <img
                src={images[0]}
                alt="product main"
                className={classes.mainImage}
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            className={classes.descriptionWrapper}
          >
            <Grid item xs container direction="column">
              <Grid item xs>
                <h2 className={classes.productTitle}>{name}</h2>
                <p className={classes.description}>{description}</p>
                <div className={classes.imagesWrapper}>
                  {images.map(image => (
                    <img
                      key={image}
                      src={image}
                      alt="product"
                      className={classes.image}
                    />
                  ))}
                </div>
              </Grid>
              <Grid item container spacing={2} justify="space-between">
                <Grid item xs>
                  <h5 className={classes.price}>$ {price}</h5>
                </Grid>
                <Grid item className={classes.linkBtn}>
                  <LinkButton link="/products" text="back to list" />
                  <LinkButton
                    link="/cart"
                    color={inCart ? "default" : "secondary"}
                    text={inCart ? "in cart" : "add to cart"}
                    onClick={inCart ? null : () => addProductToCart(id)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </BodyContainer>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  container: {
    ...theme.global.container,
    margin: "2rem auto"
  },
  mainImageWrapper: {
    height: "25rem",
    width: "20rem",
    margin: "1rem",
    textAlign: "center",
    position: "relative",
    background: "rgba(200, 200, 200, 0.5)",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  mainImage: {
    display: "block",
    width: "100%",
    borderRadius: "0.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  productTitle: {
    textTransform: "capitalize"
  },
  descriptionWrapper: {
    margin: "0rem 1rem 3rem 1rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    }
  },
  imagesWrapper: {
    marginBottom: "2rem"
  },
  image: {
    height: "6rem",
    width: "6rem",
    margin: "0.5rem",
    objectFit: "cover"
  },
  linkBtn: {
    margin: "0 auto"
  },
  price: {
    fontSize: "1.5rem",
    flexGrow: 1,
    display: "inline-block",
    margin: "0 auto"
  },
  description: {
    color: theme.palette.text.secondary
  },
  btn: {
    margin: "1rem"
  }
}));

export default withProductConsumer(SingleProduct);
