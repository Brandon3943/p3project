import React from 'react'
import { useState } from 'react'

function TicketCard({ name, price, id, setViewOrder }) {
  
  const [total, setTotal] = useState([])

  function handleDelete(id) {
    setViewOrder(prev => prev.filter(user => id !== user.id))
  }

    

  return (
    <div>
      {`${name} - ${price}$`}
      <button onClick={() => handleDelete(id)}>x</button>
    </div>
  )
}

export default TicketCard