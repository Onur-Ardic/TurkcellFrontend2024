import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  color: ${(props) => (props.$primary ? "#BF4F74" : "white")};

  font-size: 1em;
  padding: 0.5em 4em;
  border: 2px solid #bf4f74;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.6s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background-color: ${(props) => (props.$primary ? "#BF4F74" : "white")};
    color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
    filter: brightness(1.1);
  }
`;

export const Input = styled.input`
  font-size: 1em;
  margin: 1em;
  border-radius: 5px;
  outline: none;
  padding: 0.5em 1em;
  max-width: 300px;
  border: 1px solid #bf4f74;
`;

export const Card = styled.div`
  perspective: 2000px;
  width: 300px;
  height: 250px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  backface-visibility: hidden;
  padding: 25px;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const CardSideFront = styled(CardSide)`
  background-image: var(--bgColorFront);
`;

export const CardSideBack = styled(CardSide)`
  background-image: var(--bgColorBack);
  transform: rotateY(180deg);
`;

export const CardContainer = styled.div`
  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
`;

export const RepoButton = styled(Button)`
  margin-top: 10px;
  padding: 0.5em 1.5em;
  font-size: 0.8em;
`;
