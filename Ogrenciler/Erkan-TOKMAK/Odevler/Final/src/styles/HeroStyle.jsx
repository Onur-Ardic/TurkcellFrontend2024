"use client"
import styled from 'styled-components';

export const HeroTitle = styled.h1`
color: #000;
leading-trim: both;
text-edge: cap;
font-family: "Integral CF Bold";
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 64px;
@media screen and (max-width: 768px) {
  font-size: 36px;
  line-height: 36px;
}
`;

export const HeroText = styled.p`
color: rgba(0, 0, 0, 0.60);
leading-trim: both;
text-edge: cap;
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px;
@media screen and (max-width: 768px) {
  font-size: 14px;
  line-height: 20px;
}
`;

export const HeroButton = styled.button`
border: none;
border-radius: 62px;
background: #000;
padding: 16px 54px;
gap: 12px;
color: #FFF;
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const HeroSub = styled.p`
color: #000;
font-family: 'Satoshi', sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media screen and (max-width: 768px) {
  font-size: 24px;
}
`;

export const HeroSubText = styled.p`
color: rgba(0, 0, 0, 0.60);
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px;
@media screen and (max-width: 768px) {
  font-size: 12px;
}
`;

export const StyledLandingMobile = styled.div`
  height: 448px;
`;