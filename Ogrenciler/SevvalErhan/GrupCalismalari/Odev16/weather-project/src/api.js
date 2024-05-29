import App from "./App";

const fetchData = async () => {
   try {
    const response = await fetch("https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara");
    method : "GET",
    headers : {
        'Content-type ' : "application/json",
        'autohorization' : "apikey 5I2wFz1h3OZ9QaLZc0Fgw0:6xVeF9UZZgWOhLMALeiR9L",
    }
    if (!response.ok) {
        throw new Error("Hata");
    }
    const data = await response.json();
    return data;
   } catch (error) {
    alert(error)
   }
}

export default App