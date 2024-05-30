import { useState } from 'react'
import './App.css'


function App() {
  const [city, setCitys] = useState([]);
  const [weather, setWeather] = useState({ 
      "date": "",
      "day": "",
      "icon": "https://image.flaticon.com/icons/svg/143/143769.svg",
      "description": "",
      "status": "",
      "degree": "",
      "min": "",
      "max": "",
      "night": "",
      "humidity": "",
  });


  return (
    <>

    </>
  )
}

export default App;
