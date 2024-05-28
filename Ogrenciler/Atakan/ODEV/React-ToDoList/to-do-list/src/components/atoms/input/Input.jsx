import React from "react";
import styles from "./Input.module.css";

const Input = ({ type = "text", name, value, onChange }) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
    </>
  );
};

export default Input;
