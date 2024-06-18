import { NavLink} from "react-router-dom";
const SideBar = () => {
  return (
    <>
    <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/123">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/abonelikler">Abonelikler</NavLink>
        </li>
        <li>
          <NavLink to="/shorts">Shorts</NavLink>
        </li>
      </ul>
      
    </>
  )
}

export default SideBar

