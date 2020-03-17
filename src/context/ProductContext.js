import React, { Component, createContext } from "react";
import client from "../utils/contentful";

export const ProductContext = createContext();

const TAX_RATE = 0.13;

export default class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    category: "all",
    categories: [],
    price: [0, 0],
    minPrice: 0,
    maxPrice: 0,
    sort: "price: low to high",
    cart: [],
    cartTotal: {
      cartSubtotal: 0,
      cartTax: 0,
      taxRate: TAX_RATE,
      cartInvoiceTotal: 0
    }
  };

  getData = async () => {
    let contentfulData = await client
      .getEntries({
        content_type: "macrameProducts",
        order: "fields.price"
      })
      .then(function(entries) {
        return entries.items;
      })
      .catch(error => console.error(error));

    let products = this.formatData(contentfulData);
    let featuredProducts = products.filter(
      product => product.featured === true
    );

    let maxPrice = Math.max(...products.map(product => product.price));

    let categories = this.getUniqueItem(products, "category");
    categories = ["all", ...categories];

    this.setState({
      products,
      featuredProducts,
      sortedProducts: products,
      loading: false,
      price: [0, maxPrice],
      maxPrice,
      categories
    });
  };

  componentDidMount() {
    this.getData();
  }

  // products filter
  getUniqueItem = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

  handleChange = name => event => {
    this.setState(
      {
        [name]: event.target.value
      },
      this.filteredProducts
    );
  };

  handlePriceSliderChange = (event, newValue) => {
    this.setState(
      {
        price: newValue
      },
      this.filteredProducts
    );
  };

  handlePriceInputChange = event => {
    const newValue = Number(event.target.value);
    const id = event.target.id;
    let newPriceRange = [this.state.minPrice, this.state.maxPrice];

    id === "minPrice"
      ? (newPriceRange[0] = newValue)
      : (newPriceRange[1] = newValue);

    this.setState(
      {
        price: newPriceRange
      },
      this.filteredProducts
    );
  };

  resetFilter = () => {
    this.getData();
  };

  filteredProducts = () => {
    let { products, category, price, sort } = this.state;
    let tempProducts = [...products];

    // by category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        product => product.category === category
      );
    }

    // by price
    tempProducts = tempProducts.filter(
      product => product.price >= price[0] && product.price <= price[1]
    );

    // by sort
    if (sort === "featured") {
      tempProducts = tempProducts.filter(product => product.featured === true);
    }
    if (sort === "price: high to low") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "price: low to high") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }

    this.setState({
      sortedProducts: tempProducts
    });
  };

  getProductDetails = path => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.path === path);
    return product;
  };

  formatData = products => {
    let tempProducts = products.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let product = { ...item.fields, images, id };
      return product;
    });
    return tempProducts;
  };

  // cart
  getProductById = id => {
    return this.state.products.find(item => item.id === id);
  };

  addProductToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProductById(id));
    const product = tempProducts[index];

    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product]
      },
      () => this.calculateTotal()
    );
  };

  changeQty = (id, change) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    if (change === "increase") {
      product.count = product.count + 1;
    } else {
      product.count = product.count - 1;
    }

    if (product.count === 0) {
      this.removeProduct(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        {
          cart: [...tempCart]
        },
        () => this.calculateTotal()
      );
    }
  };

  removeProduct = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getProductById(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      {
        cart: [...tempCart],
        products: [...tempProducts]
      },
      () => this.calculateTotal()
    );
  };

  calculateTotal = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total));
    const tax = parseFloat(
      (subtotal * this.state.cartTotal.taxRate).toFixed(2)
    );
    const total = subtotal + tax;

    this.setState({
      cartTotal: {
        ...this.state.cartTotal,
        cartSubtotal: subtotal,
        cartTax: tax,
        cartInvoiceTotal: total
      }
    });
  };

  clearCart = () => {
    this.setState({
      cart: [],
      cartTotal: {
        cartSubtotal: 0,
        cartTax: 0,
        taxRate: TAX_RATE,
        cartInvoiceTotal: 0
      }
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handlePriceSliderChange: this.handlePriceSliderChange,
          handlePriceInputChange: this.handlePriceInputChange,
          resetFilter: this.resetFilter,
          getProductDetails: this.getProductDetails,
          addProductToCart: this.addProductToCart,
          changeQty: this.changeQty,
          removeProduct: this.removeProduct,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {value => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}
