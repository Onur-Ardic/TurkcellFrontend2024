"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import casualImage from "../../public/img/product/casual.png";
import formalImage from "../../public/img/product/formal.png";
import partyImage from "../../public/img/product/party.png";
import gymImage from "../../public/img/product/gym.png";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const StyledCard = styled.div`
  position: relative;
  height: 300px;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const CardTitle = styled.h5`
  color: black;
  margin-top: 16px;
  margin-left: 16px;
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
`;
const SectionThree = styled.div`
  // background-color: #f0f0f0;
  //bg color çalışınca resimler kapanıyor.
`;

const BrowseByDressStyle = () => {
  const t = useTranslations("Section3");
  return (
    <SectionThree className="container my-5 ">
      <h2 className="text-center mb-4">{t("title")}</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <StyledCard>
            <ImageWrapper>
              <Image
                src={casualImage}
                alt="Casual"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <CardTitle>{t("subt1")}</CardTitle>
          </StyledCard>
        </div>
        <div className="col-md-8 mb-4">
          <StyledCard>
            <ImageWrapper>
              <Image
                src={formalImage}
                alt="Formal"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <CardTitle>{t("subt2")}</CardTitle>
          </StyledCard>
        </div>
        <div className="col-md-8 mb-4">
          <StyledCard>
            <ImageWrapper>
              <Image
                src={partyImage}
                alt="Party"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <CardTitle>{t("subt3")}</CardTitle>
          </StyledCard>
        </div>
        <div className="col-md-4 mb-4">
          <StyledCard>
            <ImageWrapper>
              <Image src={gymImage} alt="Gym" layout="fill" objectFit="cover" />
            </ImageWrapper>
            <CardTitle>{t("subt4")}</CardTitle>
          </StyledCard>
        </div>
      </div>
    </SectionThree>
  );
};

export default BrowseByDressStyle;
