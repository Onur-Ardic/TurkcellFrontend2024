'use client';
import Link from "next/link";
import {styled} from 'styled-components';

export const NavbarContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    height: 100px;
`;
export const Logo = styled.img`
    width: 13%;
     @media screen and (max-width:550px) {
      width: 25%;
}
`;

const Navbar = () => {
  return (
    <div>
        <NavbarContainer>
        
        <Logo src="https://resmim.net/cdn/2024/06/26/WMsftK.png"></Logo>
        <Link href="/">Anasayfa</Link> <br />
          <br />
        </NavbarContainer>
    </div>
  )
}

export default Navbar