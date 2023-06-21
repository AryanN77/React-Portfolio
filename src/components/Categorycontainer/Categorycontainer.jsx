import "./categorycont.css";

import React from "react";

export default function Categorycontainer({ img, title }) {
  return (
    <>
      <div className="item">
        <img src={`${img}`} alt="img" />
        <h3>{title}</h3>
      </div>
    </>
  );
}
