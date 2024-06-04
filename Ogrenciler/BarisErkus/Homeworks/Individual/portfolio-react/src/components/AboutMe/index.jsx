import { secondary } from "../../common/colors";
import { Container, Title, Paragraph } from "../../common/styled";

const AboutMe = () => {
  return (
    <Container
      id="aboutMe"
      bgcolor={secondary}
      direction="column"
      alignitems="center"
      justifycontent="center"
      padding="100px 50px"
    >
      <Title as="h2">Who is Barış Erkuş?</Title>
      <Paragraph mw="1400px">
        Barış Erkuş was born on April 18, 2002, in Adana. He studied at
        Iskenderun Technical University from 2020 to 2024. During his
        educational life, he interned at three different companies, held a
        full-time job at a company, and gained many freelance work experiences.
        He completed his education as the highest-ranking student. In the last
        period of his education, he participated in the Front-End Bootcamp
        Training given by Turkcell. Barış Erkuş&apos;s internships and work
        experiences to date have been in Web Development and Mobile Development.
        His career goal is to become a professional trainer and consultant in
        these fields.
        <br />
        <br />
        The most important thing for him is that his name is remembered with
        quality.
      </Paragraph>
    </Container>
  );
};

export default AboutMe;
