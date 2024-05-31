import React from "react";
import styles from "./Input.module.css";

export const Input = ({ name, onChange, value, type }) => {
  return (
    <input
      className={styles.input}
      id={name}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
