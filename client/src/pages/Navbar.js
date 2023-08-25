import React, { useState } from 'react'
import "../utils/Navbar.css"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  const [showdropdown, setshowdropdown] = useState(false)
  return (
    <nav className='navbar'>
      <Link className='link' to="/">Oppulent Odds</Link>
      <ul className='list'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/Payment">Payment</Link>
        <div style={{ position: "relative" }} onMouseEnter={() => setshowdropdown(true)} onMouseLeave={() => setshowdropdown(false)}>
          <button className='button' >Categories</button>
          {showdropdown && (
            <motion.div
              initial={{ opacity: 0, height: "0px" }}
              animate={{ opacity: 1, height: "100%" }}
              transition={{ duration: 1 }}
            >
              <ul className='' style={{ position: "absolute", top: "30px", backgroundColor: "black", width: "100%", textAlign: "center", display: "flex", flexDirection: "column" }}>
                <li>Clothing</li>
                <li>Antiques</li>
                <li>Music</li>
                <li>Clothing</li>
              </ul>
            </motion.div>
          )}
        </div>
        <Link className='cart' to="/cart">
          <AiOutlineShoppingCart size="2rem" />
        </Link>
      </ul>


    </nav>
  )
}

export default Navbar