import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Logo from '../assets/logo.png';

const Header = () => {
    return (
        
        <header>
            <div className="logo">
               <a href="/">
                   <img src={Logo}  alt="Logo"/></a>
            </div>
            <nav>
                <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">My Account</a>
                    <ul className="nav_sub">
                        <li><a href="/login">LogIn</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="#">LogOut</a></li>
                    </ul>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;