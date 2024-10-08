import { useState } from "react";
import classes from "./Products.module.css";

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  const filterHandler = () => {
    setShowFilter((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <div className={classes.filterDiv}>
        <p className={classes.items}>3245 Items</p>
        <p
          onClick={filterHandler}
          className={showFilter ? classes.showFilterDiv : classes.hideFilterDiv}
        >
          SHOW FILTER
        </p>
        <p
          onClick={filterHandler}
          className={showFilter ? classes.hideFilterDiv : classes.showFilterDiv}
        >
          HIDE FILTER
        </p>
        <select className={classes.recommended}>
          <option value={"recommended"}>RECOMMENDED</option>
          <option value={"newest"}>NEWEST FIRST</option>
          <option value={"popular"}>POPULAR</option>
          <option value={"lowToHigh"}>PRICE: LOW TO HIGH</option>
          <option value={"highToLow"}>PRICE: HIGH TO LOW</option>
        </select>
      </div>
      <div className={classes.totalDiv}>
        <div
          className={showFilter ? classes.filters : classes.filterHide}
        ></div>
        <div className={showFilter ? classes.productsDiv : classes.productsDivFull}></div>
      </div>
    </>
  );
};

export default Products;
