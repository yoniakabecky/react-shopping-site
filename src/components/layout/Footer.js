import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const socialIcons = [
  { icon: <FacebookIcon />, href: "https://facebook.com" },
  { icon: <InstagramIcon />, href: "https://instagram.com" },
  { icon: <TwitterIcon />, href: "https://twitter.com" }
];

const Footer = () => {
  const classes = useStyles();
  const thisYear = new Date().getFullYear();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.alignCenter}>
        {socialIcons.map((item, index) => (
          <MuiLink
            href={item.href}
            color="textSecondary"
            className={classes.muiLink}
            target="_blank"
            key={index}
          >
            {item.icon}
          </MuiLink>
        ))}

        <p className={classes.copyright}>©{thisYear} Macramé Shop 37</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  footerWrapper: {
    width: "100%",
    paddingTop: "1rem",
    minHeight: "5rem",
    flexShrink: 0,
    background: theme.palette.primary.light
  },
  copyright: {
    fontSize: "0.8rem",
    color: theme.palette.text.secondary
  },
  alignCenter: {
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
