import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styled from "styled-components";

const RegisterContainer = styled.div`
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Kayıt Olma Başarılı");
      navigate("/login");
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <RegisterContainer>
      <h1>Kayıt Ol</h1>
      <Form onSubmit={handleRegister}>
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
        <Input
          type="password"
          placeholder=" Şifre Tekrar"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Kayıt Ol</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
