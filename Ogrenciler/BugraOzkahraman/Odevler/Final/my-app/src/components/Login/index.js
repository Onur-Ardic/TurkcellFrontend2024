"use client";
import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Giriş yapıldı, ana sayfaya yönlendiriliyorsunuz!");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (err) {
      toast.error("Giriş yapılamadı, bilgilerinizi kontrol edin!");
    }
  };

  return (
    <>
      <div
        className="card container mt-5 p-5 text-black"
        style={{ width: "840px", backgroundColor: "#F2F0F1" }}>
        <h2>Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              style={{ backgroundColor: "#F2F0F1" }}
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              style={{ backgroundColor: "#F2F0F1" }}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Login
          </button>
        </form>
        <p className="mt-2">
          <Link href="/forgotpassword" className="text-decoration-none">
            Forgot Password?
          </Link>
        </p>
        <p className="mt-2">
          Don't have an account?{" "}
          <Link href="/accountsignup" className="text-decoration-none">
            Signup
          </Link>
        </p>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
