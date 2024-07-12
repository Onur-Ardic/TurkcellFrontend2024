"use client";
import React from "react";
import ToggleThemeButton from "@/components/DarkModeButton";
import AuthControl from "@/components/AccesControlButton";
import LanguageButton from "@/components/LanguageButton";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { BsXLg, BsPersonCircle, BsCart2, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const localeFromURL = pathname ? pathname.split("/")[1] : "tr";
  const locale = localeFromURL || "tr";

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value.trim();
    if (searchQuery) {
      router.push(`/${locale}/productPage?search=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="navBarMessage bg-dark text-white p-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-center">
              <span>{t("navbarTitle")}</span>
              <a href="#" className="text-white ms-2 text-decoration-underline">
                {t("shopNow")}
              </a>
            </div>
            <div className="col-auto">
              <BsXLg className="xIcon" />
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
        } `}
      >
        <div className="container">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarShop"
            aria-controls="navbarShop"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <Link
            className="navbar-brand font-integral fw-bold fs-4 d-flex align-items-center h-100"
            href={`/${locale}/`}
          >
            SHOP.CO
          </Link>

          <div
            className={`collapse navbar-collapse ${
              darkMode ? " bg-dark" : " bg-white"
            } py-3`}
            id="navbarShop"
          >
            <button
              type="button"
              className="btn-close col-lg-0 col-md-0 d-inline-block d-lg-none"
              data-bs-target="#navbarShop"
              onClick={() =>
                document.getElementById("navbarShop").classList.remove("show")
              }
              data-bs-dismiss="collapse"
              aria-label="Close"
            ></button>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("shopping")}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      {t("discount")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t("anotherTransaction")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t("anotherThing")}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("discount")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("NewArrival")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("Brands")}
                </a>
              </li>
            </ul>

            <form
              className="d-flex position-relative align-items-center"
              onSubmit={handleSearch}
            >
              <input
                className="form-control form-control-lg rounded-pill  bg-secondary border-0 pe-5 fs-5"
                type="search"
                placeholder={t("searchPlaceholder")}
                aria-label="Search"
                name="search"
              />
              <div className="searchIcon position-absolute ps-2">
                <BsSearch style={{ width: "24px", height: "24px" }} />
              </div>
            </form>
          </div>
          <div className="navbarIcons d-flex align-items-center ms-3 gap-2">
            <div className="col-lg-0 col-md-0 d-inline-block d-lg-none ">
              <BsSearch
                className="searchIconMobile"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <Link href={`/${locale}/shoppingBasket`}>
              <BsCart2 style={{ width: "24px", height: "24px" }} />
            </Link>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle pb-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsPersonCircle style={{ width: "24px", height: "24px" }} />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <AuthControl />
                <li>
                  <ToggleThemeButton />
                </li>
                <li>
                  <LanguageButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
