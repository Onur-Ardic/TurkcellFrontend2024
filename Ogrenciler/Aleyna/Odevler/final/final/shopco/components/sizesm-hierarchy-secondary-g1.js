import { useMemo } from "react";
import SizesmIconTrailing from "./sizesm-icon-trailing";
import PropTypes from "prop-types";
import styles from "./sizesm-hierarchy-secondary-g1.module.css";

const SizesmHierarchySecondaryG1 = ({
  className = "",
  text,
  circle,
  sizesmHierarchySecondaryGAlignSelf,
}) => {
  const sizesmHierarchySecondaryGStyle = useMemo(() => {
    return {
      alignSelf: sizesmHierarchySecondaryGAlignSelf,
    };
  }, [sizesmHierarchySecondaryGAlignSelf]);

  return (
    <div
      className={[styles.sizesmHierarchysecondaryG, className].join(" ")}
      style={sizesmHierarchySecondaryGStyle}
    >
      <SizesmIconTrailing
        text="Button CTA"
        circle="/circle.svg"
        sizesmIconTrailingBackgroundColor="#fff"
        sizesmIconTrailingBorder="1px solid #d0d5dd"
        sizesmIconTrailingBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
        sizesmIconTrailingFlex="unset"
      />
    </div>
  );
};

SizesmHierarchySecondaryG1.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  circle: PropTypes.string,

  /** Style props */
  sizesmHierarchySecondaryGAlignSelf: PropTypes.any,
};

export default SizesmHierarchySecondaryG1;
