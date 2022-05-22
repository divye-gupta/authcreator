import React from "react";
import mainimg from './img/mainimg.png'

const Landingpage = () => {
  return (
    <div className="maincontainerlanding">
      <nav></nav>
      <h1>Discover,Collect and Sell various extra ordinary NFTs</h1>
      <p>
        On the world’s first and the largest NFT marketplace, explore the many
        NFTs art from various artist all over the world.
      </p>
      <div className="clickables">
        <button className="explorebutton">Explore</button>
        <button className="createbutton">Create</button>
      </div>
      <img src={mainimg} alt="" />
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
        <div className="explore">
          <h2>Explore more artwork!!</h2>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
