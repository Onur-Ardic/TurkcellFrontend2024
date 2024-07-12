"use client"

import { useState } from "react";
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoSearch } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { SearchContainer, SearchInput ,
  Logo
 } from "./Navbar.style";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
    const { t, i18n } = useTranslation("navbar");
    const [isInfoVisible, setIsInfoVisible] = useState(true);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
    }
  };

    const toggleInfoVisibility = () => {
      setIsInfoVisible(!isInfoVisible);
    };
     const changeLanguage = (lng) => {
       i18n.changeLanguage(lng);
     };

  return (
    <>
      <div
        className={`bg-dark text-white py-1 text-center ${
          isInfoVisible ? "" : "d-none"
        }`}>
        <div className="container">
          Sign up and get 20% off to your first order.
          <a
            href="/sign-up"
            className="text-white text-decoration-underline px-2">
            Sign Up Now
          </a>
          <span className="ml-auto">
            <IoClose className="text-white" onClick={toggleInfoVisibility} />
          </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <Link href={"/"}>
            <Logo>
              <a className="navbar-brand " href="#">
                SHOP.CO
              </a>
            </Logo>
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
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <Link href={"/category/gym"}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("shop")} <IoIosArrowDown />
                  </a>
                </li>
              </Link>

              <Link href={"/category/casual"}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("on_sale")}
                  </a>
                </li>
              </Link>

              <Link href={"/category/formal"}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t("new_arrivals")}
                  </a>
                </li>
              </Link>
              <Link href={"/category/party"}>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">
                    {t("brands")}
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <SearchContainer className="ms-5">
                  <IoSearch />
                  <SearchInput
                    type="text"
                    placeholder="Search for products..."
                  />
                </SearchContainer>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/card">
                      <FaShoppingCart />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/user">
                      <FaUser />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={handleSignOut}>
                      <FaSignOutAlt />
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/sign-in">
                      {t("sign_in")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/sign-up">
                      {t("sign_up")}
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="d-flex ms-auto">
            <button
              onClick={() => changeLanguage("en")}
              className="btn btn-outline-dark btn-sm me-1">
              EN
            </button>
            <button
              onClick={() => changeLanguage("tr")}
              className="btn btn-outline-dark btn-sm">
              TR
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
