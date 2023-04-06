import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <span>UI/UX design</span>
      <NavLink exact activeClassName='active_class' to='/'>Home</NavLink>
      <NavLink exact activeClassName='active_class' to='/about'>About</NavLink>
      <NavLink exact activeClassName='active_class' to='/login'>Login</NavLink>
      <NavLink exact activeClassName='active_class' to='/icon'>Icon</NavLink>
      
    </>
  )
}

export default Navbar
