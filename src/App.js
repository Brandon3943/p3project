import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])  

    useEffect(() => {
      fetch("http://localhost:9292/customers")
        .then(resp=> resp.json())
        .then(data => setUsers(data))
    }, [])

    function handleDelete(id) {
      setUsers(prev => prev.filter(user => id !== user.id))
  }

    function updateUsers(newUser) {
      setUsers(prev => [...prev, newUser])
    }
  

  return (
    <div>

      <NavBar updateUsers={updateUsers}/>

      <Switch>


        <Route exact path="/">
          <Home users={users} handleDelete={handleDelete} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
