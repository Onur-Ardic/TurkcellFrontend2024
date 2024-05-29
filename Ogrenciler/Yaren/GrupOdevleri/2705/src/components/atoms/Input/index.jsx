import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Input = ({ type, placeholder, todoTitle, setTodoTitle }) => {
  return (
    <input
      className={styles.mainInput}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setTodoTitle(e.target.value)}
      value={todoTitle}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  todoTitle: PropTypes.string,
  setTodoTitle: PropTypes.func,
};

export default Input;
