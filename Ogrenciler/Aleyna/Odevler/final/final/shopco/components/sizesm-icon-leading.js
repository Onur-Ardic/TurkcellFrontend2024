import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./sizesm-icon-leading.module.css";

const SizesmIconLeading = ({
  className = "",
  circle,
  text,
  sizesmIconLeadingBackgroundColor,
  sizesmIconLeadingBorder,
  sizesmIconLeadingBoxShadow,
}) => {
  const sizesmIconLeadingStyle = useMemo(() => {
    return {
      backgroundColor: sizesmIconLeadingBackgroundColor,
      border: sizesmIconLeadingBorder,
      boxShadow: sizesmIconLeadingBoxShadow,
    };
  }, [
    sizesmIconLeadingBackgroundColor,
    sizesmIconLeadingBorder,
    sizesmIconLeadingBoxShadow,
  ]);

  return (
    <div
      className={[styles.sizesmIconleading, className].join(" ")}
      style={sizesmIconLeadingStyle}
    >
      <img className={styles.circleIcon} alt="" src={circle} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

SizesmIconLeading.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  sizesmIconLeadingBackgroundColor: PropTypes.any,
  sizesmIconLeadingBorder: PropTypes.any,
  sizesmIconLeadingBoxShadow: PropTypes.any,
};

export default SizesmIconLeading;
