import { useState, useEffect } from "react";
import styles from "./App.module.css";
import {
  BackgroundLayout,
  WeatherCard,
  MiniCard,
} from "./components/organisms/WeatherInfo";
import { getWeatherData } from "./services/api";
import SearchBar from "./components/molecules/SearchBar/SearchBar";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Antalya");
  const [thisLocation, setLocation] = useState("");

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(".");
    return new Date(year, month - 1, day);
  };

  const fetchWeather = async () => {
    try {
      const data = await getWeatherData(place);
      const currentWeather = data.result[0];
      const weather = {
        temp: currentWeather.degree,
        humidity: currentWeather.humidity,
        description: currentWeather.description,
        icon: currentWeather.icon,
        night: currentWeather.night,
        status: currentWeather.status,
        min: currentWeather.min,
        max: currentWeather.max,
      };

      const dailyForecast = data.result.map((entry) => ({
        datetime: parseDate(entry.date),
        temp: entry.degree,
        description: entry.description,
        icon: entry.icon,
        min: entry.min,
        max: entry.max,
      }));

      const location = data.city;

      setWeather(weather);
      setValues(dailyForecast);
      setLocation(location);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching the weather data.");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      submitCity();
    }
  };

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className={styles.appContainer}>
      <nav className={styles.navBar}>
        <h1 className={styles.title}>Weather App</h1>
        <SearchBar
          value={input}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Search city"
        />
      </nav>
      <BackgroundLayout />
      <div className={styles.mainContent}>
        <WeatherCard
          place={thisLocation}
          humidity={weather.humidity}
          temperature={weather.temp}
          icon={weather.icon}
          description={weather.description}
          night={weather.night}
          status={weather.status}
          min={weather.min}
          max={weather.max}
        />
        <div className={styles.miniCards}>
          {values.map((daily) => (
            <MiniCard
              key={daily.datetime}
              time={daily.datetime}
              temp={daily.temp}
              icon={daily.icon}
              description={daily.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
