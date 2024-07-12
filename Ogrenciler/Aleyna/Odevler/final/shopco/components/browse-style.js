import PropTypes from "prop-types";
import styles from "./browse-style.module.css";

const BrowseStyle = ({ className = "" }) => {
  return (
    <div className={[styles.browseStyle, className].join(" ")}>
      <div className={styles.browseStyleHeader}>
        <h1 className={styles.browseByDress}>BROWSE BY DRESS STYLE</h1>
      </div>
      <div className={styles.styleImageGrid}>
        <div className={styles.styleImagePairOne}>
          <div className={styles.casualPartyImages}>
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <h1 className={styles.casual}>Casual</h1>
          </div>
          <div className={styles.formalGymImages}>
            <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
            <h1 className={styles.formal}>Formal</h1>
          </div>
        </div>
        <div className={styles.styleImagePairOne1}>
          <div className={styles.image12Parent}>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
            <h1 className={styles.party}>Party</h1>
          </div>
          <div className={styles.image14Parent}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
            <h1 className={styles.gym}>Gym</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

BrowseStyle.propTypes = {
  className: PropTypes.string,
};

export default BrowseStyle;
