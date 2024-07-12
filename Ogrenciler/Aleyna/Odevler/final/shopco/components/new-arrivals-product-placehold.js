import PropTypes from "prop-types";
import styles from "./new-arrivals-product-placehold.module.css";

const NewArrivalsProductPlacehold = ({
  className = "",
  frame38,
  lEEVE,
  sHIRT,
  star5,
  prop,
  prop1,
  prop2,
  prop3,
}) => {
  return (
    <div className={[styles.newArrivalsProductPlacehold, className].join(" ")}>
      <img
        className={styles.newArrivalsProductPlaceholdChild}
        loading="lazy"
        alt=""
        src={frame38}
      />
      <div className={styles.sleeveStripedTShirtParent}>
        <b className={styles.sleeveStripedTShirtContainer}>
          V<span className={styles.leeve}>{lEEVE}</span> S
          <span className={styles.triped}>TRIPED</span> S
          <span className={styles.shirt}>{sHIRT}</span>
        </b>
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

NewArrivalsProductPlacehold.propTypes = {
  className: PropTypes.string,
  frame38: PropTypes.string,
  lEEVE: PropTypes.string,
  sHIRT: PropTypes.string,
  star5: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
};

export default NewArrivalsProductPlacehold;
