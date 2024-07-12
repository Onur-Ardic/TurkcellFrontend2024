"use client";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
`;

const RegisterForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  width: 100%;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registration successful");
        sessionStorage.setItem("user", JSON.stringify(auth.currentUser));
        router.push("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>
      <h1>Register</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button className="border-0 bg-warning text-body-emphasis" type="submit">Register</Button>
        <p className="text-center">Already have an account? <Link href="/login">Login</Link></p>
      </RegisterForm>
      
    </RegisterContainer>
  );
};

export default Register;
