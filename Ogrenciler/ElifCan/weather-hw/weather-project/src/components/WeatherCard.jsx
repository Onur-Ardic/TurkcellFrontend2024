import React from "react";
import styles from "./WeatherCard.module.css";
export const WeatherCard = (cityWeather) => {
  function handleBackGround() {
    const description =
      cityWeather.cityWeather.result[0].description.toLowerCase();

    if (description.includes("güneş") || description.includes("açık")) {
      document.querySelector("body").classList.add(styles.bgclear);
      document
        .querySelector("body")
        .classList.remove(styles.bgrain, styles.bgother);
    } else if (description.includes("yağmur")) {
      document.querySelector("body").classList.add(styles.bgrain);
      document
        .querySelector("body")
        .classList.remove(styles.bgclear, styles.bgother);
    } else {
      document.querySelector("body").classList.add(styles.bgother);
      document
        .querySelector("body")
        .classList.remove(styles.bgclear, styles.bgrain);
    }
  }
  return (
    <div>
      {handleBackGround()}

      <div className={styles.cityName}>
        {cityWeather.cityWeather.city.toUpperCase()}
      </div>
      <div className={styles.dflex}>
        <div className={styles.left}>
          <div className={styles.desc}>
            {cityWeather.cityWeather.result[0].description.toUpperCase()}
          </div>
          <img
            className={styles.image}
            src={cityWeather.cityWeather.result[0].icon}
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.dflexcol}>
            <div className={styles.up}>
              {cityWeather.cityWeather.result[0].degree.split(".")[0]}°C
            </div>
            <div className={(styles.dflex, styles.down)}>
              <div>{cityWeather.cityWeather.result[0].min.split(".")[0]}°C</div>
              <div> - </div>
              <div>{cityWeather.cityWeather.result[0].max.split(".")[0]}°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
