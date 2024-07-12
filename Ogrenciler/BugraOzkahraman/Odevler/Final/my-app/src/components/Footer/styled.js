"use client";

import styled from "styled-components";

export const FooterContainer = styled.div`
  .footer {
    .footerTop {
      width: 100%;
      height: auto;
      margin-left: 0;
      margin-bottom: -50px;

      @media (min-width: 992px) {
        width: 1240px;
        margin-left: 100px;
        margin-bottom: -100px;
      }
    }
    .footerLower {
      background-color: #f0f0f0;
      width: 100%;
      height: auto;
      padding: 20px;

      @media (min-width: 768px) {
        height: 500px;
        padding: 40px;
      }
    }
    .footerBottom {
      width: 100%;
      height: auto;
      .paymentMethods {
        i {
          font-size: 24px;
          margin: 0 10px;
        }
      }
    }
  }
`;
