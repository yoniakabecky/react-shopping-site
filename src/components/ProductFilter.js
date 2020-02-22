import React from "react";
import PropTypes from "prop-types";
import { withProductConsumer } from "../context/ProductContext";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const getUniqueItem = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const sortMenuList = ["featured", "price: low to high", "price: high to low"];

const ProductFilter = ({ context, products }) => {
  const classes = useStyle();
  const { minPrice, maxPrice } = context;
  const [filter, setFilter] = React.useState({
    category: "all",
    price: [minPrice, maxPrice],
    sort: "featured"
  });

  const handleChange = name => event => {
    setFilter({
      ...filter,
      [name]: event.target.value
    });
  };

  const handlePriceSliderChange = (event, newValue) => {
    setFilter({
      ...filter,
      price: newValue
    });
  };

  const handlePriceInputChange = event => {
    const newValue = Number(event.target.value);
    const id = event.target.id;
    let newPriceRange = [...filter.price];

    id === "minPrice"
      ? (newPriceRange[0] = newValue)
      : (newPriceRange[1] = newValue);

    setFilter({
      ...filter,
      price: newPriceRange
    });
  };

  const handleReset = () => {
    setFilter({
      category: "all",
      price: [minPrice, maxPrice],
      sort: "featured"
    });
  };

  let categories = getUniqueItem(products, "category");
  categories = ["all", ...categories];
  categories = categories.map((category, index) => {
    return (
      <MenuItem value={category} key={index} className={classes.menuItem}>
        {category}
      </MenuItem>
    );
  });

  return (
    <div className={classes.filterWrapper}>
      <FormControl color="secondary" className={classes.formControl}>
        <InputLabel>category</InputLabel>
        <Select
          value={filter.category}
          id="categorySelect"
          inputProps={{
            name: "category",
            id: "category-select"
          }}
          onChange={handleChange("category")}
        >
          {categories}
        </Select>
      </FormControl>
      <div className={classes.priceWrapper}>
        <span className={classes.sliderLabel}>price</span>
        <div className={classes.priceInputWrapper}>
          <Slider
            value={filter.price}
            onChange={handlePriceSliderChange}
            valueLabelDisplay="auto"
            color="secondary"
            aria-labelledby="range-slider"
            className={classes.slider}
          />
          <TextField
            id="minPrice"
            label="min price"
            variant="outlined"
            size="small"
            color="secondary"
            inputProps={{
              step: 10,
              min: minPrice,
              max: maxPrice,
              type: "number",
              "aria-labelledby": "input-slider",
              className: classes.input
            }}
            value={filter.price[0]}
            className={classes.textField}
            onChange={handlePriceInputChange}
          />
          -
          <TextField
            id="maxPrice"
            label="max price"
            variant="outlined"
            size="small"
            color="secondary"
            inputProps={{
              step: 10,
              min: minPrice,
              max: maxPrice,
              type: "number",
              "aria-labelledby": "input-slider",
              className: classes.input
            }}
            value={filter.price[1]}
            className={classes.textField}
            onChange={handlePriceInputChange}
          />
        </div>
      </div>
      <FormControl color="secondary" className={classes.formControl}>
        <InputLabel>sort</InputLabel>
        <Select
          value={filter.sort}
          id="categorySelect"
          inputProps={{
            name: "sort",
            id: "sort-select"
          }}
          onChange={handleChange("sort")}
        >
          {sortMenuList.map((item, index) => (
            <MenuItem value={item} key={index} className={classes.menuItem}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        color="secondary"
        variant="contained"
        size="small"
        className={classes.resetBtn}
        onClick={handleReset}
      >
        reset all
      </Button>
    </div>
  );
};

const useStyle = makeStyles(theme => ({
  ...theme.global,
  filterWrapper: {
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: theme.palette.text.secondary,
    margin: "2rem auto 5rem auto"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "11rem"
  },
  menuItem: {
    textTransform: "capitalize",
    fontSize: "0.9rem"
  },
  priceWrapper: {
    margin: theme.spacing(1)
  },
  sliderLabel: {
    color: theme.palette.text.secondary,
    fontSize: "0.8rem"
  },
  slider: {
    width: "10rem",
    marginRight: "0.5rem"
  },
  priceInputWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    width: "6rem",
    margin: "0 0.5rem"
  },
  input: {
    fontSize: "0.8rem",
    color: theme.palette.text.secondary
  },
  resetBtn: {
    height: "2.5rem"
  }
}));

ProductFilter.propTypes = {
  products: PropTypes.array.isRequired
};

export default withProductConsumer(ProductFilter);
