import PropTypes from "prop-types";
import styles from "./product-details.module.css";

const ProductDetails = ({
  className = "",
  frame73,
  lEEVE,
  sHIRT,
  star5,
  prop,
  prop1,
  prop2,
  prop3,
}) => {
  return (
    <div className={[styles.productDetails, className].join(" ")}>
      <img
        className={styles.productDetailsChild}
        loading="lazy"
        alt=""
        src={frame73}
      />
      <div className={styles.sleeveStripedTShirtParent}>
        <h3 className={styles.sleeveStripedTShirtContainer}>
          S<span className={styles.leeve}>{lEEVE}</span> S
          <span className={styles.triped}>TRIPED</span> T-
          <span className={styles.shirt}>{sHIRT}</span>
        </h3>
        <div className={styles.frameParent}>
          <div className={styles.starParent}>
            <img className={styles.frameChild} alt="" src="/star-1.svg" />
            <img className={styles.frameItem} alt="" src="/star-2.svg" />
            <img className={styles.frameInner} alt="" src="/star-3.svg" />
            <img className={styles.starIcon} alt="" src="/star-4.svg" />
            <img className={styles.frameChild1} alt="" src={star5} />
          </div>
          <div className={styles.div}>
            <span>{prop}</span>
            <span className={styles.span}>5</span>
          </div>
        </div>
        <div className={styles.parent}>
          <b className={styles.b}>{prop1}</b>
          <b className={styles.b1}>{prop2}</b>
          <div className={styles.frameWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.div1}>{prop3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
  frame73: PropTypes.string,
  lEEVE: PropTypes.string,
  sHIRT: PropTypes.string,
  star5: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
};

export default ProductDetails;
