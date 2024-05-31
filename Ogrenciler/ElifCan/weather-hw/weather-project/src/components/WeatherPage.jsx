import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import styles from "./WeatherCard.module.css";
export const WeatherPage = () => {
  const [weather, setWeather] = useState([]);
  const [selectedCity, setSelectedCity] = useState("ankara");

  function handleCityChange() {
    setSelectedCity(document.getElementById("inputVal").value);
  }
  useEffect(() => {
    fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${selectedCity}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "apikey 3GnitLafOtKQKtaElaIYKj:25t0DMK8pe9aUAMbBfnPh6",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWeather(data);
        } else {
          setWeather([]);
        }
      });
  }, [selectedCity]);

  return (
    <div>
      <div className={styles.nav}>
        <input type="text" name="" id="inputVal" className={styles.InputArea} />
        <button className={styles.btn} onClick={handleCityChange}>
          ara
        </button>
      </div>
      {weather.length != 0 ? (
        <WeatherCard cityWeather={weather} />
      ) : (
        <div>Not Found!</div>
      )}
    </div>
  );
};
export default WeatherPage;
