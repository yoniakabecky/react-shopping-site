import React from "react";
import { withProductConsumer } from "../context/ProductContext";

import Hero from "../components/layout/Hero";
import Error from "./Error";
import BodyContainer from "../components/layout/BodyContainer";
import ProductImagePane from "../components/product/ProductImagePane";
import ProductDetailsPane from "../components/product/ProductDetailsPane";
import ShoppingPane from "../components/product/ShoppingPane";
import ProductImageModal from "../components/product/ProductImageModal";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SingleProduct = ({ match, context }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up("md"));

  const path = match.params.type;
  const [showImage, setShowImage] = React.useState(null);
  const [modal, setModal] = React.useState({
    open: false,
    image: null,
    leftClick: false,
    rightClick: false
  });

  const { getProductDetails, addProductToCart } = context;
  const product = getProductDetails(path);

  if (!product) {
    return <Error />;
  }

  const { id, name, price, description, inCart, images } = product;
  const mainImage = images[0];

  const selectImage = index => {
    if (isDesktop) {
      setShowImage(images[index]);
    } else {
      setModalImage(index);
    }
  };

  const setModalImage = index => {
    const [leftClick, rightClick] = checkIndex(index);
    setModal({
      open: true,
      index: index,
      leftClick,
      rightClick
    });
  };

  const changeImage = direction => {
    let tempIndex = modal.index;
    direction === "right" ? tempIndex++ : tempIndex--;
    setModalImage(tempIndex);
  };

  const checkIndex = index => {
    const numOfImages = images.length;
    let tempLeft = true;
    let tempRight = true;
    if (index <= 0) tempLeft = false;
    if (index >= numOfImages - 1) tempRight = false;
    return [tempLeft, tempRight];
  };

  const handleClose = () => {
    setModal({
      open: false
    });
  };

  return (
    <BodyContainer>
      <Hero title={name} img={mainImage} />
      <article className={classes.container}>
        <Grid container spacing={2}>
          <Grid item>
            <ProductImagePane img={showImage ? showImage : mainImage} />
          </Grid>
          <Grid item xs={12} sm container className={classes.rightPane}>
            <ProductDetailsPane
              name={name}
              description={description}
              images={images}
              selectImage={selectImage}
            />
            <ShoppingPane
              price={price}
              isInCart={inCart}
              addProductToCart={addProductToCart}
              id={id}
            />
          </Grid>
        </Grid>
        {isDesktop ? null : (
          <ProductImageModal
            modal={modal}
            image={images[modal.index]}
            changeImage={changeImage}
            handleClose={handleClose}
          />
        )}
      </article>
    </BodyContainer>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  container: {
    ...theme.global.container,
    margin: "2rem auto"
  },
  rightPane: {
    margin: "0 1rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  linkBtn: {
    margin: "0 auto"
  }
}));

export default withProductConsumer(SingleProduct);
