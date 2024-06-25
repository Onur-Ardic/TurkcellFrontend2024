import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <a
        className="navbar-brand mx-auto fs-1 d-block w-100 text-center pt-3"
        href="#"
      >
        TECH
        <strong>CRUNCH</strong>
      </a>
      <small className="d-block mx-auto mb-2">
        Tech News, Fresh and Crunchy
      </small>
    </nav>
  );
};

export default Navbar;
