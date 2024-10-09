import classes from "./Header.module.css";
import logo from "../../Assests/Logo.svg";
import search from "../../Assests/search-normal.svg";
import heart from "../../Assests/heart.svg";
import bag from "../../Assests/shopping-bag.svg";
import profile from "../../Assests/profile.svg";
import language from "../../Assests/Language.svg";
import hamburger from "../../Assests/solar_hamburger-menu-linear.svg";
import brandAndLogo from "../../Assests/Frame 32.svg";

const Header = () => {
  return (
    <div className={classes.mainHeader}>
      <div className={classes.headerStrip}>
        <img
          className={classes.brandAndLogo1}
          src={brandAndLogo}
          alt="brand and logo"
        />
        <img
          className={classes.brandAndLogo2}
          src={brandAndLogo}
          alt="brand and logo"
        />
        <img
          className={classes.brandAndLogo3}
          src={brandAndLogo}
          alt="brand and logo"
        />
      </div>
      <div className={classes.head}>
        <div className={classes.header}>
          <div className={classes.logos}>
            <img
              className={classes.hamburger}
              src={hamburger}
              alt="hamburger"
            />
            <img className={classes.logo} src={logo} alt="logo" />
          </div>
          <div className={classes.brand}>LOGO</div>
          <div className={classes.icons}>
            <img className={classes.icon1} src={search} alt="icon" />
            <img className={classes.icon2} src={heart} alt="icon" />
            <img className={classes.icon3} src={bag} alt="icon" />
            <img className={classes.icon4} src={profile} alt="icon" />
            <img className={classes.lang} src={language} alt="icon" />
          </div>
        </div>
        <ul className={classes.mainTab}>
          <li className={classes.tab1}>SHOP</li>
          <li className={classes.tab2}>SKILLS</li>
          <li className={classes.tab3}>STORIES</li>
          <li className={classes.tab4}>ABOUT</li>
          <li className={classes.tab5}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
