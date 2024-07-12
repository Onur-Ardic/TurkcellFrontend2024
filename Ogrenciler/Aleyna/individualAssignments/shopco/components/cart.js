import FrameComponent1 from "./frame-component1";
import NewsletterContainer from "./newsletter-container";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./cart.module.css";

const Cart = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <section className={styles.frameParent}>
        <div className={styles.signUpAndGet20OffToYouParent}>
          <div className={styles.signUpAndContainer}>
            <span>{`Sign up and get 20% off to your first order. `}</span>
            <span className={styles.signUpNow}>Sign Up Now</span>
          </div>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className={styles.navbarWrapper}>
          <div className={styles.navbar}>
            <a className={styles.shopco}>SHOP.CO</a>
            <div className={styles.navLinks}>
              <div className={styles.shopLink}>
                <a className={styles.shop}>Shop</a>
                <img className={styles.frameIcon1} alt="" src="/frame-1.svg" />
              </div>
              <a className={styles.onSale}>On Sale</a>
              <a className={styles.newArrivals}>New Arrivals</a>
              <a className={styles.brands}>Brands</a>
            </div>
            <div className={styles.searchContainer}>
              <img className={styles.frameIcon2} alt="" src="/frame-2.svg" />
              <a className={styles.searchForProducts}>Search for products...</a>
            </div>
            <div className={styles.icons}>
              <img className={styles.frameIcon3} alt="" src="/frame-3.svg" />
              <img className={styles.frameIcon4} alt="" src="/frame-4.svg" />
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.homeCartLinksWrapper}>
          <div className={styles.homeCartLinks}>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon5} alt="" src="/frame4@2x.png" />
            </div>
            <div className={styles.cart1}>Cart</div>
          </div>
        </div>
        <div className={styles.yourCartWrapper}>
          <h1 className={styles.yourCart}>Your cart</h1>
        </div>
        <FrameComponent1 />
      </section>
      <section className={styles.newsletterContainerParent}>
        <NewsletterContainer />
        <FrameComponent />
      </section>
    </div>
  );
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;
