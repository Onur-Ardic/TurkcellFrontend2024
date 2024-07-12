"use client";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
`;

const LoginForm = styled.form`
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
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 100%;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
        alert("Login successful");
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("user", JSON.stringify(userCredential.user));
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h1>Login</h1>
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
        <Button className="border-0 bg-success text-body-emphasis" type="submit">Login</Button>
        <p className="text-center">Don't have an account? <Link href="/register">Register</Link></p>
      </LoginForm>
      
    </LoginContainer>
  );
};

export default Login;
