import React from 'react'
import UserCard from './UserCard'
import { useEffect, useState } from 'react'

function Home({ users, handleDelete }) {

    function handleTicket() {
      
    }


    let userNames = users.map(user => <UserCard key={user.id} name={user.name} id={user.id} handleDelete={handleDelete} onClick={handleTicket} />)

    if(!users.length) {
        return "loading...."
    } 

  return (
    <div>
      {userNames}
    </div>
  )
}

export default Home