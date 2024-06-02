const Card = ({
  day,
  col,
  bg,
  color,
  dayBg,
  dayColor,
  setActiveDay,
  index,
  capitalize,
}) => {
  return (
    <>
      <div
        onClick={() => {
          setActiveDay(index);
        }}
        className={`weather-card card ${col} rounded-5 text-center  border-0 shadow ${bg}`}
      >
        <img src={day.icon} className="card-img-top p-3" alt="..." />
        <div className="card-body d-flex flex-column gap-2">
          <div className={`rounded-pill px-3 py-2 text-white ${dayBg}`}>
            <h5 className={`card-title m-0 fs-4 ${dayColor}`}>{day.day}</h5>
          </div>
          <div>
            <span className={`card-text purple fs-1 fw-bold me-2 ${color}`}>
              {day.degree.split(".")[0]}°
            </span>
            <span
              className={`card-text purple fs-3 fw-bold opacity-75 ${color}`}
            >
              {day.night.split(".")[0]}°
            </span>
          </div>
          <p className={`fs-3  ${color}`}>
            <i className={`fa-solid fa-droplet me-2 ${color}`}></i>
            {day.humidity}%
          </p>
          <p className={`fs-5  ${color}`}>{capitalize(day.description)}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
