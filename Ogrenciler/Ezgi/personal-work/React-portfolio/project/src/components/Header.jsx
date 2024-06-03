import { HeaderContainer, Title, Nav, NavLink, SocialIcons, SocialIconLink, HeaderContent } from '../components/styled'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';


function Header() {
  return (
    <HeaderContainer>
      <ParticlesBackground>
        <HeaderContent>
          <Title>Ezgi Karakaya</Title>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <SocialIcons>
              <SocialIconLink href="https://github.com/karakayaezgi" target="_blank">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/ezgi-karakaya-4546a125a/" target="_blank">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="https://twitter.com" target="_blank">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </Nav>
        </HeaderContent>
      </ParticlesBackground>
    </HeaderContainer>
  );
}

export default Header;