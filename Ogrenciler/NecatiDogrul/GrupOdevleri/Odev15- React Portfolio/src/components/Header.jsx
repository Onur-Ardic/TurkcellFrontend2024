import React from "react";
import styled from "styled-components";
import logo from "../images/logo (1).png";

const HeaderContainer = styled.header`
  padding: 60px 0 0 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 98px;
  height: 56px;
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <a href="/" className="logo">
        <Logo src={logo} alt="Logo" />
      </a>
    </Container>
  </HeaderContainer>
);

export default Header;
