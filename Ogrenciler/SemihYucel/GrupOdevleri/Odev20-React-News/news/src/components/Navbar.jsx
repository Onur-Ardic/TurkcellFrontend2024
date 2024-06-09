import { NavLink } from "react-router-dom";
import { NavButton, NavInput } from "../styled";

const Navbar = ({ query, setQuery, fetchData, topNews }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/" onClick={topNews}>
            React News
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              {categories.map((value, index) => (
                <li key={index} className="nav-item">
                  <NavLink className="nav-link" to={`/category/${value}/`}>
                    {value.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <NavInput
                className=" me-2"
                value={query}
                type="search"
                placeholder="News..."
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
              />
              <NavButton onClick={fetchData} type="submit">
                Search
              </NavButton>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
