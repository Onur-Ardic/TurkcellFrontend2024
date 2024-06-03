import { Links } from '../baseStyle'
import { Item, NavbarItem, Nav, NavbarWrapper, NavbarLogo } from './styled'

const Navbar = () => {
  return (
    <Nav className="roboto-mono">
      <NavbarWrapper>
        <NavbarLogo>
          <h3>Onur Ardıç</h3>
        </NavbarLogo>

        <Item>
          <NavbarItem className="navbar-item">
            <Links href="#Home">Anasayfa</Links>
          </NavbarItem>
          <NavbarItem className="navbar-item">
            <Links href="#About">Hakkımda</Links>
          </NavbarItem>
          <NavbarItem className="navbar-item">
            <Links href="#Portfolio">Portfolio</Links>
          </NavbarItem>
          <NavbarItem className="navbar-item">
            <Links style={{ backgroundColor: '#fff', color: '#000' }} href="OnurArdic.pdf">
              Dowloand CV
            </Links>
          </NavbarItem>
        </Item>
      </NavbarWrapper>
    </Nav>
  )
}

export default Navbar
