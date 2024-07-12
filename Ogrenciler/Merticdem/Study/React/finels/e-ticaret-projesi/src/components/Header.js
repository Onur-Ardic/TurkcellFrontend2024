import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #0070f3;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>My E-Commerce</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
