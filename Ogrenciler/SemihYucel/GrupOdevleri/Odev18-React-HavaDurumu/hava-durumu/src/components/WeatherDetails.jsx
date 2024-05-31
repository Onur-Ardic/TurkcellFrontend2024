import React from 'react';

const WeatherDetails = ({ weather }) => {
  return (
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
      {weather.slice(1, 3).map((day, index) => (
        <div className="row align-items-center mb-3" key={index}>
          <div className="col-lg-6">
            <strong>{day.day}</strong>
          </div>
          <div className="col-lg-2 text-center">
            <img id={`wrapper-icon-${day.day.toLowerCase().replace(' ', '-')}`} src={day.icon} className="w-100" alt={day.description} />
          </div>
          <div className="col-lg-4 text-end">
            <span id={`wrapper-forecast-temp-${day.day.toLowerCase().replace(' ', '-')}`}>{Math.round(day.degree)}°</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
