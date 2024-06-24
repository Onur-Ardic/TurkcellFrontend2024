import React, { useState } from "react";
import logo from "../assets/logo3.jpg";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { SignButton } from "../style/styled";

const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRegister = async (e) => {
    e.preventDefault();
    const { userName, userEmail, userPassword } = userData;
    if (!userName || !userEmail || !userPassword)
      return alert("Lütfen tüm alanları doldurun.");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userCredential.user;
      localStorage.setItem("userData", JSON.stringify(userData));
      await delay(2500);
      setLoading(false);
      navigate("/login");
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
            <form onSubmit={handleRegister}>
              <img
                className="mb-4 rounded-3 img-fluid auth-logo"
                src={logo}
                alt="Logo"
              />
              <h1 className="h3 mb-3 fw-normal text-start mt-2">
                Lütfen Kayıt Olun
              </h1>

              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingUsername"
                  placeholder="Kullanıcı adı"
                  onChange={handleChange}
                  name="userName"
                  value={userData.userName}
                />
                <label htmlFor="floatingUsername">Kullanıcı adı</label>
              </div>

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

              <SignButton
                className="btn btn-primary w-50 py-2 my-3"
                type="submit"
              >
                Kayıt Ol
              </SignButton>
            </form>
          </main>
        </div>
      )}
    </div>
  );
};

export default Register;
