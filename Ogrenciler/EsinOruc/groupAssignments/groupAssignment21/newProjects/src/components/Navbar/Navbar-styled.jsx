import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled(NavLink)`
  font-family: "Oswald", serif;
  margin: 0 15px;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;

  &.active {
    color: red;
  }

  &:hover {
    color: red;
  }
`;
