import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState([]);
  const [todaysWeather, setTodaysWeather] = useState(null);

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
        {
          headers: {
            "Content-type": "application/json",
            authorization:
              "apikey 4dgCka0TIArTiKntTO8of7:46M4t3L9JVODGbA8WZ3OMq",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data.result);
      setTodaysWeather(data.result[0]);
    } catch (error) {
      alert(error + " Hatası");
    }
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="text"
            onChange={handleCity}
            placeholder="Şehir giriniz..."
          />
          <button onClick={fetchWeather}>Getir</button>
        </div>

        <div className="weather">
          <CardList weatherData={weatherData} />
        </div>
      </div>
    </>
  );
}

export default App;
