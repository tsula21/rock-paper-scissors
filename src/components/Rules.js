import React, { useState } from "react";
import "./CSS/Rules.css";
// IMG
import rules from "../images/image-rules.svg";
import close from "../images/icon-close.svg";

function Rules({ rulesElem, rulesText }) {
  const [isActive, setIsActive] = useState(false);

  function showRules() {
    setIsActive(true);
  }
  function hideRules() {
    setIsActive(false);
    console.log("off");
  }
  return (
    <div className={`rules ${isActive ? "active" : ""}`}>
      <div className="rule-tab" onClick={showRules} ref={rulesElem}>
        <p ref={rulesText}>RULES</p>
      </div>
      <div className="rules-overlay">
        <div className="rules-img">
          <div className="overlay-content">
            <h2>RULES</h2>
            <img src={close} onClick={hideRules} alt="X" />
          </div>
          <img src={rules} alt="rules" />
        </div>
      </div>
    </div>
  );
}

export default Rules;
