"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const TopBanner = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 0.9em;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`;

const TopBanner1 = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };
  const t = useTranslations("TopBanner");
  return (
    <>
      {showBanner && (
        <TopBanner>
          {t("text")}{" "}
          <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>
            {t("linktit")}
          </a>
          <CloseButton onClick={handleCloseBanner}>&times;</CloseButton>
        </TopBanner>
      )}
    </>
  );
};

export default TopBanner1;
