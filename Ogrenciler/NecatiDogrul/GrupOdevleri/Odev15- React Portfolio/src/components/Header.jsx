import React from "react";
import logo from "../images/logo (1).png";

const Header = () => (
  <header>
    <div className="container">
      <a href="/" className="logo">
        <img src={logo} />
      </a>
    </div>
  </header>
);

export default Header;
