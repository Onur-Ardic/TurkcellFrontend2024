import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  margin: 0;
  padding: 0;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 80%;
  background-color: black;
  border: none;
  border-radius: 10px;
  color: #4078c0;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4078c0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  &:hover {
    background-color: #305a8d;
  }

  &:focus {
    outline: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #f5f5f59f;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 3rem;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 8px solid #4078c0;
  height: 150px;
  width: 150px;
`;

export const UserInfoContainer = styled.div`
  color: #333;
  margin-top: 1rem;

  h2 {
    margin-top: 0;
    text-align: center;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    max-width: 400px;
    margin: 0 auto;

    li {
      display: flex;
      align-items: center;
    }

    span {
      font-size: 1.2rem;
      color: #4078c0;
      font-weight: bold;
    }

    strong {
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
  }
`;

export const DetailsSection = styled.div`
  flex: 1;
  margin-left: 2rem;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
  color: #000;

  div {
    margin-bottom: 0.5rem;
  }

  a {
    color: #4078c0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
