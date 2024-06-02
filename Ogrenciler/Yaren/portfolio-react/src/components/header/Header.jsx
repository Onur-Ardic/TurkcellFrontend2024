import React from "react";
import Foto from "../../assets/pc.png";
import StyledHeader, { Logo, TypingTitle, Subtitle } from "./Header.styled";

import Container from "../../style/Container.styled";
import Flex from "../../style/FlexColumn.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Logo src={Foto} alt="" />
          <TypingTitle>Yaren Su YAVUZ</TypingTitle>
          <Subtitle>Frontend Developer</Subtitle>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
