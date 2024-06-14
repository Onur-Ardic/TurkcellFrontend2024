import { useDispatch, useSelector } from 'react-redux'
import { CustomButtonSecond, CustomNavbar, NavbarWrapper } from './Styled'
import { showPage, showLogin } from '../Redux/Slices/todoSlice'
import { Logout } from '../firebase'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const showSignupHandler = () => {
    dispatch(showPage(true))
    dispatch(showLogin(false))
  }

  const handleShowLogin = () => {
    dispatch(showLogin(true))
    dispatch(showPage(false))
  }

  const logoutHandler = () => {
    localStorage.removeItem('user')
    window.location.reload()
    dispatch(Logout())
  }
  return (
    <>
      <CustomNavbar>
        <NavbarWrapper>
          <CustomButtonSecond onClick={handleShowLogin}>Giriş</CustomButtonSecond>
          <CustomButtonSecond onClick={showSignupHandler}>Kayıt Ol</CustomButtonSecond>
          {user && <CustomButtonSecond onClick={logoutHandler}>Çıkış Yap</CustomButtonSecond>}
        </NavbarWrapper>
      </CustomNavbar>
    </>
  )
}

export default Navbar
