"use client";
import styled from "styled-components";

export const ProductInfoTitle = styled.h5`
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  font-family: "satoshi";
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const FilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 62px;
  border: 1px solid;
`;

export const SortButton = styled(FilterButton)`
  width: 120px;
  height: 48px;
`;

export const ReviewButton = styled.button`
  width: 166px;
  height: 48px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
  @media screen and (max-width: 425px) {
    width: 113px;
    height: 40px;
  }
`;

export const WriteAReview = styled.h6`
  font-size: 16px;
  line-height: 21.6px;
  font-weight: 500;
  font-family: "satoshi";
  @media screen and (max-width: 425px) {
    line-height: 16.2px;
    font-size: 12px;
  }
`;

export const LoadMore = styled.button`
  width: 230px;
  height: 52px;
  border-radius: 62px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 36px;
`;
