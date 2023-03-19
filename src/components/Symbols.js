import React, { useState } from "react";
import "./CSS/Symbols.css";
import arr from "../Array";
// IMG
import triangle from "../images/bg-triangle.svg";

function Symbols({
  handleOnClick,
  triangleElem,
  scissorsElem,
  paperElem,
  rockElem,
}) {
  return (
    <section className="symbols-section">
      <div className="symbols" ref={rockElem}>
        {arr.map((item) => {
          return (
            <div
              onClick={handleOnClick}
              className={`symbol_circle ${item.class}`}
              id={`${item.name}`}
              key={item.id}
            >
              <img src={item.img} alt="paper" />
            </div>
          );
        })}
        <img
          className="triangle"
          src={triangle}
          ref={triangleElem}
          alt="triangle"
        />
      </div>
    </section>
  );
}

export default Symbols;
