import React from 'react';

const WeatherCard = ({ weather, city }) => {
  return (
    <div className="card-body p-4 border-top border-bottom mb-2">
      <div className="text-center">
        <p className="h2 mb-1" id="wrapper-name">{city}</p>
        <p className="mb-1" id="wrapper-description">{weather[0].description}</p>
        <p className="display-1 mb-1" id="wrapper-temp">{Math.round(weather[0].degree)}°C</p>
        <span>En Düşük: <span id="wrapper-pressure">{weather[0].min}</span></span>
        <span className="mx-2">|</span>
        <span>Nem: <span id="wrapper-humidity">{weather[0].humidity}</span>%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
