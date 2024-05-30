import React, { useEffect, useState } from "react";
import CardGroup from "../molecules/CardGroup/CardGroup";
import InputGroup from "../molecules/InputGroup/InputGroup";
import TextGroup from "../molecules/TextGroup/TextGroup";
import styles from "./styles.module.css";

const Weather = () => {
  const [weathers, setWeathers] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [city, setCity] = useState("Ankara");

  function changeBackgroundImage() {
    if (selectedWeather) {
      if (selectedWeather.status?.toLowerCase() === "clear") {
        document.body.style.backgroundImage = 'url("./src/assets/sunny.jpg")';
      } else if (selectedWeather.status?.toLowerCase() === "rain") {
        document.body.style.backgroundImage = 'url("./src/assets/rain.jpg")';
      } else if (selectedWeather.status?.toLowerCase() === "clouds") {
        document.body.style.backgroundImage = 'url("./src/assets/clouds1.png")';
      }
    } else {
      document.body.style.backgroundImage = 'url("./src/assets/lightning.jpg")';
    }
  }
  function getWeather(city) {
    fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
      {
        headers: {
          "Content-type": "application/json",
          authorization: "apikey 4iHtt44IyVLSrUsjHrwgmX:4EdntZ0EkrTAZaUnJw4Vxh",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setWeathers(data?.result);
        setSelectedWeather(data?.result[0]);
      })
      .catch((err) => console.log(err))
      .finally(() => changeBackgroundImage());
  }

  function searchCity() {
    getWeather(city);
  }
  useEffect(() => {
    getWeather(city);
  }, []);

  useEffect(() => {
    changeBackgroundImage();
  }, [selectedWeather]);

  if (!weathers || !selectedWeather) {
    return (
      <div>
        <p>Bulunamadı</p>
      </div>
    );
  }
  return (
    <div className={styles.groups}>
      <InputGroup setCity={setCity} city={city} onClick={searchCity} />
      <TextGroup
        date={selectedWeather.date}
        day={selectedWeather.day}
        degree={selectedWeather.degree}
        description={selectedWeather.description}
        humidity={selectedWeather.humidity}
        min={selectedWeather.min}
        max={selectedWeather.max}
        night={selectedWeather.night}
      />
      <CardGroup weathers={weathers} setSelectedWeather={setSelectedWeather} />
    </div>
  );
};

export default Weather;
