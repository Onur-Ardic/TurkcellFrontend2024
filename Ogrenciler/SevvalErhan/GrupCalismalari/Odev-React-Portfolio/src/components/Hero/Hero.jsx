import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/hero-image.png'; 

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem;
  color: black;
  width: 100%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const TextContainer = styled.div`
  max-width: 50%;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: gray;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  max-width: 50%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const Hero = () => {
  return (
    <HeroContainer className="container">
      <TextContainer>
        <Heading>Frontend Developer</Heading>
        <SubHeading>Şevval Erhan</SubHeading>
        <Paragraph>As a final year student of computer engineering with a strong passion for frontend development, I am dedicated to building user-friendly and visually appealing web applications. I have a solid foundation in programming, coupled with a creative mindset and an eye for design. With a constant drive to learn and explore new technologies, I strive to contribute innovative solutions to enhance the user experience.</Paragraph>
      </TextContainer>
      <ImageContainer>
        <Image src={heroImage} alt="Şevval Erhan" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
