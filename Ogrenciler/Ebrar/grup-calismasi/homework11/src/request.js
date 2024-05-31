export async function getWeather(city) {
  const apikey = "7ARxGftD727j8DZG9R9rGS:3hcXcNAasYW10aFvzs7xZi";
  const response = await fetch(
    `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `apikey ${apikey}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
