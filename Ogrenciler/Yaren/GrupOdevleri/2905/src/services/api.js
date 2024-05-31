const url = "https://api.collectapi.com/weather/getWeather?data.lang=en&";

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${url}data.city=${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "apikey 6jbBDvSLAbrHpjT3NSXsJe:3w035RePFbm5RXfhuJ70zp",
      },
    });
    if (!response.ok) {
      throw new Error("404 not found");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
