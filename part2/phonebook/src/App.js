import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phoneNumber: '123'}
    ]);
    const [newName, setNewName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const addContact = (event) => {
        event.preventDefault();
        if (!persons.map((person) => person.name).includes(newName)) {
            setPersons(persons.concat({name: newName, phoneNumber: phoneNumber}));
        } else {
            alert(`${newName} is already added to phonebook`);
        }
        setNewName('');
        setPhoneNumber('');
    };

    const newNameChange = (event) => {
        setNewName(event.target.value);
    };

    const phoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input value={newName} onChange={newNameChange}/>
                </div>
                <div>
                    number: <input value={phoneNumber} onChange={phoneNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person, index) =>
                <p key={index}>{person.name}: {person.phoneNumber}</p>
            )}
        </div>
    )
};

export default App
