import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #141414;
`;

export const NavbarTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ListItemLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
`;
