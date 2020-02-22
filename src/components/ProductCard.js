import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { name, images, path, price } = product;

  return (
    <Link to={`/products/${path}`}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="product main"
            image={images[0]}
            title={name}
            className={classes.image}
          />
          <CardContent className={classes.cardWrapper}>
            <h4 className={classes.name}>{name}</h4>
            <h4 className={classes.price}>$ {price}</h4>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  card: {
    maxWidth: "18rem",
    minWidth: "15rem",
    margin: "1rem"
  },
  image: {
    height: "10rem"
  },
  cardWrapper: {
    padding: "0 1rem",
    fontSize: "1rem"
  },
  name: {
    float: "left",
    textTransform: "capitalize"
  },
  price: {
    float: "right"
  }
}));

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
