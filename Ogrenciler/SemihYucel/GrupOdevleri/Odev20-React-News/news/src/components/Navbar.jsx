import React from "react";
import { NavLink } from "react-router-dom";

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
      {/* <div>
        <NavLink to="/" onClick={topNews}>
          Home
        </NavLink>
        {categories.map((value, index) => (
          <NavLink key={index} to={`/category/${value}/`}>
            {value}
          </NavLink>
        ))}
      </div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="arama giriniz"
        value={query}
      />
      <button onClick={fetchData}>aramayı getir</button> */}

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {categories.map((value, index) => (
                <li key={index} className="nav-item">
                  <NavLink className="nav-link" to={`/category/${value}/`}>
                    {value}
                  </NavLink>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                value={query}
                type="search"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
              />
              <button
                onClick={fetchData}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
