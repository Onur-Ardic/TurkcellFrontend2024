import { NavLink } from "react-router-dom";

function Navbar({ selectedLanguage, setSelectedLanguage }) {
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 ">
        <div className="container ">
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <NavLink to="/" className="navbar-brand ms-5" aria-current="page">
                <h4 className="text-header"> React News</h4>
              </NavLink>
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  <p className="text-header fw-semibold">Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/saglik" className="nav-link">
                  <p className="text-header fw-semibold">Health</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/spor" className="nav-link">
                  <p className="text-header fw-semibold">Sport</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ekonomi" className="nav-link">
                  <p className="text-header fw-semibold">Economy</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teknoloji" className="nav-link">
                  <p className="text-header fw-semibold">Technology</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bilim" className="nav-link">
                  <p className="text-header fw-semibold">Science</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/eglence" className="nav-link">
                  <p className="text-header fw-semibold">Entertainment</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <select
                  className="form-select"
                  aria-label="select for the news language"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  style={{ width: "100px" }}
                >
                  <option value="tr" className="text-header fw-semibold">
                    TR
                  </option>
                  <option value="us" className="text-header fw-semibold">
                    EN
                  </option>
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
