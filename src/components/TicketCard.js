import React from 'react'

function TicketCard({ name, price, id }) {

    

  return (
    <div>
      {name}
      {price}
      <button>x</button>
    </div>
  )
}

export default TicketCard