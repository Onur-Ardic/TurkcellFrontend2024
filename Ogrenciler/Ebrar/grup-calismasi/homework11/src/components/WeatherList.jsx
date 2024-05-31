function updateBackgroundColor(description) {
  switch (description.toLowerCase()) {
    case "açık":
      return "rgba(255, 255, 0, 0.600)";
    case "parçalı az bulutlu":
      return "rgba(163, 167, 170, 0.747)";
    case "hafif yağmur":
      return "rgba(92, 157, 218, 0.747)";
    case "kapalı":
      return "#696969";
    default:
      return "white";
  }
}

const WeatherList = ({ weather, showCity }) => {
  return (
    <>
      <div className="container mt-5 pt-2">
        <h1 className="text-center text-uppercase pb-5">{showCity}</h1>
        {weather?.map((days, index) => {
          const mainDay = days[0];
          const backgroundColorMain = updateBackgroundColor(
            mainDay.description
          );

          return (
            <div key={index} className="d-flex column justify-content-center">
              <div className="d-flex col-4  justify-content-center">
                <div
                  className="card col-9  text-center shadow p-3 text-black"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: backgroundColorMain,
                  }}>
                  <div
                    className="fs-5  text-uppercase"
                    style={{
                      borderBottom: "1px solid rgba(170, 166, 166, 0.719)",
                    }}>
                    {mainDay.day}
                  </div>
                  <img
                    src={mainDay.icon}
                    width="150px"
                    className="m-auto"
                    alt="weather icon"
                  />
                  <div className="fs-3 fw-bold">
                    {mainDay.degree.slice(0, 2)} °C
                  </div>
                  <div className="text-capitalize">{mainDay.description}</div>
                </div>
              </div>
              <div className="d-flex col-8 flex-wrap justify-content-center">
                {days.slice(1, 7).map((day, index) => {
                  const backgroundColor = updateBackgroundColor(
                    day.description
                  );
                  return (
                    <div
                      key={index}
                      className="card col-3 me-5 mb-3 text-center shadow p-3 text-black"
                      style={{
                        borderRadius: "20px",
                        backgroundColor: backgroundColor,
                      }}>
                      <div
                        className="fs-5 mb-5 text-uppercase"
                        style={{
                          borderBottom: "1px solid rgba(170, 166, 166, 0.719)",
                        }}>
                        {day.day}
                      </div>
                      <img
                        src={day.icon}
                        width="150px"
                        className="m-auto"
                        alt="weather icon"
                      />
                      <div className="fs-3 fw-bold">
                        {day.degree.slice(0, 2)} °C
                      </div>
                      <div className="text-capitalize">{day.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherList;
