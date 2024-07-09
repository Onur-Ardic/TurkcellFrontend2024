"use client"

import ThemeToggleBtn from './ThemeToggleBtn';
import './navbar.scss';
import i18next from '../i18n';
import Input from './Input';

const Navbar = () => {

  return (
    <nav className="navbar sticky-top navbar-expand-lg" aria-label="Ninth navbar example">
    <div className="container-xxl">
      <a className="navbar-brand fw-1" href="#">{i18next.t('shopCo')}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">{i18next.t('shop')}</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">{i18next.t('onsale')}</a></li>
              <li><a className="dropdown-item" href="#">{i18next.t('shop')}</a></li>
              <li><a className="dropdown-item" href="#">{i18next.t('shop')}</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{i18next.t('newArrivalsL')}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{i18next.t('brands')}</a>
          </li>
         
         
         <Input></Input>
        </ul>
        <ThemeToggleBtn />
        <i className="bi bi-cart2"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
