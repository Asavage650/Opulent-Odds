import React, { useState } from "react";
import "../CSS/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [showdropdown, setshowdropdown] = useState(false);
  return (
    <nav className="navbar">
      <Link className="link-title" to="/">
        Oppulent Oddities
      </Link>
      <ul className="list">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Sell">
          Sell
        </Link>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setshowdropdown(true)}
          onMouseLeave={() => setshowdropdown(false)}
        >
          <button className="button-shop">Shop</button>
          {showdropdown && (
            <motion.div
              initial={{ opacity: 0, height: "0px" }}
              animate={{ opacity: 1, height: "40%" }}
              transition={{ duration: 1 }}
            >
              <ul
                className=""
                style={{
                  position: "absolute",
                  top: "38px",
                  border: "2px solid #111",

                  backgroundColor: "rgba(152, 67, 237, 0.39)",
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link className="shop-links" to="/SportsMem">
                  Sports Memorobilia
                </Link>
                <Link className="shop-links" to="/Art">
                  Art
                </Link>
                <Link className="shop-links" to="/Vinyls">
                  Vinyls
                </Link>
                <Link className="shop-links" to="/Furniture">
                  Furniture
                </Link>
                <Link className="shop-links" to="/Trinkets">
                  Trinkets
                </Link>
                <Link className="shop-links" to="/Porcelan">
                  Porcelan
                </Link>
              </ul>
            </motion.div>
          )}
        </div>
        <Link className="cart" to="/cart">
          <AiOutlineShoppingCart size="2rem" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
