import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MusicList from './MusicList'
import {
  Icon,
  IconWrapper,
  Li,
  Link,
  NavbarBottom,
  NavbarTop,
  NavbarWrapper,
  Ul,
  ToggleButton,
} from './styled'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <ToggleButton onClick={handleToggleSidebar}>
        <Icon className="bi bi-list" fontSize={'24px'} />
      </ToggleButton>
      <NavbarWrapper className={`navbar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
        <NavbarTop>
          <Ul>
            <Li>
              <NavLink to="/">
                <Link fontSize={'17px'}>
                  <Icon className="bi bi-house-door" fontSize={'17px'} />
                  Ana Sayfa
                </Link>
              </NavLink>
            </Li>
            <Li>
              <Link>
                <Icon className="bi bi-search" />
                Ara
              </Link>
            </Li>
          </Ul>
        </NavbarTop>
        <NavbarBottom>
          <IconWrapper>
            <Icon className="bi bi-music-note-list" fontSize={'18px'}>
              <span style={{ marginLeft: '5px' }}>Kitaplığım</span>
            </Icon>
            <div className="icons-add">
              <Icon className="bi bi-plus" fontSize={'34px'} />
              <Icon className="bi bi-arrow-right" fontSize={'30px'} />
            </div>
          </IconWrapper>
          <MusicList />
        </NavbarBottom>
      </NavbarWrapper>
    </>
  )
}

export default Navbar
