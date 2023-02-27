import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Recipt( {ticket} ) {

  const { id, customer_id, created_at, items } = ticket

  return (
    <div>
      {customer_id}
      <br></br>
      {created_at}
      <br></br>
    <Link to="/"><button>Return Home</button></Link>
    </div>
  )
}

export default Recipt