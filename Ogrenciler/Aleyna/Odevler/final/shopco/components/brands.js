import PropTypes from "prop-types";
import styles from "./brands.module.css";

const Brands = ({ className = "" }) => {
  return (
    <section className={[styles.brands, className].join(" ")}>
      <header className={styles.brandsList}>
        <div className={styles.brandsListChild} />
        <div className={styles.brandLogos}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <img
          className={styles.zaraLogo11Icon}
          loading="lazy"
          alt=""
          src="/zaralogo1-1.svg"
        />
        <div className={styles.gucciLogo11Wrapper}>
          <img
            className={styles.gucciLogo11Icon}
            loading="lazy"
            alt=""
            src="/guccilogo1-1.svg"
          />
        </div>
        <div className={styles.pradaLogo11Wrapper}>
          <img
            className={styles.pradaLogo11Icon}
            loading="lazy"
            alt=""
            src="/pradalogo1-1.svg"
          />
        </div>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </header>
    </section>
  );
};

Brands.propTypes = {
  className: PropTypes.string,
};

export default Brands;
