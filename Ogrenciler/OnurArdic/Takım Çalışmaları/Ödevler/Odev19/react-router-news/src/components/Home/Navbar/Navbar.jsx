import { NavbarItems, NavbarStyle, NavbarWrapper, SecondNavbarStyle } from './style'
import { NavLink } from 'react-router-dom'
const Navbar = ({ setOnCountry, setOnCategory }) => {
  const changeCountryHandler = (e) => {
    setOnCountry(e.target.value)
  }

  return (
    <>
      <NavbarStyle className="navbar" primary={'#fafafa'}>
        <NavbarWrapper className="navbar-wrapper container">
          <div className="logo">
            <h3>NewsApp</h3>
          </div>

          <NavbarItems className="pt-3">
            <li className="navbar-items">
              <NavLink to="/Home">Anasayfa</NavLink>
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
      <SecondNavbarStyle className="second-navbar pt-3">
        <div className="second-navbar-wrapper container">
          <div className="second-navbar-items">
            <li className="navbar-items">
              <NavLink to="/haberler" onClick={() => setOnCategory('general')}>
                Haberler
              </NavLink>
            </li>
            <li className="navbar-items">
              <NavLink
                to="/haberler/spor"
                onClick={() => {
                  setOnCategory('sports')
                }}
              >
                Spor Haberleri
              </NavLink>
            </li>

            <li className="navbar-items">
              <NavLink
                to="/haberler/sağlık"
                onClick={() => {
                  setOnCategory('health')
                }}
              >
                Sağlık Haberleri
              </NavLink>
            </li>

            <li className="navbar-items">
              <NavLink
                to="/haberler/ekonomi"
                onClick={() => {
                  setOnCategory('business')
                }}
              >
                Ekonomi Haberleri
              </NavLink>
            </li>
          </div>
        </div>
      </SecondNavbarStyle>
    </>
  )
}

export default Navbar
