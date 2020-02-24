import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const LinkButton = ({ link, variant, color, text }) => {
  return (
    <Link to={link}>
      <Button
        variant={variant ? variant : "contained"}
        color={color ? color : "primary"}
        style={{ margin: "0.5rem" }}
      >
        {text}
      </Button>
    </Link>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default LinkButton;
