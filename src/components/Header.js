import React, { useRef } from "react";
import "./CSS/Header.css";
// IMG
import logo from "../images/logo.svg";

function Header({ points, circle, headerDetails }) {
  return (
    <section className="header-section" ref={circle}>
      <div className="header">
        <div className="header_box" ref={headerDetails}>
          <div className="header-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-score">
            <h2>score</h2>
            <h3>{points}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
