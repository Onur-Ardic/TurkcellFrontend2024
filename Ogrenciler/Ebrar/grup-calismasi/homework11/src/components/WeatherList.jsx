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
        <h1 className="text-center">{showCity}</h1>
        {weather?.map((days, index) => {
          console.log(days[0]);
          return (
            <div key={index} className="row justify-content-center">
              {days.slice(0, 6)?.map((day, index) => {
                const backgroundColor = updateBackgroundColor(day.description);

                return (
                  <div
                    className="card col-3 me-5 mb-3 text-center shadow p-3 text-black"
                    key={index}
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
                    <img src={day.icon} width="150px" className="m-auto"></img>
                    <div className="fs-3 fw-bold">
                      {day.degree.slice(0, 2)} °C
                    </div>
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

export default WeatherList;
