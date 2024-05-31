const WeatherList = ({ weather }) => {

  return (
    <>
      <div className="container mt-5 pt-5">
        {weather?.map((days, index) => {
          return (
            <div key={index} className="row justify-content-center">
              {days?.map((day, index) => {
                return (
                  <div className="card col-3 me-5 mb-3 text-center shadow p-3 bg-dark text-white" key={index} style={{ borderRadius: "20px" }}>
                    <div className="fs-5 mb-5" style={{ borderBottom: "1px solid black" }}>{day.day}</div>
                    <img src={day.icon} width="150px" className="m-auto"></img>
                    <div className="fs-3 fw-bold">{day.degree.slice(0,2)} °C</div>
                    <div className="text-capitalize">{day.description}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherList
