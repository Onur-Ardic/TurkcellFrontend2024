import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #333;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: orangered;
  }

  &:hover {
    color: gray;
  }
`;
