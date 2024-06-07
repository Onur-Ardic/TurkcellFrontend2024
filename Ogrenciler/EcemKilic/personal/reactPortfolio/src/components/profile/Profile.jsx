import { Container, Title, Subtitle, Description, Links, Link } from './ProfileStyles';

const Profile = () => {

  return (
    <Container id='profile'>
      <Title>Ecem Kılıç</Title>
      <Subtitle>Frontend Developer</Subtitle>
      <Description>
        I am a newly graduate computer engineer. I am developing projects as a frontend developer.
      </Description>
      <Links>
        <Link href="https://www.linkedin.com/in/ecem-kılıç-729431230/" target="_blank">LINKEDIN</Link>
        <Link href="https://github.com/ecemklc" target="_blank">GITHUB</Link>
      </Links>
    </Container>
  );
};

export default Profile;