"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const authInstance = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        authInstance,
        email,
        password
      );
      console.log("User registered:", userCredential.user.uid);
      toast.success(
        "Kayıdınız başarıyla alınmıştır. Ana sayfaya yönlendiriliyorsunuz."
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error("Signup error:", error);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Bu mail adresi zaten kullanılıyor.");
      } else {
        toast.error("Kayıt işlemi başarısız. Lütfen tekrar deneyin.");
      }
    }
  };

  return (
    <div
      className="card container mt-5 p-5  text-black"
      style={{ width: "840px", backgroundColor: "#F2F0F1" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            style={{ backgroundColor: "#F2F0F1" }}
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Signup
        </button>
      </form>
      <p className="mt-2">
        Already have an account?{" "}
        <Link href="/accountlogin" className="text-decoration-none ">
          Login
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
