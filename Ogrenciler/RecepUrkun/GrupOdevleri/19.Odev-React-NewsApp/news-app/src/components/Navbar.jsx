import { NavLink } from "react-router-dom";

function Navbar({ selectedLanguage, setSelectedLanguage }) {
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            ENR
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/saglik" className="nav-link">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/spor" className="nav-link">
                  Sport
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ekonomi" className="nav-link">
                  Economy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teknoloji" className="nav-link">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bilim" className="nav-link">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/eglence" className="nav-link">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <select
                  className="form-select"
                  aria-label="select for the news language"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                >
                  <option value="tr">Tr</option>
                  <option value="us">En</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
