import React from 'react'

function UserCard( { name, id, handleDelete } ) {

  function handleFetchDelete(id) {
    fetch(`http://localhost:9292/customers/${id}`, {
      method: "DELETE"
    }).then(() => handleDelete(id))
      
  }


  return (
    <div className="userCardsContainer">
      <div className="userCards">
        {name}
         <br></br>
        {id}
        <br></br>
        <button onClick={() => handleFetchDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default UserCard