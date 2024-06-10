import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 20px 0;
  padding: 30px;
  border: none;
  border-radius: 5px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const CardBody = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h5`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #666;
`;

export const CardFooter = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReadMore = styled.a`
  font-size: 14px;
  color: red;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const LoadingMessage = styled.div`
  font-size: 36px;
  color: red;
  text-align: center;
  padding: 50px;
`;
export const DetailContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DetailImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  margin-left: 20px;
`;

export const DetailContent = styled.div`
  width: 50%;
`;

export const DetailTitle = styled.h1`
  margin-top: 20px;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const DetailText = styled.p`
  font-size: 16px;
  color: #333;
`;

export const DetailFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailDate = styled.p`
  font-size: 14px;
  color: #666;
`;
