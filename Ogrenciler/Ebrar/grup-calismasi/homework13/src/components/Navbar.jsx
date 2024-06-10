import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoHomeSharp } from "react-icons/io5";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #fff;
  border: 1px solid black;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
    color: gray;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/news/business">Business</NavLink>
      <NavLink to="/news/entertainment">Entertainment</NavLink>
      <NavLink to="/news/health">Health</NavLink>
      <NavLink to="/">
        <IoHomeSharp />
      </NavLink>
      <NavLink to="/news/science">Science</NavLink>
      <NavLink to="/news/sports">Sports</NavLink>
      <NavLink to="/news/technology">Technology</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;
