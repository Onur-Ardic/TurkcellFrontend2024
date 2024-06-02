import React, { useEffect, useState } from "react";
import { getWeather } from "../request";
import WeatherList from "./WeatherList";
import { HiCloud } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./css/InputArea.css";

function InputArea() {
  const hour = new Date().getHours();
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (hour > 9 && hour < 12) {
      setHeading("GÜNAYDIN ");
    } else if (hour >= 12 && hour < 17) {
      setHeading("İYİ GÜNLER ");
    } else if (hour >= 17 && hour < 21) {
      setHeading("İYİ AKŞAMLAR ");
    } else {
      setHeading("İYİ GECELER ");
    }
  }, [hour]);

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [showCity, setshowCity] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleClick() {
    setWeather([]);
    setLoading(true);
    await getWeather(city).then((data) => {
      setWeather((city) => [...city, data.result]);
    });
    setLoading(false);
    setshowCity(city);
    setCity("");
  }

  return (
    <div className="container pt-2">
      <h1 className="text-center mb-3 py-2">
        {heading} <HiCloud />
      </h1>
      <div className="row justify-content-center">
        <input
          className="input col-4 p-2 rounded-pill border-success"
          type="text"
          placeholder="Enter city.."
          value={city}
          onChange={handleChange}
          spellCheck="false"
        />
        <button
          className="btn btn-success col-1 rounded-pill p-2"
          onClick={handleClick}>
          Send
        </button>
      </div>
      {loading ? (
        <p className="text-center p-3 fs-5">
          <AiOutlineLoading3Quarters />
        </p>
      ) : (
        <WeatherList weather={weather} showCity={showCity} />
      )}
    </div>
  );
}

export default InputArea;
