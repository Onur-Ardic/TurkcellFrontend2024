import React from 'react';
import styled from 'styled-components';

const Item = styled.a`
  color: ${props => props.isActive ? 'orange' : 'white'};
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    color: pink;
  }
`;

const NavbarItem = ({ text, href }) => {
  return <Item href={href}>{text}</Item>;
};

export default NavbarItem;
