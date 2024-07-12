"use client";
import React from "react";
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ToggleThemeButton from "@/components/DarkModeButton";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const t = useTranslations("footer");

  return (
    <>
      <footer
        className={`bd-footer mt-5  ${
          darkMode ? " bg-dark" : "bg-body-tertiary"
        } `}
      >
        <div className="container subscribe bg-black rounded-5 px-5 p-4 mt-5 border border-2">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <h3 className="subscribe-text font-integral fw-bold text-white ">
                {t("formTitle")}
              </h3>
            </div>
            <div className="col-md-5 col-sm-12 pt-2">
              <form action="">
                <div className="input-group mb-2">
                  <input
                    className="form-control rounded-pill bg-secondary border-0 py-2 d-block"
                    type="search"
                    placeholder={t("inputPlaceholder")}
                    aria-label="Search"
                  />
                </div>
                <button
                  class="btn btn-light rounded-pill btn-light  border-0 py-2  w-100"
                  type="button"
                  id="mail"
                >
                  {t("formButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-wrapper"></div>
        <div className="container py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row pb-2 mb-4 t border-bottom border-emphasis">
            <div className="col-lg-3 mb-3">
              <a
                className={`d-inline-flex align-items-center mb-2  text-decoration-none ${
                  darkMode
                    ? "text-body-white text-white"
                    : "text-body-dark text-dark"
                } `}
                href="/"
                aria-label="Shop.co"
              >
                <span className="font-integral fw-bold fs-4 mb-4">SHOP.CO</span>
              </a>
              <ul className="list-unstyled small fw-200 text-body-secondary">
                <li>
                  <p
                    className={`mb-2 ${
                      darkMode
                        ? "text-body-white text-white"
                        : "text-body-secondary text-secondary"
                    } `}
                  >
                    {t("title")}
                  </p>
                </li>
              </ul>
              <div className="social-media">
                <ul className="list-unstyled social d-flex">
                  <li className="me-2 bg-white rounded-circle border border-1">
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                  <li className="me-2 bg-dark rounded-circle">
                    <a href="#">
                      <BsFacebook className="text-white" />
                    </a>
                  </li>
                  <li className="me-2 bg-white rounded-circle border border-1">
                    <a href="#">
                      <BsInstagram />
                    </a>
                  </li>
                  <li className="me-2 bg-white rounded-circle border border-1">
                    <a href="#">
                      <BsGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <p
                className={`mb-4 text-uppercase fw-bold  ${
                  darkMode ? " text-white" : " text-dark"
                } `}
              >
                {t("company")}
              </p>
              <ul className="list-unstyled fw-200 text-body-secondary">
                <li
                  className={`mb-2 ${
                    darkMode
                      ? "text-body-white text-white"
                      : "text-body-dark text-dark"
                  } `}
                >
                  <a href="#"> {t("about")}</a>
                </li>
                <li
                  className={`mb-2 ${
                    darkMode
                      ? "text-body-white text-white"
                      : "text-body-dark text-dark"
                  } `}
                >
                  <a href="#"> {t("features")}</a>
                </li>
                <li
                  class={`mb-2 ${
                    darkMode
                      ? "text-body-white text-white"
                      : "text-body-dark text-dark"
                  } `}
                >
                  <a href="#"> {t("works")}</a>
                </li>
                <li
                  className={`mb-2 ${
                    darkMode
                      ? "text-body-white text-white"
                      : "text-body-secondary text-secondary"
                  } `}
                >
                  <a href="#"> {t("career")}</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <p
                className={`mb-4 text-uppercase fw-bold   ${
                  darkMode ? " text-white" : " text-dark"
                } `}
              >
                {t("help")}
              </p>
              <ul className="list-unstyled fw-200 text-body-secondary">
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("customerSupport")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("deliveryDetails")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("termConditions")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("PrivacyPolicy")}</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <p
                className={`mb-4 text-uppercase fw-bold   ${
                  darkMode ? " text-white" : " text-dark"
                } `}
              >
                {t("faq")}
              </p>
              <ul className="list-unstyled fw-200 text-body-secondary">
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("account")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("manageDeliveries")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("orders")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("payments")}</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <p
                className={`mb-4 text-uppercase fw-bold   ${
                  darkMode ? " text-white" : " text-dark"
                } `}
              >
                {t("resources")}
              </p>
              <ul className="list-unstyled fw-200 text-body-secondary">
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("freeeBooks")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("developmentTutorial")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("howtoBlog")}</a>
                </li>
                <li
                  className={`mb-2  ${
                    darkMode ? " text-white" : " text-dark"
                  } `}
                >
                  <a href="#">{t("youtubePlaylist")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-8 footer-text mb-">
              <p className="copyright mb-0">{t("copyright")}</p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-right">
              <ul className="mb-0 list-unstyled d-flex justify-content-end payload">
                <li className="me-2 bg-white border-1 rounded-1">
                  <Image
                    className="payment-icon"
                    src="/assets/img/visa.svg"
                    alt="Visa"
                    width={50}
                    height={30}
                  />
                </li>
                <li className="me-2 bg-white rounded-1">
                  <Image
                    className="payment-icon"
                    src="/assets/img/mastercard.svg"
                    alt="MasterCard"
                    width={50}
                    height={30}
                  />
                </li>
                <li className="me-2 bg-white rounded-1">
                  <Image
                    className="payment-icon"
                    src="/assets/img/paypal.svg"
                    alt="PayPal"
                    width={50}
                    height={30}
                  />
                </li>
                <li className="me-2 bg-white rounded-1">
                  <Image
                    className="payment-icon"
                    src="/assets/img/applepay.svg"
                    alt="Apple Pay"
                    width={50}
                    height={30}
                  />
                </li>
                <li className="me-2 bg-white rounded-1">
                  <Image
                    className="payment-icon"
                    src="/assets/img/gpay.svg"
                    alt="Google Pay"
                    width={50}
                    height={30}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
