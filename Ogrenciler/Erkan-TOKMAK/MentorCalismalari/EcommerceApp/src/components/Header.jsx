import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <div className="navbar">
                <div className="logo"></div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/login">Log In</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/logout">Log Out</NavLink></li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header