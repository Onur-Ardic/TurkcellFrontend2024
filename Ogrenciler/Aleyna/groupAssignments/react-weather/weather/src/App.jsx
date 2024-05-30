import "./App.css";
import Weather from "./components/organisms/Weather";

function App() {
  function getWeather(city) {
    fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
      {
        headers: {
          "Content-type": "application/json",
          authorization: "apikey 4iHtt44IyVLSrUsjHrwgmX:4EdntZ0EkrTAZaUnJw4Vxh",
        },
      }
    )
      .then((data) => data.json())
      .then((response) => setDataInfo(response))
      .catch((error) => alert(error));
  }
  return (
    <>
      <Weather />
    </>
  );
}

export default App;
