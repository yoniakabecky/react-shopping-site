import React, { Component, createContext } from "react";
import { initialDataForWorkshops } from "../utils/initialData";

export const WorkshopContext = createContext();

export default class ProductProvider extends Component {
  state = {
    workshops: [],
    availableWorkshops: [],
    loading: true
  };

  componentDidMount() {
    let workshops = this.formatData(initialDataForWorkshops);
    let availableWorkshops = workshops.filter(
      workshop => workshop.available === true
    );
    this.setState({
      workshops,
      availableWorkshops,
      loading: false
    });
  }

  formatData = workshops => {
    let tempWorkshops = workshops.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let workshop = { ...item.fields, images, id };
      return workshop;
    });
    return tempWorkshops;
  };

  render() {
    return (
      <WorkshopContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </WorkshopContext.Provider>
    );
  }
}

export const WorkshopConsumer = WorkshopContext.Consumer;

export function withWorkshopConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <WorkshopConsumer>
        {value => <Component {...props} context={value} />}
      </WorkshopConsumer>
    );
  };
}
