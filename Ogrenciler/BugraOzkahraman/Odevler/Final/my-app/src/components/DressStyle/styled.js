"use client";
import styled from "styled-components";

export const DressStyleContainer = styled.div`
  background-color: #f0f0f0;
  width: 1240px;
  height: 866px;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;

  img {
    display: block;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    object-fit: cover;
  }

  .label {
    position: absolute;
    top: 10px;
    left: 10px;

    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
