import React from 'react'
import UserCard from './UserCard'
import ItemCard from './ItemCard'
import TicketCard from './TicketCard'
import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

function Home({ itemsList, users, handleDelete, getTicketValue }) {
  const [viewOrder, setViewOrder] = useState([])
  const [itemIdArr, setItemIdArr] = useState([])
  const [userId, setUserId] = useState("")
  const history = useHistory()

  console.log(userId)
  

  function handleSubmit(e) {
    e.preventDefault()
    let formData={
      customer_id: userId,
      item_ids: itemIdArr
    }
    fetch("http://localhost:9292/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          },
        body: JSON.stringify(formData)
  }).then(resp => resp.json())
    .then(data => {
      getTicketValue(data)
      console.log(data)
      history.push(`/tickets/${data.id}/recipt`)
    })
  }

  let total = viewOrder.reduce((a, b) => {
   return a + b.price
  }, 0);

 function addItemsToArray(name, price, id) {
    setViewOrder(prev => [...prev, {name: name, price: price, id: id}])
    setItemIdArr(prev => [...prev, id])    
 }

  function createNewTicket(id) {
    if(userId === id) {
      setUserId(null)
    } else {
      setUserId(id)
    }
  }

    let ticketItems = viewOrder.map(ticket => {
      return <TicketCard key={Math.random(Math.floor(ticket.id * 15))} name={ticket.name} price={ticket.price} id={ticket.id} setViewOrder={setViewOrder} />
    })
    

    let allItems = itemsList.map(item => {
      return <ItemCard key={item.id} name={item.name} price={item.price} inventory={item.inventory} img={item.img_url} id={item.id} addItemsToArray={addItemsToArray} />
    })

    let userNames = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)


  
  
  

    if(!users.length) {
        return "loading...."
    } 

  return (
    <>
    <h3>Click Name To Create New Order</h3>
    <div className="container">
      <select onChange={(e) => setUserId(e.target.value)} value={userId}>
          <option>Select Customer</option>
          {userNames}
      </select>
    </div>
    <div className="order-container">
      {ticketItems}
      <br></br>
      {`Total= ${total}$`}
      <form onSubmit={handleSubmit}>
        <button type="submit" className="add-button">Place order</button>
      </form>
      <Link to="/recipt"><button className="add-button">View Recipts</button></Link>
    </div>
    <hr></hr>
    <div className="pizza-container">
      {allItems}
    </div>
    <div className="recipt-container">
      
    </div>
    </>
  )
}

export default Home