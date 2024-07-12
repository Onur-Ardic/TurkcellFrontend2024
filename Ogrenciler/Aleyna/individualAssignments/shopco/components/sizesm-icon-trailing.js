import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./sizesm-icon-trailing.module.css";

const SizesmIconTrailing = ({
  className = "",
  text,
  circle,
  sizesmIconTrailingBackgroundColor,
  sizesmIconTrailingBorder,
  sizesmIconTrailingBoxShadow,
  sizesmIconTrailingFlex,
}) => {
  const sizesmIconTrailingStyle = useMemo(() => {
    return {
      backgroundColor: sizesmIconTrailingBackgroundColor,
      border: sizesmIconTrailingBorder,
      boxShadow: sizesmIconTrailingBoxShadow,
      flex: sizesmIconTrailingFlex,
    };
  }, [
    sizesmIconTrailingBackgroundColor,
    sizesmIconTrailingBorder,
    sizesmIconTrailingBoxShadow,
    sizesmIconTrailingFlex,
  ]);

  return (
    <div
      className={[styles.sizesmIcontrailing, className].join(" ")}
      style={sizesmIconTrailingStyle}
    >
      <div className={styles.text}>{text}</div>
      <img className={styles.circleIcon} alt="" src={circle} />
    </div>
  );
};

SizesmIconTrailing.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  circle: PropTypes.string,

  /** Style props */
  sizesmIconTrailingBackgroundColor: PropTypes.any,
  sizesmIconTrailingBorder: PropTypes.any,
  sizesmIconTrailingBoxShadow: PropTypes.any,
  sizesmIconTrailingFlex: PropTypes.any,
};

export default SizesmIconTrailing;
