import React from "react";

import id1 from "./img/profiles/id1.jpg";
import id2 from "./img/profiles/id2.jpg";
import id3 from "./img/profiles/id3.jpg";
import id4 from "./img/profiles/id4.jpg";
import id5 from "./img/profiles/id5.jpg";
import id6 from "./img/profiles/id6.jpg";
import id7 from "./img/profiles/id7.jpg";
import id8 from "./img/profiles/id8.jpg";
import id9 from "./img/profiles/id9.jpg";
import id10 from "./img/profiles/id10.jpg";


const Profiles = () => {
    return(
        <>
        <div className="profile1">
          <img src={id1} alt="profile1" />
          <h3>name1</h3>
        </div>
        <div className="profile2">
            <img src={id2} alt="" />
            <h3>name2</h3>
        </div>
        <div className="profile3">
            <img src={id3} alt="" />
            <h3>name3</h3>
        </div>
        <div className="profile4">
            <img src={id4} alt="" />
            <h3>name4</h3>
        </div>
        <div className="profile5">
            <img src={id5} alt="" />
            <h3>name5</h3>
        </div>
        <div className="profile6">
            <img src={id6} alt="" />
            <h3>name6</h3>
        </div>
        <div className="profile7">
            <img src={id7} alt="" />
            <h3>name7</h3>
        </div>
        <div className="profile8">
            <img src={id8} alt="" />
            <h3>name8</h3>
        </div>
        <div className="profile9">
            <img src={id9} alt="" />
            <h3>name9</h3>
        </div>
        <div className="profile10">
            <img src={id10} alt="" />
            <h3>name10</h3>
        </div>
        </>
    )

}
export default Profiles;