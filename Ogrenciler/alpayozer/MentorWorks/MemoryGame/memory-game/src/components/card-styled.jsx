import styled from "styled-components";

export const Card = styled.div`
  width: 120px;
  height: 120px;
  background-color: #ceedc7;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 10px;
`;

export const BackImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
