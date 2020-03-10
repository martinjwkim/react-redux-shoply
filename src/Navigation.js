import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
  return(
    <nav className="navbar navbar-light bg-light">
      <NavLink className="nav-link" exact to="/">Home</NavLink>
      <NavLink className="nav-link" exact to="/products">Products</NavLink>
      <NavLink className="nav-link" exact to="/cart">Cart</NavLink>
    </nav>
  )
}

export default Navigation