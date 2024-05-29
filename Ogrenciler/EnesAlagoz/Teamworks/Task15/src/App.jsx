import { getWeather } from "./request";
import { WeatherList } from "./components/WeatherList";
import { useEffect } from "react";

function App() {
  let weather = [];
  useEffect(() => {
    getWeather().then((data) => {
      weather.push(data.result);
    });
  }, []);

  return (
    <>
      <WeatherList weather={weather} />
    </>
  );
}

export default App;
