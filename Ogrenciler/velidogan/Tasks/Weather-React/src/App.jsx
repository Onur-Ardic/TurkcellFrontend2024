import { useEffect, useState } from 'react'
import './App.css'
import Request from "./request/request"
import Input from "./components/Input"

function App() {

  const [city,setCity] = useState("");


  // const fetchWeather = async (city) => {
  //   const response = await Request.get(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`);
  //   return response
  // }

  const handleCity = () => {
      fetchWeather(city)
  }
  useEffect(() => {
    fetchWeather(city)
  },[])

  return (
    <>
      <Input  city={city} setCity={setCity} handleCity={handleCity}/>
    </>
  )
}

export default App
