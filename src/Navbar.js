import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
function Navbar() {
  return (
    <div className="navbar">
      <h2>hello</h2>
      {/* <div className="pages">
        <Link to="/">
          {" "}
          <h3>Home</h3>
        </Link>
        <Link to="/login">
          {" "}
          <h3>Trending</h3>
        </Link>
        <Link to="/authentication">
          {" "}
          <h3>Chat</h3>
        </Link>
        <Link to="/CV">
          {" "}
          <h3>Chat</h3>
        </Link>
        <Link to="/podcast">
          {" "}
          <h3>Profile</h3>
        </Link>
      </div> */}
      <HomeIcon/>
    </div>
  );
}

export default Navbar;
