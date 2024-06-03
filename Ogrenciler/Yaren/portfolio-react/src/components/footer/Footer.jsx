import React from "react";
import StyledFooter, { FooterIcons } from "./Footer.styled";
import FlexRow from "../../style/FlexRow.styled";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <StyledFooter>
      <FlexRow>
        <FooterIcons>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillInstagram />
        </FooterIcons>
      </FlexRow>
    </StyledFooter>
  );
};

export default Footer;
