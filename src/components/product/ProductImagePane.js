import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const ProductImagePane = ({ img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.mainImageWrapper}>
      <img src={img} alt="product main" className={classes.mainImage} />
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
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
  }
}));

export default ProductImagePane;
