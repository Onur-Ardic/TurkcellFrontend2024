import React from "react";
import styles from "./Input.module.css";

const Input = ({ type = "text", name, value, onChange, placeholder }) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
      />
    </>
  );
};

export default Input;
