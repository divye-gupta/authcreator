import React from "react";
import barlogo from "./img/barlogo.png";
import "./css/Upperbar.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import { Filter } from "@mui/icons-material";

const Upperbar = () => {
  return (
    <div className="navup">
      <img src={barlogo} alt="Authcreator Logo" />
      <div className="filter">
        <FilterAltIcon fontSize="large"/>
      </div>
    </div>
  );
};
export default Upperbar;
