import { useState } from "react";
import classes from "./Products.module.css";
import Filter from "../Filter/Filter";

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
        <div className={classes.items}>3245 Items</div>
        <div
          onClick={filterHandler}
          className={showFilter ? classes.showFilterDiv : classes.hideFilterDiv}
        >
          SHOW FILTER
        </div>
        <div
          onClick={filterHandler}
          className={showFilter ? classes.hideFilterDiv : classes.showFilterDiv}
        >
          HIDE FILTER
        </div>
        <select className={classes.recommended}>
          <option value={"recommended"}>RECOMMENDED</option>
          <option value={"newest"}>NEWEST FIRST</option>
          <option value={"popular"}>POPULAR</option>
          <option value={"lowToHigh"}>PRICE: LOW TO HIGH</option>
          <option value={"highToLow"}>PRICE: HIGH TO LOW</option>
        </select>
      </div>
      <Filter showFilter={showFilter}/>
    </>
  );
};

export default Products;
