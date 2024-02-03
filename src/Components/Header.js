import React, { useState } from "react";
import logoGithub from "../../Images/github.png";
import menuBars from "../../Images/menu.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const changeLogin = () => {
    loginBtn === "Login" ? setLoginBtn("Log out") : setLoginBtn("Login");
  };
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logoGithub} alt="not found" className="logo" />
        <h4 className="logo-text">GitHub Users</h4>
      </div>

      <div className="links-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="accounts-btns">
        <button className="btns" onClick={changeLogin}>
          {loginBtn}
        </button>
        <button className="btns">Sign Up</button>
      </div>
      <img src={menuBars} alt=""  className="menu-bar"/>
    </div>
  );
};
export default Header;
