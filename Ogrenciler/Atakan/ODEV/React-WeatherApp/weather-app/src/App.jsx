import { useState } from "react";
import "./App.css";
import FormGroup from "./components/molecules/formGroup/FormGroup";
import WeatherCard from "./components/organisms/weatherCard/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const url = `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`;

  const getWeather = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "apikey 6ukX9v1kwoTNn44NxBXoUQ:4spLCuoz3ZrSYpCvgfwFOg",
      },
    });
    const result = await response.json();
    return result;
  };

  const fetchWeatherList = async () => {
    const result = await getWeather();
    setWeatherList(result.result);
  };

  return (
    <>
      <div className="input-area">
        <div className="container">
          <h1>Weather App</h1>
          <div className="row">
            <FormGroup
              value={city}
              onChange={handleChange}
              onClick={fetchWeatherList}
            />
          </div>
          <div className="row">
            {weatherList.map((weather, index) => (
              <WeatherCard key={index} weather={weather} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
