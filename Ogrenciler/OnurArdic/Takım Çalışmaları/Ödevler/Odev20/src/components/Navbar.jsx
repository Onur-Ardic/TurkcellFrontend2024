import { useDispatch } from 'react-redux'
import { CustomButtonSecond, CustomNavbar, NavbarWrapper } from './Styled'
import { showPage } from '../Redux/Slices/todoSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  const signupHandler = () => {
    dispatch(showPage(true))
  }
  return (
    <>
      <CustomNavbar>
        <NavbarWrapper>
          <CustomButtonSecond>Giriş</CustomButtonSecond>
          <CustomButtonSecond onClick={signupHandler}>Kayıt Ol</CustomButtonSecond>
        </NavbarWrapper>
      </CustomNavbar>
    </>
  )
}

export default Navbar
