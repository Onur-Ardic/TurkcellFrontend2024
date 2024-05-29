import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Button = ({ text, handleButton }) => {
  return (
    <button className={styles.mainButton} onClick={handleButton}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleButton: PropTypes.func,
};

export default Button;
