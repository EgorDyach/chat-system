import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Expert chat</span>
        <div className="user">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg" alt="" />
            <span>Egor</span>
            <button onClick={() => signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar