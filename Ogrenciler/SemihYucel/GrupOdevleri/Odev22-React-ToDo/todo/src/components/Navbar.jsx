import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "./Theme"; // Tema değiştirme bileşeni

// Styled components tanımları
const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  align-items: baseline;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: orange;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/todos">Ana Sayfa</NavLink>
      </div>
      <Theme />
      <div>
        <NavLink to="/login">Giriş Yap</NavLink>
        <NavLink to="/">Kayıt Ol</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
