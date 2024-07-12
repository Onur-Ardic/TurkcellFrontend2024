"use client";

import styled from "styled-components";

export const FilterContainer = styled.div`

`;
export const FiltersTitle = styled.div`
display:flex;
align-items: center;

`;
export const FiltersSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction:column;
  width: 295px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #ddd;
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-top: 10px;
    margin-left: 25%;
  }

  button{
    border:none;
  margin:10px;}
`;
export const FilterSection = styled.div`
  margin-bottom: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const FilterTitle = styled.h4`
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FilterOption = styled.div`
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceRange = styled.input`
  width: 100%;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background-color: #000; /* Sadece siyah arka plan */
    border-radius: 5px;
    border: none;
  }
  &::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background-color: #000; /* Sadece siyah arka plan */
    border-radius: 5px;
    border: none;
  }
  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;

    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px; /* Hizalama için gereken düzeltme */
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;

    border-radius: 50%;
    cursor: pointer;
    margin-top: -4px; /* Hizalama için gereken düzeltme */
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ColorOption = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const SizeOption = styled.button`
  padding: 5px 20px;

  border-radius: 62px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #f0f0f0;

  &:hover {
    background-color: black;
    color: white
  }

  @media (max-width: 768px) {
    padding: 8px 16px 8px 16px;
    border-radius: 50px;
    font-size: 14px;
  }
`;
