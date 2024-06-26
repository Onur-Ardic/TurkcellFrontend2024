import { useState, useEffect } from "react";
import styles from "./App.module.css";
import WeatherCard from "./components/organisms/WeatherInfo/WeatherCard";
import MiniCard from "./components/organisms/WeatherInfo/MiniCard";
import { getWeatherData } from "./services/api";
import SearchBar from "./components/molecules/SearchBar/SearchBar";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
<<<<<<< Updated upstream
  const [place, setPlace] = useState("ANKARA");
=======
  const [place, setPlace] = useState("Ankara");
>>>>>>> Stashed changes
  const [thisLocation, setLocation] = useState("");

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(".");
    return new Date(year, month - 1, day);
  };

  const fetchWeather = async () => {
    try {
      const data = await getWeatherData(place);
      const currentWeather = data.result[0];

      const dailyForecast = data.result.map((entry) => ({
        datetime: parseDate(entry.date),
        temp: entry.degree,
        description: entry.description,
        icon: entry.icon,
        min: entry.min,
        max: entry.max,
<<<<<<< Updated upstream
        status: entry.status
      }));
=======
      }));

>>>>>>> Stashed changes
      const location = data.city;

      setWeather(currentWeather);
      setValues(dailyForecast);
      setLocation(location);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching the weather data.");
    }
  };

<<<<<<< Updated upstream
  const handleInputChange = (e) => {
    let sanitizedInput = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (sanitizedInput.length <= 30) {
      setInput(sanitizedInput);
    }
  };
=======
  useEffect(() => {
    fetchWeather();
  }, [place]);

  const handleInputChange = (e) => setInput(e.target.value);
>>>>>>> Stashed changes

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      submitCity();
    }
  };

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

<<<<<<< Updated upstream
  useEffect(() => {
    fetchWeather();
  }, [place]);

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
=======
  return (
    <section className={styles.background}>
>>>>>>> Stashed changes
      <div className={styles.navContainer}>
        <nav className={styles.navBar}>
          <h1 className={styles.title}>Weather App</h1>
          <SearchBar
            value={input}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            placeholder="Search city"
          />
        </nav>
      </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      <div className={styles.mainContent}>
        <WeatherCard
          place={thisLocation}
          humidity={weather.humidity}
          temperature={weather.degree}
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
<<<<<<< Updated upstream
      </div>
    </div>
=======
    </section>
>>>>>>> Stashed changes
  );
}

export default App;
