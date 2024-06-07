import { NavbarItems, NavbarStyle, NavbarWrapper } from './style'
const Navbar = ({ countryHandler }) => {
  const changeCountryHandler = (e) => {
    countryHandler(e.target.value)
  }
  return (
    <NavbarStyle className="navbar">
      <NavbarWrapper className="navbar-wrapper">
        <div className="logo">
          <h3>NewsApp</h3>
        </div>

        <NavbarItems>
          <li className="navbar-items">
            <a href="#">Anasayfa</a>
          </li>

          <li className="navbar-items">
            <a href="#">Kategoriler</a>
          </li>

          <select name="country" id="country" onChange={changeCountryHandler}>
            <option value="tr">Türkiye</option>
            <option value="us">Amerika</option>
            <option value="de">Almanya</option>
            <option value="fr">Fransa</option>
            <option value="es">İspanya</option>
          </select>
        </NavbarItems>
      </NavbarWrapper>
    </NavbarStyle>
  )
}

export default Navbar
