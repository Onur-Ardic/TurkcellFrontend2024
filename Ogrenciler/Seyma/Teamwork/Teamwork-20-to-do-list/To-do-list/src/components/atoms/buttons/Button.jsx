import React from "react";
import styles from "./Button.module.css";

export const Button = ({ text, onClick, type }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick} type={type}>
        {text}
      </button>
    </>
  );
};
