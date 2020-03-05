import React from "react";
import { withProductConsumer } from "../../context/ProductContext";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const sortMenuList = ["price: low to high", "price: high to low", "featured"];

const ProductFilter = ({ context }) => {
  const classes = useStyle();
  const {
    category,
    categories,
    price,
    minPrice,
    maxPrice,
    sort,
    handleChange,
    handlePriceInputChange,
    handlePriceSliderChange,
    resetFilter
  } = context;

  let categoryList = categories.map((category, index) => {
    return (
      <MenuItem value={category} key={index} className={classes.menuItem}>
        {category}
      </MenuItem>
    );
  });

  return (
    <section className={classes.filterWrapper}>
      <FormControl color="secondary" className={classes.formControl}>
        <InputLabel>category</InputLabel>
        <Select
          value={category}
          id="categorySelect"
          inputProps={{
            name: "category",
            id: "category-select"
          }}
          onChange={handleChange("category")}
        >
          {categoryList}
        </Select>
      </FormControl>
      <div className={classes.priceWrapper}>
        <span className={classes.sliderLabel}>price</span>
        <div className={classes.priceInputWrapper}>
          <Slider
            value={price}
            onChange={handlePriceSliderChange}
            valueLabelDisplay="auto"
            color="secondary"
            className={classes.slider}
            max={maxPrice}
          />
          <div>
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
                className: classes.input
              }}
              value={price[0]}
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
                className: classes.input
              }}
              value={price[1]}
              className={classes.textField}
              onChange={handlePriceInputChange}
            />
          </div>
        </div>
      </div>
      <FormControl color="secondary" className={classes.formControl}>
        <InputLabel>sort</InputLabel>
        <Select
          value={sort}
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
        onClick={resetFilter}
      >
        reset all
      </Button>
    </section>
  );
};

const useStyle = makeStyles(theme => ({
  ...theme.global,
  filterWrapper: {
    textTransform: "capitalize",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: theme.palette.text.secondary,
    margin: "2rem auto 5rem auto"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "11rem",
    width: "14rem"
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
    width: "11rem",
    marginRight: "0.5rem"
  },
  priceInputWrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
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
    height: "2.5rem",
    margin: "1rem 0"
  }
}));

export default withProductConsumer(ProductFilter);
