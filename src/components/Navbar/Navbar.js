import React from "react";
import "./Navbar.css";
import Logo from "../Images/Logo.png";
const Navbar = () => {
  return (
    <>
      <div className="landing">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="title">SPECTRUM</div>
          <div className="hamburger">
            {/* <GiHamburgerMenu className="icon" size={30} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
