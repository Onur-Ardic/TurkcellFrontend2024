import { HeaderContainer, HeaderLeft, HeaderRight, NavItem } from "../styles/Styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <NavItem href="/cv">Curriculum Vitae</NavItem>
      </HeaderLeft>
      <HeaderRight>
        <NavItem href="#homeSection">Home</NavItem>
        <NavItem href="#projectContainer">Projects</NavItem>
        <NavItem href="#contactContainer">Contact</NavItem>
        <NavItem href="#footerContainer">Footer</NavItem>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
