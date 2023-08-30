import React from "react";
import "../CSS/Homepage1.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

// import react icons and put the email icon under input
function Homepage() {
  return (
    <div className="container">
      <h4 className="login-header"> Signup w/ email and Password</h4>
      <div className="inputs">
        <div className="input">
          <AiOutlineMail size="2.5rem" />
          <input type="email" placeholder="Email..."></input>
        </div>
        <div className="input">
          <RiLockPasswordFill size="2.5rem" />
          <input type="password" placeholder="Password ..." />
        </div>
      </div>
      <div className="buttons">
        <button className="login">Log-In</button>
        <button className="CAG">Continue as guest</button>
      </div>
    </div>
  );
}

export default Homepage;
