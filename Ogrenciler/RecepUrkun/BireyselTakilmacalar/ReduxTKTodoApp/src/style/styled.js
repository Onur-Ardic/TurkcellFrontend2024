import styled from "styled-components";
import { NavLink as RouterNavLinkX } from "react-router-dom";

export const FormInput = styled.input`
  padding: 5px 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  width: 500px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  color: ${(props) => props.theme.inputTextColor};
  border-color: ${(props) => props.theme.borderColor};
  &::placeholder{
    background-color: ${(props) => props.theme.inputBackgroundColor};
    color: ${(props) => props.theme.inputTextColor};
  }
`;

export const Button = styled.button`
  padding: 5px 25px;
  font-size: 20px;
  max-width: 150px;
  outline: none;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  border: 2px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  &:hover {
    background-color: ${(props) =>
    props.theme === "light" ? props.theme.hoverColor : props.theme.color};
    color: ${(props) =>
    props.theme === "light" ? props.theme.color : props.theme.backgroundColor};
  }
`;

export const DenemeX = styled(RouterNavLinkX)`
  padding: 5px 25px;
  font-size: 20px;
  max-width: 150px;
  outline: none;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  border: 2px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
    props.theme === "light" ? props.theme.hoverColor : props.theme.color};
    color: ${(props) =>
    props.theme === "light" ? props.theme.color : props.theme.backgroundColor};
  }
`

export const LoginButton = styled(Button)`
  background-color: #FF803C;
  color: #fff;
  border-color: #FF803C;
  &:hover{
    background-color: #fff;
    color:#FF803C;
    border-color: #FF803C;
  }
`

export const SignButton = styled(LoginButton)`
  background-color: #53B3A6;
  color: #fff;
  border-color: #53B3A6;
  &:hover{
    background-color: #fff;
    color:#53B3A6;
    border-color: #53B3A6;
  }
`

export const themes = {
  light: {
    backgroundColor: "#fff",
    color: "#242424",
    borderColor: "#242424",
    hoverColor: "#242424",
    inputBackgroundColor: '#fff',
    inputTextColor: '#242424',
    navBackgroundColor: '#f8f9fa',
    navTextColor: '#242424',
  },
  dark: {
    backgroundColor: "#242424",
    color: "#fff",
    borderColor: "#fff",
    hoverColor: "#fff",
    inputBackgroundColor: '#242424',
    inputTextColor: '#fff',
    navBackgroundColor: '#343a40',
    navTextColor: '#fff',
  },
  delete: {
    backgroundColor: "#BA2D0B",
    borderColor: "#BA2D0B",
    color: "#ffffff",
    hoverColor: "#BA2D0B"
  },
  update: {
    backgroundColor: "#003E1F",
    borderColor: "#003E1F",
    color: "#ffffff",
    hoverColor: "#003E1F"
  },
};

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: 90vh;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const HomeText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;