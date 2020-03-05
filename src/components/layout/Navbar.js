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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";

const menuItem = [
  { menu: "Home", link: "/" },
  { menu: "Products", link: "/products" },
  { menu: "Workshops", link: "/workshops" }
];

const Navbar = ({ context }) => {
  const classes = useStyles();
  const { cart } = context;
  const [open, setOpen] = React.useState(false);

  const mobileMenu = (
    <SwipeableDrawer
      anchor="top"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      classes={{
        paper: classes.paper
      }}
    >
      <List>
        {menuItem.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.link}
            onClick={() => setOpen(false)}
            className={classes.listItems}
          >
            {item.menu}
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.container}>
          <menu className={classes.desktopMenu}>
            <Link to="/">
              <img src={logo} alt="home" className={classes.logo} />
            </Link>
            <Typography variant="h1" className={classes.storeName}>
              Macramé Shop 37
            </Typography>

            {menuItem.map((item, index) => (
              <Button
                component={Link}
                to={item.link}
                color="inherit"
                className={classes.menuBtn}
                key={index}
              >
                {item.menu}
              </Button>
            ))}
          </menu>
          <IconButton
            color="inherit"
            className={classes.mobileMenu}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />

          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary" variant="dot">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  container: {
    [theme.breakpoints.up("md")]: {
      ...theme.global.container
    }
  },
  logo: {
    width: "3.5rem",
    marginRight: "1rem"
  },
  storeName: {
    ...theme.fonts.title,
    fontSize: "2rem",
    marginRight: "4rem"
  },
  menuBtn: {
    margin: "0 0.5rem"
  },
  desktopMenu: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    margin: "0 auto"
  },
  mobileMenu: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grow: {
    flexGrow: 1
  },
  paper: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  listItems: {
    display: "inline-block",
    lineHeight: "2rem",
    textAlign: "center"
  }
}));

export default withProductConsumer(Navbar);
