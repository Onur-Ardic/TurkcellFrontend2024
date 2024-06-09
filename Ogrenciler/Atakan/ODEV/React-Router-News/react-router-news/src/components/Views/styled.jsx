import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Card = styled.div`
  width: 325px;
  height: 575px;
  &:hover {
    background-color: #d0d3d4;
  }
`;

export const AccordionWrapper = styled.div`
  padding: 1.5rem 0rem;
`;
