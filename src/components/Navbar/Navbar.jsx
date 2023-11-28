import React from "react";
import logoDark from "../../assets/logo-dark.svg";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img src="https://images.leverageedu.com/landing-pages/logo-dark.svg" alt="" />
      </div>
      <div className="navbarRight">
        <div className="navLinks">
          <div className="navLink">Discover</div>
          <div className="navLink">Test Prep</div>
          <div className="navLink">Finance</div>
          <div className="navLink">Community</div>
          <div className="navLink">Products</div>
          <div className="navLink">More</div>
        </div>
        <div className="searchUniv">
          <i class="fi fi-bs-search"></i>
          <input type="text" className="inputBar" />
        </div>
        <div className="ctaIcons">
          <img src="https://images.leverageedu.com/landing-pages/phone_icon_b.png" alt="" className="call" />
          <img src="https://images.leverageedu.com/assets/img/male.png" alt="" className="profile" />
        </div>
      </div>
    </div>
  );
}
