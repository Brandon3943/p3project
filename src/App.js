import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Recipt from './components/Recipt';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])  
  const [items, setItems] = useState([])
  const [ticket, setTicket] = useState({
    customer_id: null,
    item_ids: null
  })

    useEffect(() => {
      fetch("http://localhost:9292/customers")
        .then(resp=> resp.json())
        .then(data => setUsers(data))
    }, [])

    useEffect(() => {
      fetch("http://localhost:9292/items")
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, [])


    function getTicketValue(value) {
      setTicket(value)
    }


    function handleDelete(id) {
      setUsers(prev => prev.filter(user => id !== user.id))
  }

    function updateUsers(newUser) {
      setUsers(prev => [...prev, newUser])
    }
  

  return (
    <div>

      <NavBar className="NavBar" updateUsers={updateUsers}/>

      <Switch>


        <Route exact path="/">
          <Home users={users} itemsList={items} handleDelete={handleDelete} getTicketValue={getTicketValue} />
        </Route>

        <Route path="/recipt">
          <Recipt ticket={ticket} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
