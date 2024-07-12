import SizesmIconLeading from "./sizesm-icon-leading";
import PropTypes from "prop-types";
import styles from "./sizesm-hierarchy-secondary-g.module.css";

const SizesmHierarchySecondaryG = ({ className = "", circle, text }) => {
  return (
    <div className={[styles.sizesmHierarchysecondaryG, className].join(" ")}>
      <SizesmIconLeading
        circle="/circle.svg"
        text="Button CTA"
        sizesmIconLeadingBackgroundColor="#fff"
        sizesmIconLeadingBorder="1px solid #d0d5dd"
        sizesmIconLeadingBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
      />
    </div>
  );
};

SizesmHierarchySecondaryG.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.string,
  text: PropTypes.string,
};

export default SizesmHierarchySecondaryG;
