import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/todos">Home</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/">Register</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
