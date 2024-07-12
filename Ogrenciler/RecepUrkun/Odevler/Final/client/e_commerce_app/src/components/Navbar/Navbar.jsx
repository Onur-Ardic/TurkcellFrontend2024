"use client";
import React, { useState } from "react";
import "./style.css";
import { NavbarSearch, ShopCoTitle } from "./Styled";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";
import ThemeToggleButton from "../ThemeToggleButton";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const activeUrl = usePathname();
  const activeLang = activeUrl.split("/")[1];

  const handleSignUp = async () => {
    router.push(`/${activeLang}/signup`);
  };

  const goToBasket = async () => {
    router.push(`/${activeLang}/cart`);
  };

  return (
    <nav className="navbar navbar-expand-lg mt-4">
      <div className="container">
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
        <Link href="/" className="navbar-brand pt-0 me-5">
          <ShopCoTitle>{t("SiteName")}</ShopCoTitle>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 w-75">
            <li className="nav-item dropdown fw-bolder me-3">
              <Link
                className="nav-link px-0 py-3 dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h6>{t("Shop")}</h6>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Casual
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Gym
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Party
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link px-0 py-3" aria-current="page" href="#">
                <h6> {t("OnSale")}</h6>
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link px-0 py-3" href="#">
                <h6>{t("NewArrivals")}</h6>
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link px-0 py-3" href="#">
                <h6>{t("Brands")}</h6>
              </Link>
            </li>
          </ul>
          <form className="d-flex w-100 justify-content-end" role="search">
            <NavbarSearch
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="d-flex align-items-center">
          <Link className="navbar-brand fw-bold" href={`/${activeLang}/cart`}>
            <SlBasket />
          </Link>
          <Link className="navbar-brand fw-bold" href={`/${activeLang}/signup`}>
            <CgProfile size={16} />
          </Link>
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
