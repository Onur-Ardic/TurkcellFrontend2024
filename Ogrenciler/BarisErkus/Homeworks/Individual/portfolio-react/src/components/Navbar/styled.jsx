import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #141414;
  @media (max-width: 450px) {
    padding: 1rem 0.5rem;
  }
`;

export const NavbarTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ListItemLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
`;
