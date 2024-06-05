import NavLink from "./NavLink";
import NavbarBrand from "./NavbarBrand";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavbarBrand content="Akkologlu" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarPortfolio"
          aria-controls="navbarPortfolio"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarPortfolio">
          <ul className="navbar-nav ms-auto gap-4">
            <NavLink text="Home" href="#" />
            <NavLink text="Projects" href="#projectsHeading" />
            <NavLink text="Articles" href="#articlesHeading" />
            <NavLink text="About Me" href="#" />
            <NavLink text="Contact" href="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
