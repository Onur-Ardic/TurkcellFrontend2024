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
        Barış Erkuş was born on April 18, 2002, in Adana. He attended Iskenderun
        Technical University from 2020 to 2024. Throughout his educational
        journey, he completed internships at three different companies, held a
        full-time position at a company, and gained extensive freelance work
        experience. He graduated as the top-ranking student in his class.
        Towards the end of his education, he participated in the Front-End
        Bootcamp Training program provided by Turkcell. Barış Erkuş&apos;s
        internships and work experiences have predominantly been in Web
        Development and Mobile Development. His career goal is to become a
        professional trainer and consultant in these fields.
        <br />
        <br />
        The most important thing for him is to be remembered for his commitment
        to quality.
      </Paragraph>
    </Container>
  );
};

export default AboutMe;
