import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight : isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }

  return (
    <nav className='nav'>
        <NavLink style={navLinkStyles} to="/"> Home</NavLink>
        <NavLink style={navLinkStyles} to="/Add">Add</NavLink>
    </nav>
  )
}

export default Navbar