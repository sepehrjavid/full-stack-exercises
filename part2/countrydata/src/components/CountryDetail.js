import React from 'react'

const CountryDetail = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((language) => <li>{language.name}</li>)}
            </ul>
            <img alt="" src={country.flag}/>
        </div>
    );
};

export default CountryDetail
