import styled from "styled-components";

export const Card = styled.a`
  width: 300px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;
export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;
export const Author = styled.h5`
  font-size: 0.8rem;
  color: #999;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
