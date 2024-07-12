"use client";

import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductImages = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-right: 0;
  }
`;

export const ProductThumbnail = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProductThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction:row;

    justify-content: center;
  }
`;
export const ProductMainImage = styled.img`
  width: 400px;
  height: 465px;
  margin-bottom: 20px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export const ProductName = styled.h2`
  font-size: 40px;
  font-weight: 700;
  font-family: IntegralCF;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const ProductPrice = styled.p`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProductRating = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin: 0 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 0px;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const QuantityAdjust = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 8px;
    margin: 0 5px;
    font-size: 16px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 5px;
  
      font-size: 14px;
    }
  }
`;

export const AddProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const AddToCartButton = styled.button`
  padding: 16px 54px;
  background-color: black;
  color: white;
  border-radius: 62px;

  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(240, 240, 240, 1);
    color: black;
  }
  @media (max-width: 768px) {
    width: 50%;
    padding: 10px 20px;
  }
`;
export const ColorCircle = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  margin-right: 8px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
export const SelectColor = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin: 0px 5px;
  @media (max-width: 768px) {
    text-align: left;
  }
`;
export const SelectSize = styled.div`
  font-size: 18px;
  border-bottom: 1px solid gray;
  padding: 15px 5px;

  color: rgba(0, 0, 0, 0.6);

  button {
    width: 30px;
    height: 30px;
    margin: 0px 5px;
    background-color: black;
    color: white;
    border-radius: 62px;
    border: none;

    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: rgba(240, 240, 240, 1);
  border-radius: 62px;
  padding: 5px 20px;
  align-items: center;
  button {
    font-size: 24px;
    color: gray;
    background: none;
    border: none;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const DiscountPrice = styled.p`
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const ReviewTitle = styled.p`
  font-size: 20px;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  width: 20%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;
export const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  background: none;
  border: none;
  p {
    font-size: 24px;
    font-weight: 700;
  }
  span {
    color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const ReviewButton = styled.button`
  padding: 10px 24px;
  border-radius: 62px;
  text-align: center;
  background-color: black;
  color: white;
  &:hover {
    background-color: rgba(240, 240, 240, 1);
    color: black;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const DiscountAmount = styled.p`
  font-size: 24px;
  margin-left: 10px;
  color: rgb(205, 205, 205);
  text-decoration: line-through;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const DiscountPercent = styled.b`
  margin-left: 5px;
  width: 45px;
  height: 33px;
  border: 1px solid red;
  border-radius: 20px;
  background-color: #ffeaea;
  font-size: 12px;
  padding: 5px 5px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px;
  }
`;
