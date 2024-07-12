"use client";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  color: #000;
`;

export const StyledFormWrapper = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  background-color: #bdbdbd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const StyledFormControl = styled(Form.Control)`
  background-color: #ccc;
  border: none;
  color: #000;
  &:focus {
    background-color: #bbb;
    color: #000;
  }
`;

export const StyledFormLabel = styled(Form.Label)`
  color: #333;
`;

export const StyledButton = styled(Button)`
  background-color: black;
  border: none;
  width: 100%;
  &:hover {
    background-color: #666;
  }
`;
