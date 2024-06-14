import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Firebase authentication nesnesi
import { useNavigate } from "react-router-dom"; // Yönlendirme için hook
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase ile giriş fonksiyonu
import styled from "styled-components"; // Styled components için kütüphane

// Styled components tanımları
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
  const [email, setEmail] = useState(""); // Email için state
  const [password, setPassword] = useState(""); // Şifre için state
  const navigate = useNavigate(); // Sayfa yönlendirme hook'u

  // Giriş yapma işlemi
  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Giriş Başarılı"); // Başarılı giriş mesajı
        navigate("/todos"); // Giriş başarılı ise todo sayfasına yönlendirme
      })
      .catch((error) => {
        alert(error.message); // Hata mesajı gösterme
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
