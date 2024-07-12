"use client";

import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-family: IntegralCF;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  @media (max-width: 390px) {
    padding: 20px;
  }
`;

export const Comments = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CommentCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  img {
    width: 138px;
  }

  p:first-child {
    font-weight: bold;
    margin-top: 10px;
  }

  @media (max-width: 390px) {
    max-width: 100%;
  }
`;

export const CommentAuthor = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
`;

export const CommentContent = styled.p`
  color: rgba(0, 0, 0, 0.6);
  margin: 10px 0;
`;

export const CustomersTitleTop = styled.p`
  display: flex;
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const PrevButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
