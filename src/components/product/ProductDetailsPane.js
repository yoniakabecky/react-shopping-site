import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const ProductDetailsPane = ({ name, description, images, selectImage }) => {
  const classes = useStyles();

  return (
    <section>
      <h2 className={classes.productTitle}>{name}</h2>
      <p className={classes.description}>{description}</p>
      <div className={classes.imagesWrapper}>
        {images.map((image, index) => (
          <ButtonBase key={image} onClick={() => selectImage(index)}>
            <img src={image} alt="product" className={classes.image} />
          </ButtonBase>
        ))}
      </div>
    </section>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  productTitle: {
    textTransform: "capitalize"
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
  description: {
    color: theme.palette.text.secondary
  }
}));

export default ProductDetailsPane;
