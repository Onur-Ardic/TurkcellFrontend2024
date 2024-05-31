import React from "react";
import styles from "./Input.module.css";

const Input = ({ value, onChange, onKeyUp, placeholder }) => (
  <input
    type="text"
    className={styles.input}
    value={value}
    onChange={onChange}
    onKeyUp={onKeyUp}
    placeholder={placeholder}
  />
);

export default Input;
