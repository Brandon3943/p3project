import React from 'react'
import { useState } from 'react'

function UserCard( { name, id, handleDelete, createNewTicket, userId } ) {
  

  function handleFetchDelete(id) {
    fetch(`http://localhost:9292/customers/${id}`, {
      method: "DELETE"
    }).then(() => handleDelete(id))
      
  }

  

  
  return (
    <>
    <div onClick={() => createNewTicket(id)} className = {userId === id ? "userCardsContainerSelected" : "userCardsContainer"}>
        {name}
         <br></br>
        {id}
        <br></br>
    </div>
    <br></br>
    <button onClick={() => handleFetchDelete(id)}>Delete</button>
    </>
  )
}

export default UserCard