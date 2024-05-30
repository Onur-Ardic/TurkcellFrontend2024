import React from "react";
import WeatherCard from "../../atoms/WeatherCard/WeatherCard";
import styles from "./styles.module.css";

const CardGroup = () => {
  return (
    <div div className={styles.cards}>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default CardGroup;
