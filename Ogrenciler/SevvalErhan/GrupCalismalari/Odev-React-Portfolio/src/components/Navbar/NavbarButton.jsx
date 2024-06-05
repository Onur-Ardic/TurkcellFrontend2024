import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  background: #e6a4b4;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`;

const NavbarButton = ({ children }) => {
  return <Button href="#download">{children}</Button>;
};

export default NavbarButton;
