import { tertiary } from "../../common/colors";
import { A, Container, Subtitle } from "../../common/styled";
import { Title, Paragraph } from "../../common/styled";
import { Image, SocialMediaContainer, SocialMediaLink } from "./styled";

const Home = ({ socialMediaLinks }) => {
  return (
    <Container
      id="home"
      direction="column"
      alignitems="center"
      padding="50px 50px 100px 50px"
      className="animate__animated animate__backInUp"
    >
      <Image src="myPhoto.webp" alt="Photo of Barış Erkuş" loading="lazy" />
      <Title as="h1">BARIŞ ERKUŞ</Title>
      <Subtitle color={tertiary} as="h2">
        Front-End Developer
      </Subtitle>
      <Paragraph>
        <strong>My philosophy:</strong> I see myself as a project and aim to
        develop this project in the best possible way. Software is my passion. I
        would like to contribute to both myself and your company with the energy
        that this passion gives me. I hope to work together.
      </Paragraph>
      <SocialMediaContainer>
        <SocialMediaLink
          href={socialMediaLinks["github"]}
          target="_blank"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </SocialMediaLink>
        <SocialMediaLink
          href={socialMediaLinks["linkedin"]}
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </SocialMediaLink>
        <SocialMediaLink
          href={socialMediaLinks["medium"]}
          target="_blank"
          aria-label="Medium"
        >
          <i className="fa-brands fa-medium" aria-hidden="true"></i>
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
