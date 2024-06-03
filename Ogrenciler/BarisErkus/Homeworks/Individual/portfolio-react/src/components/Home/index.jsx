import { A, Container } from "../../common/styled";
import { Title, Paragraph } from "../../common/styled";
import { Image, Strong, SocialMediaContainer, SocialMediaLink } from "./styled";

const Home = ({ socialMediaLinks, email }) => {
  return (
    <Container id="home" direction="column" alignitems="center">
      <Image src="myPhoto.jpg" alt="My Photo" />
      <Title>BARIŞ ERKUŞ</Title>
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
      <A href={"mailto:" + email} padding="15px 50px" fontSize="1.5rem">
        Contact Me
      </A>
    </Container>
  );
};

export default Home;
