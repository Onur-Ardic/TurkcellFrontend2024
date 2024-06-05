import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 1000;
`;

const NavButton = styled.a`
  background-color: #813636;
  color: #fff;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px #009aa5;
  }
`;

const Navbar = () => (
  <NavContainer>
    <NavButton href="#home"><FaHome size={20} /></NavButton>
    <NavButton href="#about"><FaUser size={20} /></NavButton>
    <NavButton href="#projects"><FaProjectDiagram size={20} /></NavButton>
    <NavButton href="#contact"><FaEnvelope size={20} /></NavButton>
  </NavContainer>
);

export default Navbar;
