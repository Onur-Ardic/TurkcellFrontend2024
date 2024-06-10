import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar, NavbarItem } from "./styled";

const Navbar = () => {
  const location = useLocation();

  const checkLocation = () => {
    if (location.pathname === "/") {
      return "home";
    } else if (location.pathname.startsWith("/category")) {
      return location.pathname.split("/")[2];
    }
  };

  const currPage = checkLocation();
  console.log(currPage);
  return (
    <NavBar>
      <NavbarItem active={currPage == "general"}>
        <Link to="/category/general">Home</Link>
      </NavbarItem>
      <NavbarItem active={currPage === "business"}>
        <Link to="/category/business">Business</Link>
      </NavbarItem>
      <NavbarItem active={currPage === "technology"}>
        <Link to="/category/technology">Technology</Link>
      </NavbarItem>
      <NavbarItem active={currPage === "health"}>
        <Link to="/category/health">Health</Link>
      </NavbarItem>
      <NavbarItem active={currPage === "science"}>
        <Link to="/category/science">Science</Link>
      </NavbarItem>
      <NavbarItem active={currPage === "sports"}>
        <Link to="/category/sports">Sports</Link>
      </NavbarItem>
    </NavBar>
  );
};

export default Navbar;
