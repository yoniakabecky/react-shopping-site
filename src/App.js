import React from "react";
import { Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./utils/theme";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Workshops from "./pages/Workshops";
import SingleWorkshop from "./pages/SingleWorkshop";

const theme = createMuiTheme(MyTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:type" component={SingleProduct} />
        <Route exact path="/Workshops" component={Workshops} />
        <Route exact path="/Workshops/:type" component={SingleWorkshop} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
