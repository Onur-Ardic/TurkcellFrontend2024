import React, { useState, useEffect } from "react";
import logo from "../assets/logo2.jpg";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { LoginButton } from "../style/styled";

const Login = () => {
  const navigate = useNavigate();
  const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(""); // Kullanıcı adını saklamak için state

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      setLoggedInUser(user.userName);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = userData;
    if (!userEmail || !userPassword)
      return alert("Lütfen tüm alanları doldurun.");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userCredential.user;
      console.log("LoginUser: ", user);
      await delay(2500);
      setLoading(false);
      navigate("/home");
      window.location.reload();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="loadingTab d-flex">
            <Spinner />
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center py-3 py-md-5 mt-5">
          <main className="form-signin m-auto text-center">
            <form onSubmit={handleLogin}>
              <img
                className="mb-4 rounded-3 img-fluid auth-logo"
                src={logo}
                alt="Logo"
              />
              <h1 className="h3 mb-3 fw-normal text-start mt-2">
                Lütfen Giriş Yapın
              </h1>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="a@b.com"
                  onChange={handleChange}
                  name="userEmail"
                  value={userData.userEmail}
                />
                <label htmlFor="floatingInput">Email adresi</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  name="userPassword"
                  value={userData.userPassword}
                />
                <label htmlFor="floatingPassword">Şifre</label>
              </div>

              <LoginButton
                className="btn btn-primary w-50 py-2 my-3"
                type="submit"
              >
                Giriş Yap
              </LoginButton>
            </form>
          </main>
        </div>
      )}
    </div>
  );
};

export default Login;
