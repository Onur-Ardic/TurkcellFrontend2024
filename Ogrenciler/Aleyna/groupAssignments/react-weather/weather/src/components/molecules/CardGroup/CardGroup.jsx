import WeatherCard from "../../atoms/WeatherCard/WeatherCard";
import styles from "./styles.module.css";

const CardGroup = ({ weathers, setSelectedWeather }) => {
  return (
    <div className={styles.cards}>
      {weathers.map((weather, index) => {
        return (
          <WeatherCard
            key={index}
            weather={weather}
            setSelectedWeather={setSelectedWeather}
          />
        );
      })}
    </div>
  );
};

export default CardGroup;
