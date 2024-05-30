import { useEffect, useState } from 'react'
import './App.css'
import Request from "./request/request"
import ShowWeather from './components/ShowWeather';
import WeatherBg from './css/WeatherBackground.module.css';

function App() {

  const [city,setCity] = useState("");
  const [currentWeather,setCurrentWeather] = useState([]);
  const [weatherBg,setWeatherBg]= useState("");

  const fetchWeather = async (city) => {
    const response = await Request.get(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`);
    setCity(response.city);
    setCurrentWeather(response.result);
  }

  const handleCity = () => {
      fetchWeather(city)
  }
  
  useEffect(()=>{
    if(currentWeather){
      setWeatherBg(currentWeather[0]?.status)
    }
  },[currentWeather])

  return (
    <>
      <div className={`${WeatherBg[weatherBg]} ${WeatherBg.bg}`}>
        <ShowWeather city={city} setCity={setCity} handleCity={handleCity} currentWeather={currentWeather} />
      </div>
    </>
  )
}

export default App
