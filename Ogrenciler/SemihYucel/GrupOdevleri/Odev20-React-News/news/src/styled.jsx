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

  
`
export const DetailViewContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

export const Author = styled.div`
  font-size: 1rem;
  color: #999;
  text-align: right;
  margin-top: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit:cover
`;
