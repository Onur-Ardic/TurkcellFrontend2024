"use client";
import { SlBasket } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { CiSearch, CiLogout } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HeaderTitle, SearchInput, HeaderIcons } from "./styles/styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [user] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (user && isLoggedIn === "true") {
            router.push("/");
        }
    }, [user, router]);

    const handleLogout = () => {
        auth.signOut();
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("isLoggedIn");
        alert("Logout successful");
    };

    return (
        <header className="bg-white">
            <div className="bg-black text-white py-2 text-center">Sign up and get 20% off to your first order. <Link href="/register"><button className="text-white bg-black fw-semibold border-bottom border-0">Sign Up Now</button></Link></div>
            <div className="container py-3">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link href="/" className="navbar-brand">
                        <HeaderTitle>SHOP.CO</HeaderTitle>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        aria-controls="navbarNav"
                        aria-expanded={isNavOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link text-black fw-normal">
                                    Shop<IoIosArrowDown />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/" className="nav-link text-black fw-normal">On Sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/" className="nav-link text-black fw-normal">New Arrivals</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/" className="nav-link text-black fw-normal">Brands</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-black fw-normal"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link href="/category/casual" className="dropdown-item">Casual</Link></li>
                                    <li><Link href="/category/formal" className="dropdown-item">Formal</Link></li>
                                    <li><Link href="/category/party" className="dropdown-item">Party</Link></li>
                                    <li><Link href="/category/gym" className="dropdown-item">Gym</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <div className="input-group me-3 rounded-5">
                                <span className="input-group-text bg-body-secondary border-0">
                                    <CiSearch size={24} className="text-body-secondary" />
                                </span>
                                <SearchInput
                                    type="text"
                                    placeholder="Search for products..."
                                    className="form-control bg-body-secondary border-0 py-2"
                                />
                            </div>
                            <HeaderIcons className="d-flex gap-4 align-items-center">
                                <Link href='/cart' className="text-black">
                                    <SlBasket size={24} />
                                </Link>
                                {user ? (
                                    <>
                                        <span>Welcome, {user.email}</span>
                                        <button
                                            className="ps-0 text-black border-0 bg-white"
                                            onClick={handleLogout}
                                        >
                                            <CiLogout size={24} />
                                        </button>
                                    </>
                                ) : (
                                    <Link href='/login' className="text-black">
                                        <VscAccount size={24} />
                                    </Link>
                                )}
                            </HeaderIcons>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
