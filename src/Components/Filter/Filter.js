import classes from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={classes.totalDiv}>
      <div className={props.showFilter ? classes.filters : classes.filterHide}>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="ideal">IDEAL FOR</label><br />
          <select className={classes.select} name="ideal">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="occasion">OCCASION</label><br />
          <select className={classes.select} name="occasion">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="work">WORK</label><br />
          <select className={classes.select} name="work">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="fabric">FABRIC</label><br />
          <select className={classes.select} name="fabric">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="segment">SEGMENT</label><br />
          <select className={classes.select} name="segment">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="suitablefor">SUITABLE FOR</label><br />
          <select className={classes.select} name="suitablefor">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="rawMaterials">RAW MATERIALS</label><br />
          <select className={classes.select} name="rawMaterials">
            <option>MEN</option>
            <option>WOMEN</option>
            <option>KIDS</option>
          </select>
        </div>
        <div className={classes.selectDiv}>
          <label className={classes.labels} for="pattern">PATTERN</label><br />
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
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>
        <div style={{width: '300px', height: '462px', backgroundColor: 'red',margin: '2px'}}></div>

        {/* We have to modify this...first of all we have to fetch data from the api and then store the data and then have to map through data and should display it on the screen */}
      </div>
    </div>
  );
};

export default Filter;
