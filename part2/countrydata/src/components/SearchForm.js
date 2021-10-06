import React from 'react'

const SearchForm = ({searchField, setSearchField, onFormSubmit}) => {
    const onChangeSearchField = (event) => {
        setSearchField(event.target.value)
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    Find Countries <input value={searchField} onChange={onChangeSearchField}/>
                </div>

            </form>
        </div>
    );
};

export default SearchForm
