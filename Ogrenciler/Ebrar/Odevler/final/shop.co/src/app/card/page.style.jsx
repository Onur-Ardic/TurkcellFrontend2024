"use client"

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
   flex-direction: column;
  }
`;

export const CartContainer = styled.div`
  width: 60%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px;
    margin-right: 20px; 
  }
`;

export const CartTitle = styled.h1`
  text-align: left;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: IntegralCF;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: self-start;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  img {
 width: 125px;
height: 187px;

    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const CartItemDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;

  span {
    display: block;
  }
`;
export const CouponSection = styled.div`
  input {
    padding: 10px 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 62px;
  }
  button {
    background: black;
    color: white;
    padding: 0px 16px;

    border-radius: 62px;
  }

  @media (max-width: 396px) {
    flex-direction: column;

    input {
      margin-bottom: 10px;
    }
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

export const OrderSummary = styled.div`
  width: 35%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    width: 100%; 
   
  }
`;

export const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  span:first-child {
   color: rgba(0, 0, 0, 0.6);

  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
 
  margin-top: 20px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
`;

export const CheckoutButton = styled.button`
  

  padding: 16px 54px ;
  border-radius: 62px ;
  background:black;
  color:white;
 

  &:hover {
    background: white;
    color:black;
  }
`;
