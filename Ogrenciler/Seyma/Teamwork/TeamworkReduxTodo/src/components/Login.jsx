import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const LoginInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const LoginButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const RegisterButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterRedirect = styled.p`
  margin-top: 10px;
  font-size: 13px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user");
    } catch (error) {
      console.error("Error signing in with password and email:", error.message);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin}>
        <LoginInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <LoginInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <LoginButton type="submit">Login</LoginButton>
        <RegisterButton onClick={handleRegisterRedirect}>Register</RegisterButton>

      </LoginForm>
      <RegisterRedirect>Don't have an account? </RegisterRedirect>
    </LoginContainer>
  );
};

export default Login;
