import { useDispatch, useSelector } from 'react-redux'
import { CustomButtonSecond, CustomNavbar, NavbarWrapper } from './Styled'
import { Logout } from '../firebase'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    localStorage.removeItem('user')
    window.location.reload()
    dispatch(Logout())
  }
  return (
    <>
      <CustomNavbar>
        <NavbarWrapper>
          {user ? (
            <CustomButtonSecond onClick={logoutHandler}>Çıkış Yap</CustomButtonSecond>
          ) : (
            <>
              <NavLink to="/login">
                <CustomButtonSecond>Giriş</CustomButtonSecond>
              </NavLink>
              <NavLink to="/sign">
                <CustomButtonSecond>Kayıt Ol</CustomButtonSecond>
              </NavLink>
            </>
          )}
        </NavbarWrapper>
      </CustomNavbar>
    </>
  )
}

export default Navbar
