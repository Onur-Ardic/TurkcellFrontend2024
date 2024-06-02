import React from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`${styles.image} ${className}`} />
);

export default Image;
