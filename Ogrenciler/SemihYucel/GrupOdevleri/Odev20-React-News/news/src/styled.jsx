import styled from "styled-components";
export const Card = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    font-weight: bold;
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
  margin-bottom: 1rem;
  object-fit: cover;
`;
export const NavButton = styled.button`
  padding: 0.25rem 1rem;
  background-color: #1a237e;
  color: white;
  border-radius: 0.5rem;
  border: none;
`;
export const NavInput = styled.input`
  outline: none;
  border: none;
  padding-left: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #1a237e;
`;
export const CategoryName = styled.h1`
  text-align: center;
  padding: 1rem 0;
  font-family: "Newsreader", serif;
`;
export const SourceName = styled.h6`
  background-color: #1a237e;
  color: black;
  width: max-content;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  color: white;
  font-size: 14px;
`;
export const CardTitle = styled(Title)`
  margin: 0.5rem 0;
`;
export const CardAuthor = styled.h6`
  color: #1a237e;
  font-size: 14px;
`;
export const SpinnerDiv = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
