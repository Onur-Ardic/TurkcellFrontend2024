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

  return (
    <>
      <div className="container">
        <input type="text" value={city} onChange={handleInputChange} />
        <button className="btn btn-primary" onClick={fetchData}>
          Ara
        </button>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <div className="card col-3 ">
              <div className="card-body">
                <h3>{weather[0]?.day} </h3>
                <h3>{weather[0]?.date} </h3>
                <h3>{weather[0]?.degree} </h3>
              </div>
            </div>
            {weather.map((data) => (
              <div className="card col-4" key={data.date}>
                <div className="d-flex">
                  <img
                    src={data.icon}
                    className="img-fluid"
                    width={150}
                    alt=""
                  />
                  <h3 className="card-title text-danger"> {data.degree}</h3>
                </div>

                <div className="card-body">
                  <h5 className="card-title">Gün:{data.day} </h5>
                  <h5 className="card-title">Tarih:{data.date} </h5>
                  <h5 className="card-title">Açıklama:{data.description} </h5>
                  <h5 className="card-title">Nem{data.humidity} </h5>
                  <h5 className="card-title">Max-Sıcaklık:{data.max} </h5>
                  <h5 className="card-title">Min-Sıcaklık:{data.min} </h5>
                  <h5 className="card-title">Gece sıcaklığı:{data.night} </h5>
                  <h5 className="card-title text-danger">Sıcaklık:</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
