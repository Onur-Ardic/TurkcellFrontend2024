import { useState } from "react";
import "./App.css";

function App() {
  const token = "apikey 3XsMRT8l94XvNU2AaENG2s:5N0R6ccYoOVOyg6ms77w4T";
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error fetch");
      }
      const data = await response.json();
      setWeather(data.result);
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  };
  console.log(weather);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Weather </h1>
        <div className="d-flex text-center justify-content-center align-items-center gap-3 m-5">
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={handleInputChange}
            placeholder="Şehir giriniz"
            style={{ width: "600px" }}
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={fetchData}
          >
            Button
          </button>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 text-center">
          {weather.map((data, index) =>
            index == 0 ? (
              <div className="card col-5">
                <div className="card-body">
                  <div className="d-flex justify-content-center align-items-center gap-4">
                    <img src={weather[0]?.icon} width={150} />
                    <h3 className="fs-2">{weather[0]?.degree}°C</h3>
                  </div>

                  <h3>{city.toUpperCase()}</h3>

                  <div className="d-flex justify-content-center gap-5 mb-3">
                    <h3>{weather[0]?.day} </h3>
                    <h3>{weather[0]?.date} </h3>
                  </div>
                  <div className="fw-bold">
                    <p>Nem Oranı {weather[0]?.humidity}%</p>
                  </div>
                  <h1>{weather[0]?.description.toUpperCase()}</h1>
                </div>
              </div>
            ) : (
              <div className="card col-4">
                <div className="card-body">
                  <div className="d-flex justify-content-center align-items-center gap-4">
                    <img src={data.icon} width={50} />
                    <h3 className="fs-4">{data.degree}°C</h3>
                  </div>
                  <h3>{city.toUpperCase()}</h3>
                  <div className="d-flex justify-content-center gap-5 mb-3">
                    <h3>{data.day} </h3>
                    <h3>{data.date} </h3>
                  </div>
                  <div className="fw-bold">
                    <p>Nem Oranı {data.humidity}%</p>
                  </div>
                  <h1>{data.description.toUpperCase()}</h1>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
