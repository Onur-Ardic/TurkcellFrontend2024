import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSunPlantWilt,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const TextGroup = ({
  date,
  day,
  degree,
  description,
  humidity,
  min,
  max,
  night,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <p className={styles.date}>{date}</p>
        <div className={`${styles.row} ${styles.daydegree}`}>
          <p>{day}</p>
          <p>{degree}°</p>
        </div>

        <div className={styles.row}>
          <p>
            <FontAwesomeIcon icon={faSunPlantWilt} /> {humidity}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faTemperatureArrowDown} /> {min}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faTemperatureArrowUp} /> {max}
          </p>
          <p>
            <FontAwesomeIcon icon={faMoon} /> {night}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextGroup;
