import React, { Component, createContext } from "react";
import initialData from "../initialData";

export const ProductContext = createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    type: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 100
  };

  componentDidMount() {
    let products = this.formatData(initialData);
    let featuredProducts = products.filter(
      product => product.featured === true
    );
    this.setState({
      products,
      featuredProducts,
      sortedProducts: products,
      loading: false
    });
  }

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
          ...this.state
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
