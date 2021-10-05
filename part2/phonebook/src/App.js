import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ]);
    const [newName, setNewName] = useState('');


    const addContact = (event) => {
        event.preventDefault();
        setPersons(persons.concat({name: newName}));
        setNewName('');
    };

    const newNameChange = (event) => {
        setNewName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input value={newName} onChange={newNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person, index) =>
                <p key={index}>{person.name}</p>
            )}
        </div>
    )
};

export default App
