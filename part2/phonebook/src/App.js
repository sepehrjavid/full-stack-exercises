import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [newName, setNewName] = useState('');
    const [number, setNumber] = useState('');
    const [searchField, setSearchField] = useState('');


    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => {
            setPersons(response.data);
            setSearchResult(response.data);
        })
    }, []);


    const addContact = (event) => {
        event.preventDefault();
        let new_person = {name: newName, number: number};
        axios.post("http://localhost:3001/persons", new_person).then((response) => {
            let newPersons = persons.concat(new_person);
            if (!persons.map((person) => person.name).includes(newName)) {
                setPersons(newPersons);
            } else {
                alert(`${newName} is already added to phonebook`);
            }
            setNewName('');
            setNumber('');
            setSearchResult([...newPersons]);
        });
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
        setNumber(event.target.value);
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
