import "./menu.css";

import React from "react";

export default function Menu({ menu, setmenu }) {
  return (
    <div className={`menu + ${menu ? `active` : ""}`}>
      <ul>
        <li
          onClick={() => {
            setmenu(false);
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => {
            setmenu(false);
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setmenu(false);
          }}
        >
          <a href="#works">Quotes</a>
        </li>
        <li
          onClick={() => {
            setmenu(false);
          }}
        >
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
