import React from 'react'

const CountryList = ({searchResult}) => {
    return (
        <div>
            {searchResult.map((country, index) => <p key={index}>{country.name}</p>)}
        </div>
    );
};

export default CountryList
