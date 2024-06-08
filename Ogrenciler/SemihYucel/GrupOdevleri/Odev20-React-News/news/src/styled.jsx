import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  overflow: hidden;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  h6 {
    font-size: 12px;
    color: #5a99eb;
  }
  p {
    font-size: 15px;
    color: gray;
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;
