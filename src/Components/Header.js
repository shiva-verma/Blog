import React from 'react'

export const Header = ({user,setUser}) => {
  return (

    <div>
        <h2>Hello, Welcome {user}</h2>
        <button onClick={() => setUser("")}>Logout</button>
    </div>
  )
}
