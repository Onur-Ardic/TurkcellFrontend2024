import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import styles from "./WeatherCard.module.css";

export const WeatherPage = () => {
  const [weather, setWeather] = useState([]);
  const [selectedCity, setSelectedCity] = useState("ankara");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
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
      .then((data) => setWeather(data));
  }, [selectedCity]);

  return (
    <div>
      <div className={styles.nav}>
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          className={styles.select}
        >
          <option value="istanbul">Istanbul</option>
          <option value="ankara" selected>
            Ankara
          </option>
          <option value="izmir">Izmir</option>
          <option value="bursa">Bursa</option>
          <option value="antalya">Antalya</option>
        </select>
      </div>
      {weather ? <WeatherCard cityWeather={weather} /> : <div>Loading...</div>}
    </div>
  );
};
export default WeatherPage;
