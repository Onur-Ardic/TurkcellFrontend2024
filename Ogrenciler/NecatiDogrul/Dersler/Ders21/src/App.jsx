import React from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hava Durumu Uygulaması</h1>
      </header>
      <main>
        <WeatherComponent />
      </main>
    </div>
  );
}

export default App;
