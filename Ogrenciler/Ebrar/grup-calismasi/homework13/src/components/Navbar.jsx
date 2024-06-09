import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news/business">Business</NavLink>
      <NavLink to="/news/entertainment">Entertainment</NavLink>
      <NavLink to="/news/health">Health</NavLink>
      <NavLink to="/news/science">Science</NavLink>
      <NavLink to="/news/sports">Sports</NavLink>
      <NavLink to="/news/technology">Technology</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;
