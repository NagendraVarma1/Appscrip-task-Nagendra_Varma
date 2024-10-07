import classes from './Header.module.css'
import logo from '../../Assests/Logo.jpg'
import search from '../../Assests/search-normal.jpg';
import heart from '../../Assests/heart.jpg';
import bag from '../../Assests/shopping-bag.jpg';
import profile from '../../Assests/profile.jpg';
import language from '../../Assests/Language.jpg'

const Header = () => {
    return (
        <div className={classes.mainHeader}>
            <div className={classes.headerStrip}></div>
            <div className={classes.header}>
                <img className={classes.logo} src={logo} alt='logo'/>
                <p className={classes.brand}>LOGO</p>
                <div className={classes.icons}>
                    <img className={classes.icon} src={search} alt='icon'/>
                    <img className={classes.icon} src={heart} alt='icon'/>
                    <img className={classes.icon} src={bag} alt='icon'/>
                    <img className={classes.icon} src={profile} alt='icon'/>
                    <img className={classes.lang} src={language} alt='icon'/>
                </div>
                <div className={classes.mainTab}>
                    <div className={classes.tab}>SHOP</div>
                    <div className={classes.tab}>SKILLS</div>
                    <div className={classes.tab}>STORIES</div>
                    <div className={classes.tab}>ABOUT</div>
                    <div className={classes.tab}>CONTACT US</div>
                </div>
            </div>
            
        </div>
    )
}

export default Header