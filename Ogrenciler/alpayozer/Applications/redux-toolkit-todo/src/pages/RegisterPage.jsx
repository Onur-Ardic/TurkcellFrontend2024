import React, { useState } from "react";
import { login } from "../firebase/auth";
import { useDispatch } from "react-redux";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../features/user/userSlice";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    //kullanıcı var mı kontrolünü yap
    // await login(email, password);
    const gelen = await dispatch(
      registerUser({ email: email, password: password })
    );
    console.log("gelen veri", gelen);
  };
  return (
    <>
      <h1>Register Page</h1>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
