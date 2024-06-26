import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Signup() {
  const {t} = useTranslation('auth');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">{t('signup')}</h1>
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label htmlFor="email">{t('email')}</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">{t('password')}</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary btn-block">
                {t('signup')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
