import "./contact.css";

import React from "react";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assests/contact.jpg" alt="contact" />
      </div>
      <div className="right">
        <div className="rightcontainer">
          <h1>Contact Me:</h1>
          <div className="itemcontact">
            <img src="assests/linkedin2.png" alt="img" />
            <h3>
              <a href="/">LinkedIn</a>
            </h3>
          </div>
          <div className="itemcontact">
            <img src="assests/gmail.png" alt="img" />
            <h3>
              <a href="/">Gmail</a>
            </h3>
          </div>
          <div className="itemcontact">
            <img src="assests/github.png" alt="img" />
            <h3>
              <a href="/">Github</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
