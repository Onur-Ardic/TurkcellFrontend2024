import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  color: #fff;
  background-color: #000;
  background-image: url('https://images.unsplash.com/photo-1556761175-129418cb2dfe');
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  border-bottom: 5px solid #00adb5;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const ProfileImage = styled.img`
  border-radius: 15px;
  width: 200px;
  height: 200px;
  margin-right: 2rem;
  border: 5px solid #00adb5;
`;

const TextContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #00adb5;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 2rem;
`;

const MoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #813636;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #00adb5;
    color: #fff;
    transform: translateY(-3px);
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;

const Header = () => (
  <HeaderContainer>
    <Content>
    <ProfileImage src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
      <TextContainer>
        <Name>Semih YÜCEL</Name>
        <Title>YAZILIM MÜHENDİSİ</Title>
        <Description>
          Fırat Üniversitesi Yazılım Mühendisliği bölümünde yüksek lisans öğrencisiyim. PHP/Laravel kullanarak Backend Developer rolünde web tabanlı uygulamalar geliştiriyorum. Aynı zamanda Frontend Developer rolünde "Turkcell Geleceği Yazanlar Bootcamp" inde eğitimime devam etmekteyim.
        </Description>
        <MoreButton href="#about">
          HAKKIMDA DAHA FAZLASI
          <IconWrapper><FaArrowRight /></IconWrapper>
        </MoreButton>
      </TextContainer>
    </Content>
  </HeaderContainer>
);

export default Header;
