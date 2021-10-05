import React from 'react'

const Persons = ({searchResult}) => {
    return (
        <div>
            {
                searchResult.map((person, index) =>
                    <p key={index}>{person.name}: {person.number}</p>
                )
            }
        </div>
    )
};

export default Persons
