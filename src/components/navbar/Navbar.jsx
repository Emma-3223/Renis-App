
import React, { useState } from 'react'
import './Navbar.scss'

function Navbar() {

  const [open , setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href='/' className='logo'>
          <img className='img' src='/logo.png' />
          <span>RENIS</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>

      </div>

      <div className="right">
        <a href='/'>Sign in</a>
        <a href='/' className='register' >Register</a>

        {/* Smaller Screen */}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />  
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign in</a>
          <a href='/'>Register</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



















