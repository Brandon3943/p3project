import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useEffect } from 'react'


function Recipt( {ticket, getTicketValue} ) {
  let { customer_id, created_at, items } = ticket
  let {id} = useParams()

    function updateOnPageRefresh() {
      if (customer_id === null) {
          fetch(`http://localhost:9292/tickets/${id}`)
            .then(r => r.json())
            .then(data => {
              getTicketValue(data)
            })
      }
  
      let mapItems;
      
      if(customer_id !== null) {
       mapItems = items.map(item => {
        return <p key={Math.floor(Math.random((item.id + 1) * 8))}>{item.name} | {item.price}</p>
      })
    }

    return mapItems;
  }

  function formatTime() {
    if (customer_id !== null) {
    let date = created_at.slice(0, 10)
    let time = created_at.slice(11, 16)
    
    return `${date} | ${time}`
    }
  }



  return (
    <div className="recipt">
      {customer_id}
      <br></br>
      {updateOnPageRefresh()}
      <br></br>
      {formatTime()}
      <br></br>
      <br></br>
    <Link to="/"><button>Return Home</button></Link>
    </div>
  )
}

export default Recipt