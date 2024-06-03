import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  function getWeather() {
    fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "apikey 6ukX9v1kwoTNn44NxBXoUQ:4spLCuoz3ZrSYpCvgfwFOg",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setWeather(response))
      .catch((error) => alert(error + "Hatası"));
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getWeather();
    console.log(weather);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      <div className="card-wrapper">
        {weather?.result?.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </>
  );
}

export default App;
