import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import "./login.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./Buttonsecondary";
import {useHistory}  from 'react-router'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  function signIn(e) {
    e.preventDefault();
   
  }
function user(user){
  return [user]
}
user(["demilade,fade"])
console.log(user())
  return (
    <div className="Login">
      <div className="login__header">
        <div className="login__logo">
          <Link to='/'>
            <img
              className="login__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
       
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
        <div className="login-divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="create account" type="submit"  e/>
        </Link>
      </div>


    </div>
  );
}

export default Login;
