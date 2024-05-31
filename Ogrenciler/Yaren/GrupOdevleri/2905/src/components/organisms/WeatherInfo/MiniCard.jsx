import React, { useState, useEffect } from "react";
import styles from "./MiniCard.module.css";

import { useDate } from "../../../date/useDate";

const MiniCard = ({ time, temp, icon, description }) => {
  const [currentIcon, setCurrentIcon] = useState(icon);
  const { day } = useDate(time);

  useEffect(() => {
    setCurrentIcon(icon);
  }, [icon]);

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
