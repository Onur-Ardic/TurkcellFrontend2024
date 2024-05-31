const url = "https://api.collectapi.com/weather/getWeather?data.lang=tr&";
export const readData = async (city) => {
    const response = await fetch(`${url}data.city=${city}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'apikey 1YuYmYVFpqvUVsOORr3uy6:34Mft0md2mhDcThYmxwTeU'
        }
    });
    if (!response.ok) {
      throw new Error("Network reponse was not ok");
    }
    const result = await response.json();
    return result;
  };

