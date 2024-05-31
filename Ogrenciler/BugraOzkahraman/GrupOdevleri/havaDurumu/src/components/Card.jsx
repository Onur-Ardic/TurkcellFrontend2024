import React from "react";

function Card({ data }) {
  return (
    <div className="cardToday">
      <p>{data.city}</p>
      <div className="card-left">
        <p>{data.day}</p>
        <img src={data.icon} alt="weather icon" />
        <p className="degree f-24">{data.degree} °C</p>
      </div>
    </div>
  );
}

export default Card;
