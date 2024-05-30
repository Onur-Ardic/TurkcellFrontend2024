import React, { useEffect, useState } from 'react'
import { getWeather } from '../request';
import WeatherList from './WeatherList';

function InputArea() {

    const hour = new Date().getHours()

    const [heading, setHeading] = useState("")

    useEffect(() => {
        if (hour > 9 && hour < 12) {
            setHeading("GÜNAYDIN :)");
        }
        else if (hour >= 12 && hour < 17) {
            setHeading("İYİ GÜNLER :)");
        }
        else if (hour >= 17 && hour < 21) {
            setHeading("İYİ AKŞAMLAR :)");
        }
        else {
            setHeading("İYİ GECELER :)");
        }
    }, [hour]);

    const [weather, setWeather] = useState([])
    const [city, setCity] = useState("")

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleClick() {
        setWeather([])
        getWeather(city).then((data) => {
            setWeather((prev) => [...prev, data.result]);
        });
        setCity("")
    }

    return (
        <div className='container mt-5 pt-5'>
            <h1 className='text-center mb-3'>{heading}</h1>
            <div className='row justify-content-center'>
                <input className='col-2' type="text" placeholder="Enter city" value={city} onChange={handleChange} spellCheck="false" />
                <button className='col-2' onClick={handleClick}>Send</button>
            </div>
            <WeatherList weather={weather} />
        </div>
    )
}

export default InputArea