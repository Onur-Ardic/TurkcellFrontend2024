import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const categoryNewsArrays = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      <ul>
        {categoryNewsArrays.map((item, index) => (
          <li key={index}>
            <NavLink to={`${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
