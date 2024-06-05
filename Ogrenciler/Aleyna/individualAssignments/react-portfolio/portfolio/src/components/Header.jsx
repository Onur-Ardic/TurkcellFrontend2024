import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import {
  HeaderContainer,
  Nav,
  NavMenuLogo,
  NavMenuRight,
  SocialMedia,
  ContainerImg,
  ContentWrapper,
  TopContent,
  ContainerButton,
  BottomContent,
} from "../styles/CustomComponents";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav className="container">
        <NavMenuLogo>ALEYNA ERTOK | FRONTEND DEVELOPER</NavMenuLogo>
        <NavMenuRight>
          <a href="#">HOMEPAGE</a>
        </NavMenuRight>
      </Nav>
      <div className="header-wrapper">
        <div className="container-wrap-left">
          <ContainerImg>
            <img src="foto.webp" alt="Image" />
          </ContainerImg>
          <SocialMedia>
            <a href="https://twitter.com/kostekipeti">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/aleynaertok/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/aleynaertok/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aleynaertok">
              <FaGithub />
            </a>
          </SocialMedia>
        </div>
        <div className="container-wrap-right">
          <ContentWrapper>
            <TopContent>
              <h1>Hi , I'm Aleyna !</h1>
              <p>
                I am a person who loves teamwork and is open to learning. The
                projects I have developed in the frontend area are waiting for
                you!
              </p>
            </TopContent>
            <ContainerButton>
              <a href="#projects">PROJECTS</a>
              <a href="">RESUME</a>
              <a href="#subscribe">LET'S WORK TOGETHER</a>
            </ContainerButton>
            <BottomContent>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
            </BottomContent>
          </ContentWrapper>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
