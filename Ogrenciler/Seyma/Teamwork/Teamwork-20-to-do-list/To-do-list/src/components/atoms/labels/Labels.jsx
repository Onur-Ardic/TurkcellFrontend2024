import React from "react";
import styles from "./Label.module.css";

export const Labels = ({ text, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
