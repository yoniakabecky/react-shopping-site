import React from "react";
import { withProductConsumer } from "../context/ProductContext";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import Error from "./Error";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import defaultImage from "../images/productsHero.jpeg";
import { Button } from "@material-ui/core";

const SingleProduct = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    path: props.match.params.type,
    defaultImage
  });

  const { getProductDetails } = props.context;
  const product = getProductDetails(state.path);

  if (!product) {
    return <Error />;
  }

  const { name, price, description, inCart, images } = product;
  const [mainImage, ...otherImages] = images;

  return (
    <div>
      <Hero title={name} img={images[0]} />
      <div className={classes.container}>
        <Grid container>
          <Grid item>
            <Card className={classes.mainImageWrapper}>
              <img
                src={mainImage}
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
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <h4 className={classes.title}>{name}</h4>
                <p className={classes.description}>{description}</p>
                <div className={classes.imagesWrapper}>
                  {otherImages.map(image => (
                    <img
                      key={image}
                      src={image}
                      alt="product"
                      className={classes.image}
                    />
                  ))}
                </div>
              </Grid>
              <Grid item className={classes.priceWrapper}>
                <h5 className={classes.price}>
                  $ {price} <span className={classes.priceTax}>(tax inc.)</span>
                </h5>
                <Link to="/products">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    back to list
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                  >
                    add to cart
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  mainImageWrapper: {
    height: "90%",
    width: "20rem",
    margin: "1rem",
    textAlign: "center",
    position: "relative",
    background: "rgba(200, 200, 200, 0.5)"
  },
  mainImage: {
    display: "block",
    maxHeight: "auto",
    maxWidth: "20rem",
    borderRadius: "0.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  descriptionWrapper: {
    margin: "0rem 1rem 3rem 1rem"
  },
  imagesWrapper: {},
  image: {
    height: "5rem",
    margin: "0.5rem"
  },
  priceWrapper: {
    display: "flex",
    flexDirection: "row"
  },
  price: {
    fontSize: "1.5rem",
    flexGrow: 1,
    display: "inline-block",
    margin: "0 auto"
  },
  priceTax: {
    fontSize: "0.8rem"
  },
  description: {
    color: theme.palette.text.secondary
  },
  btn: {
    margin: "0 1rem"
  }
}));

export default withProductConsumer(SingleProduct);
