import { useTheme } from "../../context/ThemeContext";
import SearchBar from "../molecules/SearchBar";
import { NavbarContainer, DivLogo, ImgLogo, NavbarLeft, ToogleDiv, ToggleMenu, NavbarMiddle, NavbarRight, StyledButton, MaterialIcons } from "./styled";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <ToogleDiv><ToggleMenu src="https://img.icons8.com/ios/50/menu--v7.png" alt="menu--v7" /> </ToogleDiv>
          <DivLogo>
            <ImgLogo src="./src/assets/1.png" alt="" />
          </DivLogo>
        </NavbarLeft>
        <NavbarMiddle>
          <SearchBar></SearchBar>
        </NavbarMiddle>
        <NavbarRight>

          <StyledButton onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')}>Dark Mode</StyledButton>

          <StyledButton ><MaterialIcons className="material-icons-outlined">video_call
          </MaterialIcons> </StyledButton>

          <StyledButton><MaterialIcons className="material-symbols-outlined">
            notifications
          </MaterialIcons></StyledButton>

          <StyledButton><MaterialIcons className="material-symbols-outlined">
            circle
          </MaterialIcons>
          </StyledButton>

        </NavbarRight>
      </NavbarContainer>
    </>
  )
}

export default Navbar