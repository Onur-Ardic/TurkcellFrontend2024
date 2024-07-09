"use client"

import ThemeToggleBtn from './ThemeToggleBtn';
import './navbar.sass';
import i18next from '../i18n';
import Input from './Input/Input';

const Navbar = () => {

  return (
    <nav className="navbar sticky-top navbar-expand-lg bd-navbar" aria-label="Ninth navbar example">
    <div className="container-xxl">
      <a className="navbar-brand" href="#">{i18next.t('shopCo')}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse w-100 p-2 navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-lg-0 d-flex justify-content-around">
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
          <li>
            <Input></Input>
          </li>
        </ul>
        
        <div className='d-flex gap-2'>
        <ThemeToggleBtn />
        <i className="bi bi-cart2 md"></i>
        <i className="bi bi-person-circle md"></i>
        </div>
       
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
