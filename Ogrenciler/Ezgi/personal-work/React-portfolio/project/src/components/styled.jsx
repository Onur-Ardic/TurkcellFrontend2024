import styled, { keyframes } from 'styled-components';
export const HeaderContainer = styled.header`
background-color: #AEBFBE;
height:100vh;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
export const NavbarContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  height: 100%; 
  z-index: 1000; 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Navbar = styled.nav`
display:flex;
flex-direction: column;
gap: 1.3rem;
`
export const ActiveNavbarItem = styled.a`
  font-size: 1.5rem;
  border: 2px solid #423189;
  margin-left: 30px;
  box-shadow: 0 4px 10px rgba(216, 183, 255, 0.5);
  width: 50px;
  height:50px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all .3s ease;
  background-color: #DDDEFF;
  color: #423189; /* İkon rengini burada belirleyin */

`

export const InactiveNavbarItem = styled(ActiveNavbarItem)`
background-color: transparent;
  color: #423189; /* İkon rengini burada belirleyin */
`
export const LeftSide = styled.div`
  width: 60%;
  padding-left: 150px
`;

export const RightSide = styled.div`
  width:30%;
  margin-right: 80px
`;

export const profilImageAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
  animation: ${profilImageAnimation} 3s ease-in-out infinite;
`;
export const LeftSideTitle = styled.h1`
font-size:1rem;
max-width:200px;
tex-align:left;
background-color: #DDDEFF;
color: #303030;
border: 2px solid #4b0082;
box-shadow: 0 4px 10px rgba(216, 183, 255, 0.5);
padding: 10px 20px;
`

export const Introduction = styled.h2`
  font-size: 2.3rem;
  text-align: left;
  margin: 20px 0;
  color: #303030;
`;
export const IntroductionText = styled.p`
max-width:500px;
color: #737066;
font-weight: 500;
  font-size: 1rem;
  text-align:left`

export const Title = styled.h1`
  font-size: 1.5rem;
`;
export const Wrapper = styled.div`
display:flex;
flex-direction: column;
gap:25px
`
export const ButtonHeader = styled.button`
  padding: 10px 20px;
  max-width: 150px;
  margin: 10px 0 2px 0;
  border: none;
  border-radius: 20px;
  background-color: #297373;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all .5s ease;
  &:hover {
    background-color: #24403F;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  text-align:left
`;

export const SocialIconLink = styled.a`
margin-right:10px;
  font-size: 1.5em;
  &:hover {
    color: #954dcc;
  }
`;
//about
export const AboutContainer = styled.section`
background-image: url('assets/images/background.png');
background-size: cover;
width.100%;
padding: 12rem 0;
display: flex;
align-items: center;
justify-content: space-evenly;
`;
export const TextContainer = styled.div`
  text-align: left; 
`;

export const ImageContainer = styled.div`
  width: 350px; 
  height: 350px; 
  overflow: hidden; 
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8%;
  object-fit: cover; 

`;

export const HeadingAbout = styled.h2`
  font-size: 3rem;
  color: #303030;
`;

export const Description = styled.p`
  max-width: 500px;
  color: #838383;
  font-size: 1.2rem;
`;
export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 20px 0 0;
  object-fit: cover
`;
//projects

export const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-color:#D8A7B1
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
  background-color: #ECEDEF;
`;

export const ContactContent = styled.div`
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px; 
  max-width:500px;
  margin: 0 auto;
  color:#303030;
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
  margin: 10px 0;
  border: 1px solid #d8a7b1;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  &::placeholder {
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







