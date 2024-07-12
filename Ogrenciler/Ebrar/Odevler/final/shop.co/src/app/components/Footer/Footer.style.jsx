"use client";

import styled from "styled-components";

export const BlackBar = styled.div`
  background-color: #000;
  color: #fff;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 36px 64px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: relative;
  top: 95px;

  @media (max-width: 768) {
    padding: 24px;
    height: auto;
  }

  p {
    font-family: IntegralCF;
    font-size: 40px;
    font-weight: bold;

    @media (max-width: 768) {
      font-size: 28px;
    }
  }

  input {
    padding: 12px 16px;
    border-radius: 62px;
    margin-top: 10px;
    width: 100%;

    @media (max-width: 768) {
      width: auto;
    }
  }

  button {
    padding: 12px 40px;
    border-radius: 62px;
    margin-top: 10px;

    @media (max-width: 768) {
      width: 100%;
    }
  }
`;
