"use client";

import styled from "styled-components";

export const ReviewsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    width: 30%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 80%;
      font-size: 18px;
    }
  }
`;
export const ReviewItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const ReviewItem = styled.div`
  margin-bottom: 10px;
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid gray;
  h4 {
    font-weight: bold;
  }
  p {
    color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 768px) {
    padding: 14px 16px;
    width: 90%;
  }
`;

export const ViewButton = styled.button`
  padding: 16px 54px;
  gap: 12px;
  border-radius: 62px;
  border: 1px solid gray;
  width: 15%;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 20px;
  }
`;
export const SortOptions = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SortButton = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 62px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    padding: 6px 12px;
    margin-right: 5px;
    font-size: 14px;
  }
`;