import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 120px;
  perspective: 1000px;
  opacity: ${({ matched }) => (matched ? 0.5 : 1)};
`;
export const TitleImage = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
`;

export const CardFront = styled(CardFace)`
  background: url("back.jpg") no-repeat center/cover;
`;

export const CardBack = styled(CardFace)`
  background: url(${({ src }) => src}) no-repeat center/cover;
  transform: rotateY(180deg);
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  padding: 90px;
  justify-items: center;
`;
export const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ef90db;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #b342e8;
  }
`;
