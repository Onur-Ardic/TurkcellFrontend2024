import React, { useState } from "react";
import { login } from "../firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../features/user/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    //kullanıcı var mı kontrolünü yap
    // await login(email, password);
    dispatch(loginUser({ email: email, password: password }));
    navigate("/");
  };
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
