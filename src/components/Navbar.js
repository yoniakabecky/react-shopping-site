import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.container}>
          <Link to="/">
            <img src={logo} alt="home" className={classes.logo} />
          </Link>
          <Typography variant="h4" className={classes.storeName}>
            Macramé Shop 37
          </Typography>
          <div className={classes.menu}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              className={classes.menuBtn}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/products"
              color="inherit"
              className={classes.menuBtn}
            >
              Products
            </Button>
          </div>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  logo: {
    width: "3.5rem",
    marginRight: "1rem"
  },
  storeName: {
    ...theme.fonts.title
  },
  menu: {
    flexGrow: 1,
    marginLeft: "4rem"
  },
  menuBtn: {
    margin: "0 0.5rem"
  }
}));

export default Navbar;
