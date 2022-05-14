import React from "react";
import './css/Home.css';
import Profiles from './Profiles'



const Home = () => {
  return (
    <div className="homemain">
      <div className="creators">
        <Profiles/>
      </div>
    </div>
  );
};
export default Home;
