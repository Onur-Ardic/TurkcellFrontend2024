"use client";
import React from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const FooterContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const FooterLink = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FooterLinkText = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLinkHeader = styled.a`
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
`;

const FooterCopyright = styled.p`
  margin: 20px 0;
  color: #999;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Card = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  color: #000;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #6c757d;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Icon = styled.a`
  font-size: 1.5em;
  color: #6c757d;

  &:hover {
    color: #000;
  }
`;

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <FooterContainer>
      <FooterContent className="container">
        <Card>
          <Title>SHOP.CO</Title>
          <Text> </Text>
          <Icons>
            <Icon href="#">
              <i className="fab fa-twitter"></i>
            </Icon>
            <Icon href="#">
              <i className="fab fa-facebook-f"></i>
            </Icon>
            <Icon href="#">
              <i className="fab fa-instagram"></i>
            </Icon>
            <Icon href="#">
              <i className="fab fa-github"></i>
            </Icon>
          </Icons>
        </Card>
        <FooterLinks>
          <FooterLink>
            <FooterLinkHeader href="#">{t("subTitle1")}</FooterLinkHeader>
            <FooterLinkText href="#">{t("about")}</FooterLinkText>
            <FooterLinkText href="#">{t("features")}</FooterLinkText>
            <FooterLinkText href="#">{t("works")}</FooterLinkText>
            <FooterLinkText href="#">{t("career")}</FooterLinkText>
          </FooterLink>
          <FooterLink>
            <FooterLinkHeader href="#">{t("subTitle2")}</FooterLinkHeader>
            <FooterLinkText href="#">{t("customerSupport")}</FooterLinkText>
            <FooterLinkText href="#">{t("deliveryDetails")}</FooterLinkText>
            <FooterLinkText href="#">{t("termsConditions")}</FooterLinkText>
            <FooterLinkText href="#">{t("privacyPolicy")}</FooterLinkText>
          </FooterLink>
          <FooterLink>
            <FooterLinkHeader href="#">{t("subTitle3")}</FooterLinkHeader>
            <FooterLinkText href="#">{t("account")}</FooterLinkText>
            <FooterLinkText href="#">{t("manageDeliveries")}</FooterLinkText>
            <FooterLinkText href="#">{t("orders")}</FooterLinkText>
            <FooterLinkText href="#">{t("payments")}</FooterLinkText>
          </FooterLink>
          <FooterLink>
            <FooterLinkHeader href="#">{t("subTitle4")}</FooterLinkHeader>
            <FooterLinkText href="#">{t("freeEbooks")}</FooterLinkText>
            <FooterLinkText href="#">{t("developmentTutorial")}</FooterLinkText>
            <FooterLinkText href="#">{t("howToBlog")}</FooterLinkText>
            <FooterLinkText href="#">{t("youtubePlaylist")}</FooterLinkText>
          </FooterLink>
        </FooterLinks>
      </FooterContent>
      <hr />
      <FooterCopyright>
        &copy; 2000-2023 Shop.co, All Rights Reserved
      </FooterCopyright>
    </FooterContainer>
  );
}
