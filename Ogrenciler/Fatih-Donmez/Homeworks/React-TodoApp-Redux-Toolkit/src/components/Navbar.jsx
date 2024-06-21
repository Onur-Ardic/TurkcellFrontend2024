import { changeLanguage } from "i18next";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import { useTranslation } from "react-i18next";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const { t } = useTranslation(['auth', 'todo']);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user)=> {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {t('todo:title')}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {
              user ? (<>
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => { signOut(auth) }}>
                    {t('auth:logout')}
                  </Link>
                </li>
              </>) : (<> <li className="nav-item">
                <Link className="nav-link" to="/login">
                  {t('auth:login')}
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    {t('auth:signup')}
                  </Link>
                </li></>)
            }

            <li className="nav-item">
              <Link className="nav-link" to="/todos">
                {t('todo:todos')}
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn-lang" onClick={() => changeLanguage('tr')}>TR</button>
            </li>
            <li className="nav-item">
              <button className="btn-lang" onClick={() => changeLanguage('en')}>EN</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
