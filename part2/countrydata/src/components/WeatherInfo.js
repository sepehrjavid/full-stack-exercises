import React, {useEffect, useState} from 'react'
import axios from "axios";

const WeatherInfo = ({country}) => {
    const [weather, setWeather] = useState({});
    const api_key = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`).then((response) => {
            setWeather(response.data);
        });
    }, [api_key, country.capital]);
    if (Object.keys(weather).length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div>
                <h2>Weather in {country.capital}</h2>
                <h4>Temperature: {weather.current.temperature} Celsius</h4>
                <img alt="" src={weather.current.weather_icons[0]}/>
                <h4>Wind: {weather.current.wind_speed} kph direction {weather.current.wind_dir}</h4>
            </div>

        );
    }
};

export default WeatherInfo
