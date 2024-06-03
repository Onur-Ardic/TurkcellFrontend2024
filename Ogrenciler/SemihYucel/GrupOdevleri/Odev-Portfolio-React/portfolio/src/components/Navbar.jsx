import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #222;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <Nav>
    <NavList>
      <NavItem><NavLink href="#about">Hakkımızda</NavLink></NavItem>
      <NavItem><NavLink href="#projects">Projeler</NavLink></NavItem>
      <NavItem><NavLink href="#contact">İletişim</NavLink></NavItem>
    </NavList>
  </Nav>
);

export default Navbar;
