import React from "react";
import { useDate } from "../../../date/useDate";
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
  const { time } = useDate();

  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherInfo}>
        <img src={icon} alt="weather_icon" className={styles.iconImage} />
        <p className={styles.temperature}>{temperature} &deg;C</p>
      </div>
      <div className={styles.location}>{place}</div>
      <div className={styles.dateTime}>
        <p className={styles.date}>{new Date().toDateString()}</p>
        <p className={styles.time}>{time}</p>
      </div>
      <div className={styles.nightHumidity}>
        <p className={styles.night}>
          <i className="fas fa-moon"></i>
          Night <span>{night}&deg;C </span>
        </p>
        <p className={styles.humidity}>
          Humidity <span>{humidity} %</span>
        </p>
      </div>
      <div className={styles.minMax}>
        <p className={styles.min}>
          <i className="fas fa-plus"></i>
          Min <span>{min}&deg;C </span>
        </p>
        <p className={styles.max}>
          <i className="fas fa-minus"></i>
          Max <span>{max} &deg;C</span>
        </p>
      </div>
      <hr />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default WeatherCard;
