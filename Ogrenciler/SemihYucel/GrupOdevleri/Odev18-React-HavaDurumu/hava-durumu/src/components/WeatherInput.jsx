import React from 'react';

const WeatherInput = ({ city, setCity, handleKeyPress, getWeather }) => {
  return (
    <div className="card-header p-4 border-0">
      <div className="text-center mb-3">
        <h1>Hava Durumu</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Şehir Girin"
        />
        <button onClick={getWeather}>Hava Durumunu Öğren</button>
      </div>
    </div>
  );
};

export default WeatherInput;
