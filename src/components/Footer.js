import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const classes = useStyles();
  const thisYear = new Date().getFullYear();
  return (
    <div className={classes.backgroundColor}>
      <div className={classes.container}>
        <p className={classes.copyright}>©{thisYear} Macramé Shop 37</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  backgroundColor: {
    background: theme.palette.primary.light,
    padding: "1rem"
  },
  copyright: {
    textAlign: "center",
    fontSize: "0.8rem",
    color: theme.palette.text.secondary
  }
}));

export default Footer;
