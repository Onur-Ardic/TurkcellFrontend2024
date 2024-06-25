'use client';
import Link from "next/link";
import {styled} from 'styled-components'

export const NavbarContainer = styled.div`
    background: black;
`;

const Navbar = () => {
  return (
    <div>
        <NavbarContainer>
        <h1>Blog</h1>
        <Link href="/">Anasayfa</Link> <br />
          <Link href="/about">About</Link>
          <br />
        </NavbarContainer>
    </div>
  )
}

export default Navbar