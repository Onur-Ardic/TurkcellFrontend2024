import { Header, Nav } from "./styled";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Header className="bg-black text-white d-flex justify-content-center">
        <div className="py-2">
          <h6>Sign up and get 20% off to your first order. Sign Up Now</h6>
        </div>
      </Header>
      <Nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" href="/homepage">
            SHOP.CO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  href={"/categorypage/casual"}
                  className="text-decoration-none">
                  <p
                    className="nav-link dropdown-toggle  mt-3 "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Shop
                  </p>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brands
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <div className="input-group me-3">
              <span className="input-group-text" id="basic-addon1">
                <FiSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="d-flex gap-3">
              <Link href={"cart"}>
                <SlBasket className="fs-3 text-black" />
              </Link>
              <Link href={`/accountlogin`}>
                <CgProfile className="fs-3 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
