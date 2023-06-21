import Portfoliolist from "../PortfolioList/Portfoliolist";
import "./portfolio.css";
import { featureddata, reactapps, vanillajs, randomprojects } from "../data1";
import React, { useEffect, useState } from "react";
import Categorycontainer from "../Categorycontainer/Categorycontainer";

export default function Portfolio() {
  const [selected, setselected] = useState("featured");
  const [category, setcategory] = useState(featureddata);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setcategory(featureddata);
        break;
      case "reactapps":
        setcategory(reactapps);
        break;
      case "vanillajs":
        setcategory(vanillajs);
        break;
      case "rndmprojects":
        setcategory(randomprojects);
        break;
    }
  }, [selected]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "reactapps",
      title: "React Apps",
    },
    {
      id: "vanillajs",
      title: "Vanilla Js Apps",
    },
    {
      id: "rndmprojects",
      title: "Random Projects",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <Portfoliolist
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setselected={setselected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {category.map((item) => {
          return (
            <Categorycontainer
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
