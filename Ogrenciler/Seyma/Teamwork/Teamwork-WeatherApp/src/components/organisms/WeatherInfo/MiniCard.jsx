import React, { useState, useEffect } from "react";
import styles from "./MiniCard.module.css";

const MiniCard = ({ time, temp, icon, description }) => {
  const [currentIcon, setCurrentIcon] = useState(icon);

  useEffect(() => {
    setCurrentIcon(icon);
  }, [icon]);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const day = getDayOfWeek(time);

  return (
    <div className={`${styles.miniCard} ${styles.miniCardContainer}`}>
      <p className={styles.textCenter}>{day}</p>
      <hr />
      <div className={styles.iconContainer}>
        <img
          src={currentIcon}
          className={styles.iconImage}
          alt="weather icon"
        />
      </div>
      <p className={`${styles.textCenter} ${styles.fontBold}`}>{temp}&deg;C</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MiniCard;
