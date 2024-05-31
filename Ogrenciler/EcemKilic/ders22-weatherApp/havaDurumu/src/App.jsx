import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import CardList from './components/CardList';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [todaysWeather, setTodaysWeather] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null)

  async function fetchWeather() {
    try {
      const response = await fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {
        headers: {
          'Content-type': 'application/json',
          'authorization': 'apikey 4dgCka0TIArTiKntTO8of7:46M4t3L9JVODGbA8WZ3OMq',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data.result);
      setTodaysWeather(data.result[0]);
    } catch (error) {
      alert(error + ' Hatası');
    }
  }

  const handleCity = (e) => {
    setCity(e.target.value);
  }

  const getWeatherBG = () => {
    if (!todaysWeather) return '';
    if (todaysWeather.status.toLowerCase().includes('clear')) return 'sunny';
    if (todaysWeather.status.toLowerCase().includes('rain')) return 'rainy';
    if (todaysWeather.status.toLowerCase().includes('cloud')) return 'cloudy';
    if (todaysWeather.status.toLowerCase().includes('snow')) return 'snowy';
    return '';
  }

  return (
    <>
      <div className={`container ${getWeatherBG()}`}>
        <div className='search'>
          <input type='text' onChange={handleCity} placeholder="Şehir giriniz..." />
          <button onClick={fetchWeather}>Getir</button>
        </div>

        <div className="weather">
          <div className="card">
            {weatherData.slice(0, 1).map((data, index) => (
                <Card key={index} data={data} />
            ))}
          </div>

          <div className="cardList">
            {weatherData.slice(1, 7).map((data, index) => (
                  <Card key={index} data={data} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
