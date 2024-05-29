import { getWeather } from "./request";
import "./App.css";

function App() {
  function buttonClick() {
    const weather = getWeather();
    console.log(weather);
  }
  return (
    <>
      <button onClick={buttonClick}>Deneme</button>
    </>
  );
}

export default App;
