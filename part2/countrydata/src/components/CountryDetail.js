import React from 'react'
import WeatherInfo from "./WeatherInfo";

const CountryDetail = ({country, hasBack, setShowIndex}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((language, index) => <li key={index}>{language.name}</li>)}
            </ul>
            <img alt="" src={country.flag}/>
            <WeatherInfo country={country}/>
            {hasBack &&
            <div>
                <button onClick={() => setShowIndex(-1)}>Back</button>
            </div>
            }
        </div>
    );
};

export default CountryDetail
