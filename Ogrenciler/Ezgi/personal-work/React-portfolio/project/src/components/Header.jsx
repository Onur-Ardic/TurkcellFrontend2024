import { useState , useEffect} from 'react';
import { HeaderContainer, NavbarContainer,ActiveNavbarItem, InactiveNavbarItem, Wrapper, ButtonHeader, LeftSideTitle, Introduction, IntroductionText, SocialIcons, SocialIconLink, LeftSide, RightSide, ProfileImage, Navbar} from '../components/styled';
import { FaGithub, FaLinkedin, FaTwitter, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaHome } from 'react-icons/fa';

function Header() {
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'projects', 'contact'];
      let currentSection = 'header';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer id="header">
      <NavbarContainer>
        <Navbar>
          {activeSection === 'header' ? (
            <ActiveNavbarItem href="#header">
              <FaHome />
            </ActiveNavbarItem>
          ) : (
            <InactiveNavbarItem href="#header">
              <FaHome />
            </InactiveNavbarItem>
          )}
          {activeSection === 'about' ? (
            <ActiveNavbarItem href="#about">
              <FaInfoCircle />
            </ActiveNavbarItem>
          ) : (
            <InactiveNavbarItem href="#about">
              <FaInfoCircle />
            </InactiveNavbarItem>
          )}
          {activeSection === 'projects' ? (
            <ActiveNavbarItem href="#projects">
              <FaProjectDiagram />
            </ActiveNavbarItem>
          ) : (
            <InactiveNavbarItem href="#projects">
              <FaProjectDiagram />
            </InactiveNavbarItem>
          )}
          {activeSection === 'contact' ? (
            <ActiveNavbarItem href="#contact">
              <FaEnvelope />
            </ActiveNavbarItem>
          ) : (
            <InactiveNavbarItem href="#contact">
              <FaEnvelope />
            </InactiveNavbarItem>
          )}
        </Navbar>
      </NavbarContainer>
      <LeftSide>
        <LeftSideTitle>Welcome to My Portfolio</LeftSideTitle>
        <Introduction>{`Hi, I'm Ezgi `}<span className='wrap'>Frontend Developer</span></Introduction>
        <IntroductionText> I am constantly engaged in learning and research to expand my knowledge and proficiency in front-end technologies.</IntroductionText>
        <Wrapper>
          <ButtonHeader>Download CV</ButtonHeader>
          <SocialIcons>
            <SocialIconLink href="https://github.com/karakayaezgi" target="_blank">
              <FaGithub color='#32127a' />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/ezgi-karakaya-4546a125a/" target="_blank">
              <FaLinkedin color='#0000c8' />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com" target="_blank">
              <FaTwitter color='#00a7e7' />
            </SocialIconLink>
          </SocialIcons>
        </Wrapper>
      </LeftSide>
      <RightSide>
        <ProfileImage src={`assets/images/bitmoji.jpg`} alt="Ezgi Karakaya" />
      </RightSide>
    </HeaderContainer>
  );
}

export default Header;