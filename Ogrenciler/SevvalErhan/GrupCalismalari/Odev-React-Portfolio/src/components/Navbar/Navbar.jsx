import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import NavbarButton from './NavbarButton';

const NavbarContainer = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 2rem;
background: linear-gradient(
  to right,
  #e6a4b4 0%,
  #e6a4b4 60%,
  #f1dfd7 40%,
  #f1dfd7 40%
);
width: 100%;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  height: 50px;
`;

const Navbar = () => {
  return (
    <NavbarContainer className="container">
      <Logo>Şevval Erhan</Logo>
      <NavItems>
        <NavbarItem text="About" href="#about" />
        <NavbarItem text="Portfolio" href="#portfolio" />
        <NavbarItem text="Contact" href="#contact" />
        <NavbarButton>Download CV</NavbarButton>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
