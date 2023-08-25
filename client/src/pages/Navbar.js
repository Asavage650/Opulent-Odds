import React from 'react'
import "../utils/Navbar.css"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
    <Link to="/">Oppulent Odds</Link>
  <ul className='list'>
  <Link to="/">Home</Link>
  <Link to="/Payment">Payment</Link>
    <Link to="/Categories">Categories</Link> 
    <Link to="/cart">
      <AiOutlineShoppingCart size="2rem" />
    </Link>
  </ul>
   
    </nav>
  )
}

export default Navbar