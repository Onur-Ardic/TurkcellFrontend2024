import React, { useEffect, useState } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "authorization": "apikey 3NLavCimfIJ0OZ300Og5Or:4BHlEttAgtg1C472xQF0IR"
      },
      credentials: "include"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setWeatherData(data.result); // Assuming the API response has a 'result' key containing the weather data
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>7 Günlük Hava Durumu</h1>
      <ul>
        {weatherData.map((day, index) => (
          <li key={index}>
            <p>Tarih: {day.date}</p>
            <p>Durum: {day.description}</p>
            <p>Sıcaklık: {day.degree}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherComponent;
