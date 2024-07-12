import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const NavLink = styled.a`
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #0070f3;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo>My E-commerce</Logo>
      <NavLinks>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/category" passHref>
          <NavLink>Categories</NavLink>
        </Link>
        <Link href="/login" passHref>
          <NavLink>Login</NavLink>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
}
