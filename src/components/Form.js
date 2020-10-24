import React from 'react'

const Form = ({submitPerson, newName, handleNameChange, newNumber, handleNumChange}) => {
    return (
        <form onSubmit={submitPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumChange}/></div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
       )
  }
  
  export default Form