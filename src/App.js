import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import axios from 'axios'

import Display from './components/Display'
import Login from './components/Login'

function App() {
  const [chain, setChain] = useState([])
  const [user, setUser] = useState({user: ''})

    useEffect(() => {
        axios.get("http://localhost:5000/chain")
            .then(res => {
                console.log(res.data)
                setChain(res.data)
            })
    }, [])

    const handleSubmit = e => {
      e.preventDefault()
    }

    const handleChange = e => {
      e.preventDefault()
      setUser({ [e.target.name]: e.target.value})
    }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' name='user' id='user' value={user.user} onChange={handleChange} placeholder='Enter Name'/>
      </form>
      <Route exact path='/' component = {Login} />
      <Route exact path='/display' render={props =>
        <Display {...props} chain={chain} user={user} />} 
      />
    </div>
  );
}

export default App;
