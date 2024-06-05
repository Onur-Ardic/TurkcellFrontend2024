import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  padding: 20px;
  background-color: tranparent;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left
  color: white;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

function Navbar() {
  return (
    <HeaderContainer>
      <Logo className="logo container">
        <h1>ENC</h1>
      </Logo>
    </HeaderContainer>
  );
}

export default Navbar;
