import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarContainer, Brand, NavItem, Nav } from "../Navbar/Navbar-styled";

const Navbar = () => {
  const categoryNewsArrays = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <>
      <NavbarContainer>
        <Brand href="#">YEU NEWS</Brand>
        <p>{getCurrentDate()}</p>
        <Nav>
          <NavItem to="/">Home</NavItem>
          {categoryNewsArrays.map((item, index) => (
            <NavItem to={`/news/${item.toLowerCase()}`} key={index}>
              {item}
            </NavItem>
          ))}
        </Nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
