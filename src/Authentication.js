import React from "react";
import './css/Authentication.css'

const Authentication = () => {
  return (
    <div className="box">
      <h1>My number is</h1>
      <div className="credentials">
        <div className="countrycode">
          <select id="feature" required>
            <option value="">--Select--</option>
            <option value="India">+91 India</option>
            <option value="Australia">61 Australia</option>
            <option value="Belgium">32 Belgium</option>
            <option value="Brazil">55 Brazil</option>
            <option value="Canada">1 Canada</option>
            <option value="Germany">49 Germany</option>
          </select>
        </div>
        <input className="phone" type="text"></input>
      </div>
      <p>
        By clicking Log In, you agree with our Terms. Learn how process your
        data in our Privacy Policy and Cookies Policy. By clicking Log In, you
        agree with our Terms. Learn how process your data in our <b> Privacy Policy
        and Cookies</b>
      </p>
      <button>Continue</button>
    </div>
  );
};

export default Authentication;
