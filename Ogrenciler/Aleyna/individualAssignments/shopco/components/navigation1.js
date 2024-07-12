import PropTypes from "prop-types";
import styles from "./navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <section className={[styles.navigation, className].join(" ")}>
      <div className={styles.navLinks}>
        <div className={styles.shopLinks}>
          <a className={styles.shopco}>SHOP.CO</a>
          <div className={styles.links}>
            <div className={styles.shopLink}>
              <a className={styles.shop}>Shop</a>
              <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
            </div>
            <a className={styles.onSale}>On Sale</a>
            <a className={styles.newArrivals}>New Arrivals</a>
            <a className={styles.brands}>Brands</a>
          </div>
          <div className={styles.search}>
            <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
            <input type="text" className={styles.searchForProducts} placeholder="Search for products..." ></input>
          </div>
          <div className={styles.userLinks}>
            <img
              className={styles.userLinksPlaceholder}
              loading="lazy"
              alt=""
              src="/frame-3.svg"
            />
            <img
              className={styles.userLinksPlaceholder1}
              loading="lazy"
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.findClothesThatMatchesYourParent}>
              <h1 className={styles.findClothesThat}>
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <div className={styles.heroCTA}>
                <div className={styles.shopNowButton}>
                  <div className={styles.frameParent}>
                    <div className={styles.browseThroughOurDiverseRanParent}>
                      <div className={styles.browseThroughOur}>
                        Browse through our diverse range of meticulously crafted
                        garments, designed to bring out your individuality and
                        cater to your sense of style.
                      </div>
                      <div className={styles.shopNowButtonContainer}>
                        <button className={styles.shopNow}>Shop Now </button>
                       
                      </div>
                    </div>
                    <div className={styles.benefits}>
                      <div className={styles.benefitsPlaceholders}>
                        <div className={styles.benefitsPlaceholder}>
                          <b className={styles.b}>200+</b>
                        </div>
                        <div className={styles.internationalBrands}>
                          International Brands
                        </div>
                      </div>
                      <div className={styles.benefitsPlaceholders1} />
                      <div className={styles.benefitsPlaceholders2}>
                        <div className={styles.wrapper}>
                          <b className={styles.b1}>2,000+</b>
                        </div>
                        <div className={styles.highQualityProducts}>
                          High-Quality Products
                        </div>
                      </div>
                      <div className={styles.benefitsPlaceholders3} />
                      <div className={styles.benefitsPlaceholders4}>
                        <div className={styles.container}>
                          <b className={styles.b2}>30,000+</b>
                        </div>
                        <div className={styles.happyCustomers}>
                          Happy Customers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.heroImageIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.heroImagePlaceholder}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
