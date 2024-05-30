import { useState } from "react";
import { getWeather } from "../request";
import { WeatherList } from "./WeatherList";

const InputArea = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleClick() {
    getWeather(city).then((data) => {
      setWeather((prevWeather) => [...prevWeather, data.result]);
    });
  }

  return (
    <>
      <input type="text" placeholder="Enter city" value={city} onChange={handleChange} />
      <button onClick={handleClick}>Send</button>
      <WeatherList weather={weather} />
    </>
  );
};

export default InputArea;
