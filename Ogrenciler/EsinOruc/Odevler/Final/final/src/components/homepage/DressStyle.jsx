import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const DressStyle = () => {
  const t = useTranslations("dressStyle");

  return (
    <>
      <section className="dress-style my-5">
        <div className="container bg-secondary p-5">
          <div className="content p-5">
            <h2 className="font-integral fw-bold text-dark text-center pb-5">
              {t("title")}
            </h2>
            <div className="row d-flex justify-content-between">
              <div className="card col-lg-5 col-md-5 col-sm-12 mb-3 border-0 bg-transparent">
                <div className="style-card casual ">
                  <p className="text-capitalize fs-3 text-dark fw-bold p-3">
                    {t("casual")}
                  </p>
                </div>
              </div>
              <div className="card  col-lg-7 col-md-7 col-sm-12 mb-3 border-0 bg-transparent">
                <div className="style-card formal">
                  <p className="text-capitalize fs-3 text-dark fw-bold p-3">
                    {t("formal")}
                  </p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="card col-lg-7 col-md-7 col-sm-12 mb-3 border-0 bg-transparent">
                <div className="style-card party ">
                  <p className="text-capitalize fs-3 text-dark fw-bold p-3">
                    {t("party")}
                  </p>
                </div>
              </div>
              <div className="card  col-lg-5 col-md-5 col-sm-12 mb-3 border-0 bg-transparent">
                <div className="style-card gym">
                  <p className="text-capitalize fs-3 text-dark fw-bold p-3">
                    {t("gym")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DressStyle;
