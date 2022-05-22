import React from "react";
import mainimg from "./img/mainimg.png";
import "./css/Landingpage.css";
import mainbarlogo from "./img/mainbarlogo.png";

const Landingpage = () => {
  return (
    <div className="maincontainerlanding">
      <nav>
        <img className="mainbarlogo" src={mainbarlogo} alt="" />
        <h3>Home</h3>
        <h3>Marketplace</h3>
        <h3>Stats</h3>
        <h3>Resource</h3>
        <h3>Login/Signup</h3>
      </nav>

      <div className="part1">
        <div className="part2">
          <h1>Discover, Create and connect various extra ordinary ideas</h1>
          <p>
            On the world’s first WEB3.0 social platform, explore the many
            creators’ art from various areas all over the world.
          </p>

          <div className="clickables">
            <button className="explorebutton">Explore</button>
            <button className="createbutton">Create</button>
          </div>

          <div className="footer">
            <div className="facts">
              <div className="numbers">
                <h2>56k+</h2>
                <p>artwork</p>
              </div>
              <div className="numbers">
                <h2>16k+</h2>
                <p>auctions</p>
              </div>
              <div className="numbers">
                <h2>26k+</h2>
                <p>artists</p>
              </div>
            </div>
          </div>
        </div>

        <div className="explore">
          <img className="mainimg" src={mainimg} alt="" />
          <h2>Explore more artwork!!</h2>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
