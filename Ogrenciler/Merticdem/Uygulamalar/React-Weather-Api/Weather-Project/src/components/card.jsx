function Card({ weather }) {
  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {console.log(weather)}
        <button onClick={getWeather}>Get Weather</button>
        {weather && (
          <div>
            <h3>{weather.date}</h3>
            <h3>{weather.day}</h3>
            <h3>{weather.description}</h3>
            <h3>{weather.temperature}°C</h3>
            <h3>{weather.min}</h3>
            <h3>{weather.max}</h3>
            <h3>{weather.humidity}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
