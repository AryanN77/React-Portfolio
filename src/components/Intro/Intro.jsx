import "./intro.css";

import React, { useEffect, useRef } from "react";
import { init } from "ityped";
export default function Intro() {
  const texttyper = useRef();
  useEffect(() => {
    init(texttyper.current, {
      showCursor: true,
      strings: ["Web Developer", "Web Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assests/img1.jpg" alt="intro-img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome To My Portfolio, I'm</h2>
          <h1>Aryan Naithani</h1>
          <h3>
            Programmer <span ref={texttyper}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assests/down.svg" alt="down-arrow" />
        </a>
      </div>
    </div>
  );
}
