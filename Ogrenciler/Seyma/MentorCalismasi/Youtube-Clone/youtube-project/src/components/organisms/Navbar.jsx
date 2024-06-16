import Button from "../atoms/Button";
import SearchBar from "../molecules/SearchBar";

import { NavbarContainer, DivLogo, ImgLogo, NavbarLeft, ToogleDiv, ToggleMenu, NavbarMiddle, NavbarRight} from "./styled";


const Navbar = () => {
  return (
   <>
   <NavbarContainer> 
   <NavbarLeft>
   <ToogleDiv><ToggleMenu src="https://img.icons8.com/ios/50/menu--v7.png" alt="menu--v7"/> </ToogleDiv>
   <DivLogo>
    <ImgLogo src="./src/assets/1.png" alt="" />
    </DivLogo>
   </NavbarLeft>
   <NavbarMiddle>
    <SearchBar></SearchBar>
   </NavbarMiddle>
   <NavbarRight>
   <img width="48" height="48" src="https://img.icons8.com/parakeet-line/48/camcorder-pro.png" alt="camcorder-pro"/>
   <img width="50" height="50" src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
   <Button> <img src="" alt="" /></Button>
   </NavbarRight>
   </NavbarContainer>
   </>
  )
}

export default Navbar