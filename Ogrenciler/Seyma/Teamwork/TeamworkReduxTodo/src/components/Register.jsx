import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const RegisterInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const RegisterButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating new user", error);
    }
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister}>
        <RegisterInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <RegisterInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
