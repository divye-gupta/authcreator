import React from "react";
import logo from "./img/logo.png";
import './css/Login.css';

function Login() {
  
  return (
    <div className="main">
      <img className="logo" src={logo} alt="" />
      <p className="conditions">
        By clicking Log In, you agree with our <b>Terms</b>. Learn how we process your
        data in our <b> Privacy Policy </b> and <b> Cookies Policy</b>.
      </p>
      <div className="buttons">
        <button>Login with Google</button>
        <button>Login with Facebook</button>
        <button>Login with Phone</button>
      </div>
    </div>
  );
}
export default Login;
