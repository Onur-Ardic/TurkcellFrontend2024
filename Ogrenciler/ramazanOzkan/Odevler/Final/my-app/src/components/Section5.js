"use client";
import React from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const StyledSection = styled.section`
  background-color: white;
  padding: 60px 0;
  text-align: center;
`;

const StyledBanner = styled.div`
  background-color: #000000;
  color: #fff;
  padding: 30px;
  text-transform: uppercase;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  width: 100%; /* Genişlik ayarı */
  max-width: 750px; /* Maksimum genişlik ayarı */

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  gap: 10px;
  width: 100%; /* Genişlik ayarı */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  width: 100%; /* Genişlik ayarı */
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px; /* Rounded-pill style */
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const StyledButton = styled.button`
  width: 100%; /* Genişlik ayarı */
  max-width: 300px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px; /* Rounded-pill style */
  transition: background-color 0.3s;

  &:hover {
    background-color: grey;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const SectionFive = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };
  const t = useTranslations("Section5");

  return (
    <StyledSection>
      <div className="container">
        <div className="row">
          <div className="col">
            <StyledBanner>
              <StyledHeading>{t("title")}</StyledHeading>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                  type="email"
                  placeholder={t("placeholder")}
                  required
                />
                <StyledButton type="submit">{t("button")}</StyledButton>
              </StyledForm>
            </StyledBanner>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default SectionFive;
