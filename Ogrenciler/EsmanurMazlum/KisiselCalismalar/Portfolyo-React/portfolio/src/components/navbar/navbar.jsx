
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="row w-100 d-flex justify-content-between">
            <div className="col-3 d-flex align-items-center">
              <a className="navbar-brand" href="#">Esmanur</a>
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
            </div>
            <div className="col-9">
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
