import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const SectionTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.hr} />
    </>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  title: {
    ...theme.global.title,
    textAlign: "center"
  }
}));

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
