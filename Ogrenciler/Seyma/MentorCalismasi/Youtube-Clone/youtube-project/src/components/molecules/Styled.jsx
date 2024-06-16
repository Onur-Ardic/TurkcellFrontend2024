import styled from 'styled-components';

export const Middle = styled.div`
  display: flex;
`;

export const SpeakOut = styled.div`
  background: #f2f2f2;
  border-radius: 50%;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: black;
  `;

export const SearchBox = styled.div`
  padding: 10px;
  border: 1px solid #f2f2f2;
  border-radius: 40px 0 0 40px;
`;
export const ButtonDiv = styled.div`
  border: 1px solid #f2f2f2;
  border-radius:0 40px 40px 0;
`;

export const Input = styled.input`
   outline: 0px;
   &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #61C5FA;
    border:1px solid #5AB0DB;
`;