import "./navbar.css";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar({ menu, setmenu }) {
  return (
    <div className={`navbar ${menu ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Aryan Naithani
          </a>
          <div className="itemcontainer">
            <EmailIcon className="icon" />
            <span className="icontext">aryannaithani77@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
