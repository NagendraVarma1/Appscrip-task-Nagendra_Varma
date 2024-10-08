import { useEffect, useState } from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchHandler = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error("Fetching Failed");
          });
        }
      })
      .then((data) => {
        const fetchedData = Object.keys(data).map((key) => ({
          id: data[key].id,
          title: data[key].title,
          description: data[key].description,
          price: data[key].price,
          image: data[key].image,
          category: data[key].category,
        }));
        setAllProducts(fetchedData);
      });
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <div className={classes.totalDiv}>
      <div className={props.showFilter ? classes.filters : classes.filterHide}>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="ideal">
            IDEAL FOR
          </label>
          <br />
          <select className={classes.select} name="ideal">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="occasion">
            OCCASION
          </label>
          <br />
          <select className={classes.select} name="occasion">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="work">
            WORK
          </label>
          <br />
          <select className={classes.select} name="work">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="fabric">
            FABRIC
          </label>
          <br />
          <select className={classes.select} name="fabric">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="segment">
            SEGMENT
          </label>
          <br />
          <select className={classes.select} name="segment">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="suitablefor">
            SUITABLE FOR
          </label>
          <br />
          <select className={classes.select} name="suitablefor">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="rawMaterials">
            RAW MATERIALS
          </label>
          <br />
          <select className={classes.select} name="rawMaterials">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} htmlFor="pattern">
            PATTERN
          </label>
          <br />
          <select className={classes.select} name="pattern">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
      </div>
      <div
        className={
          props.showFilter ? classes.productsDiv : classes.productsDivFull
        }
      >
        {allProducts.map((product) => (
          <div key={product.id} className={classes.product}>
            <img className={classes.productImg} src={product.image} alt="product"/>  
            <div>
              <p className={classes.title}>{product.title}</p>
              <p className={classes.price}>${product.price}/-</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
