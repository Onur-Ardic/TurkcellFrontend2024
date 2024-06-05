// Contact.jsx
import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #000;
  color: #fff;
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #00adb5;
  margin-bottom: 2rem;
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

const InfoSection = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
`;

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00adb5;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00adb5;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #00adb5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #813636;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <Content>
      <Title>İrtibata Geç</Title>
      <ContactGrid>
        <InfoSection>
          <InfoTitle>İLETİŞİM!</InfoTitle>
          <InfoText>
            <FaMapMarkerAlt /> ADRES<br />
            Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği Elazığ/Merkez
          </InfoText>
          <InfoText>
            <FaEnvelope /> EMAIL<br />
            semihycl0@gmail.com
          </InfoText>
          <IconContainer>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaGithub />
            </a>
          </IconContainer>
        </InfoSection>
        <ContactForm>
          <Input type="text" placeholder="Adınız ve Soyadınız" required />
          <Input type="email" placeholder="Mail Adresiniz" required />
          <Input type="text" placeholder="Konu" required />
          <TextArea rows="5" placeholder="Mesajınız" required />
          <Button type="submit">Gönder</Button>
        </ContactForm>
      </ContactGrid>
    </Content>
  </ContactContainer>
);

export default Contact;
