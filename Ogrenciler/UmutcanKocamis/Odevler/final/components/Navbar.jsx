"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="border-0 bg-white" onClick={toggleMenu}>
            <IoMenu className="icon" />
          </button>
          <h2 className="bold title">
            <Link href="/">SHOP.CO</Link>
          </h2>
        </div>
        <div className="d-flex gap-3">
          <button className="border-0 bg-white">
            <FaSearch className="icon" />
          </button>
          <button className="border-0 bg-white">
            <LuShoppingCart className="icon" />
          </button>
          <button className="border-0 bg-white">
            <FaRegCircleUser className="icon" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/shop">On Sale</Link>
            </li>
            <li>
              <Link href="/shop">New Arrivals</Link>
            </li>
            <li>
              <Link href="/shop">Brands</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
