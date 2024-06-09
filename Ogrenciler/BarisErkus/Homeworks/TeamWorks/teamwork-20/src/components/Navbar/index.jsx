import { NavLink } from "react-router-dom";
import { NavbarContainer } from "../../common/styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">Genel</NavLink>
      <NavLink to="/business">İş</NavLink>
      <NavLink to="/entertainment">Eğlence</NavLink>
      <NavLink to="/health">Sağlık</NavLink>
      <NavLink to="/science">Bilim</NavLink>
      <NavLink to="/sports">Spor</NavLink>
      <NavLink to="/technology">Teknoloji</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
