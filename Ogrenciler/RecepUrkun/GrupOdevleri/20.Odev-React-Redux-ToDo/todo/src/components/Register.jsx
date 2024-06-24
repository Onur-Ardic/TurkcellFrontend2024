import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  border-radius: 5px;
  font-weight: bold;
  background-color: #fff6e9;
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Kayıt Olma Başarılı");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <RegisterContainer>
      <h1>{t("register")}</h1>
      <Form onSubmit={handleRegister}>
        <Input
          type="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder={t("passwordAgain")}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">{t("register")}</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
