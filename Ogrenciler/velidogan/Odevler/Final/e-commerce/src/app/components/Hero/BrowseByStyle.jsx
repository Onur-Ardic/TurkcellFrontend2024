import React from "react";
import "@/app/styles/components/BrowseByStyle.scss";
import Image from "next/image";
import casual from "../../../../public/Style/Casual.png";
import formal from "../../../../public/Style/Formal.png";
import party from "../../../../public/Style/Party.png";
import gym from "../../../../public/Style/Gym.png";
import { useTranslation } from "@/app/i18n";

const BrowseByStyle = async ({lng}) => {
  const { t } = await useTranslation(lng)
  return (
    <div className="inner-container">
      <div className="browse-by-style">
        <h2 className="title">{t("browseByStyle")}</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="style-card">
              <Image src={casual} alt="Casual" className="style-image" />
              <p className="style-name">{t("casual")}</p>
            </div>
          </div>
          <div className="col-md-7">
            {" "}
            <div className="style-card">
              <Image src={formal} alt="Formal" className="style-image" />
              <p className="style-name">{t("formal")}</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-7">
            <div className="style-card">
              <Image src={party} alt="Party" className="style-image" />
              <p className="style-name">{t("party")}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="style-card">
              <Image src={gym} alt="Gym" className="style-image" />
              <p className="style-name">{t("gym")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
