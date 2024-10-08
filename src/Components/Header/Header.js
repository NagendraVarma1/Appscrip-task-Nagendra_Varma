import classes from "./Header.module.css";
import logo from "../../Assests/Logo.jpg";
import search from "../../Assests/search-normal.jpg";
import heart from "../../Assests/heart.jpg";
import bag from "../../Assests/shopping-bag.jpg";
import profile from "../../Assests/profile.jpg";
import language from "../../Assests/Language.jpg";

const Header = () => {
  return (
    <div className={classes.mainHeader}>
      <div className={classes.headerStrip}></div>
      <div className={classes.head}>
        <div className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
          <p className={classes.brand}>LOGO</p>
          <div className={classes.icons}>
            <img className={classes.icon} src={search} alt="icon" />
            <img className={classes.icon} src={heart} alt="icon" />
            <img className={classes.icon} src={bag} alt="icon" />
            <img className={classes.icon} src={profile} alt="icon" />
            <img className={classes.lang} src={language} alt="icon" />
          </div>
        </div>
        <ul className={classes.mainTab}>
          <li className={classes.tab}>SHOP</li>
          <li className={classes.tab}>SKILLS</li>
          <li className={classes.tab}>STORIES</li>
          <li className={classes.tab}>ABOUT</li>
          <li className={classes.tab}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
