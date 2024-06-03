import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  background-color: #fff;
  color: #000;
  text-align: center;
  width: 100%;
`;

const About = () => (
  <AboutContainer id="about">
    <h2>Hakkımızda</h2>
    <p>Fırat Üniversitesi Yazılım Mühendisliği bölümünde yüksek lisans öğrencisiyim. PHP/Laravel kullanarak Backend Developer rolünde web tabanlı uygulamalar geliştiriyorum. Aynı zamanda Frontend Developer rolünde "Turkcell Geleceği Yazanlar Bootcamp" inde eğitimime devam etmekteyim.</p>
  </AboutContainer>
);

export default About;
