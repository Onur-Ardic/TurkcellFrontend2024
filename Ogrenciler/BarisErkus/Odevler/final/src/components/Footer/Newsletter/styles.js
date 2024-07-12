"use client";
import { RiMailCheckLine } from "react-icons/ri";
import styled from "styled-components";

export const NewsletterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 40px;
  position: relative;
  bottom: 100px;
  border-radius: 20px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
  @media (max-width: 576px) {
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const Section = styled.div`
  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  @media (min-width: 992px) {
    text-align: right;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 50px;
  border: none;
  width: 100%;
`;

export const InputIcon = styled(RiMailCheckLine)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: black;
`;

export const SubscribeButton = styled.button`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 50px;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #343a40;
    color: white;
  }
`;
