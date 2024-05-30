import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p>{weather.date}</p>
          <p>{weather.day}</p>
          <div>
            <img src={weather.icon} alt="Hava Durumu" />
          </div>
          <p>{weather.description}</p>
          <p>{weather.status}</p>
          <p>{weather.degree}</p>
          <p>{weather.min}</p>
          <p>{weather.max}</p>
          <p>{weather.night}</p>
          <p>{weather.humidity}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
