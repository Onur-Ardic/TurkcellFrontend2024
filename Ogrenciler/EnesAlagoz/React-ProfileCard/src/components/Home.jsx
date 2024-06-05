import React from "react";
import {
  HomeProfileSection,
  HomeProfileImageContainer,
  HomeProfileImage,
  HomeProfileInfo,
  HomeProfileName,
  HomeProfileSubtitle,
  HomeProfileBody,
  HomeProfileLinks,
  HomeProfileLink,
} from "../styles/Styled";
import profileImage from "../assets/enes.jpg";

const Home = () => {
  return (
    <HomeProfileSection id="homeSection">
      <HomeProfileImageContainer>
        <HomeProfileImage src={profileImage} alt="Enes Alagöz" />
      </HomeProfileImageContainer>
      <HomeProfileInfo>
        <HomeProfileName>Enes Alagöz</HomeProfileName>
        <HomeProfileSubtitle>FRONTEND DEVELOPER</HomeProfileSubtitle>
        <HomeProfileBody>
          I am a mechanical engineer, diligent and result-oriented. I am currently studying and honing my skills to
          become a frontend developer. I am continuously working on self-improvement and advancement in this field.
        </HomeProfileBody>
        <HomeProfileLinks>
          <HomeProfileLink href="https://github.com/enesalagoz1212">GITHUB</HomeProfileLink>
          <HomeProfileLink href="https://www.linkedin.com/in/enes-alag%C3%B6z-801065258/">LINKEDIN</HomeProfileLink>
          <HomeProfileLink href="https://medium.com/@alagozenes13">MEDIUM</HomeProfileLink>
        </HomeProfileLinks>
      </HomeProfileInfo>
    </HomeProfileSection>
  );
};

export default Home;
