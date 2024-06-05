import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shakeAnimation = keyframes`
  0% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-5px);
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #3e574d;
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div`
  display: flex;
`;

export const NavItem = styled.a`
  margin: 0 10px;
  font-size: 22px;
  text-decoration: none;
  font-weight: bold;
  color: #c1d2cb;

  &:hover {
    text-decoration: underline;
  }
`;

export const HomeProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;

  background-color: #1e7b5c;
`;

export const HomeProfileImageContainer = styled.div`
  flex-shrink: 0;
`;

export const HomeProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-top-right-radius: 20%;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transition: border-radius 0.6s ease-in-out;
  &:hover {
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
`;

export const HomeProfileInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  animation: ${fadeInUp} 1.5s ease-in-out;
`;

export const HomeProfileName = styled.h4`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #062418;
`;

export const HomeProfileSubtitle = styled.p`
  margin: 5px 0;
  font-size: 20px;
  color: #062418;
`;

export const HomeProfileBody = styled.p`
  font-size: 20px;
  max-width: 400px;
  line-height: 1.5;
  margin: 10px 0;
  color: #062418;
`;

export const HomeProfileLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  padding-top: 40px;
  font-size: 20px;
`;

export const HomeProfileLink = styled.a`
  text-decoration: none;
  color: #062418;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #0f3d2c;
  padding: 50px 50px;
`;

export const ContactContainer = styled.section`
  padding: 16px;
  background-color: #34cf96;
  color: #0f3d2c;
  text-align: center;
  width: 100%;
  height: 540px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #0f3d2c;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #25966d;
`;

export const FormField = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #0F3D2C
  font-weight: bold;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 2px solid #29b486;
  border-radius: 4px;
  background-color: #0f3d2c;
  color: #2e493d;
`;

export const TextArea = styled.textarea`
  max-width: 80%;
  padding: 10px;
  border: 2px solid #29b486;
  border-radius: 5px;
  background-color: #0f3d2c;
  color: #34d197;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0f3d2c;
  color: #34cf96;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1d7959;
  }
`;

export const FooterContainer = styled.footer`
  background-color: #3e574d;
  color: #062418;
  padding: 18px;
  font-weight: bold;
  text-align: center;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const CardProject = styled.div`
  background: #2bb283;
  border: 1px solid #082017;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.5s;

  &:hover {
    animation: ${shakeAnimation} 0.2s 1;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

export const ProjectTitle = styled.h1`
  font-size: 24px;
  margin: 16px 0;
  color: #062418;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: #3e574d;
  color: #062418;
`;
export const ProjectButton = styled.button`
  background-color: #062418;
  color: #fff;
  padding: 10px 20px;
  margin-top: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #034d38;
  }

  &:focus {
    outline: none;
  }
`;
