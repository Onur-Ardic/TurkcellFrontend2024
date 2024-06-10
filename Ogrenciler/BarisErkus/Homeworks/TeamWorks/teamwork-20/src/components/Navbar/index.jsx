import { NavbarContainer, StyledNavLink } from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledNavLink to="/">Genel</StyledNavLink>
      <StyledNavLink to="/business">İş</StyledNavLink>
      <StyledNavLink to="/entertainment">Eğlence</StyledNavLink>
      <StyledNavLink to="/health">Sağlık</StyledNavLink>
      <StyledNavLink to="/science">Bilim</StyledNavLink>
      <StyledNavLink to="/sports">Spor</StyledNavLink>
      <StyledNavLink to="/technology">Teknoloji</StyledNavLink>
    </NavbarContainer>
  );
};

export default Navbar;
