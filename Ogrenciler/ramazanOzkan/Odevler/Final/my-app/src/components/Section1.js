"use client";
import React from "react";
import styled from "styled-components";

import { useTranslations } from "next-intl";

// İmport ettiğiniz şekilde düzenleme yapınız
const SectionOne = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 80vh;
  background-image: url("/img/sectionOne.png"); /* Doğru yol burada bulunmaktadır */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; /* İstediğiniz şekilde ayarlayabilirsiniz */
`;

const Section1 = () => {
  const t = useTranslations("Section1");
  return (
    <SectionOne className=" py-5 d-flex">
      <div className="container">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">{t("title1")}</h1>
          <p className="lead">{t("title2")}</p>
          <button className="btn btn-dark btn-lg my-3 rounded-pill">
            {t("bannerText1")}
          </button>
          <div className="row mt-5">
            <div className="col">
              <h2>200+</h2>
              <p>{t("bannerText2")}</p>
            </div>
            <div className="col">
              <h2>2,000+</h2>
              <p>{t("bannerText3")}</p>
            </div>
            <div className="col">
              <h2>30,000+</h2>
              <p>{t("bannerText4")}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionOne>
  );
};

export default Section1;
