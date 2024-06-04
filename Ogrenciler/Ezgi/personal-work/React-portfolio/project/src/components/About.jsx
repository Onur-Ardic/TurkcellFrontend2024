import { AboutContainer, TextContainer, HeadingAbout, Description, ImageContainer, Image, AboutContent } from '../components/styled'
import ParticlesBackground from './ParticlesBackground';
function About() {
  return (
    <AboutContainer id="about">
      <ParticlesBackground>
        <AboutContent>
          <TextContainer>
            <HeadingAbout>About Me</HeadingAbout>
            <Description>
              Hi! I'm a web developer with a passion for creating beautiful and functional websites. With experience in various web technologies, I enjoy solving complex problems and continuously learning new skills.
            </Description>
          </TextContainer>
          <ImageContainer>
            <Image src={'assets/images/profil.jpg'} alt="Profile Image" />
          </ImageContainer>
        </AboutContent>
      </ParticlesBackground>
    </AboutContainer>
  );
}

export default About;
