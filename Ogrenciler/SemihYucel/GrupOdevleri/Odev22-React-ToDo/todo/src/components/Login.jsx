import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius:5px;
  border:none;
  font-weight: bold;
  background-color: #FFF6E9 ;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Giriş Başarılı");
        navigate("/todos");
      })
      .catch((error) => {
        alert(error.message);
      });
  };  

  return (
    <LoginContainer>
      <h1>Giriş Yap</h1>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Giriş Yap</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
