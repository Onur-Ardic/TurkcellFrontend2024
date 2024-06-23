import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import SearchBar from "../molecules/SearchBar";
import { NavbarContainer, DivLogo, ImgLogo, NavbarLeft, NavbarMiddle, NavbarRight, MaterialIcons, HomeIcons } from "./styled";
import Button from "../atoms/Buttons";

const Navbar = ({ onToggleSideBar }) => {
  const { theme, setTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("./assets/1.png");

  useEffect(() => {
    setLogoSrc(theme === 'dark' ? 'src/assets/2.png' : 'src/assets/1.png');
  }, [theme]);

  return (
    <NavbarContainer>
      <NavbarLeft>
        <Button onClick={onToggleSideBar}>
          <HomeIcons className="material-symbols-outlined">menu</HomeIcons>
        </Button>
        <DivLogo>
          <ImgLogo src={logoSrc} alt="Logo" />
        </DivLogo>
      </NavbarLeft>
      <NavbarMiddle>
        <SearchBar />
      </NavbarMiddle>
      <NavbarRight>
        <Button onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')}>Dark Mode</Button>
        <Button><MaterialIcons className="material-icons-outlined">video_call</MaterialIcons></Button>
        <Button><MaterialIcons className="material-symbols-outlined">notifications</MaterialIcons></Button>
        <Button><MaterialIcons className="material-symbols-outlined">circle</MaterialIcons></Button>
      </NavbarRight>
    </NavbarContainer>
  );
}

export default Navbar;
