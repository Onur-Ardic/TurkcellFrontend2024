import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: 25%;
`;

export const StyledButton = styled.button`
  background-color: #1679ab;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  max-height: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledItem = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 50%;
  background-color: wheat;
`;

export const StyledText = styled.div`
  display: flex;
  flex:1
  justify-content: start;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex: 1;
  gap: 1rem;
`;
