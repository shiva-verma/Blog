import React, { useState } from 'react'

export const Login = ({setUser}) => {

  const [username, setUsername] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    setUser(username);
  }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit = {handleSubmit}> 
            <input 
            onChange={(event) => setUsername(event.target.value)}
            placeholder = "Input user"
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
