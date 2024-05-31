import React from "react";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({
  temperature,
  night,
  humidity,
  place,
  icon,
  description,
  min,
  max,
}) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherInfo}>
        <img src={icon} className={styles.iconImage} alt="weather icon" />
        <p className={styles.temperature}>{temperature} &deg;C</p>
      </div>
      <div className={styles.location}>{place}</div>
      <div className={styles.dateTime}>
        <p className={styles.date}>{new Date().toDateString()}</p>
      </div>
      <div className={styles.nightHumidity}>
        <p className={styles.night}>
          <i className="far fa-moon"></i>
          Night <span>{night}&deg;C </span>
        </p>
        <p className={styles.humidity}>
          <i className="fa-brands fa-drupal"></i>
          Humidity <span>{humidity} %</span>
        </p>
      </div>
      <div className={styles.minMax}>
        <p className={styles.min}>
          <i className="fas fa-minus"></i>
          Min <span>{min}&deg;C </span>
        </p>
        <p className={styles.max}>
          <i className="fas fa-plus"></i>
          Max <span>{max} &deg;C</span>
        </p>
      </div>
      <hr />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default WeatherCard;
