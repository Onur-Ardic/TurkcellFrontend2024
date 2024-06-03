import { tertiary } from "../../common/colors";
import { A, Container, Subtitle } from "../../common/styled";
import { Title, Paragraph } from "../../common/styled";
import { Image, Strong, SocialMediaContainer, SocialMediaLink } from "./styled";

const Home = ({ socialMediaLinks }) => {
  return (
    <Container
      id="home"
      direction="column"
      alignitems="center"
      padding="50px 50px 100px 50px"
      className="animate__animated animate__backInUp"
    >
      <Image src="myPhoto.jpg" alt="My Photo" />
      <Title>BARIŞ ERKUŞ</Title>
      <Subtitle color={tertiary}>Front-End Developer</Subtitle>
      <Paragraph>
        <Strong>My philosophy:</Strong> Seeing myself as a project and
        developing this project in the best possible way. Software is my
        passion. I would like to contribute to myself and your company with the
        energy that this passion gives me. I hope to work together.
      </Paragraph>
      <SocialMediaContainer>
        <SocialMediaLink href={socialMediaLinks["github"]} target="_blank">
          <i className="fa-brands fa-github"></i>
        </SocialMediaLink>
        <SocialMediaLink href={socialMediaLinks["linkedin"]} target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </SocialMediaLink>
        <SocialMediaLink href={socialMediaLinks["medium"]} target="_blank">
          <i className="fa-brands fa-medium"></i>
        </SocialMediaLink>
      </SocialMediaContainer>
      <A
        href="cv.pdf"
        download="Baris_Erkus_CV.pdf"
        padding="10px 40px"
        fontSize="1.5rem"
      >
        Download CV
      </A>
    </Container>
  );
};

export default Home;
