import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./state-hoveractive-shape-squa.module.css";

const StateHoveractiveShapeSqua = ({
  className = "",
  number,
  stateHoveractiveShapeSquaBackgroundColor,
  stateHoveractiveShapeSquaDisplay,
  stateHoveractiveShapeSquaFlexDirection,
  stateHoveractiveShapeSquaFlex,
}) => {
  const stateHoveractiveShapeSquaStyle = useMemo(() => {
    return {
      backgroundColor: stateHoveractiveShapeSquaBackgroundColor,
      display: stateHoveractiveShapeSquaDisplay,
      flexDirection: stateHoveractiveShapeSquaFlexDirection,
      flex: stateHoveractiveShapeSquaFlex,
    };
  }, [
    stateHoveractiveShapeSquaBackgroundColor,
    stateHoveractiveShapeSquaDisplay,
    stateHoveractiveShapeSquaFlexDirection,
    stateHoveractiveShapeSquaFlex,
  ]);

  return (
    <div
      className={[styles.statehoveractiveShapesqua, className].join(" ")}
      style={stateHoveractiveShapeSquaStyle}
    >
      <div className={styles.content}>
        <div className={styles.number}>{number}</div>
      </div>
    </div>
  );
};

StateHoveractiveShapeSqua.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,

  /** Style props */
  stateHoveractiveShapeSquaBackgroundColor: PropTypes.any,
  stateHoveractiveShapeSquaDisplay: PropTypes.any,
  stateHoveractiveShapeSquaFlexDirection: PropTypes.any,
  stateHoveractiveShapeSquaFlex: PropTypes.any,
};

export default StateHoveractiveShapeSqua;
