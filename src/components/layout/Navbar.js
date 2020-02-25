import React from "react";
import { Link } from "react-router-dom";
import { withProductConsumer } from "../../context/ProductContext";

import logo from "../../images/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = ({ context }) => {
  const classes = useStyles();
  const { cart } = context;

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
            <Button
              component={Link}
              to="/workshops"
              color="inherit"
              className={classes.menuBtn}
            >
              Workshops
            </Button>
          </div>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary" variant="dot">
              <ShoppingCartIcon />
            </Badge>
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

export default withProductConsumer(Navbar);
