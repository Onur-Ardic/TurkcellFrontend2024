import React, { useState } from "react";
import Video from "./BgVideo";
import WeatherCard from "./WeatherCard";

const token = "apikey 3XsMRT8l94XvNU2AaENG2s:5N0R6ccYoOVOyg6ms77w4T";

const WeatherContainer = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [displayedCity, setDisplayedCity] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("sunny");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const determineWeatherCondition = (description) => {
    if (description.includes("yağmur")) {
      return "rainy";
    } else if (description.includes("bulutlu")) {
      return "cloudy";
    } else {
      return "sunny";
    }
  };

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${cityName}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching weather data");
      }
      const data = await response.json();
      setWeather(data.result);
      setDisplayedCity(cityName);
      setWeatherCondition(
        determineWeatherCondition(data.result[0].description.toLowerCase())
      );
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=tr`
            );
            if (!response.ok) {
              throw new Error("Konum bilgisi alınamadı.");
            }
            const locationData = await response.json();
            fetchData(locationData.locality);
          } catch (error) {
            console.log(error.message);
          }
        },
        (error) => {
          alert("Konum bilgisi alınamadı. Lütfen şehir ismi girin.", error);
        }
      );
    }
  };

  const handleGetWeatherClick = () => {
    if (city) {
      fetchData(city);
    }
  };

  return (
    <div className="main">
      <Video weather={weatherCondition} />
      <div className="content">
        <div className="container">
          <h1 className="text-center mt-5 text-warning">-SkyWatcher-</h1>
          <div className="d-flex text-center justify-content-center align-items-center gap-3 m-5">
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={handleInputChange}
              placeholder="Şehir giriniz"
              style={{ width: "600px" }}
            />
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleGetWeatherClick}
            >
              Ara
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={findMyLocation}
            >
              Konumumu Kullan
            </button>
          </div>
          <div className="d-flex flex-wrap justify-content-center text-center mb-5">
            {weather.map((data, index) => (
              <WeatherCard
                key={index}
                data={data}
                isMain={index === 0}
                city={displayedCity}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
