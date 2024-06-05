import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;
  color: #777;
`;

const SubscribeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const SubscribeInput = styled.input`
  width: 500px;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem 0 0 0.5rem;
  outline: none;
`;

const SubscribeButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: white;
  background-color: #e6a4b4 ;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #777;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Title>CONTACT</Title>
      <Subtitle>Subscribe To Get Latest Update From Us</Subtitle>
      <SubscribeContainer>
        <SubscribeInput type="email" placeholder="Enter your email" />
        <SubscribeButton>Contact Us</SubscribeButton>
      </SubscribeContainer>
      <SocialIcons>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
      </SocialIcons>
      <Copyright>
        &copy; Copyright 2024 | All Rights Reserved |Şevval Erhan
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
