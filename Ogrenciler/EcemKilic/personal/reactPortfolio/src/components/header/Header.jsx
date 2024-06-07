import {
  HeaderContainer,
  HeaderList,
  HeaderItem,
  HeaderLink,
  Menu,
  Icon,
  HeaderWrapper
} from './HeaderStyles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Menu>
          <HeaderList>
            <HeaderItem>
              <HeaderLink href="#profile">
                <Icon>Home</Icon>
              </HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink href="#education">
                <Icon>Education</Icon>
              </HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink href="#experience">
                <Icon>Experience</Icon>
              </HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink href="#projects">
                <Icon>Projects</Icon>
              </HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink href="#contactForm">
                <Icon>Contact</Icon>
              </HeaderLink>
            </HeaderItem>
          </HeaderList>
        </Menu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;