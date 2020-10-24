import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Form from './components/Form'


const App = () => {
  const [ persons, setPersons ] = useState([])

  useEffect( () => {
    console.log('effect') 
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPersons, setFilterPersons] = useState('')
  const [ filteredPersons, setFilteredPersons] = useState(undefined)
  
  const handleNameChange =(event) => {
      setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
      setNewNumber(event.target.value)
  }
  const submitPerson = (event) => {
    event.preventDefault();
    const personObj = {
        name: newName,
        number: newNumber,
    }
    if (persons.some((person) => person.name === newName)) { 
        alert(`${newName} is already added to phonebook`) 
    } 
    else if (persons.some((person) => person.number === newNumber)) { 
        alert(`${newNumber} is already added to phonebook`) 
    } 
    
    else {
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
    }
  }


  const handleFilterPersons = (event) => {
    setFilterPersons(event.target.value)
    const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredPersons(filteredPersons)
}
return (
    <div>
      <h2>Phonebook</h2>
      Filter name: <input value={filterPersons} onChange={handleFilterPersons}/>
      <Form submitPerson={submitPerson} newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumChange={handleNumChange} />
      <h2>Numbers</h2>
      <div>
            <Search filteredPersons={filteredPersons} filterPersons={filterPersons} persons={persons} />
      </div> 
    </div>
  )
}

export default App