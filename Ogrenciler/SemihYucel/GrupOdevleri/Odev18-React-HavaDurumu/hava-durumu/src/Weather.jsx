import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = async () => {
    if (!city) return; // Şehir adı boşsa fonksiyondan çıkar
    const queryUrl = "https://api.collectapi.com/weather/getWeather?";
    const apiKey = "apikey 1Rk3LAXDG83Ldvj2s2HZfj:02bwuAMnjLNg6v6tX9WBol"; // API anahtarı
    const file = `${queryUrl}data.lang=tr&data.city=${city}`; // Dinamik olarak oluşturulan API isteği URL'si

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

  // Hava durumu durumlarına göre arka plan resimleri
  const bgImageMap = {
    Snow: 'https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif',
    Clouds: 'https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif',
    Fog: 'https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif',
    Rain: 'https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif',
    Clear: 'https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif',
    Thunderstorm: 'https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif',
  };

  // Hava durumu durumuna göre uygun arka plan resmini döndüren fonksiyon
  const getBackgroundImage = (status) => {
    return bgImageMap[status] || bgImageMap['Clear'];
  };

  return (
    <section className="vh-100">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div id="wrapper-bg" className="card text-white bg-image shadow-4-strong" style={{ backgroundImage: weather ? `url(${getBackgroundImage(weather[0].status)})` : 'none' }}> {/* Hava durumu bilgilerine göre arka plan resmi */}
              <div className="card-header p-4 border-0">
                <div className="text-center mb-3">
                  <h1>Hava Durumu</h1>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Şehir adı değiştiğinde state güncellenir
                    onKeyPress={handleKeyPress}
                    placeholder="Şehir Girin"
                  />
                  <button onClick={getWeather}>Hava Durumunu Öğren</button>
                  {weather && ( // weather state'i doluysa bu kısmı render eder
                    <>
                      <p className="h2 mb-1" id="wrapper-name">{city}</p>
                      <p className="mb-1" id="wrapper-description">{weather[0].description}</p>
                      <p className="display-1 mb-1" id="wrapper-temp">{Math.round(weather[0].degree)}°C</p>
                      <span>Pressure: <span id="wrapper-pressure">{weather[0].min}</span></span>
                      <span className="mx-2">|</span>
                      <span>Nem: <span id="wrapper-humidity">{weather[0].humidity}</span>%</span>
                    </>
                  )}
                </div>
              </div>
              {weather && ( // weather state'i doluysa bu kısmı render eder
                <>
                  <div className="card-body p-4 border-top border-bottom mb-2">
                    <div className="row text-center">
                      <div className="col-2">
                        <strong className="d-block mb-2">Şu An</strong>
                        <img id="wrapper-icon-hour-now" src={weather[0].icon} alt="weather icon" />
                        <strong className="d-block" id="wrapper-hour-now">{Math.round(weather[0].degree)}°</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-5">
                    <div className="row align-items-center mb-3">
                      <div className="col-lg-6">
                        <strong>Bugün</strong>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img id="wrapper-icon-today" src={weather[0].icon} className="w-100" alt={weather[0].description} />
                      </div>
                      <div className="col-lg-4 text-end">
                        <span id="wrapper-forecast-temp-today">{Math.round(weather[0].degree)}°</span>
                      </div>
                    </div>
                    {weather.slice(1, 3).map((day, index) => ( // Sonraki günlerin hava durumu tahminleri
                      <div className="row align-items-center mb-3" key={index}>
                        <div className="col-lg-6">
                          <strong>{day.day}</strong> {/* Gün adı */}
                        </div>
                        <div className="col-lg-2 text-center">
                          <img id={`wrapper-icon-${day.day.toLowerCase().replace(' ', '-')}`} src={day.icon} className="w-100" alt={day.description} /> {/* Hava durumu simgesi */}
                        </div>
                        <div className="col-lg-4 text-end">
                          <span id={`wrapper-forecast-temp-${day.day.toLowerCase().replace(' ', '-')}`}>{Math.round(day.degree)}°</span> {/* Sıcaklık */}
                        </div>
                      </div>
                    ))}
                  </div>
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
