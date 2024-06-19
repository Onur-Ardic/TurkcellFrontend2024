import { NavLink } from 'react-router-dom'
import MusicList from './MusicList'
import { Icon, IconWrapper, Li, Link, NavbarBottom, NavbarTop, NavbarWrapper, Ul } from './styled'

const Navbar = () => {
  return (
    <>
      <NavbarWrapper className="navbar-wrapper">
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
