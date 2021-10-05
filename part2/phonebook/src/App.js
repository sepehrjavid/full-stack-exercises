import React, {useState} from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ]);

    const [searchResult, setSearchResult] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ]);
    const [newName, setNewName] = useState('');
    const [number, setnumber] = useState('');
    const [searchField, setSearchField] = useState('');


    const addContact = (event) => {
        event.preventDefault();
        let newPersons = persons.concat({name: newName, number: number});
        if (!persons.map((person) => person.name).includes(newName)) {
            setPersons(newPersons);
        } else {
            alert(`${newName} is already added to phonebook`);
        }
        setNewName('');
        setnumber('');
        setSearchResult([...newPersons]);
    };

    const search = (event) => {
        event.preventDefault();
        if (searchField === '') {
            setSearchResult(persons);
        } else {
            setSearchResult(persons.filter((person) => person.name.match(searchField)));
            setSearchField('');
        }
    };

    const newNameChange = (event) => {
        setNewName(event.target.value);
    };

    const numberChange = (event) => {
        setnumber(event.target.value);
    };

    const searchFieldChange = (event) => {
        setSearchField(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter search={search} searchField={searchField} searchFieldChange={searchFieldChange}/>
            <h2>Add New</h2>
            <PersonForm addContact={addContact} newName={newName} newNameChange={newNameChange} number={number}
                        numberChange={numberChange}/>
            <h2>Numbers</h2>
            <Persons searchResult={searchResult}/>
        </div>
    )
};

export default App
