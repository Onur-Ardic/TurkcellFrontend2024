import React from "react";
import styles from "./styles.module.css";

const Input = ({ type, placeholder, id, name }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
    ></input>
  );
};

export default Input;
