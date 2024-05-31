const WeatherCard = ({ data, isMain, city }) => {
  return (
    <div
      className={`card ${isMain ? "col-12 main-day" : "col-6 other-day"}`}
      key={data.date}
    >
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img src={data.icon} width={isMain ? 150 : 50} alt="weather icon" />
          <h2 className={isMain ? "text-danger" : "text-danger"}>
            {Math.floor(data.degree)}°C
          </h2>
        </div>
        {isMain && <h3 className="mt-3">{city.toUpperCase()}</h3>}
        <div className="d-flex justify-content-center gap-5 mb-3">
          <h3>{data.day}</h3>
          <h3>{data.date}</h3>
        </div>
        <div className="fw-bold">
          <h4>Nem Oranı {data.humidity}%</h4>
        </div>
        <h1>{data.description.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default WeatherCard;
