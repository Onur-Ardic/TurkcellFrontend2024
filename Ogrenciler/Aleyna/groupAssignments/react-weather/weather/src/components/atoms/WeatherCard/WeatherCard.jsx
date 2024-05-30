import React from "react";
import styles from "./styles.module.css";

const WeatherCard = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.date}>17.02.2024</h5>
      <img
        className={styles.img}
        src="https://cdnydm.com/permedia/LC1i84c3Z2MtLUDNbzWz8A.png?size=512x512"
      />
      <p className={styles.degree}>17 C</p>
    </div>
  );
};

export default WeatherCard;
