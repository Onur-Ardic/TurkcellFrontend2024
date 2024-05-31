const Navbar = ({ setCity, handleSubmit, city }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-sm">
          <a className="navbar-brand fs-3">wEEAther</a>
          <form
            className="d-flex col-3"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
