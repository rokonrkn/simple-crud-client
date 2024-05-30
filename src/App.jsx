import { useState } from 'react'
import './App.css'
import Users from './components/Users';

function App() {

  const handleSubmitBtn = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:7000/users',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('data sent succes')
        form.reset()
      }
    })
    
  }

  return (
    <>
      <div>
        <h1>simple user insert mongodb</h1>
        <form onSubmit={handleSubmitBtn}>
          <input type="text" name="name" id="" /> <br />
          <input type="email" name="email" id="" /> <br />
          <button type="submit">Submit</button>
        </form>
        <Users></Users>
      </div>
    </>
  )
}

export default App
