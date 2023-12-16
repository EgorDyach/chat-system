import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Expert chat</span>
        <div className="user">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg" alt="" />
            <span>Egor</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar