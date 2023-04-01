import React from 'react'


function TicketCard({ name, price, id, setViewOrder }) {

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