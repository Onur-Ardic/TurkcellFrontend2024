import React from "react";
import styles from "./styles.module.css";

const Text = ({ text }) => {
  return (
    <>
      <p className={styles.p}>{text} </p>
    </>
  );
};

export default Text;
