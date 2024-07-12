import { Basket } from "@/components/basket";
import Link from "next/link";
import React from "react";

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="col-5 d-flex">
          <Link href="/">
            <h4 className="navbar-brand fs-4">SHOP.CO</h4>
          </Link>
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
          <div
            className="collapse navbar-collapse col-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/shop" className="dropdown-item">
                      Shop
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Arrivals
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Brands
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <form className="d-flex position-relative" role="search">
            <img
              className="position-absolute search-button"
              src="/icons/search.svg"
              alt="Search Button"
            />
            <input
              className="w-100 search-input form-control me-2 border-0"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </form>
        </div>
        <div className="col-1 d-flex justify-content-end">
          <Link href="/basket-page">
            <div className="d-flex justify-content-center align-items-center mx-3 position-relative">
              <Basket />
            </div>
          </Link>
          <Link href="/register">
            <img src="/icons/user.svg" alt="User" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
