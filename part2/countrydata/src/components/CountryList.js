import React, {useState} from 'react'
import CountryDetail from "./CountryDetail";

const CountryList = ({searchResult}) => {
    const [showIndex, setShowIndex] = useState(-1);


    if (showIndex === -1) {
        return (
            <div>
                {searchResult.map((country, index) =>
                    <div key={index}>
                        <p>{country.name}</p>
                        <button onClick={() => setShowIndex(index)}>Show</button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <CountryDetail country={searchResult[showIndex]} setShowIndex={setShowIndex} hasBack={true}/>
            </div>
        );
    }
};

export default CountryList
