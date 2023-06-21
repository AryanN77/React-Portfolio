import "./works.css";

import React, { useState } from "react";

export default function Works() {
  const [currentslide, setcurrentslide] = useState(0);
  const handleclick = (way) => {
    way === "left"
      ? setcurrentslide(currentslide > 0 ? currentslide - 1 : data.length - 1)
      : setcurrentslide(currentslide < data.length - 1 ? currentslide + 1 : 0);
  };
  const data = [
    {
      id: 1,
      img: "assests/elonmusk.jpg",
      quote: "We need things in life that are exciting and inspiring",
      name: "Elon Musk",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Dwayne_Johnson_2%2C_2013.jpg",
      quote:
        "Success isn't always about greatness. It's about consistency. Consistent hardwork leads to success. Greatness will come",
      name: "Dwayne Johnson",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/640px-Mark_Twain_by_AF_Bradley.jpg",
      quote:
        "To succeed in life you need two things: ignorance and confidence.",
      name: "Mark Twain",
    },
    {
      id: 4,
      img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-79035252.jpg",
      quote:
        "A man who dares to waste one hour of time has not discovered the value of life.",
      name: "Charles Darwin",
    },
  ];
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentslide * 100}vw)` }}
      >
        {data.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div className="items">
                <div className="left">
                  <div className="leftcontainer">
                    <div className="imgcontainer">
                      <img src={`${item.img}`} alt="img" />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="rightcontainer">
                    <h2>{item.quote}</h2>
                    <h5>-{item.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assests/arrow.png"
        className="left arrow"
        alt="left"
        onClick={() => {
          handleclick("left");
        }}
      />
      <img
        src="assests/arrow.png"
        className="right arrow"
        alt="right"
        onClick={() => {
          handleclick("right");
        }}
      />
    </div>
  );
}
