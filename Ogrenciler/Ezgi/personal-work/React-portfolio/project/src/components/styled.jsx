import styled, { createGlobalStyle } from 'styled-components';

export const HeaderContainer = styled.header`
position: relative;
height: 100vh;
background: #111111;
color: white;
display: flex;
align-items: center;
justify-content: center;
z-index: 1; /* Ensures content appears above particles */
`
export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap:15px
`;

export const NavLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2em;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: white;
  margin-left: 15px;
  font-size: 1.5em;
  &:hover {
    color: #954dcc;
  }
`;
//about
export const AboutContainer = styled.section`
position: relative;
height: 100vh;
background: #111111;
color: white;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
`;

export const AboutContent = styled.div`
  position: relative;
  z-index: 2;
`;


export const TextContainer = styled.div`
  max-width: 700px;
  margin-right: 20px;
  text-align: left; 
  padding: 20px; 
`;

export const ImageContainer = styled.div`
  width: 350px; 
  height: 350px; 
  overflow: hidden; 
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover; 
`;

export const HeadingAbout = styled.h2`
  font-size: 3rem;
`;

export const Description = styled.p`
  max-width: 500px;
  color: #838383;
  font-size: 1.2rem;
`;
//projects

export const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-image: linear-gradient(to bottom, #5a2880, #2a1323);
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: #fff;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const ProjectCard = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-top: 6px;
`;

export const ProjectDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #561e00;
  }
`;

export const SourceCodeButton = styled(Button)`
  background-color: #5a2880;
  margin-bottom: 8px;
`;

export const DemoButton = styled(Button)`
  background-color: #4CAF50;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;
//contact
export const ContactContainer = styled.section`
  padding: 50px 20px;
  background-color: black;
`;

export const ContactContent = styled.div`
  background-color: #5a2880;
  padding: 20px;
  border-radius: 10px; 
  max-width:500px;
  margin: 0 auto;
  color:white;
`;

export const HeadingContact = styled.h2`
  font-size: 2rem;
`;

export const ContactInfo = styled.p`
  font-size: 1.2rem;
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  color: white;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  background-color: #5a2880;
  &::placeholder {
    color: white; 
    font-family: "Nunito", sans-serif;
    opacity: 0.8
  }
`;

export const TextArea = styled(Input)``;

export const ButtonContact = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #282c34;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all .5s ease;
  &:hover {
    background-color: #4CAF50;
  }
`;







const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }
`;

export default GlobalStyle;