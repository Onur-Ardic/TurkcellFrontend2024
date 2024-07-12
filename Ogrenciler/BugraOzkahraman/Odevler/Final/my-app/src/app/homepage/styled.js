"use client";

import styled from "styled-components";

export const Content = styled.div`
  height: 663px;
  background-color: #f2f0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .left-content {
    width: 80%;
    margin-top: 2rem;
    text-align: center;

    .fw-bold {
      font-size: 32px;
    }

    .btn {
      width: 210px;
      height: 52px;
      padding: 16px 54px;
      gap: 12px;
      border-radius: 62px;
    }

    .d-flex {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 2rem;

      h1 {
        font-size: 24px;
        font-weight: 700;
      }

      p {
        font-size: 14px;
      }
    }
  }

  .right-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    width: 100%;
    margin-top: 2rem;
  }

  .right-content img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;

    .left-content {
      width: 597px;
      margin-top: 5rem;
      text-align: left;

      .fw-bold {
        font-size: 64px;
      }

      .d-flex {
        justify-content: flex-start;

        h1 {
          font-size: 40px;
        }
      }
    }

    .right-content {
      width: 50%;
      margin-top: 0;
    }

    .right-content img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;
