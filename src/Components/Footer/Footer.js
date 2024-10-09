import classes from "./Footer.module.css";
import insta from '../../Assests/Insta.svg';
import linkedIn from '../../Assests/a.svg';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.contactDiv}>
        <div className={classes.contact1}>
          <div className={classes.text1}>BE THE FIRST TO KNOW</div>
          <div className={classes.text2}>Sign up for updates from mettā muse.</div>
          <input
            className={classes.input}
            type="email"
            placeholder="Enter your e-mail"
          />
          <button className={classes.btn}>SUBSCRIBE</button>
        </div>
        <div className={classes.contact2}>
          <div className={classes.contactText1}>CONTACT US</div>
          <div className={classes.contactText2}>+44 221 133 5360</div>
          <div className={classes.text3}>customercare@mettamuse.com</div>
          <div className={classes.text4}>CURRENCY (+USD)</div>
          <div className={classes.text5}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </div>
        </div>
      </div>
      <div className={classes.quickLinksDiv}>
        <ul className={classes.footerList}>mettā muse
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
        </ul>
        <ul className={classes.footerList}>QUICK LINKS
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
        <div className={classes.followUs}>
            <p>FOLLOW US</p>
            <img style={{marginRight: '10px'}} src={insta} alt="insta logo"/>
            <img src={linkedIn} alt="linkedIn logo"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
