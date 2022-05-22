import React from "react";
import "./css/Navbar.css";
// import { Link } from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
function Navbar() {
  return (
    <div className="navbar">
      {/* <Link to = "/"><HomeOutlinedIcon fontSize="large"/></Link> 
      <Link to = "/chat"><ChatOutlinedIcon fontSize="large"/></Link> 
      <Link to = "/like"><FavoriteBorderIcon fontSize="large"/></Link> 
      <Link to = "/profile"><PersonOutlinedIcon fontSize="large"/></Link>  */}
      <HomeOutlinedIcon fontSize="large"/>
      <ChatOutlinedIcon fontSize="large"/>
      <FavoriteBorderIcon fontSize="large"/>
      <PersonOutlinedIcon fontSize="large"/>

    </div>
  );
}

export default Navbar;
