import React from 'react'
import { useState } from 'react'

function NavBar({ updateUsers }) {
  const [name, setName] = useState("")

  function handleSetName(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let formData = {
      name
    }
    fetch("http://localhost:9292/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          },
        body: JSON.stringify(formData)
  }).then(resp => resp.json())
    .then(data => updateUsers(data))
    setName("")
  }


  return (
    <div className="navBarContainer">
      <h1>Welcome to Philaminos Pizza</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newCustomer">Name for order: </label>
        <input type="text" id="newCustomer" onChange={handleSetName} value={name} />
        <button type="submit">Start Order</button>
      </form>

      <form>
        

      </form>
      
    <hr></hr>
    </div>
  )
}

export default NavBar