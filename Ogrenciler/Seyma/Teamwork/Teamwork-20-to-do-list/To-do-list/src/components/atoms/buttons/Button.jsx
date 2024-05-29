import React from "react";
import styles from "./Button.module.css";

export const Button = ({ text, onClick, type, className }) => {
  return (
    <>
      <button
        className={className ? className : styles.button}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
