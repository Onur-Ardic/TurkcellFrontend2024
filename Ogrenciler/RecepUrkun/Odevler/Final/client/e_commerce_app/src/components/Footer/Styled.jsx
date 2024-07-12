"use client";
import styled from "styled-components";

export const LatestOffer = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 45px;
  @media screen and (max-width: 425px) {
    font-size: 32px;
    line-height: 35px;
  }
`;

export const EmailInput = styled.input`
  border-radius: 62px;
  padding: 12px 16px;
  max-width: 349px;
  max-height: 48px;
`;

export const SubscribeButton = styled.button`
  border-radius: 62px;
  padding: 12px 16px;
  max-width: 349px;
  max-height: 46px;
`;

export const ShopCoTitle = styled.h3`
  font-size: 33.45px;
  line-height: 40.15px;
  font-weight: 700;
  color: #000;
  @media screen and (max-width: 425px) {
    font-size: 28.85px;
    line-height: 34.62px;
  }
`;

export const ShopCoInformation = styled.h5`
  margin-top: 25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #000;
  @media screen and (max-width: 425px) {
    line-height: 20px;
    margin-top: 14px;
  }
`;

export const BgUp = styled.div`
  transform: translateY(-90px);
`;

export const ShopCoBody = styled.div`
  margin-top: -50px;
`;

export const AllRightsReserved = styled.p`
  font-size: 14px;
  line-height: 18.9px;
  font-weight: 400;
  color: rgba(141, 141, 141, 0.6);
  text-align: center;
`;

export const FooterLinks = styled.div`
  color: #000;
  margin-bottom: 9px;
  cursor: pointer;
`;
