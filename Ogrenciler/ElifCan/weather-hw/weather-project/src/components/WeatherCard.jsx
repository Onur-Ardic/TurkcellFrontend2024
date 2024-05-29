import React, { useEffect, useState } from "react";
import styles from "./WeatherCard.module.css";
export const WeatherCard = (cityWeather) => {
  const defaultIcon =
    "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png";
  const [icon, setIcon] = useState(defaultIcon);
  const [description, setDescription] = useState("Loading");
  const [degree, setDegree] = useState("");
  const [minDegree, setMinDegree] = useState("");
  const [maxDegree, setMaxDegree] = useState("");
  useEffect(() => {
    if (
      cityWeather &&
      cityWeather.cityWeather &&
      cityWeather.cityWeather.result &&
      cityWeather.cityWeather.result.length > 0
    ) {
      setIcon(cityWeather.cityWeather.result[0].icon || defaultIcon);
      setDescription(cityWeather.cityWeather.result[0].description);
      setDegree(cityWeather.cityWeather.result[0].degree.split(".")[0]);
      setMinDegree(cityWeather.cityWeather.result[0].min.split(".")[0]);
      setMaxDegree(cityWeather.cityWeather.result[0].max.split(".")[0]);
      // document.getElementById("root").classList.add({styles.bgclear});
    }
  }, [cityWeather]);
  return (
    <div>
      <div className={styles.cityName}>{cityWeather.cityWeather.city}</div>
      <div className={styles.dflex}>
        <div className={styles.left}>
          <div className={styles.desc}>{description}</div>
          <img className={styles.image} src={icon} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.dflexcol}>
            <div className={styles.up}>{degree}°C</div>
            <div className={(styles.dflex, styles.down)}>
              <div>{minDegree}°C</div>
              <div> - </div>
              <div>{maxDegree}°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
{
  /* <div>{cityWeather.cityWeather.city}</div>
      <div>{cityWeather.cityWeather.result[0].date}</div>
      <div>{cityWeather.cityWeather.result[0].day}</div>
      <div>{cityWeather.cityWeather.result[0].description}</div>
      <div>min</div>
      <div>{cityWeather.cityWeather.result[0].min}</div>
      <div>max</div>
      <div>{cityWeather.cityWeather.result[0].max}</div>
      <div>
        <img src={icon} alt="" />
      </div> */
}
