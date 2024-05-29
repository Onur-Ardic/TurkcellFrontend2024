import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, text }) => {
  return (
    <>
      <button className={styles.formButton} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
