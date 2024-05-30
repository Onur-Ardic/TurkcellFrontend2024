export const WeatherList = ({ weather }) => {
  console.log(weather);
  return (
    <>
      <div className="container">
        <div className="row">
          {weather?.map((day, index) => {
            return (
              <div className="col-4 card" key={index}>
                {day.day}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
