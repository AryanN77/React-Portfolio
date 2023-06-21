import "./portfoliolist.css";

import React from "react";

export default function Portfoliolist({ title, active, setselected, id }) {
  return (
    <li
      key={id}
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => {
        setselected(id);
      }}
    >
      {title}
    </li>
  );
}
