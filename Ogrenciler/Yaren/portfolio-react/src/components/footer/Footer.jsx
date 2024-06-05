import React from "react";
import StyledFooter, { Gif, SocialLinks } from "./Footer.styled";
import FlexRow from "../../style/FlexRow.styled";
import AnimatedTitle from "../../style/AnimatedTitle.styled";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import FlexColumn from "../../style/FlexColumn.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FlexRow>
        <Gif
          src="https://img1.picmix.com/output/stamp/normal/7/2/2/9/189227_120b7.gif"
          alt="Footer Gif"
        />
        <FlexColumn>
          <AnimatedTitle>Bana Ulaşın!</AnimatedTitle>
          <SocialLinks>
            <a href="https://github.com/yarensu-yavuz" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yaren-su-yavuz/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="#" target="_blank">
              <AiFillInstagram />
            </a>
          </SocialLinks>
        </FlexColumn>
      </FlexRow>
    </StyledFooter>
  );
};

export default Footer;
