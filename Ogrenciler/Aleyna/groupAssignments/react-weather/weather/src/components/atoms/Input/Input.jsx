import styles from "./styles.module.css";

const Input = ({ type, placeholder, name, setCity }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => setCity(e.target.value)}
    ></input>
  );
};

export default Input;
