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
      <Title>WHO IS BARIŞ ERKUŞ ?</Title>
      <Paragraph mw="1400px">
        Barış Erkuş was born on April 18, 2002 in Adana. he studied at
        Iskenderun Technical University in 2020 - 2024. During his educational
        life here, he had an internship at three different companies, a
        full-time job at a company and many freelance work experiences. He
        completed his educational life here as the highest-ranking student. In
        the last period of his educational life, he participated in the
        Front-End Bootcamp Training given by Turkcell. Barış Erkuş&apos;s
        internships and work experiences to date have been on Web Development
        and Mobile Development. The career goal is to become a professional
        trainer and consultant in these fields.
      </Paragraph>
      <Paragraph>
        The most important thing for him is that his name is remembered with
        quality.
      </Paragraph>
    </Container>
  );
};

export default AboutMe;
