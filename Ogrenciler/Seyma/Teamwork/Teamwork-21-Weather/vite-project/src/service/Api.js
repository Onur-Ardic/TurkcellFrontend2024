const url = `https://api.collectapi.com/weather/getWeather?data.lang=tr&`


export const get = async (city) => {
  const response = await fetch(`${url}data.city=${city}`,  {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "apikey 1aZF9T1jqUnU0jJByb9Esn:1q4ldxSZazASCHJKfAMyUw"
    }
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

