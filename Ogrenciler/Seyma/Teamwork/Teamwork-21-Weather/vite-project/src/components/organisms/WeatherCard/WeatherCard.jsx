import React from 'react'
import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ data }) => {
 
    // Eğer data null veya undefined ise bileşeni render etmeyin
    if (!data) return null;
  
    const { icon, degree, date,  humidity, max, status } = data;
  
    return (
<div className="card flex animate__animated animate__backInUp animate_slowly">
      <p>{city}</p>
      <div className="card-left">
        <p>{day}</p>
        <img src={icon} />
        <p className="degree f-24">{degree} °C</p>
        <span>{date}</span>
      </div>
      <div className="card-right">
        <p className="status">{status}</p>
        <div className="min-max-degree flex">
          <p className="flex flex-col">
            Min:
            <span>{min} °C</span>
          </p>

          <p className="flex flex-col">
            Max:
            <span>{max} °C</span>
          </p>
        </div>

        <p className="night flex">
          <i className="bi bi-moon-fill"></i>
          <span>{night} °C</span>
        </p>

        <p className="humidity flex">
          <i className="bi bi-droplet-half"></i>
          <span>{humidity} %</span>
        </p>
      </div>
    </div>
    );
  };
