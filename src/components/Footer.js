import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  const classes = useStyles();
  const thisYear = new Date().getFullYear();
  return (
    <div className={classes.backgroundColor}>
      <div className={classes.container}>
        <MuiLink
          href="https://facebook.com"
          color="textSecondary"
          className={classes.muiLink}
        >
          <FacebookIcon />
        </MuiLink>
        <MuiLink
          href="https://facebook.com"
          color="textSecondary"
          className={classes.muiLink}
        >
          <InstagramIcon />
        </MuiLink>
        <MuiLink
          href="https://facebook.com"
          color="textSecondary"
          className={classes.muiLink}
        >
          <TwitterIcon />
        </MuiLink>
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
    fontSize: "0.8rem",
    color: theme.palette.text.secondary
  },
  container: {
    ...theme.global.container,
    textAlign: "center"
  },
  muiLink: {
    margin: "0 .5rem",
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
}));

export default Footer;
