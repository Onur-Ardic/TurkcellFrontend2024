"use client";
import React, { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);

      toast.success(
        "Şifre sıfırlama maili gönderildi, Login sayfasına yönlendiriliyorsunuz."
      );
      setTimeout(() => {
        window.location.href = "/accountlogin";
      }, 2000);
    } catch (err) {
      toast.error("Bu email adresine sahip bir kullanıcı bulunamadı!");
    }
  };
  return (
    <>
      <div
        className="card container mt-5 p-5 text-black"
        style={{ width: "840px", backgroundColor: "#F2F0F1" }}>
        <h2>Forgot Password</h2>
        <form onSubmit={handlePasswordReset}>
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
          <button type="submit" className="btn btn-secondary">
            Reset Password
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ForgotPassword;
