import { useEffect, useState } from "react";
import CardGroup from "../../molecules/CardGroup/CardGroup";
import InputGroup from "../../molecules/InputGroup/InputGroup";
import TextGroup from "../../molecules/TextGroup/TextGroup";
import styles from "./styles.module.css";
import Button from "../../atoms/Button/Button";

const Weather = () => {
  const [weathers, setWeathers] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [city, setCity] = useState("Ankara");

  function changeBackgroundImage() {
    const backgroundImages = {
      clear: 'url("./src/assets/sunny.jpg")',
      rain: 'url("./src/assets/rain.jpg")',
      clouds: 'url("./src/assets/clouds1.png")',
      snow: 'url("https://images.unsplash.com/photo-1581947454454-daf5f7200128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      default: 'url("./src/assets/lightning.jpg")',
    };

    const status = selectedWeather?.status?.toLowerCase();
    const backgroundImage =
      backgroundImages[status] || backgroundImages.default;

    document.body.style.backgroundImage = backgroundImage;
  }

  async function getWeather(city) {
    await fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
      {
        headers: {
          "Content-type": "application/json",
          authorization: "apikey 4iHtt44IyVLSrUsjHrwgmX:4EdntZ0EkrTAZaUnJw4Vxh",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setWeathers(data.result);
          setSelectedWeather(data.result[0]);
        } else {
          setSelectedWeather(null);
        }
      })
      .catch((err) => console.log(err));
  }

  async function searchCity() {
    await getWeather(city);
  }

  useEffect(() => {
    getWeather(city);
  }, []);

  useEffect(() => {
    changeBackgroundImage();
  }, [selectedWeather]);

  if (!weathers || !selectedWeather) {
    return (
      <div className={styles.errorContainer}>
        <p>Bulunamadı</p>
        <p className={styles.atmosware}>
          Bugün hava kötü ama yine de Atmosware&apos;da çalışmak için çok güzel.
        </p>

        <Button
          text="Tekrardan Arama Yap"
          onClick={() => getWeather("Ankara")}
        />
      </div>
    );
  }

  return (
    <div className={styles.groups}>
      <InputGroup
        setCity={setCity}
        city={city}
        onClick={searchCity}
        text="Ara"
      />
      <TextGroup
        date={selectedWeather.date}
        day={selectedWeather.day}
        degree={selectedWeather.degree}
        description={selectedWeather.description}
        humidity={selectedWeather.humidity}
        min={selectedWeather.min}
        max={selectedWeather.max}
        night={selectedWeather.night}
      />
      <CardGroup weathers={weathers} setSelectedWeather={setSelectedWeather} />
    </div>
  );
};

export default Weather;
