import React from 'react'
import Person from './Person'

const Search = ({filteredPersons, filterPersons, persons}) => {
    return (
        <div>
              {filterPersons==='' ?
              persons.map(person => 
              <Person key={person.name} name={person.name} number={person.number} />)
              : filteredPersons.map((person) => (<Person key={person.name} name={person.name} number={person.number} />))
             }

      </div>    
       )
  }
  
  export default Search