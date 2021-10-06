import React, {useEffect, useState} from 'react'
import SearchForm from "./components/SearchForm";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";


const App = () => {
    const [searchField, setSearchField] = useState('');
    const [countries, setCountries] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((response) => setCountries(response.data))
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setSearchResult(countries.filter((country) => country.name.includes(searchField)))
    };

    return (
        <div>
            <SearchForm searchField={searchField} setSearchField={setSearchField} onFormSubmit={onFormSubmit}/>
            {searchResult.length > 10 && <p>Too many matches, filter again!</p>}
            {searchResult.length <= 10 && searchResult.length > 1 && <CountryList searchResult={searchResult}/>}
            {searchResult.length === 1 && <CountryDetail country={searchResult[0]}/>}
            {searchResult.length === 0 && <p>No Match!</p>}
        </div>
    );
};

export default App;
