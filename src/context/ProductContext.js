import React, { Component, createContext } from "react";
import initialData from "../initialData";

export const ProductContext = createContext();

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
    sort: "price: low to high"
  };

  getData = () => {
    let products = this.formatData(initialData);
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
    let products = this.formatData(initialData);
    let maxPrice = Math.max(...products.map(product => product.price));

    this.setState(
      {
        category: "all",
        price: [0, maxPrice],
        sort: "price: low to high",
        sortedProducts: products
      },
      this.filteredProducts
    );
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

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handlePriceSliderChange: this.handlePriceSliderChange,
          handlePriceInputChange: this.handlePriceInputChange,
          resetFilter: this.resetFilter,
          getProductDetails: this.getProductDetails
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
