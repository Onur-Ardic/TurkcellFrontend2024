import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için hook
import { auth } from "../firebaseConfig"; // Firebase authentication nesnesi
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase ile kullanıcı oluşturma fonksiyonu
import styled from "styled-components"; // Styled components için kütüphane

// Styled components tanımları
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
  const [email, setEmail] = useState(""); // Email için state
  const [password, setPassword] = useState(""); // Şifre için state
  const [confirmPassword, setConfirmPassword] = useState(""); // Şifre onay için state
  const navigate = useNavigate(); // Sayfa yönlendirme hook'u

  // Kayıt olma işlemi
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor"); // Şifrelerin eşleşmemesi durumunda hata mesajı
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Kayıt Olma Başarılı"); // Başarılı kayıt mesajı
        navigate("/login"); // Kayıt başarılı ise giriş sayfasına yönlendirme
      })
      .catch((error) => {
        alert(error.message); // Hata mesajı gösterme
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
          placeholder="Şifre Tekrar"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Kayıt Ol</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
