const NavLink = ({ text, href }) => {
  return (
    <li className="nav-item">
      <a className="nav-link fw-bolder" href={href}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
