import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.itemButtonsParent, className].join(" ")}>
      <img className={styles.itemButtonsIcon} alt="" src="/frame-61.svg" />
      <div className={styles.itemButtons}>
        <img className={styles.itemButtonsIcon1} alt="" src="/frame-7.svg" />
        <div className={styles.div}>1</div>
        <img className={styles.itemButtonsIcon2} alt="" src="/frame-8.svg" />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
