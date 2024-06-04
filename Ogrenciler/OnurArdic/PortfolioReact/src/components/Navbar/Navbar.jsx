import { Links } from '../baseStyle'
import { Item, NavbarItem, Nav, NavbarWrapper, NavbarLogo, MenuIcon } from './styled'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Nav className="roboto-mono">
      <NavbarWrapper>
        <NavbarLogo>
          <h3>Onur Ardıç</h3>
        </NavbarLogo>
        <MenuIcon onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </MenuIcon>
        <Item isOpen={isOpen}>
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
