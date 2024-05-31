import React, { useState } from 'react';
import WeatherInput from './WeatherInput';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';
import '../Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = async () => {
    if (!city) return;
    const queryUrl = "https://api.collectapi.com/weather/getWeather?";
    const apiKey = "apikey 1Rk3LAXDG83Ldvj2s2HZfj:02bwuAMnjLNg6v6tX9WBol";
    const file = `${queryUrl}data.lang=tr&data.city=${city}`;

    const response = await fetch(file, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': apiKey,
      },
    });

    const data = await response.json();
    setWeather(data.result);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getWeather();
    }
  };

  const bgImageMap = {
    Snow: 'https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif',
    Clouds: 'https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif',
    Fog: 'https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif',
    Rain: 'https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif',
    Clear: 'https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif',
    Thunderstorm: 'https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif',
  };

  const getBackgroundImage = (status) => {
    return bgImageMap[status] || bgImageMap['Clear'];
  };

  return (
    <section className="vh-100">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div id="wrapper-bg" className="card text-white bg-image shadow-4-strong" style={{ backgroundImage: weather ? `url(${getBackgroundImage(weather[0].status)})` : 'none' }}>
              <WeatherInput city={city} setCity={setCity} handleKeyPress={handleKeyPress} getWeather={getWeather} />
              {weather && (
                <>
                  <WeatherCard weather={weather} city={city} />
                  <WeatherDetails weather={weather} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
