import { AboutContainer, TextContainer, HeadingAbout, Description, ImageContainer, Image, LogosContainer, LogoImage } from '../components/styled'

function About() {
  return (
    <AboutContainer id="about">
      <ImageContainer>
        <Image src={'assets/images/profile2.jpg'} alt="Profile Image" />
      </ImageContainer>
      <TextContainer>
        <HeadingAbout>Who am I?</HeadingAbout>
        <Description>
          I graduated from Selçuk University computer engineering department in January 2024. I am currently developing projects related to front-end technologies and I enjoy it. I am actively training as an intern at Turkcell Future Writers Frontend Bootcamp. I am someone who likes to improve myself and research.
        </Description>
        <LogosContainer>
          <LogoImage src="assets/logos/html.svg" alt="HTML Logo" />
          <LogoImage src="assets/logos/css.svg" alt="CSS Logo" />
          <LogoImage src="assets/logos/sass.svg" alt="SASS Logo" />
          <LogoImage src="assets/logos/javascript.svg" alt="JavaScript Logo" />
          <LogoImage src="assets/logos/react.svg" alt="React Logo" />
          <LogoImage src="assets/logos/bootstrap.svg" alt="Bootstrap Logo" />
          <LogoImage src="assets/logos/styled-components.svg" alt="Styled Components Logo" />
        </LogosContainer>
      </TextContainer>
    </AboutContainer>
  );
}

export default About;
