import styled from "styled-components";

export const Card = styled.div`
  width: 105px;
  height: 105px;
  background-color: #ceedc7;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 760px) {
    width: 55px;
    height: 55px;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  &.front {
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
  }

  .flipped & {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }
`;

export const BackImage = styled(Image)`
  width: 100%;
  height: 100%;
  &.back {
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
  }

  .flipped & {
    transform: rotateY(90deg);
    transition-delay: 0s;
  }
`;
