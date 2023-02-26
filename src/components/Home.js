import React from 'react'
import UserCard from './UserCard'
import ItemCard from './ItemCard'
import TicketCard from './TicketCard'
import { useEffect, useState } from 'react'

function Home({ items, users, handleDelete }) {
  const [viewOrder, setViewOrder] = useState([])
  const [itemIdArr, setItemIdArr] = useState([])
  const [userId, setUserId] = useState(null)
  const [total, setTotal] = useState(0)
//lowercase snakecase item_ids for join table
  const [ticket, setTicket] = useState({
    ticket_id: null,
    item_id: null
  })



  function handleSubmit(e) {
    e.preventDefault()
    let formData={
      ticket_id: userId,
      item_id: itemIdArr
    }
    fetch("http://localhost:9292/ticket_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          },
        body: JSON.stringify(formData)
  }).then(resp => resp.json())
    .then(data => setTicket(data))

  }

  console.log(itemIdArr)
  console.log(userId)



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
      return <TicketCard key={Math.random(Math.floor(ticket.id * 15))} name={ticket.name} price={ticket.price} />
    })
    

    let allItems = items.map(item => {
      return <ItemCard key={item.id} name={item.name} price={item.price} inventory={item.inventory} img={item.img_url} id={item.id} addItemsToArray={addItemsToArray} />
    })

    let userNames = users.map(user => <UserCard key={user.id} name={user.name} id={user.id} handleDelete={handleDelete} createNewTicket={createNewTicket} userId={userId} />)


    

    if(!users.length) {
        return "loading...."
    } 

  return (
    <>
    <h3>Click Name To Create New Order</h3>
    <div className="container">
      {userNames}
    </div>
    <div className="order-container">
      {ticketItems}
      <form onSubmit={handleSubmit}>
        <button type="submit">Place order</button>
      </form>
    </div>
    <hr></hr>
    <div className="pizza-container">
      {allItems}
    </div>
    </>
  )
}

export default Home