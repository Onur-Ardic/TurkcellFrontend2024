"use client";

import React from "react";
import "@/styles/css/main.css";
import { FaTag, FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const OrderSummary = ({ subtotal, discount, deliveryFee, total }) => {
  const t = useTranslations("boxes");
  return (
    <div className="orderSummary p-4 rounded-4 w-100 mx-auto border mb-5">
      <h5 className="fw-bold font-satoshi">{t("orderSummary")}</h5>
      <div className="summaryItem d-flex justify-content-between mt-3">
        <span>{t("Subtotal")}</span>
        <span className="fw-bold">${subtotal.toFixed(2)}</span>
      </div>
      <div className="summaryItem d-flex justify-content-between mt-3">
        <span>{t("Discount")}</span>
        <span className="text-danger fw-bold">-${discount.toFixed(2)}</span>
      </div>
      <div className="summaryItem d-flex justify-content-between mt-3">
        <span>{t("deliveryFee")}</span>
        <span className="fw-bold">${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="summaryItem d-flex justify-content-between mt-3">
        <span>{t("total")}</span>
        <span className="fw-bold">${total.toFixed(2)}</span>
      </div>

      <div className="promo my-3">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex position-relative align-items-center">
              <input
                className="form-control form-control-sm rounded-pill  py-2 bg-secondary border-0 ps-5 "
                type="add"
                placeholder={t("inputPlaceholder")}
                aria-label="add"
              />
              <div className=" position-absolute ps-3">
                <FaTag className="promo-icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <button
              className="btn rounded-pill btn-light  border-0 py-2  w-100 bg-dark text-white w-100"
              type="button"
              id="mail"
            >
              {t("apply")}
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-2 fw-normal align-items-center w-100 btn btn-dark  rounded-pill py-2">
        <span className="ms-4"> {t("checkout")}</span>
        <FaArrowRight className="me-4" />
      </div>
    </div>
  );
};

export default OrderSummary;
