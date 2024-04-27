import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container ">
      <div className="navbar">
        <img src={logo} alt="" className="logo " />
        <h1>On Shoppy</h1>
      </div>
      <p>hello</p>
    </div>
  );
};

export default Navbar;
