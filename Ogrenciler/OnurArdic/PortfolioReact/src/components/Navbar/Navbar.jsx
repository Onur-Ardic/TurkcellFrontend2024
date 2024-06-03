import { Item, Links, NavbarItem, Nav, NavbarWrapper, NavbarLogo } from './styled'

const Navbar = () => {
  return (
    <Nav className="roboto-mono">
      <NavbarWrapper>
        <NavbarLogo>
          <h3>Onur Ardıç</h3>
        </NavbarLogo>

        <Item>
          <NavbarItem className="navbar-item">
            <Links href="#">Anasayfa</Links>
          </NavbarItem>
          <NavbarItem className="navbar-item">
            <Links href="#">Hakkımda</Links>
          </NavbarItem>
          <NavbarItem className="navbar-item">
            <Links href="#">Portfolio</Links>
          </NavbarItem>
        </Item>
      </NavbarWrapper>
    </Nav>
  )
}

export default Navbar
