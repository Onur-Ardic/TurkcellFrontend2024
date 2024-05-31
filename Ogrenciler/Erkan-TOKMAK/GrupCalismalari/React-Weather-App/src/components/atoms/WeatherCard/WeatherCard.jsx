import styles from "./styles.module.css";

const WeatherCard = ({ weather, setSelectedWeather }) => {
  return (
    <div
      className={styles.container}
      onClick={() => setSelectedWeather(weather)}
    >
      <h5 className={styles.date}>{weather.date}</h5>
      <img className={styles.img} src={weather.icon} />
      <p className={styles.degree}>{weather.degree}°</p>
    </div>
  );
};

export default WeatherCard;
