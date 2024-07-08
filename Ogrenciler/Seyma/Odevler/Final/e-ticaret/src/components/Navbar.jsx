"use client"
import Link from "next/link";
import ThemeToggleBtn from './ThemeToggleBtn';
import './navbar.scss';
import i18next from '../i18n';

const Navbar = () => {

  return (
    <nav>
      <ul className="navbarlist">
        <li>{i18next.t('menuItem1')}</li>
        <li>Shop</li>
        <Link href="/categories">Categories</Link>
        <Link href="/onsale">On Sale</Link>
        <Link href="/newarrivals">New Arrivals</Link>
        <li>Brands</li>
        <ThemeToggleBtn />
      </ul>
    </nav>
  );
};

export default Navbar;
