import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #000;
  background-image: url('https://images.unsplash.com/photo-1556761175-129418cb2dfe');
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: left;
  width: 100%;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #00adb5;
  margin-bottom: 2rem;
  text-align: center;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  flex: 1 1 300px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 45%;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #00adb5;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #ddd;
`;

const SkillsItem = styled.div`
  margin-bottom: 1rem;
`;

const SkillName = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 0.5rem;
`;

const SkillBarContainer = styled.div`
  width: 100%;
  background-color: #555;
  border-radius: 4px;
`;

const SkillBar = styled.div`
  width: ${props => props.percentage || 0}%;
  background-color: #00adb5;
  height: 1rem;
  border-radius: 4px;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  flex: 1 1 200px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

const StatTitle = styled.h3`
  font-size: 1.5rem;
  color: #00adb5;
  margin-bottom: 1rem;
`;

const StatNumber = styled.p`
  font-size: 2rem;
  color: #00adb5;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #813636;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 2rem;

  &:hover {
    background-color: #009aa5;
    transform: translateY(-3px);
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;

const About = () => (
  <AboutContainer id="about">
    <Overlay />
    <Content>
      <Title>Özgeçmiş</Title>
      <InfoGrid>
        <InfoItem>
          <InfoTitle>Kişisel Bilgiler</InfoTitle>
          <InfoText>İsim: Semih</InfoText>
          <InfoText>Soyisim: Yücel</InfoText>
          <InfoText>Ülke: Türkiye</InfoText>
          <InfoText>Dil: Türkçe, İngilizce</InfoText>
          <InfoText>Email Adresi: semihycl0@gmail.com</InfoText>
          <DownloadButton href="#">
            CV İndir
            <IconWrapper><FaDownload /></IconWrapper>
          </DownloadButton>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Yetenekler</InfoTitle>
          <SkillsItem>
            <SkillName>HTML %80</SkillName>
            <SkillBarContainer>
              <SkillBar percentage={80} />
            </SkillBarContainer>
          </SkillsItem>
          <SkillsItem>
            <SkillName>CSS %60</SkillName>
            <SkillBarContainer>
              <SkillBar percentage={60} />
            </SkillBarContainer>
          </SkillsItem>
          <SkillsItem>
            <SkillName>JavaScript %75</SkillName>
            <SkillBarContainer>
              <SkillBar percentage={75} />
            </SkillBarContainer>
          </SkillsItem>
          <SkillsItem>
            <SkillName>React %70</SkillName>
            <SkillBarContainer>
              <SkillBar percentage={70} />
            </SkillBarContainer>
          </SkillsItem>
        </InfoItem>
      </InfoGrid>
      <StatsGrid>
        <StatItem>
          <StatNumber>3+</StatNumber>
          <StatTitle>İş Deneyimi</StatTitle>
        </StatItem>
        <StatItem>
          <StatNumber>20+</StatNumber>
          <StatTitle>Tamamlanan Projeler</StatTitle>
        </StatItem>
      </StatsGrid>
    </Content>
  </AboutContainer>
);

export default About;
