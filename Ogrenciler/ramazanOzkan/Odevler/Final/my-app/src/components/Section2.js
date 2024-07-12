"use client";
import React from "react";
import styled from "styled-components";

const SectionTwo = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  img {
    max-width: 100px;
    flex: 1 1 20%;

    @media (max-width: 768px) {
      flex: 1 1 40%;
      max-width: 80px;
    }

    @media (max-width: 480px) {
      flex: 1 1 100%;
      max-width: 60px;
    }
  }
`;

const Section2 = () => {
  return (
    <SectionTwo>
      <Container>
        <img src="img/versace.png" alt="Versace" />
        <img src="img/zara.png" alt="Zara" />
        <img src="img/gucci.png" alt="Gucci" />
        <img src="img/prada.png" alt="Prada" />
        <img src="img/calvin.png" alt="Calvin Klein" />
      </Container>
    </SectionTwo>
  );
};

export default Section2;
