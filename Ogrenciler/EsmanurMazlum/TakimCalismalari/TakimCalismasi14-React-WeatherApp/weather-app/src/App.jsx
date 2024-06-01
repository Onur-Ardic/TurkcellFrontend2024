import { useState } from "react";
import "./App.css";
import InputGroup from "./components/molecule/inputGroup";
import Card from "./components/molecule/card";
import styles from "./components/styles.module.css";

function App() {
  const [dataInfo, setDataInfo] = useState([]);
  const [city, setCity] = useState("");

  async function handler() {
    await fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
      {
        headers: {
          "Content-type": "application/json",
          authorization: "apikey 1Rk3LAXDG83Ldvj2s2HZfj:02bwuAMnjLNg6v6tX9WBol",
        },
      }
    )
      .then((data) => data.json())
      .then((response) => setDataInfo(response))
      .catch((error) => alert(error + "Hatası "));
    setCity("");
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div
      className={`bg ${dataInfo.length == 0 ? "" : dataInfo.result[0]?.status}`}
    >
      <InputGroup
        text={"Bir şehir giriniz."}
        onChange={handleChange}
        value={city}
        btnText={<i className="bi bi-search"></i>}
        onClick={handler}
      />

      {(dataInfo.length < 1 && (
        <h1 className={styles.alertTitle}>Lütfen bir şehir giriniz</h1>
      )) || (
        <>
          <h1 className="city-title">{dataInfo.city.toUpperCase()}</h1>
          <div className="card-wrapper">
            {dataInfo.result?.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
