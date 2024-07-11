"use client"

import ThemeToggleBtn from '../ThemeToggleBtn';
import './navbar.sass';
import i18next from '../../i18n';
import Input from '../Input/Input';

const Navbar = () => {

  return (
    <nav className="navbar sticky-top navbar-expand-lg bd-navbar bottomLine" aria-label="Ninth navbar example">
    <div className="container-xxl" >
      <a className="navbar-brand" href="/">{i18next.t('shopCo')}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse w-100 p-2 navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-lg-0 d-flex gap-4 align-items-center">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/categories" data-bs-toggle="dropdown" aria-expanded="false">{i18next.t('shop')}</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">{i18next.t('onsale')}</a></li>
              <li><a className="dropdown-item" href="#">{i18next.t('shop')}</a></li>
              <li><a className="dropdown-item" href="#">{i18next.t('shop')}</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/categories">{i18next.t('onsale')}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/newarrivals">{i18next.t('newArrivalsL')}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/brands">{i18next.t('brands')}</a>
          </li>
          <li>
            <Input></Input>
          </li>
        </ul>
        
        <div className='d-flex'>
        <ThemeToggleBtn />
        <button className="btn "><i className="bi bi-cart2 md"></i></button>
        <button className="btn"> <i className="bi bi-person-circle md"></i></button>
        </div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
