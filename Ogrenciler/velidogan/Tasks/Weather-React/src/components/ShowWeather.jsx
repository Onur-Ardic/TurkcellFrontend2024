import React from "react";
import ShowWeatherCss from "../css/ShowWeather.module.css";
import Input from "./Input";

function ShowWeather({ city, setCity, handleCity, currentWeather }) {
    console.log(currentWeather)
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle w-100 z-1">
        <div className="container-fluid container-md">
          <div className="row align-items-center">
            <Input city={city} setCity={setCity} handleCity={handleCity} />
            {currentWeather[0] && (
              <>
                <div className="col-lg-4 col-12 mt-3">
                    <div className="card bg-transparent text-light border-0">
                        <div className={`${ShowWeatherCss.cardBody} card-body`}>
                            <div className="d-flex align-items-end">
                                <h1 className="display-1 mb-0">
                                {parseInt(currentWeather[0]?.degree) || "30"}<span>°C</span>
                                </h1>
                                <img className={`${ShowWeatherCss.imgBig} display-6 ms-3`} src={currentWeather[0].icon}></img>
                            </div>
                            <p className="display-6">{city.toUpperCase()}</p>
                            <div className="d-flex gap-2">
                                <p>{currentWeather[0].date}</p>
                                <p>{`Min: ${parseInt(currentWeather[0].min)}°C`}</p>
                                <p>{`Max: ${parseInt(currentWeather[0].max)}°C`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-12 mt-3">
                  <div className="card bg-transparent border-0">
                    <div className={`${ShowWeatherCss.cardBody} card-body`}>
                      <table className="table table-borderless bg-transparent">
                        <thead>
                          <tr>
                            <th scope="col" colSpan={4}>
                              WEEK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                currentWeather.map((weather,index) => (
                                    <tr key={index}>
                                        <td>{weather?.day}</td>
                                        <td><img src={weather?.icon} alt=""/></td>
                                        <td className="text-capitalize">{weather?.description}</td>
                                        <td>{parseInt(weather?.degree)} °C </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowWeather;
