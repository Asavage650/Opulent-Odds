import React from "react";
import "../CSS/Homepage1.css";
import "../CSS/slider.css";
// import { AiOutlineMail } from "react-icons/ai";
// import { RiLockPasswordFill } from "react-icons/ri";
// import ImageSlider from "./ImageSlider";

// import react icons and put the email icon under input
function Homepage() {
  return (
    <>
      <div className="container">
        <h2 className="login-header">About Us</h2>
        <p className="section">
          Welcome to Oppulent Oddities, a haven for enthusiasts of all things
          vintage, timeless, and eccentric. Our journey began with a passion for
          unearthing the stories that lie within every antique and peculiar
          trinket. As avid explorers of history and craftsmanship, we found
          ourselves captivated by the whispers of the past that these treasures
          carry. Driven by this fascination, we embarked on a quest to curate a
          collection that reflects the beauty of forgotten eras and the
          quirkiness of oddities. Every item you see on our virtual shelves has
          been meticulously handpicked, each with a tale to tell and a touch of
          enchantment that only time can bestow. Oppulent Oddities is more than
          just an online store; it's a tribute to the artisans, dreamers, and
          adventurers who crafted these remarkable pieces. We invite you to
          wander through the corridors of history, where every item has a past
          and every trinket has a personality. Thank you for joining us on this
          voyage of discovery and nostalgia. We're thrilled to share our passion
          with you, and we hope you find as much joy in exploring our collection
          as we did in curating it.
        </p>
        <p className="sincSection"> Sincerely, The Oppulent Oddities Team</p>
        {/* <div className="imageSlider">{ImageSlider}</div>
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
      </div> */}
      </div>
      <footer>Any Questions? Contact us through github!</footer>
    </>
  );
}

export default Homepage;
