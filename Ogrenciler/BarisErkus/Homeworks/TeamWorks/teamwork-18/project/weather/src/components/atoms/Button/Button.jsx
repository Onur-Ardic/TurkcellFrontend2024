import styles from "./styles.module.css";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
